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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n\\tbackground-color: lightcyan;\\n\\tfont-family: 'Roboto', arial, sans-serif;\\n\\tdisplay: flex;\\n\\tjustify-content: flex-start;\\n\\talign-content: center;\\n\\tflex-direction: column;\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\theight: 100vh;\\n}\\n\\n.fixed-center {\\n\\tposition: fixed;\\n\\ttop: 50%;\\n\\tleft: 50%;\\n\\ttransform: translate(-50%, -50%);\\n}\\n\\n#main-nav {\\n\\twidth: 100%;\\n\\tbackground-color: red;\\n\\tborder-top: .225rem solid black;\\n\\tborder-bottom: .225rem solid black;\\n}\\n\\n#main-nav ul {\\n\\tborder: 1px solid rgb(212, 20, 20); \\n\\tlist-style: none; \\n\\tmargin: 0; \\n\\tpadding: 0; \\n\\tdisplay: flex; \\n\\tjustify-content: center;\\n\\talign-items: center;\\n}\\n\\n#main-nav li {\\n\\tcolor: white;\\n\\tlist-style-type: none;\\n\\tpadding: 1rem 2rem;\\n\\tfont-size: 1.5rem;\\n\\tborder: .2rem solid transparent;\\n\\tuser-select: none;\\n\\tcursor: pointer;\\n}\\n\\n#main-nav li:hover {\\n\\tbackground-color: gold;\\n\\tcolor: red;\\n\\tborder-color: white;\\n\\ttransition: ease-out 1s;\\n}\\n\\n#main-logo {\\n\\tdisplay: block;\\n\\tmargin: 0 auto;\\n\\tmax-width: 100%;\\n\\theight: auto;\\n\\tmax-height: 100%;\\n}\\n\\n#div-logo {\\n\\twidth: auto;\\n\\theight: 25vh;\\n\\tflex-shrink: 0;\\n}\\n\\n#content {\\n\\twidth: 75%;\\n\\tmargin: 0 auto;\\n\\tpadding: 1.5rem 3rem;\\n\\toverflow-y: scroll;\\n\\tbackground-color: black;\\n}\\n\\n.content-image {\\n\\tfloat: left;\\n\\tmargin-right: 1rem;\\n}\\n\\n.content-header {\\n\\tcolor: gold;\\n\\twhite-space: nowrap;\\n}\\n\\n.content-header h2 {\\n\\tmargin: .25rem 0;\\n\\tpadding: .25rem 0;\\n\\tfont-size: 2rem;\\n}\\n\\n.content-copy {\\n\\tcolor: red;\\n\\tfont-size: 1.1rem;\\n\\ttext-align: justify;\\n}\\n\\n#menu-grid {\\n}\\n\\n.menu-item {\\n\\tcolor: white;\\n\\tmargin-bottom: 1.5rem;\\n}\\n\\n.menu-item-main {\\n\\tmargin-bottom: .5rem;\\n\\tdisplay: flex;\\n\\talign-items: baseline;\\n}\\n\\n.menu-item h3 {\\n\\tfont-size: 1.5rem;\\n\\tdisplay: inline;\\n\\tpadding: 0;\\n\\tmargin: 0;\\n}\\n\\n.menu-dots {\\n\\tflex: 1;\\n\\toverflow: hidden;\\n\\tpadding-left: .75rem;\\n\\tfont-size: 1.5rem;\\n\\tletter-spacing: .25rem;\\n\\tuser-select: none;\\n}\\n\\n.menu-price {\\n\\tfont-size: 1.5rem;\\n\\tpadding-left: .75rem;\\n\\tfloat: right;\\n}\\n\\n.menu-description {\\n\\tpadding-right: 10%;\\n\\tfont-size: 1.25rem;\\n}\\n\\n\\n@media (max-width: 900px) {\\n\\t* {\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\t#content {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: flex-start;\\n\\t\\talign-items: center;\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t.content-header {\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.content-image {\\n\\t\\tfloat: none;\\n\\t\\tmargin: 0 auto;\\n\\t\\twidth: auto;\\n\\t\\theight: 50vw;\\n\\t}\\n\\n\\t.content-image img {\\n\\t\\tmax-width: 100%;\\n\\t\\theight: auto;\\n\\t\\tmax-height: 100%;\\n\\t}\\n\\n\\t.content-copy {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\t.menu-dots {\\n\\t\\twidth: 10px; /* I have no idea why this works */\\n\\t}\\n}\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contentContact = () => {\n  // Root div\n  const divMain = document.getElementById(\"content\");\n  // Image for contact tab\n  const divHomeImage = document.createElement(\"div\");\n  divHomeImage.id = \"contact-image\";\n  divHomeImage.classList.add(\"content-image\");\n  divHomeImage.innerHTML = \"<img src='./images/mchughs_logo_white.png' />\";\n  // Header for contact tab\n  const divHomeHeader = document.createElement(\"div\");\n  divHomeHeader.id = \"contact-header\";\n  divHomeHeader.classList.add(\"content-header\");\n  divHomeHeader.innerHTML = \"<h2>Contact Us</h2>\";\n  // About for contact tab\n  const divHomeCopy = document.createElement(\"div\");\n  divHomeCopy.id = \"contact-copy\";\n  divHomeCopy.classList.add(\"content-copy\");\n  divHomeCopy.innerText = \"Copy will follow, maybe...\"\n  // Add content to page\n  divMain.append(divHomeImage, divHomeHeader, divHomeCopy);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentContact);\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contentHome = () => {\n  // Root div\n  const divMain = document.getElementById(\"content\");\n  // Image for home tab\n  const divHomeImage = document.createElement(\"div\");\n  divHomeImage.id = \"home-image\";\n  divHomeImage.classList.add(\"content-image\");\n  divHomeImage.innerHTML = \"<img src='./images/mchughs_logo_red.png' />\";\n  // Header for home tab\n  const divHomeHeader = document.createElement(\"div\");\n  divHomeHeader.id = \"home-header\";\n  divHomeHeader.classList.add(\"content-header\");\n  divHomeHeader.innerHTML = \"<h2>Welcome to McHugh's</h2>\";\n  // About for home tab\n  const divHomeCopy = document.createElement(\"div\");\n  divHomeCopy.id = \"home-copy\";\n  divHomeCopy.classList.add(\"content-copy\");\n  divHomeCopy.innerHTML = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor aliquam nulla facilisi cras fermentum odio eu. Aenean et tortor at risus viverra adipiscing at in tellus. Est sit amet facilisis magna. Viverra accumsan in nisl nisi scelerisque. Aenean euismod elementum nisi quis eleifend. Et malesuada fames ac turpis. Magna etiam tempor orci eu lobortis elementum nibh tellus. Risus at ultrices mi tempus imperdiet. Sed odio morbi quis commodo odio aenean sed adipiscing. Massa eget egestas purus viverra accumsan. Tincidunt eget nullam non nisi. Dolor purus non enim praesent. Orci nulla pellentesque dignissim enim. Velit scelerisque in dictum non. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Velit euismod in pellentesque massa. Interdum velit euismod in pellentesque massa placerat. Massa tincidunt dui ut ornare lectus sit amet est. A iaculis at erat pellentesque adipiscing.<br><br>Vitae sapien pellentesque habitant morbi tristique senectus. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Magnis dis parturient montes nascetur ridiculus mus mauris. Et netus et malesuada fames ac turpis. Massa placerat duis ultricies lacus sed turpis. Ipsum faucibus vitae aliquet nec. Lacus sed turpis tincidunt id aliquet risus feugiat in. Senectus et netus et malesuada fames ac. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Semper auctor neque vitae tempus. Eu feugiat pretium nibh ipsum consequat nisl vel. Fermentum iaculis eu non diam phasellus vestibulum. Et tortor at risus viverra adipiscing. Eget mi proin sed libero enim sed. Purus non enim praesent elementum facilisis. Vulputate enim nulla aliquet porttitor lacus. Curabitur gravida arcu ac tortor dignissim convallis aenean. A condimentum vitae sapien pellentesque habitant.\"\n  // Add content to page\n  divMain.append(divHomeImage, divHomeHeader, divHomeCopy);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentHome);\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst populateNav = () => {\n  // Create and populate navigation bar\n  const navBar = document.createElement(\"nav\");\n  navBar.id = \"main-nav\";\n  const navList = document.createElement(\"ul\");\n  const navItems = [\"home\", \"menu\", \"contact\"];\n  navItems.forEach((item) => {\n\tconst listItem = document.createElement(\"li\");\n\tlistItem.id = `nav-${ item }`;\n\tlistItem.innerText = item;\n\tnavList.append(listItem);\n    document.addEventListener(\"click\", pageNav);\n  });\n  navBar.append(navList);\n  document.body.prepend(navBar);\n}\n\nfunction setFavicon(favImg) {\n  const headTitle = document.querySelector('head');\n  const setFavicon = document.createElement('link');\n  setFavicon.setAttribute('rel','shortcut icon');\n  setFavicon.setAttribute('href', favImg);\n  headTitle.appendChild(setFavicon);\n}\n\nconst populateLogo = () => {\n  const mainLogo = document.createElement(\"div\");\n  mainLogo.innerHTML = '<img src=\"./images/mchughs_logo_tagline.png\" id=\"main-logo\" />'\n  mainLogo.id = \"div-logo\";\n  document.body.prepend(mainLogo);\n}\n\nfunction clearPage() {\n  const mainDiv = document.getElementById(\"content\");\n  while (mainDiv.firstChild) {\n    mainDiv.removeChild(mainDiv.lastChild);\n  }\n}\n\nfunction pageNav(navBtn) {\n  const linkTarget = navBtn.target.id;\n  switch (linkTarget) {\n    case \"nav-home\":\n      clearPage();\n      (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n      break;\n    case \"nav-menu\":\n      clearPage();\n      (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n      break;\n    case \"nav-contact\":\n      clearPage();\n      (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n      break;\n  }\n}\n\nwindow.onload = () => {\n  setFavicon('./images/mchughs_logo_red.png');\n  populateNav();\n  populateLogo();\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contentMenu = () => {\n  const divMain = document.getElementById(\"content\");\n  const divMenu = document.createElement(\"div\");\n  divMenu.id = \"menu-grid\";\n  divMain.append(divMenu);\n  fetch(\"./menu.json\")\n    .then(response => response.json())\n    .then(menu => {\n      let i = 0;\n      menu.forEach(item => {\n\t\tconst divMenuItem = document.createElement(\"div\");\n\t\tdivMenuItem.id = `menu-item-${ i }`;\n\t\tdivMenuItem.classList.add(\"menu-item\");\n\t\tdivMenuItem.innerHTML = `\n          <div class=\"menu-item-main\">\n            <h3>${ item.name }</h3>\n            <span class=\"menu-dots\">${ \".\".repeat(10000) }</span>\n            <span class=\"menu-price\">${ item.price }</span>\n          </div>\n          <div class=\"menu-description\">${ item.description }</div>\n\t\t`;\n        divMenu.append(divMenuItem);\n        i++;\n      });\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentMenu);\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;