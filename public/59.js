(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{12:function(e,t,i){"use strict";var a=i(1),n=i(21);t.a={props:{item:{type:Object,default:function(){return{}}}},methods:{obj2Table:a.m,startCase:n.a,getItem:a.g},data:function(){return{the_item:{}}},mounted:function(){var e=this;this.the_item=this.item,this.the_item&&Object.keys(this.item).length||this.getItem(this.$route.params.id,this.$parent.$props.api_url).then((function(t){e.the_item=t.data})).catch((function(e){return console.log(e.response)}))}}},179:function(e,t,i){"use strict";i.r(t);var a=i(12),n=i(1),s={mixins:[a.a],data:function(){return{BasicModalOptions:n.a}}},r=i(2),o=Object(r.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",e._b({attrs:{visible:"",title:e.__("view_unit","View Unit")},on:{hidden:function(t){return e.$router.go(-1)}}},"b-modal",Object.assign({},e.BasicModalOptions,{size:"md"}),!1),[i("b-row",[i("b-col",[i("b-table",{attrs:{small:"",bordered:"",hover:"",striped:"","head-variant":"dark",items:e.obj2Table(e.the_item,["deleted_at"]),fields:[{key:"key",sortable:!0,label:e.__("key","Key"),formatter:function(t){return e.__(t,e.startCase(t))}},{key:"value",label:e.__("value","Value"),sortable:!0}]},scopedSlots:e._u([{key:"cell(value)",fn:function(t){return[["created_at","updated_at"].includes(t.item.key)?[e._v("\n                        "+e._s(e._f("localDateTime")(t.item.value))+"\n                    ")]:["description"].includes(t.item.key)?[i("div",{domProps:{innerHTML:e._s(t.item.value)}})]:[e._v(e._s(t.item.value))]]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);