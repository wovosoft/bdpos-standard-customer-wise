(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{12:function(t,r,e){"use strict";var n=e(1);r.a={props:{getCreatedItem:{type:Boolean,default:!1},item:{type:Object,default:function(){return{}}}},mounted:function(){this.form=this.item,Object(n.i)(this,(function(){}))},data:function(){return{form:{},errors:null,visible:!0}},methods:{getItem:n.g,onSubmit:n.o,hitSubmit:function(){this.$refs.submitBtn.click()},hasError:function(t){return!!(this.errors&&this.errors[t]&&this.errors[t].length)},getErrorMsg:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return this.hasError(t)?this.errors[t].join(r):""}}}},146:function(t,r,e){"use strict";e.r(r);var n=e(12),o=e(1),i={mixins:[n.a],props:{submit_url:{type:String,default:function(){return route("Backend.Brands.Store").url()}}},data:function(){return{BasicModalOptions:o.a}}},s=e(2),a=Object(s.a)(i,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-modal",t._b({attrs:{title:t.__((t.form.id?"edit":"add")+"_brand",(t.form.id?"Edit ":"Add ")+"Brand")},on:{hidden:function(r){t.$router.go(-1),t.$emit("reset",!0)}},scopedSlots:t._u([{key:"modal-footer",fn:function(r){var n=r.cancel;return[e("b-button",{ref:"submitBtn",attrs:{variant:"primary"},on:{click:t.onSubmit}},[t._v("\n            "+t._s(t.__("submit","SUBMIT"))+"\n        ")]),t._v(" "),e("b-button",{on:{click:function(t){return n()}}},[t._v("\n            "+t._s(t.__("cancel","CANCEL"))+"\n        ")])]}}]),model:{value:t.visible,callback:function(r){t.visible=r},expression:"visible"}},"b-modal",Object.assign({},t.BasicModalOptions,{size:"md"}),!1),[e("form",{ref:"theForm",on:{submit:function(r){return r.preventDefault(),t.hitSubmit(r)}}},[e("b-form-group",{attrs:{label:t.__("name","Name")+" *"}},[e("b-form-input",{attrs:{placeholder:t.__("name","Name"),required:!0},model:{value:t.form.name,callback:function(r){t.$set(t.form,"name",r)},expression:"form.name"}})],1),t._v(" "),e("b-form-group",{attrs:{label:t.__("description","Description")}},[e("b-form-textarea",{attrs:{rows:5,placeholder:t.__("description","Description")},model:{value:t.form.description,callback:function(r){t.$set(t.form,"description",r)},expression:"form.description"}})],1)],1)])}),[],!1,null,null,null);r.default=a.exports}}]);