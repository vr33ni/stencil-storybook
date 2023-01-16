/*! For license information please see 225.13f2712e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstencil_design_system=self.webpackChunkstencil_design_system||[]).push([[225],{"./dist/esm/my-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{my_button:()=>MyButton});var _index_ebe7d145_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-ebe7d145.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}));const MyButton=class{constructor(hostRef){(0,_index_ebe7d145_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.label=void 0,this.variant=void 0,this.color=void 0,this.size=void 0,this.disabled=void 0,this.href=void 0}render(){return(0,_index_ebe7d145_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_ebe7d145_js__WEBPACK_IMPORTED_MODULE_0__.a,null,(0,_index_ebe7d145_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:classnames("button","s"===this.size&&`button--size-${this.size}`,"outline"===this.variant?`button--variant-outline-${this.color}`:`button--variant-${this.color}`,this.disabled&&"button--disabled")},this.label,(0,_index_ebe7d145_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null,this.label)))}};MyButton.style=":host{display:block}.button{display:inline-block;padding:10px 15px;text-align:center;text-decoration:none;vertical-align:middle;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.button.button--size-s{font-size:12px;padding:none}.button--variant-primary{text-align:center;background:green;color:white;border-color:black}.button--variant-outline-primary{background-color:white;color:black;border-color:green}.button--variant-secondary{text-align:center;background-color:red;color:white;border-color:black}.button--variant-outline-secondary{background-color:white;color:black;border-color:red}.button--disabled{border:1px solid #999999;background-color:#cccccc;color:#666666;cursor:not-allowed}"}}]);