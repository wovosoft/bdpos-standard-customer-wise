<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSaleItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sale_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("sale_id");
            $table->unsignedBigInteger("product_id");
            $table->unsignedBigInteger("customer_id");
            $table->double("quantity")->default(0);
            $table->double("price")->default(0);
            $table->double("total")->default(0);    //quantity*price
            $table->double('returned_quantity')->default(0);
            $table->double('returned_total')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sale_items');
    }
}
