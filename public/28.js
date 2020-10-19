(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{11:function(t,e,o){"use strict";var n=o(1);e.a={props:{getCreatedItem:{type:Boolean,default:!1},item:{type:Object,default:function(){return{}}}},mounted:function(){this.form=this.item,Object(n.i)(this,(function(){}))},data:function(){return{form:{},errors:null,visible:!0}},methods:{getItem:n.g,onSubmit:n.o,hitSubmit:function(){this.$refs.submitBtn.click()},hasError:function(t){return!!(this.errors&&this.errors[t]&&this.errors[t].length)},getErrorMsg:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return this.hasError(t)?this.errors[t].join(e):""}}}},140:function(t,e,o){"use strict";o.r(e);var n=o(11),r=o(1),i=o(19),s=[{text:"Code25",value:"code25"},{text:"Code39",value:"code39"},{text:"Code128",value:"code128"},{text:"EAN8",value:"ean8"},{text:"EAN13",value:"ean13"},{text:"UPC-A",value:"upc-a"},{text:"UPC-E",value:"upc-e"}],a={mixins:[n.a],components:{VueSelect:i.a},props:{submit_url:{type:String,default:function(){return route("Backend.Products.Store").url()}}},methods:{slugify:r.t,objPhotoUrl:r.n,initForm:function(){this.form.cost||this.$set(this.form,"cost",0),this.form.price||this.$set(this.form,"price",0),this.form.unit_id||this.$set(this.form,"unit_id",this.units[0].value),this.form.barcode_symbology||this.$set(this.form,"barcode_symbology","code128"),0!==this.form.status&&1!==this.form.status&&this.$set(this.form,"status",1)}},data:function(){return{barcode_symbologies:s,categories:[],subcategories:[],units:[]}},mounted:function(){var t=this;axios.post(route("Backend.Products.Get.Category.Unit").url()).then((function(e){t.categories=e.data.categories,t.units=e.data.units})).catch((function(t){return console.log(t.response)}))}},u=o(2),l=Object(u.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{attrs:{size:"xl","no-close-on-backdrop":"","header-bg-variant":"dark","header-text-variant":"light","no-body":"",title:t.__((t.form.id?"edit":"add")+"_product",(t.form.id?"Edit ":"Add ")+"Product"),lazy:""},on:{hidden:function(e){t.$router.go(-1),t.$emit("reset",!0)},shown:t.initForm},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[o("b-button",{ref:"submitBtn",attrs:{variant:"primary"},on:{click:t.onSubmit}},[t._v("\n            "+t._s(t.__("submit","SUBMIT"))+"\n        ")]),t._v(" "),o("b-button",{on:{click:function(t){return n()}}},[t._v("\n            "+t._s(t.__("cancel","CANCEL"))+"\n        ")])]}}]),model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("form",{ref:"theForm",on:{submit:function(e){return e.preventDefault(),t.hitSubmit(e)}}},[o("b-form-row",[o("b-col",[o("b-form-group",{attrs:{label:t.__("name","Name")+"*"}},[o("b-form-input",{attrs:{placeholder:t.__("name","Name"),required:!0},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("b-form-group",{attrs:{label:t.__("code","Code")+" *"}},[o("b-form-input",{attrs:{required:!0,type:"text",placeholder:t.__("code_barcode_sku_upc_isbn","Code (Barcode/SKU/UPC/ISBN)")},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),o("b-form-row",[o("b-col",{attrs:{md:"6",sm:"12"}},[o("b-form-group",{attrs:{label:t.__("cost","Cost")+" *"}},[o("b-input",{attrs:{type:"number",step:"any",required:!0,placeholder:t.__("product_buying_cost","Product Buying Cost")},model:{value:t.form.cost,callback:function(e){t.$set(t.form,"cost",e)},expression:"form.cost"}})],1)],1),t._v(" "),o("b-col",{attrs:{md:"6",sm:"12"}},[o("b-form-group",{attrs:{label:t.__("price","Price")+" *"}},[o("b-input",{attrs:{type:"number",step:"any",required:!0,placeholder:t.__("product_selling_price","Product Selling Price")},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1)],1)],1),t._v(" "),o("b-form-row",[o("b-col",{attrs:{md:"6",sm:"12"}},[o("b-form-group",{attrs:{label:t.__("quantity","Quantity")}},[o("b-form-input",{attrs:{disabled:!0,type:"number",step:"any",placeholder:t.__("product_quantity","Product Quantity")},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",e)},expression:"form.quantity"}})],1)],1),t._v(" "),o("b-col",{attrs:{md:"6",sm:"12"}},[o("b-form-group",{attrs:{label:t.__("alert_quantity","Alert Quantity")}},[o("b-form-input",{attrs:{type:"number",step:"any",placeholder:t.__("product_alert_quantity","Product Alert Quantity")},model:{value:t.form.alert_quantity,callback:function(e){t.$set(t.form,"alert_quantity",e)},expression:"form.alert_quantity"}})],1)],1)],1)],1),t._v(" "),o("b-col",[o("b-form-row",[o("b-col",[o("b-form-group",{attrs:{label:t.__("status","Status")}},[o("b-form-select",{attrs:{options:[{text:"Active",value:1},{text:"Inactive",value:0}]},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{scopedSlots:t._u([{key:"label",fn:function(){return[t._v("\n                                "+t._s(t.__("photo","Photo"))+"\n                                "),t.form.photo_url?o("a",{attrs:{target:"_blank",href:t.form.photo_url}},[o("i",{staticClass:"fa fa-link"})]):t._e()]},proxy:!0}])},[t._v(" "),o("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[o("b-button",{attrs:{title:t.__("reset","Reset")},on:{click:function(e){t.form.photo=null,t.form.photo_upload=null,t.form.photo_url=null}}},[t._v("\n                                        x\n                                    ")])]},proxy:!0}])},[o("b-form-file",{model:{value:t.form.photo_upload,callback:function(e){t.$set(t.form,"photo_upload",e)},expression:"form.photo_upload"}})],1)],1)],1)],1),t._v(" "),o("b-form-row",[o("b-col",{attrs:{md:"6",sm:"12"}},[o("b-form-group",{attrs:{label:t.__("category","Category")}},[o("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[o("b-button",{on:{click:function(e){t.form.category=null,t.form.category_id=null}}},[t._v("x")])]},proxy:!0}])},[o("vue-select",{attrs:{api_url:t.route("Backend.Categories.Search").url()},on:{input:function(e){t.form.category_id=e?e.id:null,t.form.subcategory_id=null}},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                                        "+t._s([e.item.id,e.item.name].join(" # "))+"\n                                    ")]}},{key:"tag",fn:function(e){return[t._v("\n                                        "+t._s(e.tag?[e.tag.id,e.tag.name].join(" # "):"Not Selected")+"\n                                    ")]}}]),model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1)],1)],1),t._v(" "),o("b-col",{attrs:{md:"6",sm:"12"}},[o("b-form-group",{attrs:{label:t.__("sub_category","Subcategory")}},[t.form.category?o("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[o("b-button",{on:{click:function(e){t.form.subcategory_id=null}}},[t._v("x")])]},proxy:!0}],null,!1,2421310739)},[o("b-form-select",{attrs:{options:t.form.category.subcategories,"text-field":"name","value-field":"id"},model:{value:t.form.subcategory_id,callback:function(e){t.$set(t.form,"subcategory_id",e)},expression:"form.subcategory_id"}})],1):t._e()],1)],1)],1),t._v(" "),o("b-form-row",[o("b-col",{attrs:{md:"6",sm:"12"}},[o("b-form-group",{attrs:{label:t.__("brand","Brand")}},[o("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[o("b-button",{on:{click:function(e){t.form.brand=null,t.form.brand_id=null}}},[t._v("x")])]},proxy:!0}])},[o("vue-select",{attrs:{api_url:t.route("Backend.Brands.Search").url()},on:{input:function(e){t.form.brand_id=e?e.id:null}},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                                        "+t._s([e.item.id,e.item.name].join(" # "))+"\n                                    ")]}},{key:"tag",fn:function(e){return[t._v("\n                                        "+t._s(e.tag?[e.tag.id,e.tag.name].join(" # "):t.__("not_selected","Not Selected"))+"\n                                    ")]}}]),model:{value:t.form.brand,callback:function(e){t.$set(t.form,"brand",e)},expression:"form.brand"}})],1)],1)],1),t._v(" "),o("b-col",{attrs:{md:"6",sm:"12"}},[o("b-form-group",{attrs:{label:t.__("unit","Unit")}},[o("b-form-select",{attrs:{options:t.units},model:{value:t.form.unit_id,callback:function(e){t.$set(t.form,"unit_id",e)},expression:"form.unit_id"}})],1)],1)],1)],1)],1),t._v(" "),o("b-form-group",{attrs:{label:t.__("description","Description")}},[o("b-form-textarea",{attrs:{placeholder:t.__("product_description","Product Description")},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)])}),[],!1,null,null,null);e.default=l.exports},19:function(t,e,o){"use strict";var n=o(0),r={props:{value:{type:null|Object,default:function(){return null}},api_url:{type:String,default:null,required:!0},prepend:{type:String,default:""},append:{type:String,default:""},placeholder:{type:String,default:"Search Items"},size:{type:String,default:"sm"},autocomplete:{type:String,default:"off"},dropdownVariant:{type:String,default:"outline-secondary"},emptyOptionText:{type:String,default:"No items available to select"},inputClass:{type:String|Array,default:function(){return[]}},menuStyle:{type:String|Array,default:function(){return[]}},clearSearchOnItemSelected:{type:Boolean,default:!1},initOptions:{type:Boolean|String,default:!1},required:{type:Boolean,default:!1},state:{type:Boolean,default:null},hideDdIcon:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},menuClass:{type:String|Object,default:function(){return""}},getFiltered:{type:Function},clearSearchOnDropdownHidden:{type:Boolean,default:function(){return!0}},optionText:{type:Function},tagText:{Type:Function}},data:function(){return{options:[],query:"",selected_item:null}},mounted:function(){this.initOptions&&(Object(n.a)(this.initOptions)&&this.initOptions?this.getItems(""):this.query=this.initOptions),this.$set(this,"selected_item",this.value)},computed:{getOptions:function(){return"function"==typeof this.getFiltered&&this.getFiltered?this.getFiltered(this.options):this.options}},watch:{value:{deep:!0,handler:function(t){this.$set(this,"selected_item",t)}}},methods:{reset:function(){this.$emit("input",null),this.$set(this,"selected_item",null),this.query=""},itemSelected:function(t){this.$emit("input",t),this.$set(this,"selected_item",t),this.clearSearchOnItemSelected&&(this.query=null)},getItems:function(t){var e=this;axios.post(this.api_url,{query:this.query}).then((function(t){e.$set(e,"options",t.data||[])})).catch((function(t){e.$set(e,"options",[]),console.error(t.response)}))}}},i=(o(73),o(2)),s=Object(i.a)(r,(function(){var t=this,e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"vue-select form-control p-0",class:{"is-invalid":null!==e.state&&e.state,"is-valid":null!==e.state&&!e.state}},[e.required?n("input",{staticStyle:{height:"0",position:"absolute",top:"0",border:"0",outline:"0","z-index":"-1"},attrs:{type:"text",required:!0},domProps:{value:e.value?"initialized":""}}):e._e(),e._v(" "),n("b-dropdown",{class:{"hide-dd-icon":e.hideDdIcon,disabled:e.disabled},style:e.menuStyle,attrs:{block:"",lazy:"",variant:e.dropdownVariant,disabled:e.disabled,"toggle-class":"text-left m-0 border-0 border-radius-0","menu-class":e.menuClass},on:{hidden:function(){e.$emit("hidden",!0),t.clearSearchOnDropdownHidden&&(t.query="")}},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._t("tag",[e._v("\n                "+e._s("function"==typeof e.tagText?e.tagText(e.selected_item):(e.selected_item,e.placeholder))+"\n            ")],{tag:e.selected_item})]},proxy:!0}],null,!0)},[e._v(" "),n("div",{staticClass:"px-2"},[n("b-form-input",{class:e.inputClass,attrs:{autofocus:"",type:"search",size:e.size,placeholder:e.placeholder,autocomplete:e.autocomplete},on:{keypress:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},input:function(t){return e.getItems(t)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),e._v(" "),n("b-dropdown-divider"),e._v(" "),e._l(e.getOptions,(function(t,o){return n("b-dropdown-item",{key:o,on:{click:function(o){return e.itemSelected(t)}}},[e._t("option",[e._v("\n                "+e._s("function"==typeof e.optionText?e.optionText(t):t)+"\n            ")],{item:t,query:e.query})],2)})),e._v(" "),0===e.options.length?[e._t("empty",[0===e.options.length?n("b-dropdown-text",[e._v("\n                    "+e._s(e.emptyOptionText)+"\n                ")]):e._e()],{query:e.query})]:e._e(),e._v(" "),e._t("default_item",null,{query:e.query})],2)],1)}),[],!1,null,null,null);e.a=s.exports},34:function(t,e,o){var n=o(17),r=o(74);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);t.exports=r.locals||{}},73:function(t,e,o){"use strict";var n=o(34);o.n(n).a},74:function(t,e,o){(e=o(18)(!1)).push([t.i,".vue-select .dropdown-menu {\n  max-height: 300px;\n  overflow-y: auto;\n  width: 100%;\n}\n.vue-select .dropdown-toggle::after {\n  position: absolute;\n  right: 10px;\n  top: 49%;\n}\n.vue-select .border-radius-0 {\n  border-radius: 0 !important;\n}\n.vue-select .top-reverse-100 {\n  top: -100% !important;\n}\n.vue-select .hide-dd-icon .dropdown-toggle::after {\n  display: none !important;\n}\n.vue-select.is-invalid, .vue-select.is-valid {\n  background-position: right calc(1.4em + 0.1875rem) center !important;\n}",""]),t.exports=e}}]);