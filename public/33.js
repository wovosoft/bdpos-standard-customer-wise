(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"6TS1":function(t,e,n){"use strict";n.r(e);var o={components:{TypeHead:n("LnK9").a},props:{api_url:{type:String,default:"/backend/users/search"},option_bind_to_html:{type:Boolean,default:!0}},data:function(){return{form:{user:null,permissions:[]},output:[]}},methods:{onSubmit:function(){var t=this;if(!this.form.user||!this.form.permissions.length)return alert(_t("please_fill_the_form_correctly","Please Fill the form correctly")),!1;axios.post("/backend/users/abilities/check",this.form).then((function(e){t.output=e.data||[]})).catch((function(e){t.output=[],console.log(e.response)}))}}},s=n("KHd+"),r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{reset:function(e){t.form={user:null,permissions:[]}},submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("b-card",{scopedSlots:t._u([{key:"footer",fn:function(){return[n("div",{staticClass:"text-right"},[n("button",{staticClass:"btn btn-dark",attrs:{type:"reset"}},[t._v("\n                        "+t._s(t.__("reset","Reset"))+"\n                    ")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                        "+t._s(t.__("submit","Submit"))+"\n                    ")])])]},proxy:!0}])},[n("b-form-group",{attrs:{label:t.__("search_users","Search Users")}},[n("type-head",{attrs:{api_url:"/backend/users/search",placeholder:t.__("type_and_search_user","Type and Search User"),formatter:function(t){return t.id+" # "+t.name+" | "+t.email}},on:{selected:function(e){return t.form.user=e.id},reset:function(e){t.form.user=null}},scopedSlots:t._u([{key:"option",fn:function(e){return[n("div",{domProps:{innerHTML:t._s(e.id+" # "+e.name+" | "+e.email)}})]}}])})],1),t._v(" "),n("b-form-group",{attrs:{label:t.__("search_permissions","Search Permissions")}},[n("type-head",{attrs:{api_url:"/backend/permissions/search","clear-on-select":!0,placeholder:t.__("type_and_search_permission","Type and Search Permission"),formatter:function(t){return t.name}},on:{selected:function(e){t.form.permissions.filter((function(t){return t===e.name})).length||t.form.permissions.push(e.name)}},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                        "+t._s(e.name)+"\n                    ")]}}])})],1),t._v(" "),n("div",t._l(t.form.permissions,(function(e,o){return n("button",{key:o,staticClass:"btn btn-sm btn-secondary m-1",attrs:{title:t.__("click_to_remove","Click to Remove")},on:{click:function(e){return t.form.permissions.splice(o,1)}}},[t._v("\n                    "+t._s(e)+"\n                    "),n("b-icon",{attrs:{icon:"x"}})],1)})),0)],1)],1),t._v(" "),t.output.length?n("b-table-lite",{staticClass:"m-0",attrs:{small:"",bordered:"",striped:"",hover:"","head-variant":"dark",items:t.output,fields:[{key:"permission",sortable:!0},{key:"ability",sortable:!0}]}}):t._e()],1)}),[],!1,null,"6adfc08c",null);e.default=r.exports},LnK9:function(t,e,n){"use strict";var o={inheritAttrs:!1,props:{closeOnSelect:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!1},resetOnSelect:{type:Boolean,default:!1},search:{type:String,default:""},searchItems:{type:Function},api_url:{type:String,default:""},placeholder:{type:String,default:"Type and Search"},formatter:{type:Function,default:function(t){return"".concat(t.text||t.name||JSON.stringify(t))}}},data:function(){return{show_dropdown:!1,current_position:0,items:[],search_value:this.search}},methods:{enterPressed:function(){this.show_dropdown&&(this.$emit("selected",this.items[this.current_position]),this.search_value=this.clearOnSelect?"":this.formatter(this.items[this.current_position]),this.closeOnSelect&&(this.show_dropdown=!1),this.resetOnSelect&&(this.items=[]))},itemClicked:function(t){this.search_value=this.clearOnSelect?"":this.formatter(t),this.resetOnSelect&&(this.items=[]),this.$emit("selected",t)},getList:function(t){var e=this,n=null;(n=""!==this.api_url?axios.post(this.api_url,{search:t.target.value}):this.searchItems(t.target.value))&&n.then((function(t){e.items=t.data||[],e.$emit("items",t.data||[])})).catch((function(t){e.items=[],e.$emit("items",[]),console.error(t.response)}))},hideDropdown:function(){var t=this;setTimeout((function(){return t.show_dropdown=!1}),300),this.current_position=0,this.$emit("dropdownHidden",!0)},changePosition:function(t,e){"down"===e&&this.current_position>this.items.length-1?(this.current_position=this.current_position+1,console.log("down")):"up"===e&&this.current_position>0&&(this.current_position=this.current_position-1,console.log("up"))},fixPosition:function(t){if(this.$refs.ddown_typehead){var e=this.$refs.ddown_typehead.$el.querySelectorAll(".ddown-item");e.length&&e[t||this.current_position].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}}}},s=(n("lbN/"),n("KHd+")),r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"input-group"},[n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.search_value,expression:"search_value"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.search_value},on:{focusin:function(e){t.show_dropdown=!0,t.$emit("dropdownShown",!0)},focusout:t.hideDropdown,input:[function(e){e.target.composing||(t.search_value=e.target.value)},t.getList],keypress:function(){t.show_dropdown||(t.show_dropdown=!0)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.enterPressed(e))},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;t.current_position=t.current_position<t.items.length-1?t.current_position+1:t.items.length>0?t.items.length-1:0,t.fixPosition(t.current_position)},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;t.current_position=t.current_position>0?t.current_position-1:0,t.fixPosition(t.current_position)}]}},"input",t.$attrs,!1)),t._v(" "),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.search_value="",t.$emit("reset")}}},[t._v("X")])])]),t._v(" "),t.show_dropdown&&t.items.length?n("b-dropdown",{ref:"ddown_typehead",staticClass:"w-100",staticStyle:{top:"-15px"},attrs:{"menu-class":{show:t.show_dropdown,"w-100":!0,"scrollable-dropdown":!0},"toggle-class":"d-none"}},t._l(t.items,(function(e,o){return n("b-dropdown-item",{key:o,class:{"bg-light":t.current_position===o,"ddown-item":!0},staticStyle:{cursor:"pointer"},on:{click:function(n){return t.itemClicked(e)}}},[t._t("option",[t._v("\n                "+t._s(e)+"}\n            ")],null,e)],2)})),1):t._e()],1)}),[],!1,null,null,null);e.a=r.exports},aIDV:function(t,e,n){var o=n("LboF"),s=n("fNdp");"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var r={insert:"head",singleton:!1};o(s,r);t.exports=s.locals||{}},fNdp:function(t,e,n){(e=n("JPst")(!1)).push([t.i,"\n.scrollable-dropdown {\n    max-height: 300px;\n    overflow-y: auto;\n}\n",""]),t.exports=e},"lbN/":function(t,e,n){"use strict";var o=n("aIDV");n.n(o).a}}]);