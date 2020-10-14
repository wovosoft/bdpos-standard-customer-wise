(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{11:function(e,t,n){"use strict";var i=n(2);t.a={props:{getCreatedItem:{type:Boolean,default:!1},item:{type:Object,default:function(){return{}}}},mounted:function(){this.form=this.item,Object(i.g)(this,(function(){}))},data:function(){return{form:{},errors:null,visible:!0}},methods:{getItem:i.e,onSubmit:i.n,hitSubmit:function(){this.$refs.submitBtn.click()},hasError:function(e){return!!(this.errors&&this.errors[e]&&this.errors[e].length)},getErrorMsg:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return this.hasError(e)?this.errors[e].join(t):""}}}},16:function(e,t,n){"use strict";var i=n(0),o={props:{value:{type:null|Object,default:function(){return null}},api_url:{type:String,default:null,required:!0},prepend:{type:String,default:""},append:{type:String,default:""},placeholder:{type:String,default:"Search Items"},size:{type:String,default:"sm"},autocomplete:{type:String,default:"off"},dropdownVariant:{type:String,default:"outline-secondary"},emptyOptionText:{type:String,default:"No items available to select"},inputClass:{type:String|Array,default:function(){return[]}},menuStyle:{type:String|Array,default:function(){return[]}},clearSearchOnItemSelected:{type:Boolean,default:!1},initOptions:{type:Boolean|String,default:!1},required:{type:Boolean,default:!1},state:{type:Boolean,default:null},hideDdIcon:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},menuClass:{type:String|Object,default:function(){return""}},getFiltered:{type:Function},clearSearchOnDropdownHidden:{type:Boolean,default:function(){return!0}},optionText:{type:Function},tagText:{Type:Function}},data:function(){return{options:[],query:"",selected_item:null}},mounted:function(){this.initOptions&&(Object(i.a)(this.initOptions)&&this.initOptions?this.getItems(""):this.query=this.initOptions),this.$set(this,"selected_item",this.value)},computed:{getOptions:function(){return"function"==typeof this.getFiltered&&this.getFiltered?this.getFiltered(this.options):this.options}},watch:{value:{deep:!0,handler:function(e){this.$set(this,"selected_item",e)}}},methods:{reset:function(){this.$emit("input",null),this.$set(this,"selected_item",null),this.query=""},itemSelected:function(e){this.$emit("input",e),this.$set(this,"selected_item",e),this.clearSearchOnItemSelected&&(this.query=null)},getItems:function(e){var t=this;axios.post(this.api_url,{query:this.query}).then((function(e){t.$set(t,"options",e.data||[])})).catch((function(e){t.$set(t,"options",[]),console.error(e.response)}))}}},r=(n(93),n(1)),s=Object(r.a)(o,(function(){var e=this,t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"vue-select form-control p-0",class:{"is-invalid":null!==t.state&&t.state,"is-valid":null!==t.state&&!t.state}},[t.required?i("input",{staticStyle:{height:"0",position:"absolute",top:"0",border:"0",outline:"0","z-index":"-1"},attrs:{type:"text",required:!0},domProps:{value:t.value?"initialized":""}}):t._e(),t._v(" "),i("b-dropdown",{class:{"hide-dd-icon":t.hideDdIcon,disabled:t.disabled},style:t.menuStyle,attrs:{block:"",lazy:"",variant:t.dropdownVariant,disabled:t.disabled,"toggle-class":"text-left m-0 border-0 border-radius-0","menu-class":t.menuClass},on:{hidden:function(){t.$emit("hidden",!0),e.clearSearchOnDropdownHidden&&(e.query="")}},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._t("tag",[t._v("\n                "+t._s("function"==typeof t.tagText?t.tagText(t.selected_item):(t.selected_item,t.placeholder))+"\n            ")],{tag:t.selected_item})]},proxy:!0}],null,!0)},[t._v(" "),i("div",{staticClass:"px-2"},[i("b-form-input",{class:t.inputClass,attrs:{autofocus:"",type:"search",size:t.size,placeholder:t.placeholder,autocomplete:t.autocomplete},on:{keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},input:function(e){return t.getItems(e)}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1),t._v(" "),i("b-dropdown-divider"),t._v(" "),t._l(t.getOptions,(function(e,n){return i("b-dropdown-item",{key:n,on:{click:function(n){return t.itemSelected(e)}}},[t._t("option",[t._v("\n                "+t._s("function"==typeof t.optionText?t.optionText(e):e)+"\n            ")],{item:e,query:t.query})],2)})),t._v(" "),0===t.options.length?[t._t("empty",[0===t.options.length?i("b-dropdown-text",[t._v("\n                    "+t._s(t.emptyOptionText)+"\n                ")]):t._e()],{query:t.query})]:t._e(),t._v(" "),t._t("default_item",null,{query:t.query})],2)],1)}),[],!1,null,null,null);t.a=s.exports},46:function(e,t,n){var i=n(18),o=n(94);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},85:function(e,t,n){"use strict";n.r(t);var i=n(11),o=n(16),r={mixins:[i.a],components:{VueSelect:o.a},props:{submit_url:{type:String,default:function(){return route("Backend.Expenses.Store").url()}},routerBackOnClose:{type:Boolean,default:function(){return!0}},isVisible:{type:Boolean,default:function(){return!0}},size:{type:String,default:function(){return"lg"}}},created:function(){this.$set(this,"visible",this.isVisible)},watch:{isVisible:{handler:function(e){this.$set(this,"visible",e)}}}},s=n(1),u=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{size:e.size,"header-bg-variant":"dark","header-text-variant":"light","body-class":"p-2","footer-class":"p-2",title:e.__((e.form.id?"edit":"add")+"_expense",(e.form.id?"Edit ":"Add ")+"Expense"),lazy:""},on:{hidden:function(){e.routerBackOnClose&&e.$router.go(-1),e.$emit("reset",!0),e.form={}}},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var i=t.cancel;return[n("b-button",{ref:"submitBtn",attrs:{variant:"primary"},on:{click:e.onSubmit}},[e._v("\n            "+e._s(e.__("submit","SUBMIT"))+"\n        ")]),e._v(" "),n("b-button",{on:{click:function(e){return i()}}},[e._v("\n            "+e._s(e.__("cancel","CANCEL"))+"\n        ")])]}}]),model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("form",{ref:"theForm",on:{submit:function(t){return t.preventDefault(),e.hitSubmit(t)}}},[n("b-form-group",{attrs:{label:e.__("expense_category","Expense Category")}},[n("b-input-group",{scopedSlots:e._u([{key:"append",fn:function(){return[n("b-button",{on:{click:function(t){e.form.expense_category_id=null,e.form.expense_category=null}}},[e._v("x")])]},proxy:!0}])},[n("vue-select",{attrs:{"init-options":!0,required:!0,api_url:e.route("Backend.Expenses.Categories.Search").url()},on:{input:function(t){return e.form.expense_category_id=t?t.id:null}},scopedSlots:e._u([{key:"option",fn:function(t){return[e._v("\n                        "+e._s([t.item.id,t.item.name].join(" # "))+"\n                    ")]}},{key:"tag",fn:function(t){return[e._v("\n                        "+e._s(t.tag?[t.tag.id,t.tag.name].join(" # "):e.__("not_selected","Not Selected"))+"\n                    ")]}}]),model:{value:e.form.expense_category,callback:function(t){e.$set(e.form,"expense_category",t)},expression:"form.expense_category"}})],1)],1),e._v(" "),n("b-form-group",{attrs:{label:e.__("amount","Amount")+" *"}},[n("b-input",{attrs:{type:"number",step:"any",placeholder:e.__("expense_amount","Expense Amount"),required:!0},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1),e._v(" "),n("b-form-group",{attrs:{label:e.__("reference","Reference")}},[n("b-input",{attrs:{type:"text",placeholder:e.__("expense_reference","Expense Reference")},model:{value:e.form.reference,callback:function(t){e.$set(e.form,"reference",t)},expression:"form.reference"}})],1),e._v(" "),n("b-form-group",{attrs:{label:e.__("description","Description")}},[n("b-form-textarea",{attrs:{placeholder:e.__("description","Description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)])}),[],!1,null,null,null);t.default=u.exports},93:function(e,t,n){"use strict";var i=n(46);n.n(i).a},94:function(e,t,n){(t=n(19)(!1)).push([e.i,".vue-select .dropdown-menu {\n  max-height: 300px;\n  overflow-y: auto;\n  width: 100%;\n}\n.vue-select .dropdown-toggle::after {\n  position: absolute;\n  right: 10px;\n  top: 49%;\n}\n.vue-select .border-radius-0 {\n  border-radius: 0 !important;\n}\n.vue-select .top-reverse-100 {\n  top: -100% !important;\n}\n.vue-select .hide-dd-icon .dropdown-toggle::after {\n  display: none !important;\n}\n.vue-select.is-invalid, .vue-select.is-valid {\n  background-position: right calc(1.4em + 0.1875rem) center !important;\n}",""]),e.exports=t}}]);