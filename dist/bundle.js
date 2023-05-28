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

/***/ "./components/difficulty-1.js":
/*!************************************!*\
  !*** ./components/difficulty-1.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   easyMode: () => (/* binding */ easyMode)\n/* harmony export */ });\nfunction easyMode(appEl) {\r\n  const appHtml = `<section class=\"gamebox\">\r\n    <div class=\"gamebox__timer\">Таймер      \r\n    </div>\r\n    <button class=\"gamebox__restart-button\">Начать заново</button>\r\n    <div class=\"gamebox__field\"> Поле для карт</div>  \r\n  </section>`;\r\n\r\n  appEl.innerHTML = appHtml;\r\n}\r\n\n\n//# sourceURL=webpack://cards/./components/difficulty-1.js?");

/***/ }),

/***/ "./difficulty-selection.js":
/*!*********************************!*\
  !*** ./difficulty-selection.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameDifficulty: () => (/* binding */ gameDifficulty)\n/* harmony export */ });\n/* harmony import */ var _components_difficulty_1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/difficulty-1.js */ \"./components/difficulty-1.js\");\n\r\n\r\nwindow.application = {\r\n  level: null,\r\n};\r\n\r\nfunction gameDifficulty(appEl) {\r\n  const renderGameDifficulty = (appEl) => {\r\n    const appHtml = `<section class=\"game\">\r\n        <div class=\"game__menu\">          \r\n            <h2 class=\"game__menu-heading\">\r\n                Выбери <br/>\r\n                сложность\r\n              </h2>\r\n            <form class=\"difficulty\" id=\"difficulty-form\">\r\n                <div class=\"difficulty-box\">\r\n                    <input class=\"difficulty__type\" type=\"radio\" id=\"game1\" name=\"game\" value=\"1\" checked>\r\n                    <label for=\"game1\">1</label>\r\n            \r\n                    <input class=\"difficulty__type\" type=\"radio\" id=\"game2\" name=\"game\" value=\"2\">\r\n                    <label for=\"game2\">2</label>\r\n            \r\n                    <input class=\"difficulty__type\" type=\"radio\" id=\"game3\" name=\"game\" value=\"3\">\r\n                    <label for=\"game3\">3</label>\r\n                </div>\r\n\r\n                <button class=\"game__menu-button\" type=\"submit\">Старт</button> \r\n            </form>\r\n        </div>\r\n    </section>`;\r\n    appEl.innerHTML = appHtml;\r\n  };\r\n  renderGameDifficulty(appEl);\r\n\r\n  const startButton = document.querySelector(\"#difficulty-form\");\r\n  // https://ru.stackoverflow.com/questions/845045/%D0%A1%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5-submit-%D0%B8-%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F\r\n  //   console.log(difficultyLevels);\r\n  //   console.log(startButton);\r\n  startButton.addEventListener(\"submit\", () => {\r\n    const difficultyLevels = document.querySelectorAll(\".difficulty__type\");\r\n    for (const difficultyLevel of difficultyLevels) {\r\n      if (difficultyLevel.checked) {\r\n        window.application.level = difficultyLevel.value;\r\n      }\r\n      (0,_components_difficulty_1_js__WEBPACK_IMPORTED_MODULE_0__.easyMode)(appEl);\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://cards/./difficulty-selection.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _difficulty_selection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./difficulty-selection.js */ \"./difficulty-selection.js\");\n\r\n\r\nconst appEl = document.getElementById('app');\r\n\r\n(0,_difficulty_selection_js__WEBPACK_IMPORTED_MODULE_0__.gameDifficulty)(appEl);\r\n\n\n//# sourceURL=webpack://cards/./main.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;