(function(e){function a(a){for(var n,c,i=a[0],o=a[1],l=a[2],p=0,_=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&_.push(s[c][0]),s[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(a);while(_.length)_.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],n=!0,i=1;i<t.length;i++){var o=t[i];0!==s[o]&&(n=!1)}n&&(r.splice(a--,1),e=c(c.s=t[0]))}return e}var n={},s={app:0},r=[];function c(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=n,c.d=function(e,a,t){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)c.d(t,n,function(a){return e[a]}.bind(null,n));return t},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=o;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"0025":function(e,a,t){},"30db":function(e,a,t){"use strict";t("0025")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),s=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-app",[n("v-container",[n("v-row",{staticClass:"d-flex justify-content-center mb-2 mt-2"},[n("b-form-input",{staticClass:"col-8",attrs:{size:"lg",placeholder:"Find package"},on:{input:e.searchFunction},model:{value:e.searchItem,callback:function(a){e.searchItem=a},expression:"searchItem"}})],1),e.GET_PACKAGES.length?[n("v-row",[e.GET_PACKAGES.length?n("b-table",{attrs:{id:"my-table",items:e.GET_PACKAGES,fields:e.fields,"per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.showLog},scopedSlots:e._u([{key:"cell(name)",fn:function(a){return[e._v(" "+e._s(a.item.package.name)+" ")]}},{key:"cell(keywords)",fn:function(a){return e._l(a.item.package.keywords,(function(a,t){return n("span",{key:t,staticClass:"packages-item__badge"},[e._v(e._s(a)+" ")])}))}},{key:"cell(version)",fn:function(a){return[e._v(" "+e._s(a.item.package.version)+" ")]}},{key:"cell(links)",fn:function(a){return e._l(a.item.package.links,(function(a,t){return n("a",{key:t,staticClass:"packages-item__link",attrs:{href:a,target:"_blank"}},[n("v-icon",{attrs:{dense:"",color:"black"}},[e._v(" "+e._s(e.setPackageIcon(t))+" ")])],1)}))}}],null,!1,3585406173)}):e._e()],1),n("b-pagination",{staticClass:"d-flex justify-content-center",attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"my-table"},model:{value:e.currentPage,callback:function(a){e.currentPage=a},expression:"currentPage"}})]:[n("v-row",[n("div",{staticClass:"col-12 empty-data"})])]],2),n("v-footer",e._b({staticClass:"portfolio",attrs:{padless:e.padless,dark:""}},"v-footer",e.localAttrs,!1),[n("div",{staticClass:"d-flex align-items-center"},[n("img",{staticClass:"portfolio__logo",attrs:{src:t("7702"),alt:""}}),n("div",{staticClass:"portfolio__info ml-5"},[n("div",{staticClass:"portfolio__name"},[e._v("Vladyslav Nahurnyi")]),n("a",{staticClass:"portfolio__link",attrs:{href:"https://github.com/snowdenplayer"}},[e._v("GitHub")])])])]),e.MODAL_SHOW?n("Modal"):e._e()],1)},r=[],c=t("1da1"),i=t("5530"),o=(t("96cf"),t("2f62")),l=(t("f9e3"),t("2dd8"),function(e,a){var t=null;return function(){for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];var c=this;t&&clearTimeout(t),t=setTimeout((function(){e.apply(c,s)}),a)}}),u={npm:"npm",homepage:"web",repository:"github",bugs:"bug"},p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"modal"},[t("b-container",{attrs:{fluid:""}},[t("b-row",[t("b-col",[t("div",{staticClass:"modal__window p-4"},[t("div",{staticClass:"packages__item"},[t("div",{staticClass:"d-flex align-start justify-content-between flex-wrap flex-column flex-sm-row"},[t("div",{staticClass:"packages-item__name"},[t("span",{staticClass:"packages-item__header mr-2"},[e._v("Package name:")]),e._v(" "+e._s(e.currentPackage.package.name)+" ")]),t("div",{staticClass:"packages-item__version"},[t("span",{staticClass:"packages-item__header mr-2"},[e._v("Package version:")]),e._v(" "+e._s(e.currentPackage.package.version)+" ")])]),t("div",{staticClass:"packages-item__description my-2"},[e._v(" "+e._s(e.currentPackage.package.description)+" ")]),e.currentPackage.package.author?t("div",{staticClass:"packages-item__author"},[t("span",{staticClass:"packages-item__header mr-2"},[e._v("Author:")]),e.currentPackage.package.author.name?t("div",[t("span",{staticClass:"packages-item__small-header mr-2"},[e._v("Name author:")]),e._v(" "+e._s(e.currentPackage.package.author.name)+" ")]):e._e(),e.currentPackage.package.author.username?t("div",[t("span",{staticClass:"packages-item__small-header mr-2"},[e._v("Username author:")]),e._v(" "+e._s(e.currentPackage.package.author["username"])+" ")]):e._e(),e.currentPackage.package.author.email?t("div",[t("span",{staticClass:"packages-item__small-header mr-2"},[e._v("Email author:")]),e._v(" "+e._s(e.currentPackage.package.author.email)+" ")]):e._e()]):e._e(),t("div",{staticClass:"packages__item-maintainers"},[t("span",{staticClass:"packages-item__header "},[e._v("Maintainers:")]),t("div",{staticClass:"packages-item__maintainers-info"},e._l(e.currentPackage.package.maintainers,(function(a,n){return t("div",{key:n,staticClass:"my-3"},[a.name?t("div",[t("span",{staticClass:"packages-item__small-header mr-3"},[e._v("Maintainer name:")]),e._v(e._s(a.name)+" ")]):e._e(),a.username?t("div",[t("span",{staticClass:"packages-item__small-header mr-3"},[e._v("Maintainer username:")]),e._v(e._s(a.username)+" ")]):e._e(),a.email?t("div",[t("span",{staticClass:"packages-item__small-header mr-3"},[e._v("Maintainer email:")]),e._v(e._s(a.email)+" ")]):e._e()])})),0)]),t("div",{staticClass:"d-flex align-center align-sm-start justify-space-between mt-2 mt-sm-5"},[t("div",{staticClass:"packages-item__keywords d-flex flex-wrap"},e._l(e.currentPackage.package.keywords,(function(a,n){return t("span",{key:n,staticClass:"keywords__item"},[e._v(e._s(a)+" ")])})),0),t("div",{staticClass:"packages-item__social justify-end"},e._l(e.currentPackage.package.links,(function(a,n){return t("a",{key:n,staticClass:"packages-item__link",attrs:{href:a,target:"_blank"}},[t("v-icon",{attrs:{dense:"",color:"black"}},[e._v(e._s(e.setPackageIcon(n)))])],1)})),0)])]),t("button",{staticClass:"modal__btn-close",on:{click:e.TOGLE_MODAL}},[t("v-icon",{attrs:{small:"",color:"#4D5058"}},[e._v("mdi-close")])],1)])])],1)],1)],1)},_=[],m={name:"Modal",computed:Object(i["a"])({},Object(o["e"])(["currentPackage"])),methods:Object(i["a"])(Object(i["a"])({},Object(o["d"])(["TOGLE_MODAL"])),{},{setPackageIcon:function(e){return"mdi-".concat(u[e])}})},d=m,f=(t("30db"),t("2877")),g=t("6544"),k=t.n(g),v=t("132d"),h=Object(f["a"])(d,p,_,!1,null,null,null),b=h.exports;k()(h,{VIcon:v["a"]});var y={name:"App",data:function(){return{perPage:10,currentPage:1,searchItem:"",fields:[{key:"name",label:"Name"},{key:"keywords",label:"Keywords"},{key:"version",label:"Version"},{key:"links",label:"Links"}],showModal:!1}},components:{Modal:b},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])(["GET_PACKAGES","MODAL_SHOW"])),{},{rows:function(){return this.GET_PACKAGES.length}}),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["b"])(["getPackages","showCurrentPackage"])),Object(o["d"])(["TOGLE_MODAL"])),{},{searchFunction:l((function(e){e.length>1&&this.getPackages(e)}),350),setPackageIcon:function(e){return"mdi-".concat(u[e])},showLog:function(e){var a=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.showCurrentPackage(e);case 2:a.showModal=!a.showModal;case 3:case"end":return t.stop()}}),t)})))()}}),watch:{MODAL_SHOW:function(){this.MODAL_SHOW?document.documentElement.style.overflow="hidden":document.documentElement.style.overflow="auto"}}},w=y,C=(t("5c0b"),t("7496")),P=t("a523"),O=t("553a"),A=t("0fd9"),E=Object(f["a"])(w,s,r,!1,null,null,null),j=E.exports;k()(E,{VApp:C["a"],VContainer:P["a"],VFooter:O["a"],VIcon:v["a"],VRow:A["a"]});var M=t("bc3a"),x=t.n(M);n["default"].use(o["a"],x.a);var G=new o["a"].Store({state:{packages:[],currentPackage:{},showModal:!1},mutations:{SET_PACKAGES:function(e,a){e.packages=a},SET_CURRENT_PACKAGE:function(e,a){e.currentPackage=a},TOGLE_MODAL:function(e){e.showModal=!e.showModal}},actions:{getPackages:function(e,a){var t=e.commit;x.a.get("http://registry.npmjs.com/-/v1/search?text=".concat(a,"&size=100&quality=1.0&maintenance=0.0&popularity=0.0")).then((function(e){t("SET_PACKAGES",e.data.objects)}))},showCurrentPackage:function(e,a){var t=e.commit;t("SET_CURRENT_PACKAGE",a),t("TOGLE_MODAL")}},getters:{GET_PACKAGES:function(e){return e.packages},GET_CURRENT_PACKAGE:function(e){return e.currentPackage},MODAL_SHOW:function(e){return e.showModal}},modules:{}}),S=t("5f5b"),T=t("f309");n["default"].use(T["a"]);var L=new T["a"]({});n["default"].config.productionTip=!1,n["default"].use(S["a"]),new n["default"]({store:G,vuetify:L,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,a,t){"use strict";t("9c0c")},7702:function(e,a,t){e.exports=t.p+"img/portfolio.5cb10bbe.jpg"},"9c0c":function(e,a,t){}});
//# sourceMappingURL=app.d1076d66.js.map