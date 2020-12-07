(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"4IVG":function(t,e,a){"use strict";var r={props:{datatable:Object}},n=a("KHd+"),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.datatable.to?[t._v("\n            Showing "+t._s(t.datatable.from||0)+" to "+t._s(t.datatable.to||0)+" = "+t._s(t.datatable.to-t.datatable.from+t.datatable.from)+" items of\n            "+t._s(t.datatable.total)+" items.\n        ")]:[t._v("No Items Found")]],2),t._v(" "),a("div",{staticClass:"col"},[a("b-pagination",{staticClass:"mb-0",attrs:{align:"right",size:"sm","total-rows":t.datatable.total,"per-page":t.datatable.per_page,"aria-controls":"datatable"},on:{change:function(e){return t.$emit("refreshDatatable",e)}},model:{value:t.datatable.current_page,callback:function(e){t.$set(t.datatable,"current_page",e)},expression:"datatable.current_page"}})],1)])}),[],!1,null,"5eedc22a",null);e.a=s.exports},"63QV":function(t,e,a){"use strict";var r=a("YXO7"),n=a("4IVG"),s={components:{DtHeader:r.a,DtFooter:n.a},props:{title:{type:String,default:""},fields:{type:Array,default:function(){return[]}},datatable:{type:Object,default:function(){return{per_page:10,current_page:1,total:0,from:0,to:0}}},value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}},columnDdSize:{type:String,default:"sm"},enableDateRange:{type:Boolean,default:!1},tableRef:{type:String,default:"datatable"},noSearch:{type:Boolean,default:!1}}},o=a("KHd+"),i=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{title:t.title,"footer-class":"pb-0","body-class":"p-1"},scopedSlots:t._u([{key:"header",fn:function(){return[a("dt-header",{attrs:{"enable-date-range":t.enableDateRange,custom_buttons:t.custom_buttons,datatable:t.datatable,"no-search":t.noSearch,fields:t.fields,value:t.value,"column-dd-size":t.columnDdSize},on:{refreshDatatable:function(e){return t.$emit("refreshDatatable",e)},input:function(e){return t.$emit("input",e)}},scopedSlots:t._u([{key:"header_searches",fn:function(){return[t._t("header_dropdowns")]},proxy:!0},{key:"bottom_panel",fn:function(){return[t._t("header_bottom_panel")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"footer",fn:function(){return[a("dt-footer",{attrs:{datatable:t.datatable}})]},proxy:!0}])},[t._v(" "),t._t("table")],2)}),[],!1,null,null,null);e.a=i.exports},Erfc:function(t,e,a){"use strict";a.r(e);var r=a("YXO7"),n=a("4IVG"),s=a("X/aF"),o=a("63QV"),i={components:{DtHeader:r.a,DtFooter:n.a,DtTable:o.a},mixins:[s.f],props:{title:{type:String,default:_t("purchase_list","List of Purchases")},api_url:{type:String,default:function(){return route("Backend.Purchases.List").url()}},trash_url:{type:String,default:function(){return route("Backend.Purchases.Delete").url()}},submit_url:{type:String,default:function(){return route("Backend.Purchases.Store").url()}},custom_buttons:{type:Array,default:function(){return[{text:_t("add","Add"),variant:"dark",to:{name:"PurchasesAdd"}},{text:_t("history","History"),variant:"primary",to:{name:"ModelHistory",params:{model:"purchases"}}}]}}},methods:{colSum:s.d,colCount:s.c,printInvoice:function(){var t=document.getElementById("print_invoice").contentWindow;t.focus(),t.print()}},data:function(){var t=this;return{invoice_type:"html",form:{},fields:[{key:"id",name:"purchases.id",sortable:!0,label:_t("id","ID")},{key:"supplier_name",name:"suppliers.name",sortable:!0,label:_t("supplier","Supplier")},{key:"payable",sortable:!0,label:_t("payable","Payable"),formatter:function(e){return t.$options.filters.currency(e||0)}},{key:"previous_balance",sortable:!0,label:_t("previous_balance","Previous Balance"),formatter:function(e){return t.$options.filters.currency(e||0)}},{key:"current_balance",sortable:!0,label:_t("current_balance","Current Balance"),formatter:function(e){return t.$options.filters.currency(e||0)}},{key:"returned",sortable:!0,label:_t("returned","Returned"),formatter:function(e){return t.$options.filters.currency(e||0)}},{key:"date",sortable:!0,label:_t("date","Date"),formatter:function(t){return new Date(t).toLocaleDateString(_s("locale"))}},{key:"status",sortable:!0,label:_t("status","Status")},{key:"note",sortable:!0,visible:!1,label:_t("note","Note"),formatter:function(e){return t.$options.filters.truncate(e||"")}},{key:"created_at",name:"purchases.created_at",sortable:!0,label:_t("created_at","Created At"),formatter:function(e){return t.$options.filters.localDateTime(e)}},{key:"updated_at",name:"purchases.updated_at",sortable:!0,label:_t("updated_at","Updated At"),formatter:function(e){return t.$options.filters.localDateTime(e)}},{key:"action",sortable:!1,label:_t("action","Action"),searchable:!1,thClass:"text-right",tdClass:"text-right"}]}}},l=a("KHd+"),c=Object(l.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{staticClass:"mb-3"},[a("b-col",{attrs:{md:"4",sm:"12"}},[a("b-card",{attrs:{"bg-variant":"dark","text-variant":"light",title:t.__("purchases_quantity","Purchases Quantity")}},[t._v("\n                "+t._s(t._f("localNumber")(t.overview.purchases_quantity))+"\n            ")])],1),t._v(" "),a("b-col",{attrs:{md:"4",sm:"12"}},[a("b-card",{attrs:{"bg-variant":"dark","text-variant":"light",title:t.__("purchases_total","Purchases Total")}},[t._v("\n                "+t._s(t._f("currency")(t.overview.purchases_payable))+"\n            ")])],1),t._v(" "),a("b-col",{attrs:{md:"4",sm:"12"}},[a("b-card",{attrs:{"bg-variant":"dark","text-variant":"light",title:t.__("purchases_returned","Purchases Returned")}},[t._v("\n                "+t._s(t._f("currency")(t.overview.purchases_returned))+"\n            ")])],1)],1),t._v(" "),a("dt-table",{attrs:{title:t.title,fields:t.fields,datatable:t.datatable,custom_buttons:t.custom_buttons,"enable-date-range":""},on:{refreshDatatable:function(e){return t.$refs.datatable.refresh()}},scopedSlots:t._u([{key:"table",fn:function(){return[a("b-table",{ref:"datatable",staticClass:"mb-0",attrs:{variant:"primary",responsive:"md",hover:"",bordered:"",small:"",striped:"","head-variant":"dark",items:t.getItems,fields:t.fields,"sort-by":t.datatable.sortBy,"sort-desc":t.datatable.sortDesc,filter:t.search,"per-page":t.datatable.per_page,"current-page":t.datatable.current_page,"foot-clone":"","foot-variant":"light"},on:{refreshed:function(e){t.overview=JSON.parse(t.headers.overview||"{}")},"update:sortBy":function(e){return t.$set(t.datatable,"sortBy",e)},"update:sort-by":function(e){return t.$set(t.datatable,"sortBy",e)},"update:sortDesc":function(e){return t.$set(t.datatable,"sortDesc",e)},"update:sort-desc":function(e){return t.$set(t.datatable,"sortDesc",e)}},scopedSlots:t._u([{key:"foot(supplier_name)",fn:function(e){return[t._v("\n                    "+t._s(t._f("localNumber")(t.colCount(t.datatable.items,"supplier_name")))+" "+t._s(t.__("persons","Persons"))+"\n                ")]}},{key:"foot(total)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"total")))+"\n                ")]}},{key:"foot(discount)",fn:function(e){return[t._v("\n                    "+t._s(t._f("localNumber")(t.colSum(t.datatable.items,"discount")))+"%\n                ")]}},{key:"foot(tax)",fn:function(e){return[t._v("\n                    "+t._s(t._f("localNumber")(t.colSum(t.datatable.items,"tax")))+"%\n                ")]}},{key:"foot(payable)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"payable")))+"\n                ")]}},{key:"foot(previous_balance)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"previous_balance")))+"\n                ")]}},{key:"foot(current_balance)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"current_balance")))+"\n                ")]}},{key:"foot(returned)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"returned")))+"\n                ")]}},{key:"cell(action)",fn:function(e){return[a("b-button-group",{attrs:{size:"sm"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal:invoice-modal",arg:"invoice-modal"}],attrs:{variant:"dark",title:t.__("view_invoice","View Invoice")},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-file-invoice"})]),t._v(" "),a("b-button",{attrs:{variant:"primary",title:t.__("view_purchase_history","View Purchase's Details"),to:{name:"PurchasesView",params:{id:e.item.id}}},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-eye"})]),t._v(" "),a("b-button",{attrs:{variant:"danger",title:t.__("delete_the_purchase","Delete the Purchase")},on:{click:function(a){return t.trash(e.item.id)}}},[a("i",{staticClass:"fa fa-trash"})])],1)]}}])})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),t.currentItem?a("b-modal",{attrs:{id:"invoice-modal",size:"xl","footer-class":"text-right","body-class":"p-0",title:t.__("purchase_invoice","Purchase Invoice"),"header-bg-variant":"dark","header-text-variant":"light","footer-bg-variant":"dark","footer-text-variant":"light"},on:{hidden:function(e){t.currentItem=null}},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var r=e.close;return[a("b-button",{attrs:{variant:"primary"},on:{click:t.printInvoice}},[t._v("Print")]),t._v(" "),a("b-button",{attrs:{variant:"secondary"},on:{click:r}},[t._v("Close")])]}}],null,!1,2549302917)},[a("b-embed",{attrs:{id:"print_invoice",aspect:"16by9",allowfullscreen:"",src:t.route("Backend.Purchases.Invoice.PDF",{purchase:t.currentItem.id,type:"pdf"})}})],1):t._e(),t._v(" "),a("router-view",{attrs:{item:t.currentItem},on:{reset:function(e){t.currentItem={}},refreshDatatable:function(){return t.$refs.datatable.refresh()}}})],1)}),[],!1,null,null,null);e.default=c.exports},EwT1:function(t,e,a){(e=a("JPst")(!1)).push([t.i,".columns-dropdown .dropdown-menu {\n  padding: 0 !important;\n  border: 0 !important;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.columns-dropdown .list-group-item label {\n  cursor: pointer;\n}",""]),t.exports=e},YXO7:function(t,e,a){"use strict";var r=a("X/aF"),n={props:{fields:{type:Array,default:function(){return[]}},datatable:Object,value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}},columnDdSize:{type:String,default:"sm"},customButtonSize:{type:String,default:"sm"},searchSize:{type:String,default:"sm"},perPageSize:{type:String,default:"sm"},enableDateRange:{type:Boolean,default:!1},noSearch:{type:Boolean,default:!1}},data:function(){return{search:"",the:void 0}},mounted:function(){this.datatable.per_page=this.getPerPage()},watch:{"datatable.search_columns":{deep:!0,handler:function(t,e){this.$emit("refreshDatatable",!0)}}},methods:{changeVisibility:r.b,startCase:r.v,range:r.q,setPerPage:r.t,getPerPage:r.h}},s=(a("tuhp"),a("KHd+")),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{"min-width":"150px","max-width":"200px"}},[a("b-input-group",{attrs:{size:t.perPageSize,prepend:t.__("per_page","Per Page")}},[a("b-form-select",{staticClass:"form-control",attrs:{options:t.range()},on:{change:function(e){return t.setPerPage(e)}},model:{value:t.datatable.per_page,callback:function(e){t.$set(t.datatable,"per_page",e)},expression:"datatable.per_page"}})],1)],1),t._v(" "),t.noSearch?t._e():a("div",{staticClass:"col",staticStyle:{"min-width":"150px"}},[a("b-form-input",{attrs:{type:"search",size:t.searchSize,placeholder:t.__("type_and_hit_enter_to_search_the_table","Type and Hit Enter to Search the table, ESC to clear")},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:(e.target.value="",void t.$emit("input",""))},change:function(e){t.datatable.current_page=1},input:function(e){return t.$emit("input",t.search)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),t.enableDateRange?a("div",{staticClass:"col"},[a("b-input-group",{attrs:{size:t.searchSize},scopedSlots:t._u([{key:"append",fn:function(){return[a("b-button",{on:{click:function(){t.$set(t.datatable.search_columns,"starting_date",void 0),t.$set(t.datatable.search_columns,"ending_date",void 0),t.$emit("refreshDatatable")}}},[t._v("\n                        x\n                    ")])]},proxy:!0}],null,!1,2283915669)},[a("b-form-input",{attrs:{type:"date",title:t.__("starting_date","Starting Date")},on:{change:function(e){return t.$emit("refreshDatatable")}},model:{value:t.datatable.search_columns.starting_date,callback:function(e){t.$set(t.datatable.search_columns,"starting_date",e)},expression:"datatable.search_columns.starting_date"}}),t._v(" "),a("b-form-input",{attrs:{type:"date",disabled:!t.datatable.search_columns.starting_date,min:t.datatable.search_columns.starting_date,title:t.__("ending_date","Ending Date")},on:{change:function(e){return t.$emit("refreshDatatable")}},model:{value:t.datatable.search_columns.ending_date,callback:function(e){t.$set(t.datatable.search_columns,"ending_date",e)},expression:"datatable.search_columns.ending_date"}})],1)],1):t._e(),t._v(" "),a("div",{staticClass:"col text-right"},[t._t("header_searches"),t._v(" "),t.custom_buttons&&t.custom_buttons.length?a("b-button-group",{attrs:{v0i:"",size:t.customButtonSize}},[t._l(t.custom_buttons,(function(e,r){return[e.to?a("b-button",{key:r,attrs:{title:e.title,variant:e.variant?e.variant:"dark",to:e.to,exact:"","exact-active-class":"active"}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                    ")]):e.cb?a("b-button",{key:r,attrs:{title:e.title,variant:e.variant?e.variant:"dark",exact:"","exact-active-class":"active"},on:{click:e.cb}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                    ")]):a("b-button",{key:r,attrs:{title:e.title,variant:e.variant?e.variant:"dark"},on:{click:e.method}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                    ")])]}))],2):t._e(),t._v(" "),a("b-dropdown",{staticClass:"columns-dropdown p-0",attrs:{text:t.__("columns","Columns"),size:t.columnDdSize,right:"",variant:"primary"}},[a("ul",{staticClass:"list-group"},t._l(t.fields,(function(e,r){return a("li",{key:r,staticClass:"list-group-item"},[a("b-form-checkbox",{attrs:{value:!0,"uncheched-value":!1},on:{change:function(a){return t.changeVisibility(e,r)}},model:{value:e.visible,callback:function(a){t.$set(e,"visible",a)},expression:"field.visible"}},[t._v("\n                            "+t._s(t.startCase(e.label||e.key))+"\n                        ")])],1)})),0)])],2)]),t._v(" "),t._t("bottom_panel")],2)}),[],!1,null,null,null);e.a=o.exports},jUAY:function(t,e,a){var r=a("LboF"),n=a("EwT1");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var s={insert:"head",singleton:!1};r(n,s);t.exports=n.locals||{}},tuhp:function(t,e,a){"use strict";var r=a("jUAY");a.n(r).a}}]);