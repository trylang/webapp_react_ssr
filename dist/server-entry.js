module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/public/",r(r.s=4)}([function(e,t,r){"use strict";e.exports=r(5)},function(e,t,r){"use strict";e.exports=r(6)},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return App});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),enterModule,reactHotLoader,leaveModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule,enterModule&&enterModule(module);class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"This is an app!!!")}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default,reactHotLoader&&reactHotLoader.register(App,"App","E:\\self\\webapp_react_ssr\\client\\views\\App.jsx"),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(2)(module))},function(e,t,r){"use strict";r.r(t),function(e){var n,o=r(1),u=r.n(o),l=r(3);(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(0)).enterModule)&&n(e);const a=u.a.createElement(l.a,null);var c,i;t.default=a,(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(0)).default)&&c.register(a,"default","E:\\self\\webapp_react_ssr\\client\\server-entry.js"),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(0)).leaveModule)&&i(e)}.call(this,r(2)(e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(1))&&"object"==typeof n&&"default"in n?n.default:n;t.AppContainer=function(e){return o.Children.only(e.children)},t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}},function(e,t,r){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,_=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,u,l,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,u,l,a],i=0;(e=Error(t.replace(/%s/g,function(){return c[i++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||h}function j(){}function w(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var P=w.prototype=new j;P.constructor=w,n(P,g.prototype),P.isPureReactComponent=!0;var k={current:null},E={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function M(e,t,r){var n=void 0,o={},l=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(l=""+t.key),t)S.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var i=Array(c),f=0;f<c;f++)i[f]=arguments[f+2];o.children=i}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:u,type:e,key:l,ref:a,props:o,_owner:E.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var L=/\/+/g,$=[];function R(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function H(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var c=!1;if(null===t)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case u:case l:c=!0}}if(c)return n(o,t,""===r?"."+q(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var i=0;i<t.length;i++){var f=r+q(a=t[i],i);c+=e(a,f,n,o)}else if(f=null===t||"object"!=typeof t?null:"function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),i=0;!(a=t.next()).done;)c+=e(a=a.value,f=r+q(a,i++),n,o);else"object"===a&&m("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,n,r,function(e){return e}):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(L,"$&/")+"/")+r)),n.push(e))}function T(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(L,"$&/")+"/"),H(e,I,t=R(t,u,n,o)),A(t)}function G(){var e=k.current;return null===e&&m("321"),e}var U={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return T(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;H(e,D,t=R(null,null,t,r)),A(t)},count:function(e){return H(e,function(){return null},null)},toArray:function(e){var t=[];return T(e,t,null,function(e){return e}),t},only:function(e){return C(e)||m("143"),e}},createRef:function(){return{current:null}},Component:g,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return G().useCallback(e,t)},useContext:function(e,t){return G().useContext(e,t)},useEffect:function(e,t){return G().useEffect(e,t)},useImperativeHandle:function(e,t,r){return G().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return G().useLayoutEffect(e,t)},useMemo:function(e,t){return G().useMemo(e,t)},useReducer:function(e,t,r){return G().useReducer(e,t,r)},useRef:function(e){return G().useRef(e)},useState:function(e){return G().useState(e)},Fragment:a,StrictMode:c,Suspense:_,createElement:M,cloneElement:function(e,t,r){null==e&&m("267",e);var o=void 0,l=n({},e.props),a=e.key,c=e.ref,i=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,i=E.current),void 0!==t.key&&(a=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)S.call(t,o)&&!x.hasOwnProperty(o)&&(l[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))l.children=r;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];l.children=f}return{$$typeof:u,type:e.type,key:a,ref:c,props:l,_owner:i}},createFactory:function(e){var t=M.bind(null,e);return t.type=e,t},isValidElement:C,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:i,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentOwner:E,assign:n}},B={default:U},W=B&&U||B;e.exports=W.default||W},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,l,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var i in r=Object(arguments[c]))o.call(r,i)&&(a[i]=r[i]);if(n){l=n(r);for(var f=0;f<l.length;f++)u.call(r,l[f])&&(a[l[f]]=r[l[f]])}}return a}}]);