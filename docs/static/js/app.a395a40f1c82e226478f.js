webpackJsonp([1],[,function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return u}),n.d(e,"c",function(){return c}),n.d(e,"f",function(){return d});var i=n(4),r=n.n(i),a=function(t,e){for(var n=0;n<t.length;n++)if(t[n].x<e.x+e.w&&t[n].x+t[n].w>e.x&&t[n].y<e.y+e.h&&t[n].y+t[n].h>e.y)return t[n];return!1},s=function(t,e,n,i){for(var r=o(e),s=r.x,u=r.y;a(t,r);)if(r.y=r.y+1,r.y>i&&(r.y=0),r.y===u&&(r.x=r.x+1,r.x>n&&(r.x=0)),r.y===u&&r.x===s)return r.y=-1,r.x=-1,r;return r},o=function(t){return r()({},t)},u=function(t){return t.map(function(t){return o(t)})},l=function(t){return t.split("").reverse().join("")},c=function(t){var e=("000000"+(16777215&parseInt(l(t),36)).toString(16).toUpperCase()).slice(-6);return"rgba("+parseInt(e.slice(0,2),16)+","+parseInt(e.slice(2,4),16)+","+parseInt(e.slice(4,6),16)+",0.5)"},d=function(t){var e=document.createElement("textarea");e.style.position="fixed",e.style.top=0,e.style.left=0,e.style.width="2em",e.style.height="2em",e.style.padding=0,e.style.border="none",e.style.outline="none",e.style.boxShadow="none",e.style.background="transparent",e.value=t,document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch(t){}document.body.removeChild(e)}},,,,,,,,,,,,,,function(t,e,n){function i(t){n(60)}var r=n(0)(n(27),n(73),i,null,null);t.exports=r.exports},function(t,e,n){"use strict";var i=n(3),r=n(78),a=n(68),s=n.n(a),o=n(64),u=n.n(o),l=n(69),c=n.n(l);i.a.use(r.a),e.a=new r.a({mode:"hash",routes:[{path:"/",name:"Hello",component:s.a},{path:"/about",name:"About",component:u.a},{path:"*",component:c.a}]})},function(t,e,n){"use strict";var i=n(3),r=n(2),a=n(21),s=n(20),o=n(22);i.a.use(r.a);var u={areas:[{x:0,y:0,w:2,h:1,label:"header",id:0},{x:0,y:1,w:1,h:1,label:"area2",id:1},{x:1,y:2,w:1,h:1,label:"area3",id:2},{x:2,y:0,w:1,h:3,label:"sidebar",id:3}],dragAreas:null,columns:[{size:3,units:"fr"},{size:4,units:"fr"},{size:2,units:"fr"}],rows:[{size:10,units:"rem"},{size:15,units:"rem"},{size:20,units:"rem"}],colGap:{size:.5,units:"rem"},rowGap:{size:.5,units:"rem"},justify:{value:""},align:{value:""}};e.a=new r.a.Store({state:u,getters:a,actions:s,mutations:o})},function(t,e,n){function i(t){n(63)}var r=n(0)(n(23),n(76),i,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=n(18),a=n.n(r),s=n(16),o=n(17);i.a.config.productionTip=!1,new i.a({el:"#app",router:s.a,store:o.a,render:function(t){return t(a.a)}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"action",function(){return i}),n.d(e,"setAreas",function(){return r}),n.d(e,"setDragAreas",function(){return a}),n.d(e,"addDragArea",function(){return s}),n.d(e,"addArea",function(){return o}),n.d(e,"removeArea",function(){return u}),n.d(e,"addRow",function(){return l}),n.d(e,"removeRow",function(){return c}),n.d(e,"addColumn",function(){return d}),n.d(e,"removeColumn",function(){return f});var i=function(t,e){var n=t.commit;t.state.val&&n("mutation",e)},r=function(t,e){var n=t.commit;t.state;n("setAreas",e)},a=function(t,e){var n=t.commit;t.state;n("setDragAreas",e)},s=function(t,e){var n=t.commit;t.state;n("addDragArea",e)},o=function(t,e){var n=t.commit;t.state;n("addArea",e)},u=function(t,e){var n=t.commit;t.state;n("removeArea",e)},l=function(t){var e=t.commit;t.state;e("addRow")},c=function(t,e){var n=t.commit;t.state;n("removeRow",e)},d=function(t){var e=t.commit;t.state;e("addColumn")},f=function(t,e){var n=t.commit;t.state;n("removeColumn",e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"areas",function(){return r}),n.d(e,"dragAreas",function(){return a}),n.d(e,"rows",function(){return s}),n.d(e,"columns",function(){return o}),n.d(e,"colGap",function(){return u}),n.d(e,"rowGap",function(){return l}),n.d(e,"justify",function(){return c}),n.d(e,"align",function(){return d}),n.d(e,"gridSize",function(){return f}),n.d(e,"gridTemplateAreas",function(){return v}),n.d(e,"gridStyle",function(){return g}),n.d(e,"itemStyle",function(){return m}),n.d(e,"css",function(){return p});var i=n(1),r=function(t){return t.areas},a=function(t){return t.dragAreas},s=function(t){return t.rows},o=function(t){return t.columns},u=function(t){return t.colGap},l=function(t){return t.rowGap},c=function(t){return t.justify},d=function(t){return t.align},f=function(t){return{w:t.columns.length,h:t.rows.length}},v=function(t){return t.rows.map(function(e,n){return'    "'+t.columns.map(function(e,r){var a=t.dragAreas||t.areas,s=i.b(a,{x:r,y:n,w:1,h:1});return s?s.label:"."}).join(" ")+'"'}).join("\n")},g=function(t){return{display:"grid",gridTemplateRows:t.rows.reduce(function(t,e){return t+("auto"===e.units?"":e.size)+e.units+" "},""),gridTemplateColumns:t.columns.reduce(function(t,e){return t+("auto"===e.units?"":e.size)+e.units+" "},""),gridColumnGap:t.colGap.size&&t.colGap.units?t.colGap.size+t.colGap.units:void 0,gridRowGap:t.rowGap.size&&t.rowGap.units?t.rowGap.size+t.rowGap.units:void 0,justifyItems:t.justify.value?t.justify.value:void 0,alignItems:t.align.value?t.align.value:void 0,gridTemplateAreas:v(t)}},m=function(t){return function(t){return"placeholder"===t.id?{backgroundColor:"rgba(0,0,0,0.5)",position:"absolute",top:0,left:0,height:t.h,width:t.w,transform:"translate("+t.x+"px,"+t.y+"px)"}:{backgroundColor:i.c(t.label),gridArea:t.label}}},p=function(t){return("\n@supports (grid-area: auto) {\n  .grid-container{\n    display: grid;\n    grid-template-columns: "+t.columns.reduce(function(t,e){return t+("auto"===e.units?"":e.size)+e.units+" "},"").trim()+";\n    grid-template-rows: "+t.rows.reduce(function(t,e){return t+("auto"===e.units?"":e.size)+e.units+" "},"").trim()+";\n    "+(t.colGap.size&&t.colGap.units?"grid-column-gap: "+t.colGap.size+t.colGap.units+";":"")+"\n    "+(t.rowGap.size&&t.rowGap.units?"grid-row-gap: "+t.rowGap.size+t.rowGap.units+";":"")+"\n    "+(t.justify.value?"justify-items: "+t.justify.value+";":"")+"\n    "+(t.align.value?"align-items: "+t.align.value+";":"")+"\n    grid-template-areas:\n"+v(t)+";\n  }\n    \n"+t.areas.sort(function(t,e){return t.label>e.label}).map(function(t){return"  ."+t.label+" {\n    grid-area: "+t.label+";\n  }"}).join("\n")+"\n    \n}").replace(/ {4}\n/g,"")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"mutation",function(){return s}),n.d(e,"setAreas",function(){return o}),n.d(e,"setDragAreas",function(){return u}),n.d(e,"addDragArea",function(){return l}),n.d(e,"addArea",function(){return c}),n.d(e,"removeArea",function(){return d}),n.d(e,"addRow",function(){return f}),n.d(e,"removeRow",function(){return v}),n.d(e,"addColumn",function(){return g}),n.d(e,"removeColumn",function(){return m});var i=n(4),r=n.n(i),a=n(1),s=function(t,e){t.val=e},o=function(t,e){t.areas=e},u=function(t,e){t.dragAreas=e},l=function(t,e){t.dragAreas.push(e)},c=function(t,e){for(var n=t.areas.length+1;t.areas.find(function(t){return t.id===n});)n++;for(;t.areas.find(function(t){return t.label==="area"+n});)n++;t.areas.push(a.a(t.areas,{x:0,y:0,w:1,h:1,label:"area"+n,id:n},t.columns.length-1,t.rows.length-1))},d=function(t,e){if(e){var n=t.areas.findIndex(function(t){return t.id===e.id});console.log(n),n>=0&&t.areas.splice(n,1)}else t.areas.pop()},f=function(t){t.rows.push(r()({},t.rows[t.rows.length-1]))},v=function(t,e){if(e){var n=t.rows.findIndex(function(t){return t===e});n>=0&&t.rows.splice(n,1)}else t.rows.pop()},g=function(t){t.columns.push(r()({},t.columns[t.columns.length-1]))},m=function(t,e){if(e){var n=t.columns.findIndex(function(t){return t===e});n>=0&&t.columns.splice(n,1)}else t.columns.pop()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(67),r=n.n(i);e.default={name:"app",components:{AppHeader:r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"about"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),r=n.n(i),a=n(1),s=n(2);e.default={name:"editor",computed:r()({},n.i(s.b)(["areas","rows","columns","css","colGap","rowGap","justify","align"])),methods:r()({},n.i(s.c)(["addArea","addRow","removeRow","addColumn","removeColumn"]),{copyTextToClipboard:function(t){n.i(a.f)(t)}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),r=n.n(i),a=n(1),s=n(15),o=n.n(s),u=n(2);e.default={name:"grid-container",components:{GridItem:o.a},data:function(){return{placeholder:{hidden:!0,x:0,y:0,w:1,h:1,label:"placeholder",id:"placeholder"},dragging:{item:null,offset:{x:0,y:0}},resizing:{item:null,offset:{x:0,y:0}},initialLayout:void 0}},computed:r()({},n.i(u.b)(["gridStyle","areas","gridSize","rows","columns","dragAreas"])),methods:r()({},n.i(u.c)(["setAreas","setDragAreas","addDragArea"]),{dragStart:function(t){var e=t.item,n=t.offset,i=t.targetDimensions;this.dragging.item=e,this.placeholder=a.d(this.dragging.item),this.$set(e,"dragging",!0),this.placeholder.label="",this.placeholder.id="placeholder",this.placeholder.w=i.x+"px",this.placeholder.h=i.y+"px",this.placeholder.xCorrection=i.x/2,this.placeholder.yCorrection=i.y/2,this.placeholder.x=n.x-this.placeholder.xCorrection,this.placeholder.y=n.y-this.placeholder.yCorrection,this.initialLayout=a.e(this.areas)},dragUpdate:function(t){var e=this;if(this.dragging.item){this.dragging.offset=t.offset,this.$set(this.placeholder,"x",t.offset.x-this.placeholder.xCorrection),this.$set(this.placeholder,"y",t.offset.y-this.placeholder.yCorrection),this.setDragAreas([]),this.addDragArea(this.dragging.item);var n=document.querySelector(".dragging");this.dragging.offset.x>n.offsetLeft+n.offsetWidth&&this.$set(this.dragging.item,"x",this.dragging.item.x+1),this.dragging.offset.x<n.offsetLeft&&this.$set(this.dragging.item,"x",this.dragging.item.x-1),this.dragging.item.x<0&&(this.dragging.item.x=0),this.dragging.item.x>=this.columns.length&&(this.dragging.item.x=this.columns.length-1),this.dragging.offset.y>n.offsetTop+n.offsetHeight&&this.$set(this.dragging.item,"y",this.dragging.item.y+1),this.dragging.offset.y<n.offsetTop&&this.$set(this.dragging.item,"y",this.dragging.item.y-1),this.dragging.item.y<0&&(this.dragging.item.y=0),this.dragging.item.y>=this.rows.length&&(this.dragging.item.y=this.rows.length-1),this.initialLayout.forEach(function(t){t.id!==e.dragging.item.id&&e.addDragArea(a.a(e.dragAreas,t,e.columns.length-1,e.rows.length-1))})}},dragEnd:function(t){this.dragging.item&&(this.dragAreas&&this.setAreas(this.dragAreas),this.$delete(this.dragging.item,"dragging"),this.dragging.item=null,this.dragging.offset.x=0,this.dragging.offset.y=0,this.setDragAreas(null))},resizeStart:function(t){var e=t.item,n=t.offset;this.resizing.item=e,this.$set(e,"resizing",!0),this.resizing.offsetStart=n,this.initialLayout=a.e(this.areas)},resizeUpdate:function(t){var e=this;if(this.resizing.item){var n=this.resizing.offset||{x:0,y:0};this.resizing.offset=t.offset,this.setDragAreas([]),this.addDragArea(this.resizing.item);var i=document.querySelector(".resizing");n.x<this.resizing.offset.x&&this.resizing.offset.x+this.resizing.offsetStart.x>i.offsetLeft+i.offsetWidth&&this.$set(this.resizing.item,"w",this.resizing.item.w+1),n.x>this.resizing.offset.x&&this.resizing.offset.x+this.resizing.offsetStart.x<i.offsetLeft+i.offsetWidth&&this.$set(this.resizing.item,"w",this.resizing.item.w-1),this.resizing.item.w<1&&(this.resizing.item.w=1),this.resizing.item.w+this.resizing.item.x>this.columns.length&&(this.resizing.item.w=this.columns.length-this.resizing.item.x),n.y<this.resizing.offset.y&&this.resizing.offset.y+this.resizing.offsetStart.y>i.offsetTop+i.offsetHeight&&this.$set(this.resizing.item,"h",this.resizing.item.h+1),n.y>this.resizing.offset.y&&this.resizing.offset.y+this.resizing.offsetStart.y<i.offsetTop+i.offsetHeight&&this.$set(this.resizing.item,"h",this.resizing.item.h-1),this.resizing.item.h<1&&(this.resizing.item.h=1),this.resizing.item.h+this.resizing.item.y>this.rows.length&&(this.resizing.item.h=this.rows.length-this.resizing.item.y),this.initialLayout.forEach(function(t){t.id!==e.resizing.item.id&&e.addDragArea(a.a(e.dragAreas,t,e.columns.length-1,e.rows.length-1))})}},resizeEnd:function(t){this.resizing.item&&(this.dragAreas&&this.setAreas(this.dragAreas),this.$delete(this.resizing.item,"resizing"),this.resizing.item=null,this.resizing.offset.x=0,this.resizing.offset.y=0,this.setDragAreas(null))}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),r=n.n(i),a=n(2);e.default={name:"grid-item",props:["item"],data:function(){return{renaming:!1,renamingLabel:""}},computed:r()({},n.i(a.b)(["areas"]),{style:function(){return this.$store.getters.itemStyle(this.item)},classes:function(){return{"grid-area":!0,dragging:this.item.dragging,resizing:this.item.resizing}},gridOrigin:function(){return this.$parent.$refs&&this.$parent.$refs.gridContainer?{x:this.$parent.$refs.gridContainer.offsetLeft,y:this.$parent.$refs.gridContainer.offsetTop}:{x:0,y:0}}}),directives:{focusoninsert:{inserted:function(t){t.focus()}}},methods:r()({},n.i(a.c)(["removeArea"]),{handleRename:function(){var t=this;if(!this.renaming||!this.renamingLabel||this.areas.find(function(e){return e.label===t.renamingLabel}))return this.renamingLabel="",void(this.renaming=!1);this.item.label=this.renamingLabel,this.renamingLabel="",this.renaming=!1}}),mounted:function(){var t=this;this.$refs.label.addEventListener("mousedown",function(e){0===e.button&&(t.renaming=!0,t.renamingLabel=t.item.label,e.preventDefault(),e.stopPropagation())}),this.$el.addEventListener("mousedown",function(e){if(0===e.button&&"input"!==e.target.localName&&"span"!==e.target.localName){e.preventDefault();var n={x:e.pageX-t.gridOrigin.x,y:e.pageY-t.gridOrigin.y},i={x:e.target.clientWidth,y:e.target.clientHeight};t.$emit("dragStart",{item:t.item,offset:n,targetDimensions:i});var r=e.clientX,a=e.clientY,s=function e(n){window.removeEventListener("mouseup",e,!0),window.removeEventListener("mousemove",o,!0);var i={x:n.clientX-r,y:n.clientY-a};t.$emit("dragEnd",{offset:i})},o=function(e){var n={x:e.pageX-t.gridOrigin.x,y:e.pageY-t.gridOrigin.y};t.$emit("dragUpdate",{offset:n})};window.addEventListener("mouseup",s,!0),window.addEventListener("mousemove",o,!0)}}),this.$resizeHandle=this.$refs.resizeHandle,this.$resizeHandle&&this.$resizeHandle.addEventListener("mousedown",function(e){e.preventDefault(),e.stopPropagation();var n={x:e.pageX-t.gridOrigin.x,y:e.pageY-t.gridOrigin.y};t.$emit("resizeStart",{item:t.item,offset:n});var i=e.clientX,r=e.clientY,a=function e(n){window.removeEventListener("mouseup",e,!0),window.removeEventListener("mousemove",s,!0);var a={x:n.clientX-i,y:n.clientY-r};t.$emit("resizeEnd",{offset:a})},s=function(e){var n={x:e.clientX-i,y:e.clientY-r};t.$emit("resizeUpdate",{offset:n})};window.addEventListener("mouseup",a,!0),window.addEventListener("mousemove",s,!0)})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app-header"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(65),r=n.n(i),a=n(66),s=n.n(a),o=n(15),u=n.n(o);e.default={name:"hello",components:{Editor:r.a,GridContainer:s.a,GridItem:u.a}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function i(t){n(62)}var r=n(0)(n(24),n(75),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(58)}var r=n(0)(n(25),n(71),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(61)}var r=n(0)(n(26),n(74),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(57)}var r=n(0)(n(28),n(70),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(59)}var r=n(0)(n(29),n(72),i,null,null);t.exports=r.exports},function(t,e,n){var i=n(0)(null,n(77),null,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("router-link",{staticClass:"header__a",attrs:{to:"/"}},[t._v("Grid-Awesome")]),t._v(" "),n("router-link",{staticClass:"header__a right",attrs:{to:"/about"}},[t._v("About")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[n("div",{staticClass:"inputs"},[n("div",{staticClass:"input"},[n("p",{staticClass:"center"},[t._v("Grid Template Areas: "+t._s(t.areas.length))]),t._v(" "),n("button",{staticClass:"input__button input__button--add",on:{click:t.addArea}},[t._v("Add an area")])]),t._v(" "),n("div",{staticClass:"input"},[n("p",{staticClass:"center"},[t._v("Grid Template Columns: "+t._s(t.columns.length))]),t._v(" "),t._l(t.columns,function(e,i){return n("div",[t._v("\n          Column "+t._s(i+1)+" \n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"column.size"}],staticClass:"input__input--size",attrs:{type:"number",name:"size",size:"5",disabled:"auto"===e.units},domProps:{value:e.size},on:{input:function(t){t.target.composing||(e.size=t.target.value)}}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.units,expression:"column.units"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});e.units=t.target.multiple?n:n[0]}}},[n("option",{attrs:{val:"auto"}},[t._v("auto")]),t._v(" "),n("option",{attrs:{val:"%"}},[t._v("%")]),t._v(" "),n("option",{attrs:{val:"em"}},[t._v("em")]),t._v(" "),n("option",{attrs:{val:"rem"}},[t._v("rem")]),t._v(" "),n("option",{attrs:{val:"fr"}},[t._v("fr")]),t._v(" "),n("option",{attrs:{val:"px"}},[t._v("px")]),t._v(" "),n("option",{attrs:{val:"vw"}},[t._v("vw")])]),t._v(" "),t.columns.length>1?n("button",{staticClass:"input__button input__button--remove",on:{click:function(n){t.removeColumn(e)}}},[t._v("X")]):t._e()])}),t._v(" "),n("button",{staticClass:"input__button input__button--add",on:{click:t.addColumn}},[t._v("Add Column")]),t._v("Remove Column")],2),t._v(" "),n("div",{staticClass:"input"},[n("p",{staticClass:"center"},[t._v("Grid Template Rows: "+t._s(t.rows.length))]),t._v(" "),t._l(t.rows,function(e,i){return n("div",[t._v("\n          Row "+t._s(i+1)+" \n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"row.size"}],staticClass:"input__input--size",attrs:{type:"number",name:"size",size:"5",disabled:"auto"===e.units},domProps:{value:e.size},on:{input:function(t){t.target.composing||(e.size=t.target.value)}}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.units,expression:"row.units"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});e.units=t.target.multiple?n:n[0]}}},[n("option",{attrs:{val:"auto"}},[t._v("auto")]),t._v(" "),n("option",{attrs:{val:"%"}},[t._v("%")]),t._v(" "),n("option",{attrs:{val:"em"}},[t._v("em")]),t._v(" "),n("option",{attrs:{val:"rem"}},[t._v("rem")]),t._v(" "),n("option",{attrs:{val:"fr"}},[t._v("fr")]),t._v(" "),n("option",{attrs:{val:"px"}},[t._v("px")]),t._v(" "),n("option",{attrs:{val:"vh"}},[t._v("vh")])]),t._v(" "),t.rows.length>1?n("button",{staticClass:"input__button input__button--remove",on:{click:function(n){t.removeRow(e)}}},[t._v("X")]):t._e()])}),t._v(" "),n("button",{staticClass:"input__button input__button--add",on:{click:t.addRow}},[t._v("Add Row")])],2),t._v(" "),n("div",{staticClass:"input"},[n("p",{staticClass:"center"},[t._v("Grid Column Gap")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.colGap.size,expression:"colGap.size"}],staticClass:"input__input--size",attrs:{type:"number",name:"size",size:"5"},domProps:{value:t.colGap.size},on:{input:function(e){e.target.composing||(t.colGap.size=e.target.value)}}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.colGap.units,expression:"colGap.units"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.colGap.units=e.target.multiple?n:n[0]}}},[n("option",{attrs:{val:"%"}},[t._v("%")]),t._v(" "),n("option",{attrs:{val:"em"}},[t._v("em")]),t._v(" "),n("option",{attrs:{val:"rem"}},[t._v("rem")]),t._v(" "),n("option",{attrs:{val:"px"}},[t._v("px")])])]),t._v(" "),n("div",{staticClass:"input"},[n("p",{staticClass:"center"},[t._v("Grid Row Gap")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.rowGap.size,expression:"rowGap.size"}],staticClass:"input__input--size",attrs:{type:"number",name:"size",size:"5"},domProps:{value:t.rowGap.size},on:{input:function(e){e.target.composing||(t.rowGap.size=e.target.value)}}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.rowGap.units,expression:"rowGap.units"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.rowGap.units=e.target.multiple?n:n[0]}}},[n("option",{attrs:{val:"%"}},[t._v("%")]),t._v(" "),n("option",{attrs:{val:"em"}},[t._v("em")]),t._v(" "),n("option",{attrs:{val:"rem"}},[t._v("rem")]),t._v(" "),n("option",{attrs:{val:"px"}},[t._v("px")])])]),t._v(" "),n("div",{staticClass:"input"},[n("p",{staticClass:"center"},[t._v("Justify Items")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.justify.value,expression:"justify.value"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.justify.value=e.target.multiple?n:n[0]}}},[n("option",{attrs:{val:""}}),t._v(" "),n("option",{attrs:{val:"stretch"}},[t._v("stretch")]),t._v(" "),n("option",{attrs:{val:"center"}},[t._v("center")]),t._v(" "),n("option",{attrs:{val:"start"}},[t._v("start")]),t._v(" "),n("option",{attrs:{val:"end"}},[t._v("end")])])]),t._v(" "),n("div",{staticClass:"input"},[n("p",{staticClass:"center"},[t._v("Align Items")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.align.value,expression:"align.value"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.align.value=e.target.multiple?n:n[0]}}},[n("option",{attrs:{val:""}}),t._v(" "),n("option",{attrs:{val:"stretch"}},[t._v("stretch")]),t._v(" "),n("option",{attrs:{val:"center"}},[t._v("center")]),t._v(" "),n("option",{attrs:{val:"start"}},[t._v("start")]),t._v(" "),n("option",{attrs:{val:"end"}},[t._v("end")])])])]),t._v(" "),n("div",{staticClass:"css-output"},[n("button",{staticClass:"input__button button--clipboard",on:{click:function(e){t.copyTextToClipboard(t.css)}}},[t._v("Copy to Clipboard")]),t._v("\n      CSS: \n      "+t._s(t.css)+"\n    ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello content"},[n("editor"),t._v(" "),n("grid-container")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes,style:t.style},[t.renaming?n("input",{directives:[{name:"model",rawName:"v-model",value:t.renamingLabel,expression:"renamingLabel"},{name:"focusoninsert",rawName:"v-focusoninsert"}],staticClass:"input--rename",attrs:{type:"text"},domProps:{value:t.renamingLabel},on:{blur:t.handleRename,keypress:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.handleRename(e)},input:function(e){e.target.composing||(t.renamingLabel=e.target.value)}}}):t._e(),t._v(" "),n("span",{ref:"label",staticClass:"text"},[t._v(t._s(t.item.label))]),t._v(" "),n("span",{staticClass:"remove-button",on:{click:function(e){t.removeArea(t.item)}}},[t._v("x")]),t._v(" "),n("div",{ref:"resizeHandle",staticClass:"resize-handle"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"gridContainer",staticClass:"grid-container",style:t.gridStyle},[this.dragAreas?t._l(t.dragAreas,function(t,e){return n("grid-item",{key:e,attrs:{item:t}})}):t._l(t.areas,function(e,i){return n("grid-item",{key:i,attrs:{item:e},on:{dragStart:t.dragStart,dragUpdate:t.dragUpdate,dragEnd:t.dragEnd,resizeStart:t.resizeStart,resizeUpdate:t.resizeUpdate,resizeEnd:t.resizeEnd}})}),t._v(" "),t.dragging.item?n("grid-item",{key:"placeholder",attrs:{item:t.placeholder}}):t._e()],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"about-content padded"},[n("h3",{staticClass:"center"},[t._v("About Grid Awesome")]),t._v(" "),n("div",{staticClass:"center"},[n("strong",[t._v("Quickly and easily create css "),n("span",{staticStyle:{color:"#428E9C"}},[t._v("display"),n("span",{staticStyle:{color:"#000"}},[t._v(":")]),t._v(" grid")]),t._v("; boilerplate.")])]),t._v(" "),n("p",[t._v("Use Grid-Awesome to generate boilerplate css for grid layouts using the css "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"}},[n("span",{staticStyle:{color:"#428E9C"}},[t._v("display"),n("span",{staticStyle:{color:"#000"}},[t._v(":")]),t._v(" grid")]),t._v(";")]),t._v(" property.")]),t._v(" "),n("p",[t._v("Combined with media queries, completely customize the site layout with just a few lines of CSS (hide area 3 and change display order on mobile):")]),t._v(" "),n("pre",[t._v('@supports (grid-area: auto) \n  /* mobile first */\n  .grid-container{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto auto;\n    grid-template-areas:\n    "area2"\n    "area1"\n    "area4";\n  }\n  .area1 {\n    grid-area: area1;\n  }\n  .area2 {\n    grid-area: area2;\n  }\n  .area3 {\n    grid-area: area3;\n  }\n  .area4 {\n    grid-area: area4;\n  }\n\n  /* desktop */\n  @media screen and (min-width: 768px) {\n    .grid-container{\n      display: grid;\n      grid-template-columns: 3fr 4fr;\n      grid-template-rows: 10rem 15rem 20rem;\n      grid-template-areas:\n      "area1 area1"\n      "area2 area3"\n      "area4 area4";\n    }\n  }\n}')]),t._v("\nHTML:\n"),n("pre",[t._v('<div class="grid-container">\n  <div class="area1"></div>\n  <div class="area2"></div>\n  <div class="area3"></div>\n  <div class="area4"></div>\n</div>\n\n')])]),t._v(" "),n("div",{staticClass:"footer"},[n("div",[t._v("Powered by "),n("a",{attrs:{href:"https://vuejs.org/"}},[n("img",{attrs:{src:"static/img/vue-logo.png"}})])]),t._v(" "),n("div",{staticClass:"div--margintop"},[t._v("Built by "),n("a",{attrs:{href:"http://louisbourque.ca/"}},[t._v("Louis Bourque")]),t._v(".")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site",attrs:{id:"app"}},[n("app-header"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"404 center"},[n("p",[t._v("Page not found")])])}]}}],[19]);
//# sourceMappingURL=app.a395a40f1c82e226478f.js.map