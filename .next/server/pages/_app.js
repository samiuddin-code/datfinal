/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AppReducer.js":
/*!*******************************!*\
  !*** ./context/AppReducer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst AppReducer = (state, action)=>{\n    switch(action.type){\n        case \"MODAL_STATE\":\n            return {\n                ...state,\n                modal: action.payload\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0FwcFJlZHVjZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGFBQWEsQ0FBQ0MsT0FBT0M7SUFDekIsT0FBT0EsT0FBT0MsSUFBSTtRQUNoQixLQUFLO1lBQ0gsT0FBTztnQkFDTCxHQUFHRixLQUFLO2dCQUNSRyxPQUFPRixPQUFPRyxPQUFPO1lBQ3pCO1FBQ0E7WUFDRSxPQUFPSjtJQUNYO0FBQ0Y7QUFDQSxpRUFBZUQsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdHdlYnNpdGUvLi9jb250ZXh0L0FwcFJlZHVjZXIuanM/M2I2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBcHBSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnTU9EQUxfU1RBVEUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1vZGFsOiBhY3Rpb24ucGF5bG9hZFxuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBBcHBSZWR1Y2VyOyJdLCJuYW1lcyI6WyJBcHBSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibW9kYWwiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AppReducer.js\n");

/***/ }),

