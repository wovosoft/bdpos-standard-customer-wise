(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{13:function(t,e,r){"use strict";e.a={sortBy:"id",sortDesc:!0,per_page:50,current_page:1,total:0,from:0,to:0,data:[]}},180:function(t,e,r){"use strict";r.r(e);var a=r(10),o=r.n(a),s=r(13),n=r(7),l=r(1);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={name:"ProductReports",components:{DtFooter:n.a},props:{title:{type:String,default:_t("product_report","Product Report")}},methods:{colSum:l.d,colCount:l.c,getItems:function(t){var e=this;return axios.post(t.apiUrl,{per_page:t.perPage,orderBy:t.sortBy||"id",order:Object(l.k)(t.sortDesc)?"desc":"asc"}).then((function(t){return console.log(t.data),e.$set(e,"dt",t.data),t.data.data})).catch((function(t){return console.log(t.response),e.dt=c({},s.a),[]}))}},data:function(){var t=this;return{dt:c({},s.a),form:{},date:o()().format("YYYY-MM-DD"),fields:[{key:"id",label:_t("id","ID")},{key:"name",label:_t("name","Name")},{key:"code",label:_t("code","Code")},{key:"current_stock",label:_t("reports.current_stock","Current Stock"),formatter:function(e,r,a){var o=a.prev_purchased_items-a.prev_purchase_returned_items-(a.prev_sold_items-a.prev_sold_returned_items);return t.$options.filters.localNumber(o||0)}},{key:"addition",label:_t("reports.addition","Addition"),formatter:function(e,r,a){var o=a.purchased_items-a.purchase_returned_items;return t.$options.filters.localNumber(o||0)}},{key:"subtraction",label:_t("reports.subtraction","Subtraction"),formatter:function(e,r,a){var o=a.sold_items-a.sold_returned_items;return t.$options.filters.localNumber(o||0)}},{key:"remains",label:_t("reports.remains","Remains"),formatter:function(e,r,a){var o=a.purchased_items-a.purchase_returned_items-(a.sold_items-a.sold_returned_items);return t.$options.filters.localNumber(o||0)}},{key:"stock",label:_t("reports.stock","Stock"),formatter:function(e,r,a){var o=a.prev_purchased_items-a.prev_purchase_returned_items-(a.prev_sold_items-a.prev_sold_returned_items),s=a.purchased_items-a.purchase_returned_items-(a.sold_items-a.sold_returned_items);return t.$options.filters.localNumber(o+s||0)}}]}}},p=r(2),_=Object(p.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"mb-3",attrs:{"bg-variant":"dark","text-variant":"light","body-class":"text-center"}},[r("h4",[t._v("\n            "+t._s(t.__("daily_product_report","Daily Product Report"))+"\n        ")]),t._v(" "),r("div",[t._v("\n            "+t._s(t._f("localDate")(t.date))+"\n        ")])]),t._v(" "),r("b-card",{attrs:{"body-class":"p-0"},scopedSlots:t._u([{key:"header",fn:function(){return[r("b-row",[r("b-col",{attrs:{md:"3",sm:"12"}},[r("b-input-group",{attrs:{prepend:t.__("per_page","Per Page"),size:"sm"}},[r("b-select",{attrs:{options:[10,30,50,100,150,200,300,500,1e3]},model:{value:t.dt.per_page,callback:function(e){t.$set(t.dt,"per_page",e)},expression:"dt.per_page"}})],1)],1),t._v(" "),r("b-col",{staticClass:"text-right",attrs:{md:"9",sm:"12"}},[r("b-button",{staticClass:"mr-3",attrs:{variant:"dark",size:"sm",target:"_blank",href:t.route("Backend.Reports.Products.Daily",{date:t.date,export:"pdf"}).url(),title:t.__("export_report","Export Report")}},[t._v("\n                        "+t._s(t.__("export_report","Export Report"))+"\n                    ")]),t._v(" "),r("div",{staticClass:"float-right"},[r("b-input-group",{attrs:{prepend:t.__("date","Date"),size:"sm"}},[r("b-input",{attrs:{type:"date"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1)],1)]},proxy:!0},{key:"footer",fn:function(){return[r("dt-footer",{attrs:{datatable:t.dt}})]},proxy:!0}])},[t._v(" "),r("b-table",{ref:"dt_table",staticClass:"mb-0",attrs:{hover:"",small:"",striped:"",bordered:"","api-url":t.route("Backend.Reports.Products.Daily",{date:t.date,page:t.dt.current_page}).url(),"current-page":t.dt.current_page,"head-variant":"dark",fields:t.fields,"per-page":t.dt.per_page,"foot-clone":"","foot-variant":"light",items:t.getItems},scopedSlots:t._u([{key:"foot(id)",fn:function(e){return[t._v("\n                "+t._s(t._f("localNumber")(t.colCount(t.dt.data,"id")))+"\n            ")]}},{key:"foot(sales_payable)",fn:function(e){return[t._v("\n                "+t._s(t._f("currency")(t.colSum(t.dt.data,"sales_payable")))+"\n            ")]}},{key:"foot(sales_quantity)",fn:function(e){return[t._v("\n                "+t._s(t._f("localNumber")(t.colSum(t.dt.data,"sales_quantity")))+"\n            ")]}},{key:"foot(quantity)",fn:function(e){return[t._v("\n                "+t._s(t._f("localNumber")(t.colSum(t.dt.data,"quantity")))+"\n            ")]}}])})],1)],1)}),[],!1,null,null,null);e.default=_.exports},7:function(t,e,r){"use strict";var a={props:{datatable:Object}},o=r(2),s=Object(o.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[t.datatable.to?[t._v("\n            Showing "+t._s(t.datatable.from||0)+" to "+t._s(t.datatable.to||0)+" = "+t._s(t.datatable.to-t.datatable.from+t.datatable.from)+" items of\n            "+t._s(t.datatable.total)+" items.\n        ")]:[t._v("No Items Found")]],2),t._v(" "),r("div",{staticClass:"col"},[r("b-pagination",{staticClass:"mb-0",attrs:{align:"right",size:"sm","total-rows":t.datatable.total,"per-page":t.datatable.per_page,"aria-controls":"datatable"},on:{change:function(e){return t.$emit("refreshDatatable",e)}},model:{value:t.datatable.current_page,callback:function(e){t.$set(t.datatable,"current_page",e)},expression:"datatable.current_page"}})],1)])}),[],!1,null,"5eedc22a",null);e.a=s.exports}}]);