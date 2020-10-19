(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{133:function(t,e,a){"use strict";a.r(e);var n=a(8),r=a(7),s=a(1),o=a(9),l=a(10),i=a.n(l),u={props:{customer_id:{type:Number,required:!0},paymentAmount:{type:Number,default:function(){return 0}}},data:function(){return{form:{payment_amount:0,payment_method:"Cash",date:i()().format("YYYY-MM-DD")}}},mounted:function(){this.form.payment_amount=this.paymentAmount},methods:{handleSubmit:function(){var t=this;axios.post(route("Backend.Customers.Payments.Add",{customer:this.customer_id}).url(),this.form).then((function(e){t.$root.msgBox(e.data),t.$emit("success",!0),t.$emit("refresh",!0)})).catch((function(e){t.$emit("success",!1),t.$root.msgBox(e.response.data),console.log(e.response)}))}}},c=a(2),d=Object(c.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("b-form-group",{attrs:{label:t.__("payment_amount","Payment Amount")}},[a("b-input",{attrs:{type:"number",step:"any",required:!0},model:{value:t.form.payment_amount,callback:function(e){t.$set(t.form,"payment_amount",e)},expression:"form.payment_amount"}})],1),t._v(" "),a("b-form-group",{attrs:{label:t.__("payment_method","Payment Method")}},[a("b-select",{attrs:{required:!0,options:["Cash","Card","Bank","Rocket","bKash"]},model:{value:t.form.payment_method,callback:function(e){t.$set(t.form,"payment_method",e)},expression:"form.payment_method"}})],1),t._v(" "),a("b-form-group",{attrs:{label:t.__("date","Date")}},[a("b-input",{attrs:{type:"date",required:!0},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),t._v(" "),a("b-button",{attrs:{block:"",variant:"dark",type:"submit"}},[t._v("\n        "+t._s(t.__("submit","SUBMIT"))+"\n    ")])],1)}),[],!1,null,null,null).exports,m={name:"CustomerPaymentList",components:{DtHeader:n.a,DtFooter:r.a,DtTable:o.a},mixins:[s.f],props:{title:{type:String,default:_t("payment_history","Payment History")},customerId:{type:Number,required:!0},custom_buttons:{type:Array,default:function(){return[]}}},methods:{msgBox:s.l,colSum:s.d,commonDtOptions:s.e},mounted:function(){this.api_url=route("Backend.Customers.Payments",{customer:this.customerId}).url()},data:function(){var t=this;return{the:this,options:{},api_url:null,fields:[{key:"id",label:_t("id","ID"),name:"sale_payments.id",sortable:!0},{key:"name",label:_t("name","Name"),name:"customers.name",sortable:!0},{key:"payment_method",label:_t("method","Method"),name:"sale_payments.payment_method",sortable:!0},{key:"payment_amount",label:_t("amount","Amount"),name:"sale_payments.payment_amount",sortable:!0,formatter:function(e){return t.$options.filters.currency(e)}},{key:"bank",label:_t("bank","Bank"),name:"sale_payments.bank",sortable:!0},{key:"check",label:_t("check","Check"),name:"sale_payments.check",sortable:!0},{key:"transaction_no",label:_t("transaction_no","Txn. No."),name:"sale_payments.transaction_no",sortable:!0},{key:"created_at",label:_t("date","Date"),name:"sale_payments.created_at",formatter:function(e){return t.$options.filters.localDateTime(e)},sortable:!0},{key:"action",label:_t("action","Action"),sortable:!1,searchable:!1,thClass:"text-right",tdClass:"text-right"}]}}},_=(a(93),Object(c.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.api_url?a("dt-table",{ref:"datatable",attrs:{title:t.title,fields:t.fields,datatable:t.datatable,custom_buttons:t.custom_buttons},scopedSlots:t._u([{key:"table",fn:function(){return[a("b-table",t._b({ref:"datatable",scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[a("b-button-group",{attrs:{size:"sm"}},[a("b-button",{attrs:{variant:"primary",target:"_blank",href:t.route("Backend.Payments.Sales.Invoice",{salePayment:e.item.id,pdf:"html"}).url(),title:t.__("invoice","Invoice")}},[a("i",{staticClass:"fa fa-eye"})]),t._v(" "),a("b-button",{attrs:{variant:"dark",target:"_blank",href:t.route("Backend.Payments.Sales.Invoice",{salePayment:e.item.id,pdf:"pdf"}).url(),title:t.__("invoice","Invoice")}},[a("i",{staticClass:"fa fa-file-invoice"})]),t._v(" "),a("b-button",{attrs:{variant:"danger",target:"_blank",title:t.__("trash","Trash")},on:{click:function(a){t.trash(e.item.id,"datatable",t.route("Backend.Payments.Sales.Delete").url())}}},[a("i",{staticClass:"fa fa-trash"})])],1)]}},{key:"foot(payment_amount)",fn:function(e){return[t._v("\n                "+t._s(t._f("currency")(t.colSum(t.datatable.items,"payment_amount")))+"\n            ")]}}],null,!1,3934212209)},"b-table",t.commonDtOptions(t.the),!1))]},proxy:!0}],null,!1,922636666),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e()}),[],!1,null,null,null).exports),b={name:"CustomerSaleReturnList",components:{DtHeader:n.a,DtFooter:r.a,DtTable:o.a},mixins:[s.f],props:{title:{type:String,default:_t("returns_history","Returns History")},customerId:{type:Number,required:!0},custom_buttons:{type:Array,default:function(){return[]}}},methods:{colSum:s.d,commonDtOptions:s.e},mounted:function(){this.api_url=route("Backend.Customers.Returns",{customer:this.customerId}).url()},data:function(){var t=this;return{the:this,api_url:null,fields:[{key:"id",label:_t("id","ID"),name:"sale_returns.id",sortable:!0},{key:"product_id",label:_t("product_id","Product ID"),name:"sale_returns.product_id",sortable:!0},{key:"customer_name",label:_t("customer","Customer"),name:"customers.name",sortable:!0},{key:"product_name",label:_t("product_name","Product"),name:"products.name",sortable:!0},{key:"quantity",label:_t("quantity","Quantity"),name:"sale_returns.quantity",sortable:!0,formatter:function(e){return t.$options.filters.localNumber(e)}},{key:"amount",label:_t("total","Total"),name:"sale_returns.amount",sortable:!0,formatter:function(e){return t.$options.filters.currency(e)}},{key:"created_at",label:_t("date","Date"),name:"sale_returns.created_at",formatter:function(e){return t.$options.filters.localDateTime(e)},sortable:!0}]}}},f=Object(c.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.api_url?a("dt-table",{attrs:{title:t.title,fields:t.fields,datatable:t.datatable,custom_buttons:t.custom_buttons},scopedSlots:t._u([{key:"table",fn:function(){return[a("b-table",t._b({ref:"datatable",scopedSlots:t._u([{key:"foot(amount)",fn:function(e){return[t._v("\n                "+t._s(t._f("currency")(t.colSum(t.datatable.items,"amount")))+"\n            ")]}},{key:"foot(quantity)",fn:function(e){return[t._v("\n                "+t._s(t._f("localNumber")(t.colSum(t.datatable.items,"quantity")))+"\n            ")]}}],null,!1,3636620832)},"b-table",t.commonDtOptions(t.the),!1))]},proxy:!0}],null,!1,3101178433),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e()}),[],!1,null,null,null).exports,p={name:"CustomersList",components:{DtHeader:n.a,DtFooter:r.a,DtTable:o.a,AddFund:d,Payments:_,Returns:f},mixins:[s.f],props:{title:{type:String,default:_t("customers","Customers")},api_url:{type:String,default:function(){return route("Backend.Customers.List").url()}},trash_url:{type:String,default:function(){return route("Backend.Customers.Delete").url()}},submit_url:{type:String,default:function(){return route("Backend.Customers.Store").url()}},custom_buttons:{type:Array,default:function(){return[{text:_t("add","Add"),variant:"dark",to:{name:"CustomersAdd"}},{text:_t("history","History"),variant:"primary",to:{name:"ModelHistory",params:{model:"customers"}}}]}}},methods:{colCount:s.c,colSum:s.d,commonDtOptions:s.e},data:function(){var t=this;return{the:this,BasicModalOptions:s.a,form:{},fund_summery:{},fields:[{key:"id",sortable:!0,label:_t("id","ID")},{key:"name",sortable:!0,label:_t("name","Name")},{key:"email",sortable:!0,label:_t("email","Email")},{key:"phone",sortable:!0,label:_t("phone","Phone")},{key:"company",sortable:!0,label:_t("company","Company")},{key:"district",sortable:!0,label:_t("district","District")},{key:"thana",sortable:!0,label:_t("thana","Thana")},{key:"post_office",sortable:!0,label:_t("post_office","P.O.")},{key:"village",sortable:!0,label:_t("village","Village")},{key:"payable",searchable:!1,sortable:!0,label:_t("payable","Payable"),formatter:function(e){return t.$options.filters.currency(e)}},{key:"paid",searchable:!1,sortable:!0,label:_t("customers.paid","Paid"),formatter:function(e){return t.$options.filters.currency(e)}},{key:"returned",searchable:!1,sortable:!0,label:_t("returned","Returned"),formatter:function(e){return t.$options.filters.currency(e)}},{key:"balance",sortable:!0,searchable:!1,label:_t("balance","Balance"),formatter:function(e){return t.$options.filters.currency(e)}},{key:"shipping_address",label:_t("shipping_address","Shipping Address"),sortable:!0,formatter:function(e){return t.$options.filters.truncate(e||"")},visible:!1},{key:"created_at",sortable:!0,label:_t("created_at","Created At"),formatter:function(e){return t.dayjs(e)}},{key:"updated_at",sortable:!0,label:_t("updated_at","Updated At"),formatter:function(e){return t.dayjs(e)}},{key:"action",sortable:!1,label:_t("action","Action"),searchable:!1,thClass:"text-right",tdClass:"text-right"}]}}},y=(a(95),Object(c.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{staticClass:"mb-3"},[a("b-col",{attrs:{md:"3",sm:"12"}},[a("b-card",{attrs:{title:t.__("sales_amount","Sales Amount")}},[t._v("\n                "+t._s(t._f("currency")(t.fund_summery.payable))+"\n            ")])],1),t._v(" "),a("b-col",{attrs:{md:"3",sm:"12"}},[a("b-card",{attrs:{title:t.__("received_amount","Received")}},[t._v("\n                "+t._s(t._f("currency")(t.fund_summery.paid))+"\n            ")])],1),t._v(" "),a("b-col",{attrs:{md:"3",sm:"12"}},[a("b-card",{attrs:{title:t.__("returned_total","Returned Total")}},[t._v("\n                "+t._s(t._f("currency")(t.fund_summery.returned))+"\n            ")])],1),t._v(" "),a("b-col",{attrs:{md:"3",sm:"12"}},[a("b-card",{attrs:{title:t.__("balance","Balance")}},[t._v("\n                "+t._s(t._f("currency")(t.fund_summery.balance))+"\n            ")])],1)],1),t._v(" "),a("dt-table",{attrs:{title:t.title,fields:t.fields,datatable:t.datatable,"enable-date-range":"",custom_buttons:t.custom_buttons},on:{refreshDatatable:function(e){return t.$refs.datatable.refresh()}},scopedSlots:t._u([{key:"table",fn:function(){return[a("b-table",t._b({ref:"datatable",on:{refreshed:function(e){t.fund_summery=JSON.parse(t.headers.fund_summery||"{}")}},scopedSlots:t._u([{key:"foot(payable)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"payable")))+"\n                ")]}},{key:"foot(paid)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"paid")))+"\n                ")]}},{key:"foot(returned)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"returned")))+"\n                ")]}},{key:"foot(balance)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"balance")))+"\n                ")]}},{key:"cell(action)",fn:function(e){return[a("b-button-group",{attrs:{size:"sm"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal:add_fund_modal",arg:"add_fund_modal"}],attrs:{variant:"dark",title:t.__("take_payment","Take Payment")},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-money-bill"})]),t._v(" "),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal:payment_history",arg:"payment_history"}],attrs:{variant:"primary",title:t.__("payment_history","Payment History")},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-money-check"})]),t._v(" "),a("b-dropdown",{attrs:{right:"",size:"sm"}},[a("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal:returns-modal",arg:"returns-modal"}],attrs:{title:t.__("returns_history","Returns History")},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-retweet"}),t._v("\n                                "+t._s(t.__("returns_history","Returns History"))+"\n                            ")]),t._v(" "),a("b-dropdown-item",{attrs:{title:t.__("view","View"),to:{name:"CustomersView",params:{id:e.item.id}}},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-eye"}),t._v(" "+t._s(t.__("view","View"))+"\n                            ")]),t._v(" "),a("b-dropdown-item",{attrs:{title:t.__("edit","Edit"),to:{name:"CustomersAdd",params:{id:e.item.id}}},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-edit"}),t._v(" "+t._s(t.__("edit","Edit"))+"\n                            ")]),t._v(" "),a("b-dropdown-item",{attrs:{title:t.__("delete","Delete")},on:{click:function(a){return t.trash(e.item.id)}}},[a("i",{staticClass:"fa fa-trash"}),t._v(" "+t._s(t.__("delete","Delete"))+"\n                            ")])],1)],1)]}}])},"b-table",t.commonDtOptions(t.the),!1))]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),t.currentItem?a("b-modal",t._b({attrs:{id:"add_fund_modal",title:t.__("add_payment","Add Payment")},on:{hidden:function(e){t.currentItem={}}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hide;return[t.currentItem&&t.currentItem.id?a("add-fund",{attrs:{"payment-amount":Number(Number(t.currentItem.balance).toFixed(2)),customer_id:t.currentItem.id},on:{success:function(t){t&&n()},refresh:function(e){return t.$refs.datatable.refresh()}}}):t._e()]}}],null,!1,2388924671)},"b-modal",Object.assign({},t.BasicModalOptions,{size:"sm",bodyClass:"p-2",hideFooter:!0}),!1)):t._e(),t._v(" "),a("b-modal",t._b({attrs:{id:"payment_history",title:t.__("payment_history","Payment History")},on:{hidden:function(e){t.currentItem={}}}},"b-modal",Object.assign({},t.BasicModalOptions,{bodyClass:"p-2"}),!1),[a("payments",{attrs:{"customer-id":t.currentItem.id}})],1),t._v(" "),a("b-modal",t._b({attrs:{id:"returns-modal",title:t.__("returns_history","Returns History")},on:{hidden:function(e){t.currentItem={}}}},"b-modal",t.BasicModalOptions,!1),[a("returns",{attrs:{"customer-id":t.currentItem.id}})],1),t._v(" "),a("router-view",{attrs:{item:t.currentItem},on:{reset:function(e){t.currentItem={}},refreshDatatable:function(){return t.$refs.datatable.refresh()}}})],1)}),[],!1,null,null,null));e.default=y.exports},33:function(t,e,a){var n=a(17),r=a(72);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var s={insert:"head",singleton:!1};n(r,s);t.exports=r.locals||{}},45:function(t,e,a){var n=a(17),r=a(94);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var s={insert:"head",singleton:!1};n(r,s);t.exports=r.locals||{}},46:function(t,e,a){var n=a(17),r=a(96);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var s={insert:"head",singleton:!1};n(r,s);t.exports=r.locals||{}},7:function(t,e,a){"use strict";var n={props:{datatable:Object}},r=a(2),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.datatable.to?[t._v("\n            Showing "+t._s(t.datatable.from||0)+" to "+t._s(t.datatable.to||0)+" = "+t._s(t.datatable.to-t.datatable.from+t.datatable.from)+" items of\n            "+t._s(t.datatable.total)+" items.\n        ")]:[t._v("No Items Found")]],2),t._v(" "),a("div",{staticClass:"col"},[a("b-pagination",{staticClass:"mb-0",attrs:{align:"right",size:"sm","total-rows":t.datatable.total,"per-page":t.datatable.per_page,"aria-controls":"datatable"},on:{change:function(e){return t.$emit("refreshDatatable",e)}},model:{value:t.datatable.current_page,callback:function(e){t.$set(t.datatable,"current_page",e)},expression:"datatable.current_page"}})],1)])}),[],!1,null,"5eedc22a",null);e.a=s.exports},71:function(t,e,a){"use strict";var n=a(33);a.n(n).a},72:function(t,e,a){(e=a(18)(!1)).push([t.i,".columns-dropdown .dropdown-menu {\n  padding: 0 !important;\n  border: 0 !important;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.columns-dropdown .list-group-item label {\n  cursor: pointer;\n}",""]),t.exports=e},8:function(t,e,a){"use strict";var n=a(1),r={props:{fields:{type:Array,default:function(){return[]}},datatable:Object,value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}},columnDdSize:{type:String,default:"sm"},customButtonSize:{type:String,default:"sm"},searchSize:{type:String,default:"sm"},perPageSize:{type:String,default:"sm"},enableDateRange:{type:Boolean,default:!1},noSearch:{type:Boolean,default:!1}},data:function(){return{search:""}},mounted:function(){this.datatable.per_page=this.getPerPage()},watch:{"datatable.search_columns":{deep:!0,handler:function(t,e){this.$emit("refreshDatatable",!0)}}},methods:{changeVisibility:n.b,startCase:n.u,range:n.p,setPerPage:n.s,getPerPage:n.h}},s=(a(71),a(2)),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{"min-width":"150px","max-width":"200px"}},[a("b-input-group",{attrs:{size:t.perPageSize,prepend:t.__("per_page","Per Page")}},[a("b-form-select",{staticClass:"form-control",attrs:{options:t.range()},on:{change:function(e){return t.setPerPage(e)}},model:{value:t.datatable.per_page,callback:function(e){t.$set(t.datatable,"per_page",e)},expression:"datatable.per_page"}})],1)],1),t._v(" "),t.noSearch?t._e():a("div",{staticClass:"col",staticStyle:{"min-width":"150px"}},[a("b-form-input",{attrs:{type:"search",size:t.searchSize,placeholder:t.__("type_and_hit_enter_to_search_the_table","Type and Hit Enter to Search the table, ESC to clear")},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:(e.target.value="",void t.$emit("input",""))},change:function(e){t.datatable.current_page=1},input:function(e){return t.$emit("input",t.search)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),t.enableDateRange?a("div",{staticClass:"col"},[a("b-input-group",{attrs:{size:t.searchSize},scopedSlots:t._u([{key:"append",fn:function(){return[a("b-button",{on:{click:function(){t.$set(t.datatable.search_columns,"starting_date",void 0),t.$set(t.datatable.search_columns,"ending_date",void 0),t.$emit("refreshDatatable")}}},[t._v("\n                        x\n                    ")])]},proxy:!0}],null,!1,2283915669)},[a("b-form-input",{attrs:{type:"date",title:t.__("starting_date","Starting Date")},on:{change:function(e){return t.$emit("refreshDatatable")}},model:{value:t.datatable.search_columns.starting_date,callback:function(e){t.$set(t.datatable.search_columns,"starting_date",e)},expression:"datatable.search_columns.starting_date"}}),t._v(" "),a("b-form-input",{attrs:{type:"date",disabled:!t.datatable.search_columns.starting_date,min:t.datatable.search_columns.starting_date,title:t.__("ending_date","Ending Date")},on:{change:function(e){return t.$emit("refreshDatatable")}},model:{value:t.datatable.search_columns.ending_date,callback:function(e){t.$set(t.datatable.search_columns,"ending_date",e)},expression:"datatable.search_columns.ending_date"}})],1)],1):t._e(),t._v(" "),a("div",{staticClass:"col text-right"},[t._t("header_searches"),t._v(" "),t.custom_buttons&&t.custom_buttons.length?a("b-button-group",{attrs:{v0i:"",size:t.customButtonSize}},[t._l(t.custom_buttons,(function(e,n){return[e.to?a("b-button",{key:n,attrs:{title:e.title,variant:e.variant?e.variant:"dark",to:e.to,exact:"","exact-active-class":"active"}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                    ")]):e.cb?a("b-button",{key:n,attrs:{title:e.title,variant:e.variant?e.variant:"dark",exact:"","exact-active-class":"active"},on:{click:e.cb}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                    ")]):a("b-button",{key:n,attrs:{title:e.title,variant:e.variant?e.variant:"dark"},on:{click:e.method}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                    ")])]}))],2):t._e(),t._v(" "),a("b-dropdown",{staticClass:"columns-dropdown p-0",attrs:{text:t.__("columns","Columns"),size:t.columnDdSize,right:"",variant:"primary"}},[a("ul",{staticClass:"list-group"},t._l(t.fields,(function(e,n){return a("li",{key:n,staticClass:"list-group-item"},[a("b-form-checkbox",{attrs:{value:!0,"uncheched-value":!1},on:{change:function(a){return t.changeVisibility(e,n)}},model:{value:e.visible,callback:function(a){t.$set(e,"visible",a)},expression:"field.visible"}},[t._v("\n                            "+t._s(t.startCase(e.label||e.key))+"\n                        ")])],1)})),0)])],2)]),t._v(" "),t._t("bottom_panel")],2)}),[],!1,null,null,null);e.a=o.exports},9:function(t,e,a){"use strict";var n=a(8),r=a(7),s={components:{DtHeader:n.a,DtFooter:r.a},props:{title:{type:String,default:""},fields:{type:Array,default:function(){return[]}},datatable:{type:Object,default:function(){return{per_page:10,current_page:1,total:0,from:0,to:0}}},value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}},columnDdSize:{type:String,default:"sm"},enableDateRange:{type:Boolean,default:!1},tableRef:{type:String,default:"datatable"},noSearch:{type:Boolean,default:!1}}},o=a(2),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{title:t.title,"footer-class":"pb-0","body-class":"p-1"},scopedSlots:t._u([{key:"header",fn:function(){return[a("dt-header",{attrs:{"enable-date-range":t.enableDateRange,custom_buttons:t.custom_buttons,datatable:t.datatable,"no-search":t.noSearch,fields:t.fields,value:t.value,"column-dd-size":t.columnDdSize},on:{refreshDatatable:function(e){return t.$emit("refreshDatatable",e)},input:function(e){return t.$emit("input",e)}},scopedSlots:t._u([{key:"header_searches",fn:function(){return[t._t("header_dropdowns")]},proxy:!0},{key:"bottom_panel",fn:function(){return[t._t("header_bottom_panel")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"footer",fn:function(){return[a("dt-footer",{attrs:{datatable:t.datatable}})]},proxy:!0}])},[t._v(" "),t._t("table")],2)}),[],!1,null,null,null);e.a=l.exports},93:function(t,e,a){"use strict";var n=a(45);a.n(n).a},94:function(t,e,a){(e=a(18)(!1)).push([t.i,"table th {\n  vertical-align: top !important;\n}",""]),t.exports=e},95:function(t,e,a){"use strict";var n=a(46);a.n(n).a},96:function(t,e,a){(e=a(18)(!1)).push([t.i,"table th {\n  vertical-align: top !important;\n}",""]),t.exports=e}}]);