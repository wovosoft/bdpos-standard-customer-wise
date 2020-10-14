(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2],{100:function(e,t,n){(t=n(19)(!1)).push([e.i,"\n@level components{\n.card{\n@apply\n    }\n}\n",""]),e.exports=t},11:function(e,t,n){"use strict";var a=n(2);t.a={props:{getCreatedItem:{type:Boolean,default:!1},item:{type:Object,default:function(){return{}}}},mounted:function(){this.form=this.item,Object(a.g)(this,(function(){}))},data:function(){return{form:{},errors:null,visible:!0}},methods:{getItem:a.e,onSubmit:a.n,hitSubmit:function(){this.$refs.submitBtn.click()},hasError:function(e){return!!(this.errors&&this.errors[e]&&this.errors[e].length)},getErrorMsg:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return this.hasError(e)?this.errors[e].join(t):""}}}},135:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),o=n(2),s=n(7),i=n(85),l={name:"Expenses",components:{DtFooter:s.a,ExpensesAdd:i.default},props:{date:{type:String,required:!0}},watch:{date:{handler:function(){this.$refs.todayExpensesList.refresh()}}},data:function(){var e=this;return{expenses_add_visible:!1,expenses:{sortBy:"id",sortDesc:!0,per_page:30,current_page:1,total:0,from:0,to:0,data:[]},expenses_fields:[{key:"id",name:"expenses.id",sortable:!0,label:_t("id","ID")},{key:"expense_category_name",name:"expense_categories.name",label:_t("category","Category"),sortable:!0},{key:"amount",sortable:!0,label:_t("amount","Amount"),formatter:function(t){return e.$options.filters.currency(t)}},{key:"reference",label:_t("reference","Reference"),sortable:!0},{key:"created_at",name:"expenses.created_at",label:_t("created_at","Created At"),sortable:!0,formatter:function(t){return e.$options.filters.localTime(t)}}]}},methods:{startCase:o.t,colSum:o.c,colCount:o.b,msgBox:o.k,getTodaysExpenses:function(e){var t=this;return axios.post(route("Backend.Expenses.List",{page:e.currentPage}).url(),{date:this.date,per_page:e.perPage||10,orderBy:e.sortBy||"id",order:Object(o.j)(e.sortDesc)?"desc":"asc"}).then((function(e){return t.$set(t,"expenses",e.data),e.data.data})).catch((function(e){return console.log(e.response),t.$set(t,"expenses",{current_page:1,data:[]}),[]}))}}},u=n(1),c=Object(u.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",{staticClass:"my-2"},[n("b-col",[n("b-input-group",{attrs:{size:"sm",prepend:e.__("per_page","Per Page")}},[n("b-select",{attrs:{options:[5,10,20,30,50,80,100,150,500]},model:{value:e.expenses.per_page,callback:function(t){e.$set(e.expenses,"per_page",t)},expression:"expenses.per_page"}})],1)],1),e._v(" "),n("b-col",{staticClass:"text-right"},[n("b-button",{attrs:{size:"sm",variant:"dark"},on:{click:function(t){e.expenses_add_visible=!0}}},[n("i",{staticClass:"fa fa-plus"}),e._v("\n                "+e._s(e.__("add","Add"))+"\n            ")])],1)],1),e._v(" "),n("b-table",{ref:"todayExpensesList",attrs:{fields:e.expenses_fields,small:"",bordered:"",hover:"",striped:"","head-variant":"dark","foot-clone":"","foot-variant":"light","per-page":e.expenses.per_page,"current-page":e.expenses.current_page,items:e.getTodaysExpenses},scopedSlots:e._u([{key:"foot(expense_category_name)",fn:function(t){return[e._v("\n            "+e._s(e._f("localNumber")(e.colCount(e.expenses.data,"expense_category_name")))+"\n        ")]}},{key:"foot(amount)",fn:function(t){return[e._v("\n            "+e._s(e._f("currency")(e.colSum(e.expenses.data,"amount")))+"\n        ")]}}])}),e._v(" "),n("dt-footer",{attrs:{datatable:e.expenses}}),e._v(" "),n("expenses-add",{attrs:{size:"md","router-back-on-close":!1,"is-visible":e.expenses_add_visible},on:{reset:function(){e.expenses_add_visible=!1,e.$refs.todayExpensesList.refresh()}}})],1)}),[],!1,null,"18161c4b",null).exports,d=n(61),m=n(17),p={name:"DueSales",components:{DtFooter:s.a},props:{date:String,required:!0},data:function(){var e=this;return{form:{},payment_options:m.a,items:{data:[],current_page:1,per_page:30},form_sales_fields:[{key:"id",label:_t("id","ID")},{key:"created_at",label:_t("date","Date"),formatter:function(t){return e.$options.filters.localDate(t)}},{key:"payable",label:_t("payable","Payable"),formatter:function(t){return e.$options.filters.currency(t)}},{key:"paid",label:_t("paid","Paid"),formatter:function(t){return e.$options.filters.currency(t)}},{key:"balance",label:_t("balance","Balance"),formatter:function(t){return e.$options.filters.currency(t)}},{key:"amount",label:_t("amount","Amount")}],fields:[{key:"id",label:_t("id","ID")},{key:"name",label:_t("customer","Customer")},{key:"total_payable",label:_t("payable","Payable"),formatter:function(t){return e.$options.filters.currency(t)}},{key:"total_paid",label:_t("paid","Paid"),formatter:function(t){return e.$options.filters.currency(t)}},{key:"total_balance",label:_t("balance","Balance"),formatter:function(t){return e.$options.filters.currency(t)}},{key:"action",label:_t("action","Action"),tdClass:"text-right",thClass:"text-right"}]}},methods:{colSum:o.c,colCount:o.b,msgBox:o.k,handleCustomerSalePayment:function(e){var t=this;this.$refs.customer_sale_payment.reportValidity()&&axios.post(route("Backend.Transactions.Set.By.Customers").url(),this.form).then((function(n){t.msgBox(n.data),t.$refs.dt_items.refresh(),e()})).catch((function(e){t.msgBox(e.response.data),console.log(e.response)}))},distributePayments:function(e){if(Number(e)===Number(this.colSum(this.form.sales,"amount")))return!1;var t=0;for(var n in this.form.sales)t=this.form.sales[n].balance<=e?this.form.sales[n].balance:e,this.$set(this.form.sales[n],"amount",t),e-=t},getListIns:function(){var e=this;return axios.post(route("Backend.Transactions.By.Customers",{page:this.items.current_page}).url(),{date:this.date}).then((function(t){return e.$set(e,"items",t.data),t.data.data})).catch((function(t){return e.$set(e,"items",{data:[],current_page:1}),console.log(t.response),[]}))}}},f=Object(u.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-table",{ref:"dt_items",staticClass:"mb-0",attrs:{items:e.getListIns,fields:e.fields,small:"",striped:"","foot-clone":"","foot-variant":"light","head-variant":"dark"},scopedSlots:e._u([{key:"foot(name)",fn:function(t){return[e._v("\n            "+e._s(e.__("total","Total"))+" :\n        ")]}},{key:"foot(total_payable)",fn:function(t){return[e._v("\n            "+e._s(e._f("currency")(e.colSum(e.items.data,"total_payable")))+"\n        ")]}},{key:"foot(total_paid)",fn:function(t){return[e._v("\n            "+e._s(e._f("currency")(e.colSum(e.items.data,"total_paid")))+"\n        ")]}},{key:"foot(total_balance)",fn:function(t){return[e._v("\n            "+e._s(e._f("currency")(e.colSum(e.items.data,"total_balance")))+"\n        ")]}},{key:"cell(action)",fn:function(t){return[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal:customer-payment",arg:"customer-payment"}],attrs:{size:"sm",variant:"dark",title:e.__("add_payment","Add Payment")},on:{click:function(){e.$set(e.form,"payment_amount",t.item.total_balance),e.$set(e.form,"customer_id",t.item.id),e.$set(e.form,"payment_method","Cash"),e.$set(e.form,"sales",JSON.parse(JSON.stringify(t.item.sales)))}}},[n("i",{staticClass:"fa fa-plus"})])]}}])}),e._v(" "),n("dt-footer",{attrs:{datatable:e.items}}),e._v(" "),n("b-modal",{attrs:{size:"xl","hide-footer":"","header-bg-variant":"dark","header-text-variant":"light",id:"customer-payment",title:e.__("customer_payment","Customer Payment")},on:{shown:function(){e.form.date||e.$set(e.form,"date",e.date)},hidden:function(t){e.form={}}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.hide;return[n("b-form",{ref:"customer_sale_payment",on:{submit:function(t){return t.preventDefault(),e.handleCustomerSalePayment(a)}}},[n("b-form-row",[n("b-col",{attrs:{md:"4",sm:"12"}},[n("b-form-group",{attrs:{label:e.__("payment_amount","Payment Amount")}},[n("b-input-group",{scopedSlots:e._u([{key:"append",fn:function(){return[n("b-button",{attrs:{variant:"dark"},on:{click:function(t){return e.distributePayments(e.form.payment_amount)}}},[e._v("\n                                        "+e._s(e.__("distribute","Distribute"))+"\n                                    ")])]},proxy:!0}],null,!0)},[n("b-input",{attrs:{type:"number",step:"any",required:!0},model:{value:e.form.payment_amount,callback:function(t){e.$set(e.form,"payment_amount",t)},expression:"form.payment_amount"}})],1)],1),e._v(" "),n("b-form-group",{attrs:{label:e.__("payment_method","Payment Method")}},[n("b-select",{attrs:{required:!0,options:e.payment_options},model:{value:e.form.payment_method,callback:function(t){e.$set(e.form,"payment_method",t)},expression:"form.payment_method"}})],1),e._v(" "),n("b-form-group",{attrs:{label:e.__("date","Date")}},[n("b-input",{attrs:{type:"date",required:!0},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1)],1),e._v(" "),n("b-col",{attrs:{md:"8",sm:"12"}},[n("h5",[e._v(e._s(e.__("due_sales","Due Sales")))]),e._v(" "),n("b-table",{attrs:{items:e.form.sales,fields:e.form_sales_fields,small:"","head-variant":"dark",bordered:"",striped:"",hover:"","foot-variant":"light","foot-clone":""},scopedSlots:e._u([{key:"cell(id)",fn:function(t){return[n("b-link",{attrs:{href:e.route("Backend.Sales.Invoice.PDF",{sale:t.item.id,type:"pdf"}),target:"_blank"}},[e._v("\n                                    "+e._s(t.item.id)+"\n                                ")])]}},{key:"cell(amount)",fn:function(t){return[n("b-input-group",{attrs:{size:"sm"},scopedSlots:e._u([{key:"append",fn:function(){return[n("b-button",{on:{click:function(){e.$set(t.item,"amount",t.item.balance)}}},[e._v("\n                                            Full\n                                        ")])]},proxy:!0}],null,!0)},[n("b-input",{attrs:{type:"number",step:"any",placeholder:e.__("amount","Amount")},on:{input:function(t){e.form.payment_amount=e.colSum(e.form.sales,"amount")}},model:{value:t.item.amount,callback:function(n){e.$set(t.item,"amount",n)},expression:"row.item.amount"}})],1)]}},{key:"foot(id)",fn:function(t){return[e._v("\n                                "+e._s(e.__("total","Total"))+":\n                            ")]}},{key:"foot(payable)",fn:function(t){return[e._v("\n                                "+e._s(e._f("currency")(e.colSum(e.form.sales,"payable")))+"\n                            ")]}},{key:"foot(paid)",fn:function(t){return[e._v("\n                                "+e._s(e._f("currency")(e.colSum(e.form.sales,"paid")))+"\n                            ")]}},{key:"foot(balance)",fn:function(t){return[e._v("\n                                "+e._s(e._f("currency")(e.colSum(e.form.sales,"balance")))+"\n                            ")]}},{key:"foot(amount)",fn:function(t){return[e._v("\n                                "+e._s(e._f("currency")(e.colSum(e.form.sales,"amount")||0))+"\n                            ")]}}],null,!0)})],1)],1),e._v(" "),n("b-button",{attrs:{block:"",variant:"dark",type:"submit"}},[e._v("\n                    "+e._s(e.__("submit","SUBMIT"))+"\n                ")])],1)]}}])})],1)}),[],!1,null,"378fe8fa",null).exports,_=n(32),b=n(25),y=n(16);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=r()(),k={year:Number(x.format("YYYY")),month:Number(x.format("MM")),payment_method:"Cash",payment_amount:0,date:x.format("YYYY-MM-DD")},S={name:"EmployeeSalaries",props:{date:{type:String,required:!0}},components:{VueSelect:y.a},watch:{date:function(e){this.$refs.dt_table.refresh()}},data:function(){var e=this;return{dirty:!1,employee:null,employeeId:null,dt:b.a,monthOptions:_.b,payment_options:m.a,form:v({},k),fields:[{key:"id",sortable:!0,label:_t("id","ID")},{key:"name",sortable:!0,label:_t("employee","Employee")},{key:"payment_amount",sortable:!0,formatter:function(t){return e.$options.filters.currency(t)},label:_t("payment_amount","Payment Amount")},{key:"created_at",sortable:!0,label:_t("created_at","Created At"),formatter:function(t){return e.$options.filters.localTime(t)}}]}},methods:{colSum:o.c,resetForm:function(){this.$set(this,"form",v({},k)),this.employee=null,this.dirty&&(this.$refs.dt_table.refresh(),this.dirty=!1)},getItems:function(e){var t=this;return axios.post(route("Backend.Employees.Salaries.List",{page:e.currentPage}).url(),{date:this.date,per_page:e.perPage||10,orderBy:e.sortBy||"id",order:Object(o.j)(e.sortDesc)?"desc":"asc"}).then((function(e){return t.$set(t,"dt",e.data),e.data.data})).catch((function(e){return console.log(e.response),t.$set(t,"dt",{data:[],per_page:30,current_page:1}),[]}))},msgBox:o.k,handleSubmit:function(e){var t=this;axios.post(route("Backend.Employees.Salaries.Store",{employee:this.employeeId}).url(),this.form).then((function(n){e(),t.msgBox(n.data),t.dirty=!0})).catch((function(e){t.msgBox(e.response.data),console.log(e.response)}))}}},$=(n(99),Object(u.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",{staticClass:"my-2"},[n("b-col",[n("b-input-group",{attrs:{size:"sm",prepend:e.__("per_page","Per Page")}},[n("b-select",{attrs:{options:[5,10,20,30,50,80,100,150,500]},model:{value:e.dt.per_page,callback:function(t){e.$set(e.dt,"per_page",t)},expression:"dt.per_page"}})],1)],1),e._v(" "),n("b-col",{staticClass:"text-right"},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal:add-salary",arg:"add-salary"}],attrs:{size:"sm",variant:"dark"}},[n("i",{staticClass:"fa fa-plus"}),e._v("\n                "+e._s(e.__("add","Add"))+"\n            ")])],1)],1),e._v(" "),n("b-table",{ref:"dt_table",attrs:{small:"",bordered:"",hover:"",striped:"","head-variant":"dark","foot-clone":"","foot-variant":"light",items:e.getItems,fields:e.fields,"per-page":e.dt.per_page,"current-page":e.dt.current_page},scopedSlots:e._u([{key:"foot(payment_amount)",fn:function(t){return[e._v("\n            "+e._s(e._f("currency")(e.colSum(e.dt.data,"payment_amount")))+"\n        ")]}}])}),e._v(" "),n("b-modal",{attrs:{id:"add-salary","header-bg-variant":"dark","header-text-variant":"light","hide-footer":"",title:e.__("send_salary","Send Salary")},on:{hidden:e.resetForm},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.hide;return[n("b-form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(a)}}},[n("b-form-group",{attrs:{label:e.__("employee","Employee")}},[n("vue-select",{attrs:{required:!0,"init-options":!0,"tag-text":function(t){return t?[t.id,t.name].join(" # "):e.__("not_selected","Not Selected")},"option-text":function(e){return e?[e.id,e.name].join(" # "):""},api_url:e.route("Backend.Employees.Search").url()},on:{input:function(t){e.$set(e.form,"payment_amount",t.salary),e.employeeId=t.id}},model:{value:e.employee,callback:function(t){e.employee=t},expression:"employee"}})],1),e._v(" "),n("b-form-row",[n("b-col",{attrs:{sm:"12",md:"6"}},[n("b-form-group",{attrs:{label:e.__("year","Year")}},[n("b-form-select",{attrs:{required:!0,options:[2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030]},model:{value:e.form.year,callback:function(t){e.$set(e.form,"year",t)},expression:"form.year"}})],1)],1),e._v(" "),n("b-col",{attrs:{sm:"12",md:"6"}},[n("b-form-group",{attrs:{label:e.__("month","Month")}},[n("b-form-select",{attrs:{options:e.monthOptions},model:{value:e.form.month,callback:function(t){e.$set(e.form,"month",t)},expression:"form.month"}})],1)],1)],1),e._v(" "),n("b-form-row",[n("b-col",{attrs:{md:"6",sm:"12"}},[n("b-form-group",{attrs:{label:e.__("payment_amount","Payment Amount")}},[n("b-input",{attrs:{type:"number",step:"any",required:!0},model:{value:e.form.payment_amount,callback:function(t){e.$set(e.form,"payment_amount",t)},expression:"form.payment_amount"}})],1)],1),e._v(" "),n("b-col",{attrs:{md:"6",sm:"12"}},[n("b-form-group",{attrs:{label:e.__("payment_method","Payment Method")}},[n("b-select",{attrs:{required:!0,options:e.payment_options},model:{value:e.form.payment_method,callback:function(t){e.$set(e.form,"payment_method",t)},expression:"form.payment_method"}})],1)],1)],1),e._v(" "),n("b-form-group",{attrs:{label:e.__("date","Date")}},[n("b-input",{attrs:{type:"date",required:!0},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),n("b-button",{attrs:{block:"",variant:"dark",type:"submit"}},[e._v("\n                    "+e._s(e.__("submit","SUBMIT"))+"\n                ")])],1)]}}])})],1)}),[],!1,null,null,null).exports),C={components:{Expenses:c,TransactionCollectionByCustomer:d.a,DueSales:f,EmployeeSalaries:$},data:function(){return{date:r()(new Date).format("YYYY-MM-DD"),currentItem:null}},methods:{}},O=Object(u.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",[n("b-col",{attrs:{md:"8",sm:"12"}},[n("h4",[e._v("Party Ledger")])]),e._v(" "),n("b-col",{attrs:{md:"4",sm:"12"}},[n("b-input",{attrs:{type:"date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),e._v(" "),n("b-form-row",{staticClass:"mt-3"},[n("b-col",{attrs:{md:"6",sm:"12"}},[n("b-card",{staticClass:"h-100",attrs:{"header-bg-variant":"dark","header-text-variant":"light","header-class":"text-center","body-class":"p-0",header:e.__("all_outgoing_ledger","All Outgoing Ledger")}},[n("b-tabs",{attrs:{card:""}},[n("b-tab",{staticClass:"p-2",attrs:{title:e.__("expenses","Expenses"),lazy:""}},[n("expenses",{attrs:{date:e.date}})],1),e._v(" "),n("b-tab",{staticClass:"p-2",attrs:{title:e.__("exmployee_salaries","Employee Salaries"),lazy:""}},[n("employee-salaries",{attrs:{date:e.date}})],1),e._v(" "),n("b-tab",{attrs:{title:e.__("supplier_payments","Supplier Payments")}})],1)],1)],1),e._v(" "),n("b-col",{attrs:{md:"6",sm:"12"}},[n("b-card",{staticClass:"h-100",attrs:{"body-class":"p-0","header-bg-variant":"dark","header-text-variant":"light",header:e.__("customer_ledger","Customer Ledger")}},[n("b-tabs",{attrs:{card:""}},[n("b-tab",{staticClass:"p-0",attrs:{lazy:"",title:e.__("todays_collection","Today's Collection")}},[n("transaction-collection-by-customer",{attrs:{date:e.date}})],1),e._v(" "),n("b-tab",{staticClass:"p-0",attrs:{lazy:"",title:e.__("due_sales","Due Sales")}},[n("due-sales",{attrs:{date:e.date}})],1)],1)],1)],1)],1)],1)}),[],!1,null,"1cd34c51",null);t.default=O.exports},16:function(e,t,n){"use strict";var a=n(0),r={props:{value:{type:null|Object,default:function(){return null}},api_url:{type:String,default:null,required:!0},prepend:{type:String,default:""},append:{type:String,default:""},placeholder:{type:String,default:"Search Items"},size:{type:String,default:"sm"},autocomplete:{type:String,default:"off"},dropdownVariant:{type:String,default:"outline-secondary"},emptyOptionText:{type:String,default:"No items available to select"},inputClass:{type:String|Array,default:function(){return[]}},menuStyle:{type:String|Array,default:function(){return[]}},clearSearchOnItemSelected:{type:Boolean,default:!1},initOptions:{type:Boolean|String,default:!1},required:{type:Boolean,default:!1},state:{type:Boolean,default:null},hideDdIcon:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},menuClass:{type:String|Object,default:function(){return""}},getFiltered:{type:Function},clearSearchOnDropdownHidden:{type:Boolean,default:function(){return!0}},optionText:{type:Function},tagText:{Type:Function}},data:function(){return{options:[],query:"",selected_item:null}},mounted:function(){this.initOptions&&(Object(a.a)(this.initOptions)&&this.initOptions?this.getItems(""):this.query=this.initOptions),this.$set(this,"selected_item",this.value)},computed:{getOptions:function(){return"function"==typeof this.getFiltered&&this.getFiltered?this.getFiltered(this.options):this.options}},watch:{value:{deep:!0,handler:function(e){this.$set(this,"selected_item",e)}}},methods:{reset:function(){this.$emit("input",null),this.$set(this,"selected_item",null),this.query=""},itemSelected:function(e){this.$emit("input",e),this.$set(this,"selected_item",e),this.clearSearchOnItemSelected&&(this.query=null)},getItems:function(e){var t=this;axios.post(this.api_url,{query:this.query}).then((function(e){t.$set(t,"options",e.data||[])})).catch((function(e){t.$set(t,"options",[]),console.error(e.response)}))}}},o=(n(93),n(1)),s=Object(o.a)(r,(function(){var e=this,t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"vue-select form-control p-0",class:{"is-invalid":null!==t.state&&t.state,"is-valid":null!==t.state&&!t.state}},[t.required?a("input",{staticStyle:{height:"0",position:"absolute",top:"0",border:"0",outline:"0","z-index":"-1"},attrs:{type:"text",required:!0},domProps:{value:t.value?"initialized":""}}):t._e(),t._v(" "),a("b-dropdown",{class:{"hide-dd-icon":t.hideDdIcon,disabled:t.disabled},style:t.menuStyle,attrs:{block:"",lazy:"",variant:t.dropdownVariant,disabled:t.disabled,"toggle-class":"text-left m-0 border-0 border-radius-0","menu-class":t.menuClass},on:{hidden:function(){t.$emit("hidden",!0),e.clearSearchOnDropdownHidden&&(e.query="")}},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._t("tag",[t._v("\n                "+t._s("function"==typeof t.tagText?t.tagText(t.selected_item):(t.selected_item,t.placeholder))+"\n            ")],{tag:t.selected_item})]},proxy:!0}],null,!0)},[t._v(" "),a("div",{staticClass:"px-2"},[a("b-form-input",{class:t.inputClass,attrs:{autofocus:"",type:"search",size:t.size,placeholder:t.placeholder,autocomplete:t.autocomplete},on:{keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},input:function(e){return t.getItems(e)}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1),t._v(" "),a("b-dropdown-divider"),t._v(" "),t._l(t.getOptions,(function(e,n){return a("b-dropdown-item",{key:n,on:{click:function(n){return t.itemSelected(e)}}},[t._t("option",[t._v("\n                "+t._s("function"==typeof t.optionText?t.optionText(e):e)+"\n            ")],{item:e,query:t.query})],2)})),t._v(" "),0===t.options.length?[t._t("empty",[0===t.options.length?a("b-dropdown-text",[t._v("\n                    "+t._s(t.emptyOptionText)+"\n                ")]):t._e()],{query:t.query})]:t._e(),t._v(" "),t._t("default_item",null,{query:t.query})],2)],1)}),[],!1,null,null,null);t.a=s.exports},17:function(e,t,n){"use strict";t.a=[{text:_t("bank","Bank"),value:"Bank"},{text:_t("cash","Cash"),value:"Cash"},{text:_t("card","Card"),value:"Card"},{text:_t("bkash","bKash"),value:"bKash"},{text:_t("rocket","Rocket"),value:"Rocket"}]},25:function(e,t,n){"use strict";t.a={sortBy:"id",sortDesc:!0,per_page:30,current_page:1,total:0,from:0,to:0,data:[]}},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var a=[{text:_t("january","January"),value:1},{text:_t("february","February"),value:2},{text:_t("march","March"),value:3},{text:_t("april","April"),value:4},{text:_t("may","May"),value:5},{text:_t("june","June"),value:6},{text:_t("july","July"),value:7},{text:_t("august","August"),value:8},{text:_t("september","September"),value:9},{text:_t("october","October"),value:10},{text:_t("november","November"),value:11},{text:_t("december","December"),value:12}];t.a=[_t("january","January"),_t("february","February"),_t("march","March"),_t("april","April"),_t("may","May"),_t("june","June"),_t("july","July"),_t("august","August"),_t("september","September"),_t("october","October"),_t("november","November"),_t("december","December")]},46:function(e,t,n){var a=n(18),r=n(94);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);e.exports=r.locals||{}},50:function(e,t,n){var a=n(18),r=n(100);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);e.exports=r.locals||{}},61:function(e,t,n){"use strict";var a=n(7),r=n(2),o={name:"TransactionCollectionByCustomer",props:{date:String,required:!0},components:{DtFooter:a.a},watch:{date:{handler:function(){this.$refs.transactionCollectionsByCustomer.refresh()}}},data:function(){return{customer_collections:{data:[]},customer_collection_fields:[{key:"id",label:_t("id","ID")},{key:"name",label:_t("customer","Customer")},{key:"total_amount",label:_t("amount","Amount")}]}},methods:{colCount:r.b,colSum:r.c,transactionCollectionsByCustomer:function(){var e=this;return axios.post(route("Backend.Transactions.Collections.By.Customers",{page:1}).url(),{date:this.date}).then((function(t){return e.$set(e,"customer_collections",t.data),t.data.data})).catch((function(t){return e.$set(e,"customer_collections",{data:[]}),console.log(t.response),[]}))}}},s=n(1),i=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-card",{attrs:{"body-class":"p-0"},scopedSlots:e._u([{key:"footer",fn:function(){return[n("dt-footer",{attrs:{datatable:e.customer_collections}})]},proxy:!0}])},[n("b-table",{ref:"transactionCollectionsByCustomer",staticClass:"mb-0",attrs:{"head-variant":"dark",small:"",bordered:"",striped:"","foot-clone":"","foot-variant":"light",fields:e.customer_collection_fields,items:e.transactionCollectionsByCustomer},scopedSlots:e._u([{key:"cell(total_amount)",fn:function(t){return[e._v("\n                "+e._s(e._f("currency")(t.item.total_amount))+"\n            ")]}},{key:"foot(id)",fn:function(t){return[e._v("  ")]}},{key:"foot(name)",fn:function(t){return[e._v("\n                "+e._s(e.__("total","Total"))+"\n            ")]}},{key:"foot(total_amount)",fn:function(t){return[e._v("\n                "+e._s(e._f("currency")(e.colSum(e.customer_collections.data,"total_amount")))+"\n            ")]}}])})],1)],1)}),[],!1,null,"3ebaaf6c",null);t.a=i.exports},7:function(e,t,n){"use strict";var a={props:{datatable:Object}},r=n(1),o=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[e.datatable.to?[e._v("\n            Showing "+e._s(e.datatable.from||0)+" to "+e._s(e.datatable.to||0)+" = "+e._s(e.datatable.to-e.datatable.from+e.datatable.from)+" items of\n            "+e._s(e.datatable.total)+" items.\n        ")]:[e._v("No Items Found")]],2),e._v(" "),n("div",{staticClass:"col"},[n("b-pagination",{staticClass:"mb-0",attrs:{align:"right",size:"sm","total-rows":e.datatable.total,"per-page":e.datatable.per_page,"aria-controls":"datatable"},on:{change:function(t){return e.$emit("refreshDatatable",t)}},model:{value:e.datatable.current_page,callback:function(t){e.$set(e.datatable,"current_page",t)},expression:"datatable.current_page"}})],1)])}),[],!1,null,"5eedc22a",null);t.a=o.exports},85:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(16),o={mixins:[a.a],components:{VueSelect:r.a},props:{submit_url:{type:String,default:function(){return route("Backend.Expenses.Store").url()}},routerBackOnClose:{type:Boolean,default:function(){return!0}},isVisible:{type:Boolean,default:function(){return!0}},size:{type:String,default:function(){return"lg"}}},created:function(){this.$set(this,"visible",this.isVisible)},watch:{isVisible:{handler:function(e){this.$set(this,"visible",e)}}}},s=n(1),i=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{size:e.size,"header-bg-variant":"dark","header-text-variant":"light","body-class":"p-2","footer-class":"p-2",title:e.__((e.form.id?"edit":"add")+"_expense",(e.form.id?"Edit ":"Add ")+"Expense"),lazy:""},on:{hidden:function(){e.routerBackOnClose&&e.$router.go(-1),e.$emit("reset",!0),e.form={}}},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.cancel;return[n("b-button",{ref:"submitBtn",attrs:{variant:"primary"},on:{click:e.onSubmit}},[e._v("\n            "+e._s(e.__("submit","SUBMIT"))+"\n        ")]),e._v(" "),n("b-button",{on:{click:function(e){return a()}}},[e._v("\n            "+e._s(e.__("cancel","CANCEL"))+"\n        ")])]}}]),model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("form",{ref:"theForm",on:{submit:function(t){return t.preventDefault(),e.hitSubmit(t)}}},[n("b-form-group",{attrs:{label:e.__("expense_category","Expense Category")}},[n("b-input-group",{scopedSlots:e._u([{key:"append",fn:function(){return[n("b-button",{on:{click:function(t){e.form.expense_category_id=null,e.form.expense_category=null}}},[e._v("x")])]},proxy:!0}])},[n("vue-select",{attrs:{"init-options":!0,required:!0,api_url:e.route("Backend.Expenses.Categories.Search").url()},on:{input:function(t){return e.form.expense_category_id=t?t.id:null}},scopedSlots:e._u([{key:"option",fn:function(t){return[e._v("\n                        "+e._s([t.item.id,t.item.name].join(" # "))+"\n                    ")]}},{key:"tag",fn:function(t){return[e._v("\n                        "+e._s(t.tag?[t.tag.id,t.tag.name].join(" # "):e.__("not_selected","Not Selected"))+"\n                    ")]}}]),model:{value:e.form.expense_category,callback:function(t){e.$set(e.form,"expense_category",t)},expression:"form.expense_category"}})],1)],1),e._v(" "),n("b-form-group",{attrs:{label:e.__("amount","Amount")+" *"}},[n("b-input",{attrs:{type:"number",step:"any",placeholder:e.__("expense_amount","Expense Amount"),required:!0},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1),e._v(" "),n("b-form-group",{attrs:{label:e.__("reference","Reference")}},[n("b-input",{attrs:{type:"text",placeholder:e.__("expense_reference","Expense Reference")},model:{value:e.form.reference,callback:function(t){e.$set(e.form,"reference",t)},expression:"form.reference"}})],1),e._v(" "),n("b-form-group",{attrs:{label:e.__("description","Description")}},[n("b-form-textarea",{attrs:{placeholder:e.__("description","Description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)])}),[],!1,null,null,null);t.default=i.exports},93:function(e,t,n){"use strict";var a=n(46);n.n(a).a},94:function(e,t,n){(t=n(19)(!1)).push([e.i,".vue-select .dropdown-menu {\n  max-height: 300px;\n  overflow-y: auto;\n  width: 100%;\n}\n.vue-select .dropdown-toggle::after {\n  position: absolute;\n  right: 10px;\n  top: 49%;\n}\n.vue-select .border-radius-0 {\n  border-radius: 0 !important;\n}\n.vue-select .top-reverse-100 {\n  top: -100% !important;\n}\n.vue-select .hide-dd-icon .dropdown-toggle::after {\n  display: none !important;\n}\n.vue-select.is-invalid, .vue-select.is-valid {\n  background-position: right calc(1.4em + 0.1875rem) center !important;\n}",""]),e.exports=t},99:function(e,t,n){"use strict";var a=n(50);n.n(a).a}}]);