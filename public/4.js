(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(t,e,a){"use strict";a.r(e);var r=a(8),n=a(7),s=a(1),o=a(9),l=a(11),i=a.n(l),u=a(14),c=a(29),d={props:{employeeId:{type:Number,required:!0},paymentOptions:{type:Array,default:function(){return u.a}},salary:{type:Number,default:0}},data:function(){return{monthOptions:c.b,form:{payment_amount:0,payment_method:"Cash",month:i()().format("M"),year:i()().format("YYYY"),date:i()().format("YYYY-MM-DD")}}},mounted:function(){this.$set(this.form,"payment_amount",this.salary)},methods:{msgBox:s.l,rangeIndexed:s.r,handleSubmit:function(){var t=this;axios.post(route("Backend.Employees.Salaries.Store",{employee:this.employeeId}).url(),this.form).then((function(e){t.$emit("message",e.data),t.$emit("success",!0),t.$emit("refresh",!0)})).catch((function(e){t.$emit("success",!1),t.$emit("message",e.response.data),console.log(e.response)}))}}},m=a(2),_=Object(m.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("b-form-row",[a("b-col",{attrs:{sm:"12",md:"6"}},[a("b-form-group",{attrs:{label:t.__("year","Year")}},[a("b-form-select",{attrs:{required:!0,options:t.rangeIndexed(2015,2030)},model:{value:t.form.year,callback:function(e){t.$set(t.form,"year",e)},expression:"form.year"}})],1)],1),t._v(" "),a("b-col",{attrs:{sm:"12",md:"6"}},[a("b-form-group",{attrs:{label:t.__("month","Month")}},[a("b-form-select",{attrs:{options:t.monthOptions},model:{value:t.form.month,callback:function(e){t.$set(t.form,"month",e)},expression:"form.month"}})],1)],1)],1),t._v(" "),a("b-form-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:t.__("payment_amount","Payment Amount")}},[a("b-input",{attrs:{type:"number",step:"any",required:!0},model:{value:t.form.payment_amount,callback:function(e){t.$set(t.form,"payment_amount",e)},expression:"form.payment_amount"}})],1)],1),t._v(" "),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:t.__("payment_method","Payment Method")}},[a("b-select",{attrs:{required:!0,options:t.paymentOptions},model:{value:t.form.payment_method,callback:function(e){t.$set(t.form,"payment_method",e)},expression:"form.payment_method"}})],1)],1)],1),t._v(" "),a("b-form-group",{attrs:{label:t.__("date","Date")}},[a("b-input",{attrs:{type:"date",required:!0},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),t._v(" "),a("b-button",{attrs:{block:"",variant:"dark",type:"submit"}},[t._v("\n        "+t._s(t.__("submit","SUBMIT"))+"\n    ")])],1)}),[],!1,null,null,null).exports,p={name:"EmployeePaidSalariesList",props:{employee:{type:Object,required:!0}},mounted:function(){this.paid_salary=this.employee.paid_salary},data:function(){var t=this;return{paid_salary:0,year:(new Date).getFullYear(),fields:[{key:"id",sortable:!0,label:_t("id","ID")},{key:"year",sortable:!0,label:_t("year","Year")},{key:"month",sortable:!0,label:_t("month","Month"),formatter:function(t){return c.a[t-1]}},{key:"payment_amount",sortable:!0,formatter:function(e){return t.$options.filters.currency(e)},label:_t("payment_amount","Payment Amount")},{key:"payment_method",sortable:!0,label:_t("payment_method","Payment Method")},{key:"created_at",sortable:!0,label:_t("created_at","Created At"),formatter:function(e){return t.dayjs(e)}},{key:"updated_at",sortable:!0,label:_t("updated_at","Updated At"),formatter:function(e){return t.dayjs(e)}},{key:"action",sortable:!1,label:_t("action","Action"),searchable:!1,thClass:"text-right",tdClass:"text-right"}],datatable:{},api_url:route("Backend.Employees.Paid.Salaries",{employee:this.employee.id}).url()}},methods:{rangeIndexed:s.r,getItems:function(t){var e=this;return axios.post(this.api_url+"?page="+(t.currentPage?t.currentPage:1),{per_page:15,orderBy:t.sortBy||"id",order:Object(s.k)(t.sortDesc)?"asc":"desc",filter:t.filter,year:this.year}).then((function(t){return e.datatable.total=t.data.total,e.datatable.from=t.data.from,e.datatable.to=t.data.to,e.datatable.current_page=t.data.current_page,t.data.data})).catch((function(t){return console.log(t.response),[]}))},trash:function(t,e){var a=this;this.$bvModal.msgBoxConfirm(this.__("are_you_sure","Are you sure?"),{okTitle:this.__("ok","Ok"),cancelTitle:this.__("cancel","Cancel")}).then((function(r){r&&axios.post(route("Backend.Employees.Salaries.Delete").url(),{id:t}).then((function(t){a.paid_salary=Number(a.paid_salary)-Number(e),a.$root.msgBox(t.data),a.$refs.the_table.refresh(),a.$emit("refresh",!0)})).catch((function(t){a.$root.msgBox(t.response.data),console.log(t.response)}))})).catch((function(t){console.log(t)}))}}},b=(a(95),Object(m.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-md-6 col-sm-12"},[a("h4",[t._v(t._s(t.__("total_paid","Total Paid"))+": "+t._s(t._f("currency")(t.paid_salary)))])]),t._v(" "),a("div",{staticClass:"col-md-6 col-sm-12"},[a("b-select",{attrs:{options:t.rangeIndexed(2010,2030,1)},on:{change:function(e){return t.$refs.the_table.refresh()}},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1)]),t._v(" "),a("b-table",{ref:"the_table",staticClass:"mb-0",attrs:{variant:"primary",responsive:"md",hover:"",bordered:"",small:"",striped:"","head-variant":"dark",items:t.getItems,fields:t.fields},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[a("b-button",{attrs:{size:"sm",title:t.__("delete","Delete")},on:{click:function(a){return t.trash(e.item.id,e.item.payment_amount)}}},[a("i",{staticClass:"fa fa-trash"}),t._v(" "+t._s(t.__("delete","Delete"))+"\n            ")])]}}])})],1)}),[],!1,null,null,null).exports),f={name:"EmployeeList",components:{DtHeader:r.a,DtFooter:n.a,DtTable:o.a,AddSalary:_,ListPaidSalaries:b},mixins:[s.f],props:{title:{type:String,default:_t("employees","Employees")},api_url:{type:String,default:function(){return route("Backend.Employees.List").url()}},trash_url:{type:String,default:function(){return route("Backend.Employees.Delete").url()}},submit_url:{type:String,default:function(){return route("Backend.Employees.Store").url()}},custom_buttons:{type:Array,default:function(){return[{text:_t("add","Add"),variant:"dark",to:{name:"EmployeesAdd"}},{text:_t("history","History"),variant:"primary",to:{name:"ModelHistory",params:{model:"employees"}}}]}}},methods:{colSum:s.d},data:function(){var t=this;return{form:{},fields:[{key:"id",sortable:!0,label:_t("id","ID")},{key:"name",sortable:!0,label:_t("name","Name")},{key:"position",sortable:!0,label:_t("position","Position")},{key:"salary",sortable:!0,label:_t("salary","Salary"),formatter:function(e){return t.$options.filters.currency(e)}},{key:"paid_salary",sortable:!0,searchable:!1,label:_t("paid_salary","Paid Salary"),formatter:function(e){return t.$options.filters.currency(e)}},{key:"email",sortable:!0,label:_t("email","Email")},{key:"phone",sortable:!0,label:_t("phone","Phone")},{key:"company",sortable:!0,label:_t("company","Company")},{key:"district",sortable:!0,label:_t("district","District")},{key:"thana",sortable:!0,label:_t("thana","Thana")},{key:"post_office",sortable:!0,label:_t("post_office","P.O.")},{key:"village",sortable:!0,label:_t("village","Village")},{key:"is_active",sortable:!0,formatter:function(t){return Number(t)?_t("active","Active"):_t("inactive","Inactive")},label:_t("is_active","Is Active")},{key:"joining_date",sortable:!0,label:_t("joining_date","Joining Date"),formatter:function(e){return t.dayjs(e,"DD-MM-YYYY")}},{key:"leaving_date",sortable:!0,label:_t("leaving_date","Leaving Date"),formatter:function(e){return e?t.dayjs(e,"DD-MM-YYYY"):""}},{key:"created_at",sortable:!0,label:_t("created_at","Created At"),formatter:function(e){return t.dayjs(e)}},{key:"updated_at",sortable:!0,label:_t("updated_at","Updated At"),formatter:function(e){return t.dayjs(e)}},{key:"action",sortable:!1,label:_t("action","Action"),searchable:!1,thClass:"text-right",tdClass:"text-right"}]}}},y=(a(97),Object(m.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{staticClass:"mb-3"},[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-card",{attrs:{title:t.__("total_employees","Total Employees")}},[t._v("\n                "+t._s(t._f("localNumber")(t.overview.total_employees))+"\n            ")])],1),t._v(" "),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-card",{attrs:{title:t.__("paid_salary","Paid Salary")}},[t._v("\n                "+t._s(t._f("currency")(t.overview.paid_salary))+"\n            ")])],1)],1),t._v(" "),a("dt-table",{attrs:{title:t.title,fields:t.fields,datatable:t.datatable,custom_buttons:t.custom_buttons,"enable-date-range":""},on:{refreshDatatable:function(e){return t.$refs.datatable.refresh()}},scopedSlots:t._u([{key:"table",fn:function(){return[a("b-table",{ref:"datatable",staticClass:"mb-0",attrs:{variant:"primary",responsive:"md",hover:"",bordered:"",small:"",striped:"","head-variant":"dark",items:t.getItems,fields:t.fields,"sort-by":t.datatable.sortBy,"sort-desc":t.datatable.sortDesc,filter:t.search,"per-page":t.datatable.per_page,"current-page":t.datatable.current_page,"foot-clone":"","foot-variant":"light"},on:{refreshed:function(e){t.overview=JSON.parse(t.headers.overview)},"update:sortBy":function(e){return t.$set(t.datatable,"sortBy",e)},"update:sort-by":function(e){return t.$set(t.datatable,"sortBy",e)},"update:sortDesc":function(e){return t.$set(t.datatable,"sortDesc",e)},"update:sort-desc":function(e){return t.$set(t.datatable,"sortDesc",e)}},scopedSlots:t._u([{key:"foot(salary)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"salary")))+"\n                ")]}},{key:"foot(paid_salary)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"paid_salary")))+"\n                ")]}},{key:"cell(action)",fn:function(e){return[a("b-button-group",{attrs:{size:"sm"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal:add_salary_modal",arg:"add_salary_modal"}],attrs:{variant:"dark",title:t.__("send_salary","Send Salary")},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-money-bill-wave"})]),t._v(" "),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal:list_paid_salaries",arg:"list_paid_salaries"}],attrs:{variant:"primary",title:t.__("paid_salaries","Paid Salaries")},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-money-check"})]),t._v(" "),a("b-button",{attrs:{variant:"dark",title:t.__("view","View"),to:{name:"EmployeesView",params:{id:e.item.id}}},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-eye"})]),t._v(" "),a("b-dropdown",{attrs:{right:"",size:"sm"}},[a("b-dropdown-item",{attrs:{title:t.__("edit","Edit"),to:{name:"EmployeesAdd",params:{id:e.item.id}}},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-edit"}),t._v(" "+t._s(t.__("edit_employee","Edit Employee"))+"\n                            ")]),t._v(" "),a("b-dropdown-item",{attrs:{title:t.__("delete","Delete")},on:{click:function(a){return t.trash(e.item.id)}}},[a("i",{staticClass:"fa fa-trash"}),t._v(" "+t._s(t.__("delete_employee","Delete Employee"))+"\n                            ")])],1)],1)]}}])})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),a("router-view",{attrs:{item:t.currentItem},on:{reset:function(e){t.currentItem={}},refreshDatatable:function(){return t.$refs.datatable.refresh()}}}),t._v(" "),t.currentItem?a("b-modal",{attrs:{id:"add_salary_modal",lazy:"","hide-footer":"",title:t.__("send_salary","Send Salary"),"header-bg-variant":"dark","header-text-variant":"light"},on:{hidden:function(e){t.currentItem=null}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hide;return[t.currentItem&&t.currentItem.id?a("add-salary",{attrs:{salary:t.currentItem.salary,"employee-id":t.currentItem.id},on:{message:function(e){return t.msgBox(e)},success:function(e){e&&r(),t.currentItem=null},refresh:function(e){return t.$refs.datatable.refresh()}}}):t._e()]}}],null,!1,2378928761)}):t._e(),t._v(" "),a("b-modal",{attrs:{id:"list_paid_salaries",lazy:"",size:"xl","hide-footer":"",title:t.__("paid_salaries","Paid Salaries"),"header-bg-variant":"dark","header-text-variant":"light"},on:{hidden:function(e){t.currentItem=null},message:function(e){return t.msgBox(e)}},scopedSlots:t._u([{key:"default",fn:function(e){e.hide;return[t.currentItem?a("list-paid-salaries",{attrs:{employee:t.currentItem},on:{refresh:function(e){return t.$refs.datatable.refresh()}}}):t._e()]}}])})],1)}),[],!1,null,null,null));e.default=y.exports},14:function(t,e,a){"use strict";e.a=[{text:_t("bank","Bank"),value:"Bank"},{text:_t("cash","Cash"),value:"Cash"},{text:_t("card","Card"),value:"Card"},{text:_t("bkash","bKash"),value:"bKash"},{text:_t("rocket","Rocket"),value:"Rocket"}]},29:function(t,e,a){"use strict";a.d(e,"b",(function(){return r}));var r=[{text:_t("january","January"),value:1},{text:_t("february","February"),value:2},{text:_t("march","March"),value:3},{text:_t("april","April"),value:4},{text:_t("may","May"),value:5},{text:_t("june","June"),value:6},{text:_t("july","July"),value:7},{text:_t("august","August"),value:8},{text:_t("september","September"),value:9},{text:_t("october","October"),value:10},{text:_t("november","November"),value:11},{text:_t("december","December"),value:12}];e.a=[_t("january","January"),_t("february","February"),_t("march","March"),_t("april","April"),_t("may","May"),_t("june","June"),_t("july","July"),_t("august","August"),_t("september","September"),_t("october","October"),_t("november","November"),_t("december","December")]},34:function(t,e,a){var r=a(18),n=a(72);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var s={insert:"head",singleton:!1};r(n,s);t.exports=n.locals||{}},47:function(t,e,a){var r=a(18),n=a(96);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var s={insert:"head",singleton:!1};r(n,s);t.exports=n.locals||{}},48:function(t,e,a){var r=a(18),n=a(98);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var s={insert:"head",singleton:!1};r(n,s);t.exports=n.locals||{}},7:function(t,e,a){"use strict";var r={props:{datatable:Object}},n=a(2),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.datatable.to?[t._v("\n            Showing "+t._s(t.datatable.from||0)+" to "+t._s(t.datatable.to||0)+" = "+t._s(t.datatable.to-t.datatable.from+t.datatable.from)+" items of\n            "+t._s(t.datatable.total)+" items.\n        ")]:[t._v("No Items Found")]],2),t._v(" "),a("div",{staticClass:"col"},[a("b-pagination",{staticClass:"mb-0",attrs:{align:"right",size:"sm","total-rows":t.datatable.total,"per-page":t.datatable.per_page,"aria-controls":"datatable"},on:{change:function(e){return t.$emit("refreshDatatable",e)}},model:{value:t.datatable.current_page,callback:function(e){t.$set(t.datatable,"current_page",e)},expression:"datatable.current_page"}})],1)])}),[],!1,null,"5eedc22a",null);e.a=s.exports},71:function(t,e,a){"use strict";var r=a(34);a.n(r).a},72:function(t,e,a){(e=a(19)(!1)).push([t.i,".columns-dropdown .dropdown-menu {\n  padding: 0 !important;\n  border: 0 !important;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.columns-dropdown .list-group-item label {\n  cursor: pointer;\n}",""]),t.exports=e},8:function(t,e,a){"use strict";var r=a(1),n={props:{fields:{type:Array,default:function(){return[]}},datatable:Object,value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}},columnDdSize:{type:String,default:"sm"},customButtonSize:{type:String,default:"sm"},searchSize:{type:String,default:"sm"},perPageSize:{type:String,default:"sm"},enableDateRange:{type:Boolean,default:!1},noSearch:{type:Boolean,default:!1}},data:function(){return{search:"",the:void 0}},mounted:function(){this.datatable.per_page=this.getPerPage()},watch:{"datatable.search_columns":{deep:!0,handler:function(t,e){this.$emit("refreshDatatable",!0)}}},methods:{changeVisibility:r.b,startCase:r.v,range:r.q,setPerPage:r.t,getPerPage:r.h}},s=(a(71),a(2)),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{"min-width":"150px","max-width":"200px"}},[a("b-input-group",{attrs:{size:t.perPageSize,prepend:t.__("per_page","Per Page")}},[a("b-form-select",{staticClass:"form-control",attrs:{options:t.range()},on:{change:function(e){return t.setPerPage(e)}},model:{value:t.datatable.per_page,callback:function(e){t.$set(t.datatable,"per_page",e)},expression:"datatable.per_page"}})],1)],1),t._v(" "),t.noSearch?t._e():a("div",{staticClass:"col",staticStyle:{"min-width":"150px"}},[a("b-form-input",{attrs:{type:"search",size:t.searchSize,placeholder:t.__("type_and_hit_enter_to_search_the_table","Type and Hit Enter to Search the table, ESC to clear")},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:(e.target.value="",void t.$emit("input",""))},change:function(e){t.datatable.current_page=1},input:function(e){return t.$emit("input",t.search)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),t.enableDateRange?a("div",{staticClass:"col"},[a("b-input-group",{attrs:{size:t.searchSize},scopedSlots:t._u([{key:"append",fn:function(){return[a("b-button",{on:{click:function(){t.$set(t.datatable.search_columns,"starting_date",void 0),t.$set(t.datatable.search_columns,"ending_date",void 0),t.$emit("refreshDatatable")}}},[t._v("\n                        x\n                    ")])]},proxy:!0}],null,!1,2283915669)},[a("b-form-input",{attrs:{type:"date",title:t.__("starting_date","Starting Date")},on:{change:function(e){return t.$emit("refreshDatatable")}},model:{value:t.datatable.search_columns.starting_date,callback:function(e){t.$set(t.datatable.search_columns,"starting_date",e)},expression:"datatable.search_columns.starting_date"}}),t._v(" "),a("b-form-input",{attrs:{type:"date",disabled:!t.datatable.search_columns.starting_date,min:t.datatable.search_columns.starting_date,title:t.__("ending_date","Ending Date")},on:{change:function(e){return t.$emit("refreshDatatable")}},model:{value:t.datatable.search_columns.ending_date,callback:function(e){t.$set(t.datatable.search_columns,"ending_date",e)},expression:"datatable.search_columns.ending_date"}})],1)],1):t._e(),t._v(" "),a("div",{staticClass:"col text-right"},[t._t("header_searches"),t._v(" "),t.custom_buttons&&t.custom_buttons.length?a("b-button-group",{attrs:{v0i:"",size:t.customButtonSize}},[t._l(t.custom_buttons,(function(e,r){return[e.to?a("b-button",{key:r,attrs:{title:e.title,variant:e.variant?e.variant:"dark",to:e.to,exact:"","exact-active-class":"active"}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                    ")]):e.cb?a("b-button",{key:r,attrs:{title:e.title,variant:e.variant?e.variant:"dark",exact:"","exact-active-class":"active"},on:{click:e.cb}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                    ")]):a("b-button",{key:r,attrs:{title:e.title,variant:e.variant?e.variant:"dark"},on:{click:e.method}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                    ")])]}))],2):t._e(),t._v(" "),a("b-dropdown",{staticClass:"columns-dropdown p-0",attrs:{text:t.__("columns","Columns"),size:t.columnDdSize,right:"",variant:"primary"}},[a("ul",{staticClass:"list-group"},t._l(t.fields,(function(e,r){return a("li",{key:r,staticClass:"list-group-item"},[a("b-form-checkbox",{attrs:{value:!0,"uncheched-value":!1},on:{change:function(a){return t.changeVisibility(e,r)}},model:{value:e.visible,callback:function(a){t.$set(e,"visible",a)},expression:"field.visible"}},[t._v("\n                            "+t._s(t.startCase(e.label||e.key))+"\n                        ")])],1)})),0)])],2)]),t._v(" "),t._t("bottom_panel")],2)}),[],!1,null,null,null);e.a=o.exports},9:function(t,e,a){"use strict";var r=a(8),n=a(7),s={components:{DtHeader:r.a,DtFooter:n.a},props:{title:{type:String,default:""},fields:{type:Array,default:function(){return[]}},datatable:{type:Object,default:function(){return{per_page:10,current_page:1,total:0,from:0,to:0}}},value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}},columnDdSize:{type:String,default:"sm"},enableDateRange:{type:Boolean,default:!1},tableRef:{type:String,default:"datatable"},noSearch:{type:Boolean,default:!1}}},o=a(2),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{title:t.title,"footer-class":"pb-0","body-class":"p-1"},scopedSlots:t._u([{key:"header",fn:function(){return[a("dt-header",{attrs:{"enable-date-range":t.enableDateRange,custom_buttons:t.custom_buttons,datatable:t.datatable,"no-search":t.noSearch,fields:t.fields,value:t.value,"column-dd-size":t.columnDdSize},on:{refreshDatatable:function(e){return t.$emit("refreshDatatable",e)},input:function(e){return t.$emit("input",e)}},scopedSlots:t._u([{key:"header_searches",fn:function(){return[t._t("header_dropdowns")]},proxy:!0},{key:"bottom_panel",fn:function(){return[t._t("header_bottom_panel")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"footer",fn:function(){return[a("dt-footer",{attrs:{datatable:t.datatable}})]},proxy:!0}])},[t._v(" "),t._t("table")],2)}),[],!1,null,null,null);e.a=l.exports},95:function(t,e,a){"use strict";var r=a(47);a.n(r).a},96:function(t,e,a){(e=a(19)(!1)).push([t.i,"table th {\n  vertical-align: top !important;\n}",""]),t.exports=e},97:function(t,e,a){"use strict";var r=a(48);a.n(r).a},98:function(t,e,a){(e=a(19)(!1)).push([t.i,"table th {\n  vertical-align: top !important;\n}",""]),t.exports=e}}]);