<?php

namespace App\Http\Controllers;

use App\Builders\Reports;
use App\Models\Category;
use App\Models\Product;
use App\Models\Unit;
use App\Traits\Crud;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class ProductController extends Controller
{
    protected string $model = Product::class;
    public array $search_selects = [
        'id',
        'name',
        'code',
        'price',
        'quantity',
        'description'
    ];
    public array $search_fields = [
        'id',
        'name',
        'code',
        'price',
        'quantity',
        'description'
    ];
    public string $date_range_by = "products.created_at";
    use Crud;

    public static function routes()
    {
        Route::name("Products.")->prefix("products")->group(function () {
            Route::post("list", [self::class, 'list'])->name('List');
            Route::post("search", [self::class, 'search'])->name('Search');
            Route::post("store", [self::class, 'store'])->name('Store');
            Route::post("delete", [self::class, 'delete'])->name('Delete');
            Route::post("get/categories_units", [self::class, 'categoryAndUnits'])->name('Get.Category.Unit');
            Route::post("pst/items", [self::class, 'getPosProducts'])->name('POS.Items');
        });
    }

    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            $item = Product::query()->findOrNew($request->post('id'));

            $item->forceFill([
                "name" => $request->post('name'),
                "barcode_symbology" => $request->post('barcode_symbology') ?? 'code128',
                "code" => $request->post('code') ?? 'code128',
                "cost" => $request->post('cost') ?? 0,
                "price" => $request->post('price') ?? 0,
                "category_id" => $request->post('category_id'),
                "subcategory_id" => $request->post('subcategory_id'),
                "brand_id" => $request->post('brand_id'),
                "status" => $request->post('status') ?? true,
                "unit_id" => $request->post('unit_id'),
                "alert_quantity" => $request->post('alert_quantity') ?? 0,
                "description" => $request->post('description')
            ]);

            if ($request->hasFile('photo_upload')) {
                $item->photo = $request->file('photo_upload')->store('products', 'public');
            } else {
                $item->photo = $request->post('photo');
            }
            $item->saveOrFail();
            DB::commit();
            return successResponse();
        } catch (\Throwable $exception) {
            DB::rollBack();
            throw $exception;
        }
    }

    public function categoryAndUnits()
    {
        return response()->json([
            "categories" => Category::query()->select([
                DB::raw('id as value'),
                DB::raw('name as text')
            ])->get(),
            "units" => Unit::query()->select([
                DB::raw('id as value'),
                DB::raw('name as text')
            ])->get()
        ]);
    }

    public function list(Request $request)
    {
        try {
            $items = Product::query()
                ->select([
                    "products.*",
                    DB::raw("brands.name as brand_name"),
                    DB::raw("categories.name as category_name"),
                    DB::raw("subcategories.name as subcategory_name"),
                    DB::raw("units.name as unit_name"),
                    DB::raw("(products.quantity * products.cost) as total_cost"),
                    DB::raw("(products.quantity * products.price) as total_price"),
                    DB::raw("((products.quantity * products.price) - (products.quantity * products.cost)) as probable_profit"),
                ])
                ->leftJoin("brands", "brands.id", "=", "products.brand_id")
                ->leftJoin("categories", "categories.id", "=", "products.category_id")
                ->leftJoin("subcategories", "subcategories.id", "=", "products.subcategory_id")
                ->leftJoin("units", "units.id", "=", "products.unit_id")
                ->with(['unit:id,name', 'category:id,name', 'category.subcategories:id,category_id,name', 'brand:id,name']);

            if ($request->has('id')) {
                return $items->find($request->post('id'));
            }

            return response()
                ->json($items->defaultDatatable($request, "products.created_at"))
                ->header('overview', json_encode(resetQueryForOverview($items)->select([
                    DB::raw("SUM(products.quantity * products.cost) as cost"),
                    DB::raw("SUM(products.quantity * products.price) as price"),
                    DB::raw("SUM((products.quantity * products.price) - (products.quantity * products.cost)) as balance"),
                ])->first()));
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }

    public function getPosProducts(Request $request)
    {
        try {
            $items = Product::query()
                ->select([
                    "id",
                    "name",
                    "code",
                    "category_id",
                    "subcategory_id",
                    "price",
                    "quantity",
                    "photo"
                ]);
            if ($request->has("category_id") && $request->post("category_id")) {
                $items->where("category_id", "=", $request->post("category_id"));
            }
            return $items->paginate($request->post("per_page") ?? 15);
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
