self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/wuliuqi/index.tsx":
/*!**************************************!*\
  !*** ./components/wuliuqi/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var element_resize_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! element-resize-detector */ "./node_modules/element-resize-detector/src/element-resize-detector.js");
/* harmony import */ var element_resize_detector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_resize_detector__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\\u57F9\u8BAD\u5B66\u4E60\\boboan\\next-b\\components\\wuliuqi\\index.tsx";



var prefix = '/boboan.github.io';
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (_ref) {
  var breakpoints = _ref.breakpoints,
      spacing = _ref.spacing,
      palette = _ref.palette;
  return {
    root: {
      margin: '-20px -20px 0 -20px',
      overflow: 'hidden'
    },
    img: {
      marginTop: '-12%',
      marginLeft: '-25%',
      objectFit: 'cover',
      maxWidth: 'initial',
      width: '150%'
    }
  };
});
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var classes = useStyles();
  var imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var erd = element_resize_detector__WEBPACK_IMPORTED_MODULE_2___default()();
    erd.listenTo(rootRef.current, resize);
  }, []);

  function resize() {
    var height = imgRef.current.clientHeight;
    rootRef.current.style.height = "".concat(height / 2, "px");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    ref: rootRef,
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      ref: imgRef,
      className: classes.img,
      src: "".concat(prefix, "/images/heihei.png"),
      onLoad: resize
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 12
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93dWxpdXFpL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiYnJlYWtwb2ludHMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsInJvb3QiLCJtYXJnaW4iLCJvdmVyZmxvdyIsImltZyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJvYmplY3RGaXQiLCJtYXhXaWR0aCIsIndpZHRoIiwiY2xhc3NlcyIsImltZ1JlZiIsInVzZVJlZiIsInJvb3RSZWYiLCJ1c2VFZmZlY3QiLCJlcmQiLCJlbGVtZW50UmVzaXplRGV0ZWN0b3JNYWtlciIsImxpc3RlblRvIiwiY3VycmVudCIsInJlc2l6ZSIsImhlaWdodCIsImNsaWVudEhlaWdodCIsInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxtQkFBZjtBQUVBLElBQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUFBLE1BQUdDLFdBQUgsUUFBR0EsV0FBSDtBQUFBLE1BQWdCQyxPQUFoQixRQUFnQkEsT0FBaEI7QUFBQSxNQUF5QkMsT0FBekIsUUFBeUJBLE9BQXpCO0FBQUEsU0FBd0M7QUFDakVDLFFBQUksRUFBRTtBQUNGQyxZQUFNLEVBQUUscUJBRE47QUFFRkMsY0FBUSxFQUFFO0FBRlIsS0FEMkQ7QUFLakVDLE9BQUcsRUFBRTtBQUNEQyxlQUFTLEVBQUUsTUFEVjtBQUVEQyxnQkFBVSxFQUFFLE1BRlg7QUFHREMsZUFBUyxFQUFFLE9BSFY7QUFJREMsY0FBUSxFQUFFLFNBSlQ7QUFLREMsV0FBSyxFQUFFO0FBTE47QUFMNEQsR0FBeEM7QUFBQSxDQUFELENBQTVCO0FBY0EsNkJBQWUsc0NBQVk7QUFDdkIsTUFBTUMsT0FBTyxHQUFHZCxTQUFTLEVBQXpCO0FBQ0EsTUFBTWUsTUFBTSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBckI7QUFDQSxNQUFNQyxPQUFPLEdBQUdELDZDQUFNLENBQUMsSUFBRCxDQUF0QjtBQUNBRSxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxHQUFHLEdBQUdDLDhEQUEwQixFQUF0QztBQUNBRCxPQUFHLENBQUNFLFFBQUosQ0FBYUosT0FBTyxDQUFDSyxPQUFyQixFQUE4QkMsTUFBOUI7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUOztBQUlBLFdBQVNBLE1BQVQsR0FBa0I7QUFDZCxRQUFNQyxNQUFNLEdBQUdULE1BQU0sQ0FBQ08sT0FBUCxDQUFlRyxZQUE5QjtBQUNBUixXQUFPLENBQUNLLE9BQVIsQ0FBZ0JJLEtBQWhCLENBQXNCRixNQUF0QixhQUFrQ0EsTUFBTSxHQUFHLENBQTNDO0FBQ0g7O0FBQ0Qsc0JBQU87QUFBSyxPQUFHLEVBQUVQLE9BQVY7QUFBbUIsYUFBUyxFQUFFSCxPQUFPLENBQUNULElBQXRDO0FBQUEsMkJBQ0g7QUFBSyxTQUFHLEVBQUVVLE1BQVY7QUFBa0IsZUFBUyxFQUFFRCxPQUFPLENBQUNOLEdBQXJDO0FBQTBDLFNBQUcsWUFBS1QsTUFBTCx1QkFBN0M7QUFBOEUsWUFBTSxFQUFFd0I7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjcyZDBhZTI0ZmFhODEwNDNmMDcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IGVsZW1lbnRSZXNpemVEZXRlY3Rvck1ha2VyIGZyb20gJ2VsZW1lbnQtcmVzaXplLWRldGVjdG9yJ1xyXG5cclxuY29uc3QgcHJlZml4ID0gJy9ib2JvYW4uZ2l0aHViLmlvJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoeyBicmVha3BvaW50cywgc3BhY2luZywgcGFsZXR0ZSB9KSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIG1hcmdpbjogJy0yMHB4IC0yMHB4IDAgLTIwcHgnLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIGltZzoge1xyXG4gICAgICAgIG1hcmdpblRvcDogJy0xMiUnLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICctMjUlJyxcclxuICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgbWF4V2lkdGg6ICdpbml0aWFsJyxcclxuICAgICAgICB3aWR0aDogJzE1MCUnXHJcbiAgICB9XHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgICBjb25zdCBpbWdSZWYgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IHJvb3RSZWYgPSB1c2VSZWYobnVsbClcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXJkID0gZWxlbWVudFJlc2l6ZURldGVjdG9yTWFrZXIoKVxyXG4gICAgICAgIGVyZC5saXN0ZW5Ubyhyb290UmVmLmN1cnJlbnQsIHJlc2l6ZSlcclxuICAgIH0sIFtdKVxyXG4gICAgZnVuY3Rpb24gcmVzaXplKCkge1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGltZ1JlZi5jdXJyZW50LmNsaWVudEhlaWdodFxyXG4gICAgICAgIHJvb3RSZWYuY3VycmVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHQgLyAyfXB4YFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxkaXYgcmVmPXtyb290UmVmfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPGltZyByZWY9e2ltZ1JlZn0gY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gc3JjPXtgJHtwcmVmaXh9L2ltYWdlcy9oZWloZWkucG5nYH0gb25Mb2FkPXtyZXNpemV9Lz5cclxuICAgIDwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==