/***/ "./context/GlobalState.js":
/*!********************************!*\
  !*** ./context/GlobalState.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalContext: () => (/* binding */ GlobalContext),\n/* harmony export */   GlobalProvider: () => (/* binding */ GlobalProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AppReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppReducer */ \"./context/AppReducer.js\");\n\n\n//import AppReducer from '@/context/AppReducer';\n\n// Initial state\nconst initialState = {\n    modal: false\n};\n// Create context\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\n// Provider component\nconst GlobalProvider = ({ children })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_AppReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState);\n    // Actions\n    function modalState() {\n        dispatch({\n            type: \"MODAL_STATE\",\n            payload: !state.modal\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            modal: state.modal,\n            modalState\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Developer\\\\Downloads\\\\datconsultancy-beta-main\\\\datconsultancy-beta-main\\\\context\\\\GlobalState.js\",\n        lineNumber: 25,\n        columnNumber: 11\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0dsb2JhbFN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ3pELGdEQUFnRDtBQUNWO0FBRXRDLGdCQUFnQjtBQUNoQixNQUFNSSxlQUFlO0lBQ25CQyxPQUFNO0FBQ1I7QUFFQSxpQkFBaUI7QUFDVixNQUFNQyw4QkFBZ0JMLG9EQUFhQSxDQUFDRyxjQUFjO0FBRXpELHFCQUFxQjtBQUNkLE1BQU1HLGlCQUFpQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN6QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsaURBQVVBLENBQUNDLG1EQUFVQSxFQUFFQztJQUVqRCxVQUFVO0lBQ1YsU0FBU087UUFDUEQsU0FBUztZQUNQRSxNQUFNO1lBQ05DLFNBQVMsQ0FBQ0osTUFBTUosS0FBSztRQUN2QjtJQUNGO0lBRUEscUJBQVEsOERBQUNDLGNBQWNRLFFBQVE7UUFBQ0MsT0FBTztZQUNyQ1YsT0FBT0ksTUFBTUosS0FBSztZQUNsQk07UUFDRjtrQkFDR0g7Ozs7OztBQUVMLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXR3ZWJzaXRlLy4vY29udGV4dC9HbG9iYWxTdGF0ZS5qcz8xMjU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuLy9pbXBvcnQgQXBwUmVkdWNlciBmcm9tICdAL2NvbnRleHQvQXBwUmVkdWNlcic7XG5pbXBvcnQgQXBwUmVkdWNlciBmcm9tICcuL0FwcFJlZHVjZXInO1xuXG4vLyBJbml0aWFsIHN0YXRlXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1vZGFsOmZhbHNlXG59XG5cbi8vIENyZWF0ZSBjb250ZXh0XG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcblxuLy8gUHJvdmlkZXIgY29tcG9uZW50XG5leHBvcnQgY29uc3QgR2xvYmFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihBcHBSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIC8vIEFjdGlvbnNcbiAgZnVuY3Rpb24gbW9kYWxTdGF0ZSgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnTU9EQUxfU1RBVEUnLFxuICAgICAgcGF5bG9hZDogIXN0YXRlLm1vZGFsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgbW9kYWw6IHN0YXRlLm1vZGFsLFxuICAgIG1vZGFsU3RhdGUsXG4gIH19PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPik7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJBcHBSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwibW9kYWwiLCJHbG9iYWxDb250ZXh0IiwiR2xvYmFsUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJtb2RhbFN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/GlobalState.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sass_public_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/sass/public.scss */ \"./public/scss/public.scss\");\n/* harmony import */ var _sass_public_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_public_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/GlobalState */ \"./context/GlobalState.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_5__]);\naxios__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n //nprogress module\n\n\n\n//Binding events. \nnext_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeStart\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_2___default().start());\nnext_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_2___default().done());\nnext_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeError\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_2___default().done());\nnprogress__WEBPACK_IMPORTED_MODULE_2___default().configure({\n    showSpinner: false\n});\n/* axios defaults */ axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].defaults.baseURL = \"https://sandbox.api.datconsultancy.com/web-api/v1.0\";\naxios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].defaults.headers.common[\"x-api-key\"] = \"KHKJHSKHASD7686ASDHKSHDAKSHDKHASDAASDKH86868ASDVV\";\naxios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].defaults.headers.common[\"Access-Control-Allow-Origin\"] = \"*\";\naxios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].defaults.headers.post[\"Content-Type\"] = \"application/x-www-form-urlencoded\";\n/* render component */ function MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.GlobalProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Developer\\\\Downloads\\\\datconsultancy-beta-main\\\\datconsultancy-beta-main\\\\pages\\\\_app.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Developer\\\\Downloads\\\\datconsultancy-beta-main\\\\datconsultancy-beta-main\\\\pages\\\\_app.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNDLENBQUMsa0JBQWtCO0FBQzFCO0FBQzRCO0FBQzdCO0FBQzFCLGtCQUFrQjtBQUNsQkEseURBQWEsQ0FBQ0ssRUFBRSxDQUFDLG9CQUFvQixJQUFNSixzREFBZTtBQUMxREQseURBQWEsQ0FBQ0ssRUFBRSxDQUFDLHVCQUF1QixJQUFNSixxREFBYztBQUM1REQseURBQWEsQ0FBQ0ssRUFBRSxDQUFDLG9CQUFvQixJQUFNSixxREFBYztBQUN6REEsMERBQW1CLENBQUM7SUFBRVEsYUFBYTtBQUFNO0FBQ3pDLGtCQUFrQixHQUNsQk4sc0RBQWMsQ0FBQ1EsT0FBTyxHQUFHQyxxREFBc0I7QUFDL0NULHNEQUFjLENBQUNZLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLFlBQVksR0FBRztBQUM3Q2Isc0RBQWMsQ0FBQ1ksT0FBTyxDQUFDQyxNQUFNLENBQUMsOEJBQThCLEdBQUc7QUFDL0RiLHNEQUFjLENBQUNZLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRztBQUM5QyxvQkFBb0IsR0FDcEIsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ2xCLGdFQUFjQTtrQkFDYiw0RUFBQ2lCO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdHdlYnNpdGUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7IC8vbnByb2dyZXNzIG1vZHVsZVxuaW1wb3J0ICdAL3Nhc3MvcHVibGljLnNjc3MnXG5pbXBvcnQgeyBHbG9iYWxQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dC9HbG9iYWxTdGF0ZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vL0JpbmRpbmcgZXZlbnRzLiBcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7IFxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpOyBcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTsgIFxuTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KTtcbi8qIGF4aW9zIGRlZmF1bHRzICovXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuQVBJX0RPTUFJTjtcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWyd4LWFwaS1rZXknXSA9ICdLSEtKSFNLSEFTRDc2ODZBU0RIS1NIREFLU0hES0hBU0RBQVNES0g4Njg2OEFTRFZWJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nXSA9ICcqJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbi8qIHJlbmRlciBjb21wb25lbnQgKi9cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxHbG9iYWxQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0dsb2JhbFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sIm5hbWVzIjpbIlJvdXRlciIsIk5Qcm9ncmVzcyIsIkdsb2JhbFByb3ZpZGVyIiwiYXhpb3MiLCJldmVudHMiLCJvbiIsInN0YXJ0IiwiZG9uZSIsImNvbmZpZ3VyZSIsInNob3dTcGlubmVyIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIkFQSV9ET01BSU4iLCJoZWFkZXJzIiwiY29tbW9uIiwicG9zdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/scss/public.scss":
/*!*********************************!*\
  !*** ./public/scss/public.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();