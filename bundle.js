/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\n:root {\\n    --yellow: #fbbf24;\\n    --orange: #f97316;\\n    --white: #fffbeb;\\n}\\n\\n::selection {\\n    background-color: var(--orange);\\n    color: var(--white);\\n}\\n\\nhtml {\\n    background-color: var(--orange);\\n    font-size: 16px;\\n}\\n\\nbody {\\n    background-color: var(--yellow);\\n    font-family: 'Plus Jakarta Sans', sans-serif;\\n    font-size: 1rem;\\n    color: var(--orange);\\n    height: 100vh;\\n    position: relative;\\n    overflow-x: hidden;\\n    /* Hide scrollbar */\\n    -ms-overflow-style: none;  /* IE and Edge */\\n    scrollbar-width: none;  /* Firefox */\\n}\\n\\n/* Hide scrollbar on safari */\\nbody::-webkit-scrollbar {\\n    display: none;\\n}\\n\\nh1, h2, h3 {\\n    font-weight: 800;\\n    letter-spacing: 0.2rem;\\n    text-transform: uppercase;\\n}\\n\\nh1 {\\n    font-size: 2.5rem;\\n}\\n\\nh2 {\\n    font-size: 1.8rem;\\n    border-bottom: 3px solid var(--orange);\\n    padding-bottom: 0.5rem;\\n}\\n\\nh3 {\\n    font-size: 1.2rem;\\n}\\n\\n/* NAVIGATION BAR */\\n.top-nav {\\n    display: flex;\\n    justify-content: space-between;\\n    height: 72px;\\n    z-index: 999;\\n    border-bottom: 3px solid var(--orange);\\n}\\n\\n.nav-logo {\\n    border-right: 3px solid var(--orange);\\n}\\n\\n.nav-logo > img {\\n    height: 3rem;\\n}\\n\\n.nav-links-container {\\n    list-style: none;\\n    display: flex;\\n    font-size: 1.2rem;\\n    font-weight: 800;\\n    letter-spacing: 0.2rem;\\n    text-transform: uppercase;\\n}\\n\\n.nav-logo, .nav-link {\\n    display: grid;\\n    align-items: center;\\n    padding: 0px 1.5rem;\\n}\\n\\n.nav-link {\\n    border-left: 3px solid var(--orange);\\n}\\n\\n.nav-link:hover {\\n    background-color: var(--orange);\\n    color: var(--white);\\n    cursor: pointer;\\n}\\n\\n.banner {\\n    display: grid;\\n    justify-content: center;\\n    padding: 0.5rem 0;\\n    background-color: var(--orange);\\n    color: var(--yellow);\\n    text-align: center;\\n}\\n\\n/* CONTENT CONTAINER */\\n#content {\\n    background-color: var(--yellow);\\n    padding: 48px 48px 96px 48px;\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n/* HOME PAGE */\\n.home-page {\\n    display: grid;\\n    row-gap: 2rem;\\n    width: 80%;\\n}\\n\\n.hero-section {\\n    display: grid;\\n    grid-template-columns: repeat( auto-fit, minmax(448px, 1fr) );\\n    gap: 2rem 4rem;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.hero-logo {\\n    display: grid;\\n    justify-content: center;\\n}\\n\\n.hero-heading {\\n    font-size: 4rem;\\n    line-height: 6rem;\\n}\\n\\n.hero-heading span {\\n    border-bottom: 5px solid var(--orange);\\n}\\n\\n.cta-container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.cta-container p {\\n    margin-top: 0.5rem;\\n}\\n\\n#view-menu-btn {\\n    font-family: 'Plus Jakarta Sans', sans-serif;\\n    font-weight: 800;\\n    letter-spacing: 0.2rem;\\n    text-transform: uppercase;\\n    font-size: 1.2rem;\\n    padding: 0.5rem 1.5rem;\\n    border: 3px solid var(--orange);\\n    background-color: var(--orange);\\n    color: var(--white);\\n    margin-top: 1rem;\\n}\\n\\n#view-menu-btn:hover {\\n    background-color: var(--yellow);\\n    color: var(--orange);\\n    cursor: pointer;\\n}\\n\\n/* ORDER PAGE */\\n.menu-page {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    width: 80%;\\n    gap: 2rem;\\n}\\n\\n.menu-container {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 4rem;\\n}\\n\\n.menu-section {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n}\\n\\n.items-container {\\n    display: grid;\\n    grid-template-columns: repeat( auto-fit, minmax(448px, 1fr) );\\n    gap: 2rem;\\n}\\n\\n.menu-item {\\n    display: grid;\\n    grid-template-columns: 1fr min-content;\\n    grid-template-rows: min-content 1fr;\\n    row-gap: 0.5rem;\\n}\\n\\n.item-title {\\n    width: 100%;\\n    display: flex;\\n}\\n\\n.item-title::after {\\n    content: \\\"\\\";\\n    flex: 1;\\n    border-bottom: 3px dotted var(--orange);\\n}\\n\\n.item-price {\\n    font-weight: 800;\\n    letter-spacing: 0.2rem;\\n    text-transform: uppercase;\\n    font-size: 1.2rem;\\n}\\n\\n.item-description {\\n    grid-column: 1 / -1;\\n}\\n\\n/* CONTACT PAGE */\\n.contact-page {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 2rem;\\n    align-items: center;\\n    width: 80%;\\n}\\n\\n.info-container {\\n  display: grid;\\n  grid-template-columns: repeat( auto-fit, minmax(240px, 1fr) );\\n  gap: 2rem 4rem;\\n  justify-content: center;\\n  width: 100%;\\n}\\n\\n.info-section {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.5rem;\\n}\\n\\n.day-container {\\n    display: flex;\\n    justify-content: space-between;\\n    gap: 2rem;\\n}\\n\\n.map {\\n    margin-top: 2rem;\\n    width: 100%;\\n    height: 592px;\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.map iframe {\\n    width: 100%;\\n    height: 100%;\\n}\\n\\n/* FOOTER */\\nfooter {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 0.5rem;\\n    padding: 0.5rem 0;\\n    background-color: var(--orange);\\n    color: var(--yellow);\\n    position: fixed;\\n    bottom: 0;\\n    right: 0;\\n    left: 0;\\n}\\n\\nfooter a {\\n    color: var(--yellow);\\n}\\n\\n@media screen and (max-width: 1024px) {\\n    .hero-section {\\n        gap: 0rem;\\n    }\\n\\n    .hero-heading {\\n        text-align: center;\\n    }\\n}\\n\\n@media screen and (max-width: 767px) {\\n\\n    :root {\\n        font-size: 14px;\\n    }\\n\\n    #content {\\n        padding: 24px 16px 96px 16px;\\n    }\\n\\n    .home-page, .menu-page, .contact-page {\\n        width: 100%;\\n    }\\n\\n    .home-page {\\n        row-gap: 4rem;\\n    }\\n\\n    .hero-logo {\\n        align-items: center;\\n    }\\n\\n    .hero-logo img {\\n        height: 80%;\\n    }\\n}\\n\\n@media screen and (max-width: 480px) {\\n    .hero-logo img {\\n        height: 60%;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-site/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-site/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-site/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-site/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-site/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-site/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-site/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-site/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-site/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-site/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_pageload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pageload */ \"./src/modules/pageload.js\");\n\n\n\n\n\n\nconst init = (function() {\n    (0,_modules_pageload__WEBPACK_IMPORTED_MODULE_4__.loadPage)();\n    \n    const homeBtn = document.getElementById('home-btn');\n    const contactBtn = document.getElementById('contact-btn');\n    const menuBtn = document.getElementById('menu-btn');\n\n    homeBtn.addEventListener('click', function() {\n        (0,_modules_pageload__WEBPACK_IMPORTED_MODULE_4__.resetContent)();\n        _modules_pageload__WEBPACK_IMPORTED_MODULE_4__.content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    });\n\n    contactBtn.addEventListener('click', function() {\n        (0,_modules_pageload__WEBPACK_IMPORTED_MODULE_4__.resetContent)();\n        _modules_pageload__WEBPACK_IMPORTED_MODULE_4__.content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    });\n\n    menuBtn.addEventListener('click', function() {\n        (0,_modules_pageload__WEBPACK_IMPORTED_MODULE_4__.resetContent)();\n        _modules_pageload__WEBPACK_IMPORTED_MODULE_4__.content.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    });\n})();\n\n\n\n\n\n//# sourceURL=webpack://restaurant-site/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const contactPage = document.createElement('div');\n    contactPage.classList.add('contact-page');\n\n    const h1 = contactPage.appendChild(document.createElement('h1'));\n    h1.textContent = 'Contact Us';\n\n    const createInfoContainer = (function() {\n        const infoContainer = contactPage.appendChild(document.createElement('div'));\n        infoContainer.classList.add('info-container');\n\n        const createContactInfoSection = (function() {\n            const contactInfoSection = infoContainer.appendChild(document.createElement('div'));\n            contactInfoSection.classList.add('info-section');\n\n            const h2 = contactInfoSection.appendChild(document.createElement('h2'));\n            h2.textContent = 'Phone/Email';\n\n            const phone = contactInfoSection.appendChild(document.createElement('div'));\n            phone.textContent = '+1 (800) 800 – 8000';\n\n            const email = contactInfoSection.appendChild(document.createElement('div'));\n            email.textContent = 'howdy@gritsandgriddles.com';\n        })();\n\n        const createHoursSection = (function() {\n            const hoursSection = infoContainer.appendChild(document.createElement('div'));\n            hoursSection.classList.add('info-section');\n\n            const h2 = hoursSection.appendChild(document.createElement('h2'));\n            h2.textContent = 'Hours';\n\n            const createDayContainers = (function() {\n                const days = [\n                    {name: 'Mon', open: '5:00', close: '9:00'},\n                    {name: 'Tue', open: '5:00', close: '9:00'},\n                    {name: 'Wed', open: '5:00', close: '9:00'},\n                    {name: 'Thu', open: '5:00', close: '9:00'},\n                    {name: 'Fri', open: '5:00', close: '11:00'},\n                    {name: 'Sat/Sun', open: '6:00', close: '8:00'},\n                ];\n\n                for (let i = 0; i < days.length; i++) {\n                    const dayContainer = hoursSection.appendChild(document.createElement('div'));\n                    dayContainer.classList.add('day-container');\n\n                    const day = dayContainer.appendChild(document.createElement('div'));\n                    day.textContent = days[i].name;\n\n                    const hours = dayContainer.appendChild(document.createElement('div'));\n                    hours.textContent = `${days[i].open}am – ${days[i].close}pm`;\n                }\n            })();\n        })();\n\n        const createLocationSection = (function() {\n            const locationSection = infoContainer.appendChild(document.createElement('div'));\n            locationSection.classList.add('info-section');\n\n            const h2 = locationSection.appendChild(document.createElement('h2'));\n            h2.textContent = 'Location';\n\n            const storeName = locationSection.appendChild(document.createElement('div'));\n            storeName.textContent = 'Grits & Griddles';\n\n            const address = locationSection.appendChild(document.createElement('div'));\n            address.textContent = '551 Krier Ln, Random Lake, WI 53075';\n\n            const ifOnlyText = locationSection.appendChild(document.createElement('div'));\n            ifOnlyText.textContent = 'If only this place existed...';\n        })();\n    })();\n\n    const createMap = (function() {\n        const map = contactPage.appendChild(document.createElement('div'));\n        map.classList.add('map');\n\n        const embed = map.appendChild(document.createElement('iframe'));\n        embed.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.4408197792063!2d-87.96818272283411!3d43.555696871106875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88049171727724d5%3A0x741e66e429a56866!2s551%20Krier%20Ln%2C%20Random%20Lake%2C%20WI%2053075!5e0!3m2!1sen!2sus!4v1684798541675!5m2!1sen!2sus'\n        embed.style.border = \"none\";\n        embed.referrerPolicy = 'no-referrer-when-downgrade';\n    })();\n\n    return contactPage;\n}\n\n//# sourceURL=webpack://restaurant-site/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload */ \"./src/modules/pageload.js\");\n\n\n\nfunction loadHome() {\n    const homePage = document.createElement('div');\n    homePage.classList.add('home-page');\n\n    const createHeroSection = (function() {\n        const heroSection = homePage.appendChild(document.createElement('div'));\n        heroSection.classList.add('hero-section');\n\n        const logo = heroSection.appendChild(document.createElement('div'));\n        logo.classList.add('hero-logo');\n        logo.innerHTML = `<img src=\"/src/images/hero-logo.png\" alt=\"Grits & Griddles logo\">`\n\n        const h1 = heroSection.appendChild(document.createElement('h1'));\n        h1.classList.add('hero-heading');\n        h1.innerHTML = '<span>All Things</span> Breakfast,<br>Served <span>All Day</span>';\n    })();\n\n    const createCTA = (function() {\n        const CTAContainer = homePage.appendChild(document.createElement('div'));\n        CTAContainer.classList.add('cta-container');\n\n        const h2 = CTAContainer.appendChild(document.createElement('h2'));\n        h2.textContent = 'Hungry?';\n        \n        const p = CTAContainer.appendChild(document.createElement('p'));\n        p.textContent = 'Come prepared! Pick out your order before dining with us.';\n\n        const btn = CTAContainer.appendChild(document.createElement('button'));\n        btn.id = 'view-menu-btn';\n        btn.textContent = 'View Menu';\n\n        btn.addEventListener('click', function() {\n            (0,_pageload__WEBPACK_IMPORTED_MODULE_1__.resetContent)();\n            _pageload__WEBPACK_IMPORTED_MODULE_1__.content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n        });\n    })();\n\n    return homePage;\n}\n\n//# sourceURL=webpack://restaurant-site/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const menuPage = document.createElement('div');\n    menuPage.classList.add('menu-page');\n\n    const h1 = menuPage.appendChild(document.createElement('h1'));\n    h1.textContent = 'Our Menu';\n\n    const createMenuContainer = (function() {\n        const menuContainer = menuPage.appendChild(document.createElement('div'));\n        menuContainer.classList.add('menu-container');\n\n        const createMenuSections = (function() {\n            const createMenuArray = function() {\n                class MenuSection {\n                    constructor(title, items) {\n                        this.title = title;\n                        this.items = items;\n                    }\n                }\n                \n                class MenuItem {\n                    constructor(title, price, description) {\n                        this.title = title;\n                        this.price = price;\n                        this.description = description;\n                    }\n                }\n                \n                const entrees = new MenuSection('Entrees', \n                    [   \n                        new MenuItem('The Grits & Griddles', 12, 'Our world-famous buttery grits topped with two sunny-side eggs and bacon crumbles. Served with sausage and even buttery-er toast.'),\n                        new MenuItem('Biscuits & Gravy', 10, 'Two sausage biscuits lathered in gravy and cheddar cheese.'),\n                        new MenuItem('Omelette', 12, 'Your choice of add-ins: sausage crumbles, bacon, ham, cheddar cheese, onions, peppers, and mushrooms.'),\n                        new MenuItem('Pancakes', 13, `Five of 'em. Topped with butter and served with a side of maple syrup.`),\n                    ]\n                );\n                \n                const sandwiches = new MenuSection('Sandwiches', \n                    [   \n                        new MenuItem('Bacon, Egg & Cheese Biscuit', 9, 'Is what it is.'),\n                        new MenuItem('Sausage, Egg & Cheese Bagel', 9, 'Like the other one, but with sausage and on a bagel.')\n                    ]\n                );\n                \n                const sides = new MenuSection('Sides', \n                    [   \n                        new MenuItem('Potatoes', 3, 'Add cheese and bacon crumbles for an extra $1... oh my...'),\n                        new MenuItem('Biscuit', 3, 'Dense yet fluffy. Dissolves in the mouth.'),\n                        new MenuItem('Grits', 3, 'Our world-famous buttery grits.'),\n                        new MenuItem('Fruit', 4, 'Strawberries, banana, watermelon, and blueberries.')\n                    ]\n                );\n                \n                const drinks = new MenuSection('Drinks', \n                    [   \n                        new MenuItem('Orange Juice', 2.5, 'Not freshly squeezed, but still tastes just fine.'),\n                        new MenuItem('Coffee', 2.5, 'No cream. No sugar. Both regular and decaf.')\n                    ]\n                );\n                \n                return [entrees, sandwiches, sides, drinks];\n            };\n\n            const menuArray = createMenuArray();\n\n            for (let i = 0; i < menuArray.length; i++) {\n                const menuSection = menuContainer.appendChild(document.createElement('div'));\n                menuSection.classList.add('menu-section');\n\n                const h2 = menuSection.appendChild(document.createElement('h2'));\n                h2.textContent = menuArray[i].title;\n\n                const itemContainer = menuSection.appendChild(document.createElement('div'));\n                itemContainer.classList.add('items-container');\n\n                for (let j = 0; j < menuArray[i].items.length; j++) {\n                    const menuItem = itemContainer.appendChild(document.createElement('div'));\n                    menuItem.classList.add('menu-item');\n\n                    const itemTitle = menuItem.appendChild(document.createElement('h3'));\n                    itemTitle.classList.add('item-title');\n                    itemTitle.textContent = menuArray[i].items[j].title;\n\n                    const itemPrice = menuItem.appendChild(document.createElement('div'));\n                    itemPrice.classList.add('item-price');\n                    itemPrice.textContent = menuArray[i].items[j].price;\n\n                    const itemDescription = menuItem.appendChild(document.createElement('p'));\n                    itemDescription.classList.add('item-description');\n                    itemDescription.textContent = menuArray[i].items[j].description;\n                }\n            }\n        })();\n    })();\n\n    return menuPage;\n}\n\n//# sourceURL=webpack://restaurant-site/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/pageload.js":
/*!*********************************!*\
  !*** ./src/modules/pageload.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   loadPage: () => (/* binding */ loadPage),\n/* harmony export */   resetContent: () => (/* binding */ resetContent)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n\n\nconst content = document.getElementById('content');\n\nconst resetContent = () => {\n    content.innerHTML = '';\n}\n\nconst loadPage = () => {\n    const createNav = (function() {\n        const nav = document.body.insertBefore(document.createElement('nav'), content);\n        \n        const createTopNav = (function() {\n            const topNav = nav.appendChild(document.createElement('div'));\n            topNav.classList.add('top-nav');\n\n            const navLogo = topNav.appendChild(document.createElement('div'));\n            navLogo.classList.add('nav-logo');\n            navLogo.innerHTML = `<img src=\"/src/images/egg-pan.svg\" alt=\"egg pan logo\" />`;\n\n            const ul = topNav.appendChild(document.createElement('ul'));\n            ul.classList.add('nav-links-container');\n\n            const homeBtn = ul.appendChild(document.createElement('li'));\n            homeBtn.classList.add('nav-link');\n            homeBtn.id = 'home-btn';\n            homeBtn.textContent = 'Home';\n\n            const menuBtn = ul.appendChild(document.createElement('li'));\n            menuBtn.classList.add('nav-link');\n            menuBtn.id = 'menu-btn';\n            menuBtn.textContent = 'Menu';\n\n            const contactBtn = ul.appendChild(document.createElement('li'));\n            contactBtn.classList.add('nav-link');\n            contactBtn.id = 'contact-btn';\n            contactBtn.textContent = 'Contact';\n        })();\n\n        const createBanner = (function() {\n            const banner = nav.appendChild(document.createElement('div'));\n            banner.classList.add('banner');\n\n            const h3 = banner.appendChild(document.createElement('h3'));\n            h3.textContent = 'An All-American Breakfast Diner Experience';\n        })();\n    })();\n\n    const createFooter = (function() {\n        const footer = document.body.appendChild(document.createElement('footer'));\n\n        const icon = footer.appendChild(document.createElement('a'));\n        icon.href = 'https://github.com/grntco';\n        icon.target = '_blank';\n        icon.title = 'GitHub';\n        icon.innerHTML = `<i class=\"fa-brands fa-github\"></i>`;\n\n        const name = footer.appendChild(document.createElement('div'));\n        name.textContent = 'Grant Collins';\n    })();\n\n    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n};\n\n\n\n//# sourceURL=webpack://restaurant-site/./src/modules/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;