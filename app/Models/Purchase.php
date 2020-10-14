<?php

namespace App\Models;

use App\Traits\HistoryTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Purchase extends BaseModel
{
    use HasFactory, HistoryTrait;

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        /**
         * Only record previous and current balance.
         * According to customer requirements they do not need dynamic balance maintenance.
         * before, creating,
         * previous balance = SUM(purchase.payable) - SUM(purchase_payments.payment_amount)
         * after, created,
         * current balance = SUM(purchase.payable) - SUM(purchase_payments.payment_amount)
         *
         * Returned, depends on items returned_quantity value, so it is calculated when
         * this property changes in subsequent items.
         */
        static::creating(function (self $item) {
            $payable = self::query()
                ->where("supplier_id", "=", $item->supplier_id)
                ->sum("payable");
            $paid = PurchasePayment::query()
                ->where("supplier_id", "=", $item->supplier_id)
                ->sum("payment_amount");
            $item->previous_balance = $payable - $paid;
        });
        static::created(function (self $item) {
            $payable = self::query()
                ->where("supplier_id", "=", $item->supplier_id)
                ->sum("payable");
            $paid = PurchasePayment::query()
                ->where("supplier_id", "=", $item->supplier_id)
                ->sum("payment_amount");
            $item->current_balance = $payable - $paid;
            $item->saveOrFail();
        });
    }

    public function items()
    {
        return $this->hasMany(PurchaseItem::class, 'purchase_id');
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id');
    }

    public function payments()
    {
        return $this->hasMany(PurchasePayment::class, 'purchase_id', 'id');
    }
}
