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

/***/ "./src/js/analyze_guess.js":
/*!*********************************!*\
  !*** ./src/js/analyze_guess.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"analyzeGuess\": () => (/* binding */ analyzeGuess)\n/* harmony export */ });\n/* harmony import */ var _guess_counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guess_counter.js */ \"./src/js/guess_counter.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/js/index.js\");\n/* harmony import */ var _show_hint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show_hint.js */ \"./src/js/show_hint.js\");\n\r\n\r\n\r\nconst speechBox = document.getElementById(\"speech-box\");\r\nfunction analyzeGuess(guess) {\r\n    speechBox.innerText = guess;\r\n    speechBox?.classList.remove(\"red-border-color\", \"green-border-color\");\r\n    const guessNumber = +guess;\r\n    if (Number.isInteger(guessNumber) && guessNumber >= _index_js__WEBPACK_IMPORTED_MODULE_1__.minValue && guessNumber <= _index_js__WEBPACK_IMPORTED_MODULE_1__.maxValue) {\r\n        if (guessNumber === _index_js__WEBPACK_IMPORTED_MODULE_1__.secretNumber) {\r\n            speechBox?.classList.add(\"green-border-color\");\r\n            (0,_show_hint_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"victory\");\r\n            (0,_guess_counter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"valid\");\r\n            return true;\r\n        }\r\n        else if (guessNumber > _index_js__WEBPACK_IMPORTED_MODULE_1__.secretNumber) {\r\n            (0,_show_hint_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"tooHigh\");\r\n            (0,_guess_counter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"valid\");\r\n            return false;\r\n        }\r\n        else if (guessNumber < _index_js__WEBPACK_IMPORTED_MODULE_1__.secretNumber) {\r\n            (0,_show_hint_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"tooLow\");\r\n            (0,_guess_counter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"valid\");\r\n            return false;\r\n        }\r\n    }\r\n    speechBox?.classList.add(\"red-border-color\");\r\n    (0,_show_hint_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"invalid\");\r\n    (0,_guess_counter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"invalid\");\r\n    return false;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/analyze_guess.js?");

/***/ }),

/***/ "./src/js/get_random_number.js":
/*!*************************************!*\
  !*** ./src/js/get_random_number.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getRandomNumber)\n/* harmony export */ });\nfunction getRandomNumber(min = 0, max = 1000) {\r\n    max++;\r\n    let randomNumber = Math.round(Math.random() * max);\r\n    while (randomNumber < min || randomNumber >= max) {\r\n        randomNumber = Math.round(Math.random() * max);\r\n    } // only returns when the drawn number is higher than the minimun and is not higher than the max + 1\r\n    return randomNumber;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/get_random_number.js?");

/***/ }),

/***/ "./src/js/guess_counter.js":
/*!*********************************!*\
  !*** ./src/js/guess_counter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ guessCounter)\n/* harmony export */ });\nconst invalidGuessesTag = document.getElementById(\"invalid-guesses\");\r\nconst validGuessesTag = document.getElementById(\"valid-guesses\");\r\nconst totalGuessesTag = document.getElementById(\"total-guesses\");\r\nlet invalidCount = 0;\r\nlet validCount = 0;\r\nfunction guessCounter(guessType) {\r\n    if (guessType === \"invalid\") {\r\n        invalidCount++;\r\n        invalidGuessesTag.innerHTML = invalidCount.toString();\r\n    }\r\n    else if (guessType === \"valid\") {\r\n        validCount++;\r\n        validGuessesTag.innerHTML = validCount.toString();\r\n    }\r\n    totalGuessesTag.innerHTML = (invalidCount + validCount).toString();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/guess_counter.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maxValue\": () => (/* binding */ maxValue),\n/* harmony export */   \"minValue\": () => (/* binding */ minValue),\n/* harmony export */   \"secretNumber\": () => (/* binding */ secretNumber)\n/* harmony export */ });\n/* harmony import */ var _analyze_guess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analyze_guess.js */ \"./src/js/analyze_guess.js\");\n/* harmony import */ var _get_random_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_random_number.js */ \"./src/js/get_random_number.js\");\n/* harmony import */ var _set_ui_min_max__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set_ui_min_max.js */ \"./src/js/set_ui_min_max.js\");\n/* harmony import */ var _show_hint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show_hint.js */ \"./src/js/show_hint.js\");\n/* harmony import */ var _run_web_speech_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./run_web_speech.js */ \"./src/js/run_web_speech.js\");\n/* harmony import */ var _min_max_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./min_max_input.js */ \"./src/js/min_max_input.js\");\n/* harmony import */ var _local_storage_handler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local_storage_handler.js */ \"./src/js/local_storage_handler.js\");\n// Webpack imports\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst [minValue, maxValue] = (0,_local_storage_handler_js__WEBPACK_IMPORTED_MODULE_6__.getMinMax)();\r\nconst secretNumber = (0,_get_random_number_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(minValue, maxValue);\r\n(0,_set_ui_min_max__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(minValue, maxValue);\r\n(0,_run_web_speech_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\nconst reloadButton = document.getElementById(\"reload-button\");\r\nreloadButton.addEventListener(\"click\", () => window.location.reload());\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/local_storage_handler.js":
/*!*****************************************!*\
  !*** ./src/js/local_storage_handler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMinMax\": () => (/* binding */ getMinMax),\n/* harmony export */   \"saveMinMax\": () => (/* binding */ saveMinMax)\n/* harmony export */ });\nconst minKey = \"min_value\";\r\nconst maxKey = \"max_value\";\r\nfunction saveMinMax(min, max) {\r\n    localStorage.setItem(minKey, min.toString());\r\n    localStorage.setItem(maxKey, max.toString());\r\n}\r\nfunction getMinMax() {\r\n    let min = localStorage.getItem(minKey) ?? 0;\r\n    let max = localStorage.getItem(maxKey) ?? 100;\r\n    if (!isNaN(+min) && Number.isInteger(+min)) {\r\n        min = +min;\r\n    }\r\n    else {\r\n        min = 0;\r\n    }\r\n    if (!isNaN(+max) && Number.isInteger(+max)) {\r\n        max = +max;\r\n    }\r\n    else {\r\n        max = 0;\r\n    }\r\n    return [min, max];\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/local_storage_handler.js?");

