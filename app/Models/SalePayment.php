<?php

namespace App\Models;


use App\Traits\HistoryTrait;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SalePayment extends BaseModel
{
    use HasFactory, HistoryTrait;

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        static::creating(function (self $item) {
            $item->taken_by = auth()->id();
            $item->payment_amount = round($item->payment_amount, 2);
        });
        static::updating(function (self $item) {
            $item->payment_amount = round($item->payment_amount, 2);
        });
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class, 'sale_id', 'id');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id', 'id');
    }
}
