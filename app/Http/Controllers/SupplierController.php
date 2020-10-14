<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use App\Traits\Crud;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class SupplierController extends Controller
{
    protected string $model = Supplier::class;
    public array $search_selects = [
        'id',
        'name',
        'email',
        'phone',
        'company',
        'district',
        'thana',
        'post_office',
        'village',
        'shipping_address',
        'shipping_address',
    ];
    public array $search_fields = [
        'id',
        'name',
        'email',
        'phone',
        'company',
        'district',
        'thana',
        'post_office',
        'village',
        'shipping_address',
        'shipping_address',
    ];
    use Crud;

    public static function routes()
    {
        Route::name("Suppliers.")->prefix("suppliers")->group(function () {
            Route::post("list", [self::class, 'list'])->name('List');
            Route::post("search", [self::class, 'search'])->name('Search');
            Route::post("store", [self::class, 'store'])->name('Store');
            Route::post("delete", [self::class, 'delete'])->name('Delete');
            Route::post("add_fund/{supplier}", [self::class, 'addPayment'])->name('Payments.Store');
            Route::get("shortFinancialReport/{supplier}/{type?}", [self::class, 'shortFinancialReport'])->name('Payments.shortFinancialReport');
            Route::get("fullFinancialReport/{supplier}/{type?}", [self::class, 'fullFinancialReport'])->name('Payments.fullFinancialReport');
        });
    }

    public function store(Request $request)
    {
        try {
            $item = Supplier::query()->findOrNew($request->post('id'));
            $item->forceFill([
                "name" => $request->post('name'),
                "email" => $request->post('email'),
                "phone" => $request->post('phone'),
                "company" => $request->post('company'),
                "district" => $request->post('district'),
                "thana" => $request->post('thana'),
                "post_office" => $request->post('post_office'),
                "village" => $request->post('village'),
                "shipping_address" => $request->post('shipping_address')
            ]);

            if ($request->hasFile('photo_upload')) {
                $item->photo = $request->file('photo_upload')->store('photos', 'public');
            } else {
                $item->photo = $request->post("photo");
            }

            $item->saveOrFail();
            return successResponse([
                "item" => $item
            ]);
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }

    public function addPayment(Supplier $supplier, Request $request)
    {
        try {
            $request->validate([
                "payment_amount" => "required"
            ]);

            $supplier->addPayment(
                $request->post('payment_amount'),
                $request->post('payment_method'),
                $request->post('bank'),
                $request->post('check'),
                $request->post('transaction_no')
            );
            return successResponse();
        } catch (\Throwable $exception) {
            DB::rollBack();
            throw $exception;
        }
    }

    public function list(Request $request)
    {
        try {
            $payable = "(SELECT IFNULL(SUM(purchases.payable),0) FROM purchases WHERE purchases.supplier_id = suppliers.id)";
            $paid = "(SELECT IFNULL(SUM(purchase_payments.payment_amount),0) FROM purchase_payments WHERE purchase_payments.supplier_id = suppliers.id)";


            $items = Supplier::query()
                ->select(["suppliers.*"])
                ->selectRaw("$payable  as payable")
                ->selectRaw("$paid  as paid")
                ->selectRaw("(($payable) - ($paid)) as balance");
            if ($request->has('id')) {
                return $items->findOrFail($request->post('id'));
            }

            return response()
                ->json($items->defaultDatatable($request))
                ->header("fund_summery", json_encode(resetQueryForOverview($items)->select([
                    DB::raw("SUM(IFNULL($payable,0)) as payable"),
                    DB::raw("SUM(IFNULL($paid,0))  as paid"),
                    DB::raw("SUM(IFNULL((($payable) - ($paid)),0)) as balance"),
                ])->first()));
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
    public function shortFinancialReport($supplier_id, string $type = "pdf", Request $request)
    {
        try {
            $supplier = Supplier::query()->select(["suppliers.*"])->findOrFail($supplier_id);

            $start_date = ($request->has('start_date') && $request->get('start_date')) ? $request->get('start_date') : null;
            $end_date = ($request->has('end_date') && $request->get('end_date')) ? $request->get('end_date') : null;

            $payable = $supplier->purchases();
            $paid = $supplier->purchasePayments();
            $returned = $supplier->purchaseItems();

            if ($start_date) {
                $payable->whereDate('created_at', '>=', $start_date);
                $paid->whereDate('created_at', '>=', $start_date);
                $returned->whereDate('created_at', '>=', $start_date);
            }
            if ($end_date) {
                $payable->whereDate('created_at', '<=', $end_date);
                $paid->whereDate('created_at', '<=', $end_date);
                $returned->whereDate('created_at', '<=', $end_date);
            }


            $supplier->payable = $payable->sum('payable');
            $supplier->paid = $paid->sum('payment_amount');
            $supplier->returned = $returned->sum('returned_total');
            $supplier->balance = $supplier->payable - $supplier->paid - $supplier->returned;

            if ($type == 'html') {
                return view("pages.customers.short_financial_report", [
                    "supplier" => $supplier,
                    "start_date" => $start_date ? Carbon::parse($start_date)->locale('bn-BD') : null,
                    "end_date" => $end_date ? Carbon::parse($end_date)->locale('bn-BD') : null
                ]);
            }

            return \PDF::loadView('pages.suppliers.short_financial_report', [
                "supplier" => $supplier,
                "start_date" => $start_date ? Carbon::parse($start_date)->locale('bn-BD') : null,
                "end_date" => $end_date ? Carbon::parse($end_date)->locale('bn-BD') : null
            ])->stream("supplier_short_financial_report-{$supplier->id}.pdf");

        } catch (\Throwable $exception) {
            throw $exception;
        }
    }

    public function fullFinancialReport(Supplier $supplier, string $type = 'pdf', Request $request)
    {
        $start_date = ($request->has('start_date') && $request->get('start_date')) ? $request->get('start_date') : null;
        $end_date = ($request->has('end_date') && $request->get('end_date')) ? $request->get('end_date') : null;
        /**
         * I am confused about debit & credit. so , the reference are as below:
         * resource/money goes to customer => to_customer
         * resource/money coming from customer => from_customer
         */
        try {
            //union fields:  date, to_customer, from_customer

            $payments = $supplier
                ->purchasePayments()
                ->select([
                    DB::raw("'payment' as title"),
                    DB::raw("created_at as date"),
                    DB::raw("0 as to_customer"),
                    DB::raw("payment_amount as from_supplier")
                ]);
            $returns = $supplier
                ->purchaseReturns()
                ->select([
                    DB::raw("'return' as title"),
                    DB::raw("created_at as date"),
                    DB::raw("0 as to_customer"),
                    DB::raw("amount as from_supplier")
                ]);

            $records = $supplier
                ->purchases()
                ->select([
                    DB::raw("'purchase' as title"),
                    DB::raw("created_at as date"),
                    DB::raw("payable as to_supplier"),
                    DB::raw("0 as from_supplier")
                ]);
            if ($start_date) {
                $payments->whereDate('created_at', '>=', $start_date);
                $returns->whereDate('created_at', '>=', $start_date);
                $records->whereDate('created_at', '>=', $start_date);
            }
            if ($end_date) {
                $payments->whereDate('created_at', '<=', $end_date);
                $returns->whereDate('created_at', '<=', $end_date);
                $records->whereDate('created_at', '<=', $end_date);
            }

            if ($type == 'html') {
                return view("pages.suppliers.full_financial_report", [
                    "supplier" => $supplier,
                    "records" => $records
                        ->union($payments)
                        ->union($returns)
                        ->orderBy('date', 'asc')
                        ->get(),
                    "start_date" => $start_date ? Carbon::parse($start_date)->locale('bn-BD') : null,
                    "end_date" => $end_date ? Carbon::parse($end_date)->locale('bn-BD') : null
                ]);
            }

            return \PDF::loadView('pages.suppliers.full_financial_report', [
                "supplier" => $supplier,
                "records" => $records
                    ->union($payments)
                    ->union($returns)
                    ->orderBy('date', 'asc')
                    ->get(),
                "start_date" => $start_date ? Carbon::parse($start_date)->locale('bn-BD') : null,
                "end_date" => $end_date ? Carbon::parse($end_date)->locale('bn-BD') : null
            ])->stream("supplier_short_financial_report-{$supplier->id}.pdf");

        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