/***/ }),

/***/ "./src/js/min_max_input.js":
/*!*********************************!*\
  !*** ./src/js/min_max_input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _local_storage_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local_storage_handler */ \"./src/js/local_storage_handler.js\");\n\r\nwindow.onload = () => {\r\n    const confirmButton = document.getElementById(\"change-button\");\r\n    confirmButton.addEventListener(\"click\", (event) => {\r\n        event.preventDefault();\r\n        analyzeValues();\r\n    });\r\n    const resetButton = document.getElementById(\"reset-min-max-button\");\r\n    resetButton.addEventListener(\"click\", (event) => {\r\n        event.preventDefault();\r\n        (0,_local_storage_handler__WEBPACK_IMPORTED_MODULE_0__.saveMinMax)(0, 1000);\r\n        window.location.reload();\r\n    });\r\n};\r\nfunction analyzeValues() {\r\n    let valid = true;\r\n    const minValueInput = document.getElementById(\"min-input\");\r\n    const maxValueInput = document.getElementById(\"max-input\");\r\n    const minValue = +minValueInput.value;\r\n    const maxValue = +maxValueInput.value;\r\n    if (!Number.isInteger(minValue) || !Number.isInteger(maxValue)) {\r\n        alert(\"Só são aceitos números inteiros.\");\r\n        valid = false;\r\n    }\r\n    if (minValue >= maxValue) {\r\n        valid = false;\r\n        alert(\"O valor máximo deve ser MAIOR que o valor mínimo.\");\r\n    }\r\n    if (valid) {\r\n        (0,_local_storage_handler__WEBPACK_IMPORTED_MODULE_0__.saveMinMax)(minValue, maxValue);\r\n        window.location.reload();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/min_max_input.js?");

/***/ }),

/***/ "./src/js/run_web_speech.js":
/*!**********************************!*\
  !*** ./src/js/run_web_speech.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ runWebSpeech)\n/* harmony export */ });\n/* harmony import */ var _analyze_guess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analyze_guess.js */ \"./src/js/analyze_guess.js\");\n\r\nvar victory = false;\r\nfunction runWebSpeech() {\r\n    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;\r\n    const recognition = new SpeechRecognition();\r\n    recognition.lang = \"pt-br\";\r\n    recognition.start();\r\n    recognition.addEventListener(\"result\", (guess) => {\r\n        let guessString = guess.results[0][0].transcript;\r\n        //sometimes web speech understand negative numbers with a whitespace between the - and the number\r\n        if (guessString.startsWith(\"- \"))\r\n            guessString = guessString.replaceAll(\" \", \"\");\r\n        if ((0,_analyze_guess_js__WEBPACK_IMPORTED_MODULE_0__.analyzeGuess)(guessString)) {\r\n            victory = true;\r\n            document.getElementById(\"reload-button\").classList.remove(\"invisible\");\r\n        }\r\n    });\r\n    recognition.addEventListener(\"end\", () => { if (!victory)\r\n        recognition.start(); });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/run_web_speech.js?");

/***/ }),

/***/ "./src/js/set_ui_min_max.js":
/*!**********************************!*\
  !*** ./src/js/set_ui_min_max.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setUiMinMax)\n/* harmony export */ });\nfunction setUiMinMax(min, max) {\r\n    const minSpan = document.getElementById(\"min-value\");\r\n    const maxSpan = document.getElementById(\"max-value\");\r\n    minSpan.innerHTML = min.toString();\r\n    maxSpan.innerHTML = max.toString();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/set_ui_min_max.js?");

/***/ }),

/***/ "./src/js/show_hint.js":
/*!*****************************!*\
  !*** ./src/js/show_hint.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showHint)\n/* harmony export */ });\nconst invalidoStr = `Entrada inválida <i class=\"fa-solid fa-skull\"></i>`;\r\nconst chuteBaixoStr = `O número secreto é maior <i class=\"fa-solid fa-arrow-up\"></i>`;\r\nconst chuteAltoStr = `O número secreto é menor <i class=\"fa-solid fa-arrow-down\"></i></i>`;\r\nconst vitoriaStr = `Você acertou! <i class=\"fa-solid fa-trophy\"></i>`;\r\nconst hintSpan = document.getElementById(\"dica\");\r\nfunction showHint(label) {\r\n    hintSpan?.classList.remove(\"invisible\");\r\n    switch (label) {\r\n        case \"invalid\":\r\n            hintSpan.innerHTML = invalidoStr;\r\n            break;\r\n        case \"tooLow\":\r\n            hintSpan.innerHTML = chuteBaixoStr;\r\n            break;\r\n        case \"tooHigh\":\r\n            hintSpan.innerHTML = chuteAltoStr;\r\n            break;\r\n        case \"victory\":\r\n            hintSpan.innerHTML = vitoriaStr;\r\n            break;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/show_hint.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;