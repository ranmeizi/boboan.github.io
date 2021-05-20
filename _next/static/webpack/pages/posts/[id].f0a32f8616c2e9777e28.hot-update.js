self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layouts/default */ "./components/layouts/default.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/date */ "./components/date.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\\u57F9\u8BAD\u5B66\u4E60\\boboan\\next-b\\pages\\posts\\[id].js";




var prefix = '/boboan.github.io';
var __N_SSG = true;
function Post(_ref) {
  var postData = _ref.postData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_default__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: postData.title,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: postData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "".concat(prefix, "/prism/prism.css")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "".concat(prefix, "/prism/prism.js")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingXl),
        id: "titleH1",
        children: postData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightText),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date__WEBPACK_IMPORTED_MODULE_3__.default, {
          dateString: postData.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "note-view",
        dangerouslySetInnerHTML: {
          __html: postData.contentHtml
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = Post;

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW2lkXS5qcyJdLCJuYW1lcyI6WyJwcmVmaXgiLCJQb3N0IiwicG9zdERhdGEiLCJ0aXRsZSIsInV0aWxTdHlsZXMiLCJkYXRlIiwiX19odG1sIiwiY29udGVudEh0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBRyxtQkFBZjs7QUFDZSxTQUFTQyxJQUFULE9BQTRCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3pDLHNCQUNFLDhEQUFDLGdFQUFEO0FBQVEsU0FBSyxFQUFFQSxRQUFRLENBQUNDLEtBQXhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRRCxRQUFRLENBQUNDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxZQUFLSCxNQUFMO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQVEsV0FBRyxZQUFLQSxNQUFMO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVJLDJFQUFmO0FBQXFDLFVBQUUsRUFBQyxTQUF4QztBQUFBLGtCQUFtREYsUUFBUSxDQUFDQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVDLDJFQUFoQjtBQUFBLCtCQUNFLDhEQUFDLHFEQUFEO0FBQU0sb0JBQVUsRUFBRUYsUUFBUSxDQUFDRztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBMkIsK0JBQXVCLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRUosUUFBUSxDQUFDSztBQUFuQjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7S0FqQnVCTixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tpZF0uZjBhMzJmODYxNmMyZTk3NzdlMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL2RlZmF1bHQnXHJcbmltcG9ydCB7IGdldEFsbFBvc3RJZHMsIGdldFBvc3REYXRhIH0gZnJvbSAnLi4vLi4vbGliL3BhZ2luYXRpb25Qb3N0cydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RhdGUnXHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xyXG5jb25zdCBwcmVmaXggPSAnL2JvYm9hbi5naXRodWIuaW8nXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0RGF0YSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e3Bvc3REYXRhLnRpdGxlfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwb3N0RGF0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgJHtwcmVmaXh9L3ByaXNtL3ByaXNtLmNzc2B9IC8+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9e2Ake3ByZWZpeH0vcHJpc20vcHJpc20uanNgfT48L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8YXJ0aWNsZT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdYbH0gaWQ9J3RpdGxlSDEnPntwb3N0RGF0YS50aXRsZX08L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpZ2h0VGV4dH0+XHJcbiAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0RGF0YS5kYXRlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub3RlLXZpZXcnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGF0aHMgPSBnZXRBbGxQb3N0SWRzKClcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YShwYXJhbXMuaWQpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3REYXRhXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=