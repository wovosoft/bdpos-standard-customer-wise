(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{10:function(t,e,a){"use strict";var n=a(9),r=a(7),o={components:{DtHeader:n.a,DtFooter:r.a},props:{title:{type:String,default:""},fields:{type:Array,default:function(){return[]}},datatable:{type:Object,default:function(){return{per_page:10,current_page:1,total:0,from:0,to:0}}},value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}},columnDdSize:{type:String,default:"sm"},enableDateRange:{type:Boolean,default:!1},tableRef:{type:String,default:"datatable"},noSearch:{type:Boolean,default:!1}}},i=a(1),s=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{title:t.title,"footer-class":"pb-0","body-class":"p-1"},scopedSlots:t._u([{key:"header",fn:function(){return[a("dt-header",{attrs:{"enable-date-range":t.enableDateRange,custom_buttons:t.custom_buttons,datatable:t.datatable,"no-search":t.noSearch,fields:t.fields,value:t.value,"column-dd-size":t.columnDdSize},on:{refreshDatatable:function(e){return t.$emit("refreshDatatable",e)},input:function(e){return t.$emit("input",e)}},scopedSlots:t._u([{key:"header_searches",fn:function(){return[t._t("header_dropdowns")]},proxy:!0},{key:"bottom_panel",fn:function(){return[t._t("header_bottom_panel")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"footer",fn:function(){return[a("dt-footer",{attrs:{datatable:t.datatable}})]},proxy:!0}])},[t._v(" "),t._t("table")],2)}),[],!1,null,null,null);e.a=s.exports},119:function(t,e,a){"use strict";var n=a(60);a.n(n).a},120:function(t,e,a){(e=a(19)(!1)).push([t.i,".dd-search .dropdown-menu {\n  min-width: 300px;\n}",""]),t.exports=e},16:function(t,e,a){"use strict";var n=a(0),r={props:{value:{type:null|Object,default:function(){return null}},api_url:{type:String,default:null,required:!0},prepend:{type:String,default:""},append:{type:String,default:""},placeholder:{type:String,default:"Search Items"},size:{type:String,default:"sm"},autocomplete:{type:String,default:"off"},dropdownVariant:{type:String,default:"outline-secondary"},emptyOptionText:{type:String,default:"No items available to select"},inputClass:{type:String|Array,default:function(){return[]}},menuStyle:{type:String|Array,default:function(){return[]}},clearSearchOnItemSelected:{type:Boolean,default:!1},initOptions:{type:Boolean|String,default:!1},required:{type:Boolean,default:!1},state:{type:Boolean,default:null},hideDdIcon:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},menuClass:{type:String|Object,default:function(){return""}},getFiltered:{type:Function},clearSearchOnDropdownHidden:{type:Boolean,default:function(){return!0}},optionText:{type:Function},tagText:{Type:Function}},data:function(){return{options:[],query:"",selected_item:null}},mounted:function(){this.initOptions&&(Object(n.a)(this.initOptions)&&this.initOptions?this.getItems(""):this.query=this.initOptions),this.$set(this,"selected_item",this.value)},computed:{getOptions:function(){return"function"==typeof this.getFiltered&&this.getFiltered?this.getFiltered(this.options):this.options}},watch:{value:{deep:!0,handler:function(t){this.$set(this,"selected_item",t)}}},methods:{reset:function(){this.$emit("input",null),this.$set(this,"selected_item",null),this.query=""},itemSelected:function(t){this.$emit("input",t),this.$set(this,"selected_item",t),this.clearSearchOnItemSelected&&(this.query=null)},getItems:function(t){var e=this;axios.post(this.api_url,{query:this.query}).then((function(t){e.$set(e,"options",t.data||[])})).catch((function(t){e.$set(e,"options",[]),console.error(t.response)}))}}},o=(a(93),a(1)),i=Object(o.a)(r,(function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"vue-select form-control p-0",class:{"is-invalid":null!==e.state&&e.state,"is-valid":null!==e.state&&!e.state}},[e.required?n("input",{staticStyle:{height:"0",position:"absolute",top:"0",border:"0",outline:"0","z-index":"-1"},attrs:{type:"text",required:!0},domProps:{value:e.value?"initialized":""}}):e._e(),e._v(" "),n("b-dropdown",{class:{"hide-dd-icon":e.hideDdIcon,disabled:e.disabled},style:e.menuStyle,attrs:{block:"",lazy:"",variant:e.dropdownVariant,disabled:e.disabled,"toggle-class":"text-left m-0 border-0 border-radius-0","menu-class":e.menuClass},on:{hidden:function(){e.$emit("hidden",!0),t.clearSearchOnDropdownHidden&&(t.query="")}},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._t("tag",[e._v("\n                "+e._s("function"==typeof e.tagText?e.tagText(e.selected_item):(e.selected_item,e.placeholder))+"\n            ")],{tag:e.selected_item})]},proxy:!0}],null,!0)},[e._v(" "),n("div",{staticClass:"px-2"},[n("b-form-input",{class:e.inputClass,attrs:{autofocus:"",type:"search",size:e.size,placeholder:e.placeholder,autocomplete:e.autocomplete},on:{keypress:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},input:function(t){return e.getItems(t)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),e._v(" "),n("b-dropdown-divider"),e._v(" "),e._l(e.getOptions,(function(t,a){return n("b-dropdown-item",{key:a,on:{click:function(a){return e.itemSelected(t)}}},[e._t("option",[e._v("\n                "+e._s("function"==typeof e.optionText?e.optionText(t):t)+"\n            ")],{item:t,query:e.query})],2)})),e._v(" "),0===e.options.length?[e._t("empty",[0===e.options.length?n("b-dropdown-text",[e._v("\n                    "+e._s(e.emptyOptionText)+"\n                ")]):e._e()],{query:e.query})]:e._e(),e._v(" "),e._t("default_item",null,{query:e.query})],2)],1)}),[],!1,null,null,null);e.a=i.exports},176:function(t,e,a){"use strict";a.r(e);var n=a(9),r=a(7),o=a(2),i=a(10),s=a(16),l=a(88),c={name:"ProductsList",directives:{ClickOutside:a.n(l).a},components:{DtHeader:n.a,DtFooter:r.a,DtTable:i.a,VueSelect:s.a},mixins:[o.d],props:{title:{type:String,default:" Products"},api_url:{type:String,default:function(){return route("Backend.Products.List").url()}},trash_url:{type:String,default:function(){return route("Backend.Products.Delete").url()}},submit_url:{type:String,default:function(){return route("Backend.Products.Store").url()}},custom_buttons:{type:Array,default:function(){return[{text:"Add",variant:"dark",to:{name:"ProductsAdd"}},{text:"History",variant:"primary",to:{name:"ModelHistory",params:{model:"products"}}}]}}},methods:{colCount:o.b,colSum:o.c},data:function(){var t=this;return{advance_search_shown:!1,form:{},overview:{cost:0,price:0,balance:0},fields:[{key:"id",name:"products.id",sortable:!0,label:this.__("id","ID")},{key:"name",name:"products.name",sortable:!0,label:this.__("name","Name")},{key:"code",name:"products.code",sortable:!0,label:this.__("code","Code")},{key:"quantity",name:"products.quantity",sortable:!0,label:this.__("quantity","Qty."),formatter:function(e,a,n){return t.$options.filters.localNumber(n.quantity||0)+" "+n.unit_name}},{key:"cost",name:"products.cost",sortable:!0,label:this.__("cost","Cost"),formatter:function(e){return t.$options.filters.currency(e)}},{key:"price",name:"products.price",sortable:!0,label:this.__("price","Price"),formatter:function(e){return t.$options.filters.currency(e)}},{key:"total_cost",searchable:!1,sortable:!0,label:this.__("total_cost","Total Cost"),formatter:function(e){return t.$options.filters.currency(e)}},{key:"total_price",searchable:!1,sortable:!0,label:this.__("total_price","Total Price"),formatter:function(e){return t.$options.filters.currency(e)}},{key:"probable_profit",searchable:!1,sortable:!0,label:this.__("probable_profit","Probable Profit"),formatter:function(e){return t.$options.filters.currency(e)}},{key:"barcode_symbology",name:"products.barcode_symbology",sortable:!0,visible:!1,label:this.__("barcode_symbology","Barcode Symbology")},{key:"brand_name",name:"brands.name",label:this.__("brand","Brand"),sortable:!0},{key:"category_name",name:"categories.name",label:this.__("category","Category"),sortable:!0},{key:"subcategory_name",name:"subcategories.name",label:this.__("sub_category","Subcategory"),sortable:!0},{key:"status",name:"products.status",label:this.__("status","Status"),sortable:!0,formatter:function(t){return t?"Active":"Inactive"}},{key:"alert_quantity",name:"products.alert_quantity",sortable:!0,label:this.__("alert_quantity","Alert Qty."),formatter:function(t,e,a){return a.alert_quantity+" "+a.unit_name}},{key:"unit_name",name:"units.name",label:this.__("unit","Unit"),sortable:!0,visible:!1},{key:"description",name:"products.description",label:this.__("description","Description"),visible:!1,sortable:!1,formatter:function(e){return t.$options.filters.truncate(e||"")}},{key:"created_at",name:"products.created_at",label:this.__("created_at","Created At"),visible:!1,sortable:!0,formatter:function(e){return t.$options.filters.localDateTime(e)}},{key:"updated_at",name:"products.updated_at",label:this.__("updated_at","Updated At"),visible:!1,sortable:!0,formatter:function(e){return t.$options.filters.localDateTime(e)}},{key:"action",label:this.__("action","Action"),sortable:!1,searchable:!1,thClass:"text-right",tdClass:"text-right"}]}}},u=(a(119),a(1)),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{staticClass:"mb-3"},[a("b-col",{attrs:{md:"4",sm:"12"}},[a("b-card",{attrs:{title:t.__("total_selling_price","Total Selling Price")}},[t._v("\n                "+t._s(t._f("currency")(t.overview.price))+"\n            ")])],1),t._v(" "),a("b-col",{attrs:{md:"4",sm:"12"}},[a("b-card",{attrs:{title:t.__("total_buying_cost","Total Buying Cost")}},[t._v("\n                "+t._s(t._f("currency")(t.overview.cost))+"\n            ")])],1),t._v(" "),a("b-col",{attrs:{md:"4",sm:"12"}},[a("b-card",{attrs:{title:t.__("probable_profit_loss","Probable Profit & Loss")}},[t._v("\n                "+t._s(t._f("currency")(t.overview.balance))+"\n            ")])],1)],1),t._v(" "),a("dt-table",{attrs:{title:t.title,fields:t.fields,datatable:t.datatable,custom_buttons:t.custom_buttons,"enable-date-range":""},on:{refreshDatatable:function(e){return t.$refs.datatable.refresh()}},scopedSlots:t._u([{key:"header_dropdowns",fn:function(){return[a("b-button",{attrs:{size:"sm"},on:{click:function(e){t.advance_search_shown=!t.advance_search_shown}}},[a("i",{staticClass:"fa fa-search"}),t._v(" More\n                "),a("i",{staticClass:"fa",class:{"fa-caret-down":!t.advance_search_shown,"fa-caret-up":t.advance_search_shown}})])]},proxy:!0},{key:"header_bottom_panel",fn:function(){return[a("b-collapse",{model:{value:t.advance_search_shown,callback:function(e){t.advance_search_shown=e},expression:"advance_search_shown"}},[a("b-card",{staticClass:"mt-2",attrs:{"body-class":"p-2"}},[a("b-form-row",[a("b-col",[a("b-form-group",{attrs:{label:t.__("category","Category")}},[a("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[a("b-button",{on:{click:function(e){t.datatable.category=null,t.datatable.search_columns["products.category_id"]=void 0}}},[t._v("\n                                            x\n                                        ")])]},proxy:!0}])},[a("vue-select",{attrs:{"init-options":!0,api_url:t.route("Backend.Categories.Search").url()},on:{input:function(e){t.$set(t.datatable.search_columns,"products.category_id",e?e.id:void 0),t.$set(t.datatable.search_columns,"products.subcategory_id",void 0),t.$set(t.datatable,"subcategories",e.subcategories)}},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                                            "+t._s([e.item.id,e.item.name].join(" # "))+"\n                                        ")]}},{key:"tag",fn:function(e){return[t._v("\n                                            "+t._s(e.tag?[e.tag.id,e.tag.name].join(" # "):"Not Selected")+"\n                                        ")]}}]),model:{value:t.datatable.category,callback:function(e){t.$set(t.datatable,"category",e)},expression:"datatable.category"}})],1)],1)],1),t._v(" "),a("b-col",[a("b-form-group",{attrs:{label:t.__("subcategory","Subcategory")}},[a("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[a("b-button",{on:{click:function(e){return t.$set(t.datatable.search_columns,"subcategory_id",void 0)}}},[t._v("\n                                            x\n                                        ")])]},proxy:!0}])},[a("b-form-select",{attrs:{options:t.datatable.subcategories,"text-field":"name","value-field":"id"},model:{value:t.datatable.search_columns.subcategory_id,callback:function(e){t.$set(t.datatable.search_columns,"subcategory_id",e)},expression:"datatable.search_columns.subcategory_id"}})],1)],1)],1),t._v(" "),a("b-col",[a("b-form-group",{attrs:{label:t.__("brand","Brand")}},[a("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[a("b-button",{on:{click:function(e){t.datatable.brand=null,t.datatable.search_columns.brand_id=void 0}}},[t._v("\n                                            x\n                                        ")])]},proxy:!0}])},[a("vue-select",{attrs:{"init-options":!0,api_url:t.route("Backend.Brands.Search").url()},on:{input:function(e){return t.$set(t.datatable.search_columns,"brand_id",e?e.id:void 0)}},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                                            "+t._s([e.item.id,e.item.name].join(" # "))+"\n                                        ")]}},{key:"tag",fn:function(e){return[t._v("\n                                            "+t._s(e.tag?[e.tag.id,e.tag.name].join(" # "):"Not Selected")+"\n                                        ")]}}]),model:{value:t.datatable.brand,callback:function(e){t.$set(t.datatable,"brand",e)},expression:"datatable.brand"}})],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"table",fn:function(){return[a("b-table",{ref:"datatable",staticClass:"mb-0",attrs:{variant:"primary",responsive:"",hover:"",bordered:"",small:"",striped:"","head-variant":"dark",items:t.getItems,fields:t.fields,"sort-by":t.datatable.sortBy,"sort-desc":t.datatable.sortDesc,filter:t.search,"foot-clone":"","foot-variant":"light","per-page":t.datatable.per_page,"current-page":t.datatable.current_page},on:{"update:sortBy":function(e){return t.$set(t.datatable,"sortBy",e)},"update:sort-by":function(e){return t.$set(t.datatable,"sortBy",e)},"update:sortDesc":function(e){return t.$set(t.datatable,"sortDesc",e)},"update:sort-desc":function(e){return t.$set(t.datatable,"sortDesc",e)},refreshed:function(e){t.overview=JSON.parse(t.headers.overview||"{}")}},scopedSlots:t._u([{key:"foot(quantity)",fn:function(e){return[t._v("\n                    "+t._s(t._f("localNumber")(t.colSum(t.datatable.items,"quantity")))+"\n                ")]}},{key:"foot(cost)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"cost")))+"\n                ")]}},{key:"foot(price)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"price")))+"\n                ")]}},{key:"foot(total_cost)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"total_cost")))+"\n                ")]}},{key:"foot(total_price)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"total_price")))+"\n                ")]}},{key:"foot(probable_profit)",fn:function(e){return[t._v("\n                    "+t._s(t._f("currency")(t.colSum(t.datatable.items,"probable_profit")))+"\n                ")]}},{key:"foot(alert_quantity)",fn:function(e){return[t._v("\n                    "+t._s(t._f("localNumber")(t.colSum(t.datatable.items,"alert_quantity")))+"\n                ")]}},{key:"cell(action)",fn:function(e){return[a("b-button-group",{attrs:{size:"sm"}},[a("b-button",{attrs:{variant:"primary",to:{name:"ProductsView",params:{id:e.item.id}}},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-eye"})]),t._v(" "),a("b-button",{attrs:{variant:"warning",to:{name:"ProductsEdit",params:{id:e.item.id}}},on:{click:function(a){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return t.trash(e.item.id)}}},[a("i",{staticClass:"fa fa-trash"})])],1)]}}])})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),a("router-view",{attrs:{item:t.currentItem},on:{reset:function(e){t.currentItem={}},refreshDatatable:function(){return t.$refs.datatable.refresh()}}})],1)}),[],!1,null,null,null);e.default=d.exports},45:function(t,e,a){var n=a(18),r=a(92);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);t.exports=r.locals||{}},46:function(t,e,a){var n=a(18),r=a(94);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);t.exports=r.locals||{}},60:function(t,e,a){var n=a(18),r=a(120);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);t.exports=r.locals||{}},7:function(t,e,a){"use strict";var n={props:{datatable:Object}},r=a(1),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.datatable.to?[t._v("\n            Showing "+t._s(t.datatable.from||0)+" to "+t._s(t.datatable.to||0)+" = "+t._s(t.datatable.to-t.datatable.from+t.datatable.from)+" items of\n            "+t._s(t.datatable.total)+" items.\n        ")]:[t._v("No Items Found")]],2),t._v(" "),a("div",{staticClass:"col"},[a("b-pagination",{staticClass:"mb-0",attrs:{align:"right",size:"sm","total-rows":t.datatable.total,"per-page":t.datatable.per_page,"aria-controls":"datatable"},on:{change:function(e){return t.$emit("refreshDatatable",e)}},model:{value:t.datatable.current_page,callback:function(e){t.$set(t.datatable,"current_page",e)},expression:"datatable.current_page"}})],1)])}),[],!1,null,"5eedc22a",null);e.a=o.exports},88:function(t,e){function a(t){return"function"==typeof t.value||(console.warn("[Vue-click-outside:] provided expression",t.expression,"is not a function."),!1)}function n(t){return void 0!==t.componentInstance&&t.componentInstance.$isServer}t.exports={bind:function(t,e,r){if(!a(e))return;function o(e){if(r.context){var a=e.path||e.composedPath&&e.composedPath();a&&a.length>0&&a.unshift(e.target),t.contains(e.target)||function(t,e){if(!t||!e)return!1;for(var a=0,n=e.length;a<n;a++)try{if(t.contains(e[a]))return!0;if(e[a].contains(t))return!1}catch(t){return!1}return!1}(r.context.popupItem,a)||t.__vueClickOutside__.callback(e)}}t.__vueClickOutside__={handler:o,callback:e.value};const i="ontouchstart"in document.documentElement?"touchstart":"click";!n(r)&&document.addEventListener(i,o)},update:function(t,e){a(e)&&(t.__vueClickOutside__.callback=e.value)},unbind:function(t,e,a){const r="ontouchstart"in document.documentElement?"touchstart":"click";!n(a)&&t.__vueClickOutside__&&document.removeEventListener(r,t.__vueClickOutside__.handler),delete t.__vueClickOutside__}}},9:function(t,e,a){"use strict";var n=a(2),r={props:{fields:{type:Array,default:function(){return[]}},datatable:Object,value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}},columnDdSize:{type:String,default:"sm"},customButtonSize:{type:String,default:"sm"},searchSize:{type:String,default:"sm"},perPageSize:{type:String,default:"sm"},enableDateRange:{type:Boolean,default:!1},noSearch:{type:Boolean,default:!1}},data:function(){return{search:""}},mounted:function(){this.datatable.per_page=this.getPerPage()},watch:{"datatable.search_columns":{deep:!0,handler:function(t,e){this.$emit("refreshDatatable",!0)}}},methods:{changeVisibility:n.a,startCase:n.t,range:n.o,setPerPage:n.r,getPerPage:n.f}},o=(a(91),a(1)),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{"min-width":"150px","max-width":"200px"}},[a("b-input-group",{attrs:{size:t.perPageSize,prepend:t.__("per_page","Per Page")}},[a("b-form-select",{staticClass:"form-control",attrs:{options:t.range()},on:{change:function(e){return t.setPerPage(e)}},model:{value:t.datatable.per_page,callback:function(e){t.$set(t.datatable,"per_page",e)},expression:"datatable.per_page"}})],1)],1),t._v(" "),t.noSearch?t._e():a("div",{staticClass:"col",staticStyle:{"min-width":"150px"}},[a("b-form-input",{attrs:{type:"search",size:t.searchSize,placeholder:t.__("type_and_hit_enter_to_search_the_table","Type and Hit Enter to Search the table, ESC to clear")},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:(e.target.value="",void t.$emit("input",""))},change:function(e){t.datatable.current_page=1},input:function(e){return t.$emit("input",t.search)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),t.enableDateRange?a("div",{staticClass:"col"},[a("b-input-group",{attrs:{size:t.searchSize},scopedSlots:t._u([{key:"append",fn:function(){return[a("b-button",{on:{click:function(){t.$set(t.datatable.search_columns,"starting_date",void 0),t.$set(t.datatable.search_columns,"ending_date",void 0),t.$emit("refreshDatatable")}}},[t._v("\n                        x\n                    ")])]},proxy:!0}],null,!1,2283915669)},[a("b-form-input",{attrs:{type:"date",title:t.__("starting_date","Starting Date")},on:{change:function(e){return t.$emit("refreshDatatable")}},model:{value:t.datatable.search_columns.starting_date,callback:function(e){t.$set(t.datatable.search_columns,"starting_date",e)},expression:"datatable.search_columns.starting_date"}}),t._v(" "),a("b-form-input",{attrs:{type:"date",disabled:!t.datatable.search_columns.starting_date,min:t.datatable.search_columns.starting_date,title:t.__("ending_date","Ending Date")},on:{change:function(e){return t.$emit("refreshDatatable")}},model:{value:t.datatable.search_columns.ending_date,callback:function(e){t.$set(t.datatable.search_columns,"ending_date",e)},expression:"datatable.search_columns.ending_date"}})],1)],1):t._e(),t._v(" "),a("div",{staticClass:"col text-right"},[t._t("header_searches"),t._v(" "),t.custom_buttons&&t.custom_buttons.length?a("b-button-group",{attrs:{v0i:"",size:t.customButtonSize}},[t._l(t.custom_buttons,(function(e,n){return[e.to?a("b-button",{key:n,attrs:{title:e.title,variant:e.variant?e.variant:"dark",to:e.to,exact:"","exact-active-class":"active"}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                    ")]):e.cb?a("b-button",{key:n,attrs:{title:e.title,variant:e.variant?e.variant:"dark",exact:"","exact-active-class":"active"},on:{click:e.cb}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                    ")]):a("b-button",{key:n,attrs:{title:e.title,variant:e.variant?e.variant:"dark"},on:{click:e.method}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                    ")])]}))],2):t._e(),t._v(" "),a("b-dropdown",{staticClass:"columns-dropdown p-0",attrs:{text:t.__("columns","Columns"),size:t.columnDdSize,right:"",variant:"primary"}},[a("ul",{staticClass:"list-group"},t._l(t.fields,(function(e,n){return a("li",{key:n,staticClass:"list-group-item"},[a("b-form-checkbox",{attrs:{value:!0,"uncheched-value":!1},on:{change:function(a){return t.changeVisibility(e,n)}},model:{value:e.visible,callback:function(a){t.$set(e,"visible",a)},expression:"field.visible"}},[t._v("\n                            "+t._s(t.startCase(e.label||e.key))+"\n                        ")])],1)})),0)])],2)]),t._v(" "),t._t("bottom_panel")],2)}),[],!1,null,null,null);e.a=i.exports},91:function(t,e,a){"use strict";var n=a(45);a.n(n).a},92:function(t,e,a){(e=a(19)(!1)).push([t.i,".columns-dropdown .dropdown-menu {\n  padding: 0 !important;\n  border: 0 !important;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.columns-dropdown .list-group-item label {\n  cursor: pointer;\n}",""]),t.exports=e},93:function(t,e,a){"use strict";var n=a(46);a.n(n).a},94:function(t,e,a){(e=a(19)(!1)).push([t.i,".vue-select .dropdown-menu {\n  max-height: 300px;\n  overflow-y: auto;\n  width: 100%;\n}\n.vue-select .dropdown-toggle::after {\n  position: absolute;\n  right: 10px;\n  top: 49%;\n}\n.vue-select .border-radius-0 {\n  border-radius: 0 !important;\n}\n.vue-select .top-reverse-100 {\n  top: -100% !important;\n}\n.vue-select .hide-dd-icon .dropdown-toggle::after {\n  display: none !important;\n}\n.vue-select.is-invalid, .vue-select.is-valid {\n  background-position: right calc(1.4em + 0.1875rem) center !important;\n}",""]),t.exports=e}}]);