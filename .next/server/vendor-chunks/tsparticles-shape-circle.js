"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-circle";
exports.ids = ["vendor-chunks/tsparticles-shape-circle"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-circle/esm/CircleDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-circle/esm/CircleDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CircleDrawer: () => (/* binding */ CircleDrawer)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/Utils.js\");\n\nclass CircleDrawer {\n    draw(context, particle, radius) {\n        if (!particle.circleRange) {\n            particle.circleRange = {\n                min: 0,\n                max: Math.PI * 2\n            };\n        }\n        const circleRange = particle.circleRange;\n        context.arc(0, 0, radius, circleRange.min, circleRange.max, false);\n    }\n    getSidesCount() {\n        return 12;\n    }\n    particleInit(container, particle) {\n        const shapeData = particle.shapeData, angle = shapeData?.angle ?? {\n            max: 360,\n            min: 0\n        };\n        particle.circleRange = !(0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.isObject)(angle) ? {\n            min: 0,\n            max: angle * Math.PI / 180\n        } : {\n            min: angle.min * Math.PI / 180,\n            max: angle.max * Math.PI / 180\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2VzbS9DaXJjbGVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFDdkMsTUFBTUM7SUFDVEMsS0FBS0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRTtRQUM1QixJQUFJLENBQUNELFNBQVNFLFdBQVcsRUFBRTtZQUN2QkYsU0FBU0UsV0FBVyxHQUFHO2dCQUFFQyxLQUFLO2dCQUFHQyxLQUFLQyxLQUFLQyxFQUFFLEdBQUc7WUFBRTtRQUN0RDtRQUNBLE1BQU1KLGNBQWNGLFNBQVNFLFdBQVc7UUFDeENILFFBQVFRLEdBQUcsQ0FBQyxHQUFHLEdBQUdOLFFBQVFDLFlBQVlDLEdBQUcsRUFBRUQsWUFBWUUsR0FBRyxFQUFFO0lBQ2hFO0lBQ0FJLGdCQUFnQjtRQUNaLE9BQU87SUFDWDtJQUNBQyxhQUFhQyxTQUFTLEVBQUVWLFFBQVEsRUFBRTtRQUM5QixNQUFNVyxZQUFZWCxTQUFTVyxTQUFTLEVBQUVDLFFBQVFELFdBQVdDLFNBQVM7WUFDOURSLEtBQUs7WUFDTEQsS0FBSztRQUNUO1FBQ0FILFNBQVNFLFdBQVcsR0FBRyxDQUFDTiw0REFBUUEsQ0FBQ2dCLFNBQzNCO1lBQ0VULEtBQUs7WUFDTEMsS0FBSyxRQUFTQyxLQUFLQyxFQUFFLEdBQUk7UUFDN0IsSUFDRTtZQUFFSCxLQUFLLE1BQU9BLEdBQUcsR0FBR0UsS0FBS0MsRUFBRSxHQUFJO1lBQUtGLEtBQUssTUFBT0EsR0FBRyxHQUFHQyxLQUFLQyxFQUFFLEdBQUk7UUFBSTtJQUMvRTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aXRhMjIvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2VzbS9DaXJjbGVEcmF3ZXIuanM/ZDY1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmV4cG9ydCBjbGFzcyBDaXJjbGVEcmF3ZXIge1xuICAgIGRyYXcoY29udGV4dCwgcGFydGljbGUsIHJhZGl1cykge1xuICAgICAgICBpZiAoIXBhcnRpY2xlLmNpcmNsZVJhbmdlKSB7XG4gICAgICAgICAgICBwYXJ0aWNsZS5jaXJjbGVSYW5nZSA9IHsgbWluOiAwLCBtYXg6IE1hdGguUEkgKiAyIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2lyY2xlUmFuZ2UgPSBwYXJ0aWNsZS5jaXJjbGVSYW5nZTtcbiAgICAgICAgY29udGV4dC5hcmMoMCwgMCwgcmFkaXVzLCBjaXJjbGVSYW5nZS5taW4sIGNpcmNsZVJhbmdlLm1heCwgZmFsc2UpO1xuICAgIH1cbiAgICBnZXRTaWRlc0NvdW50KCkge1xuICAgICAgICByZXR1cm4gMTI7XG4gICAgfVxuICAgIHBhcnRpY2xlSW5pdChjb250YWluZXIsIHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlRGF0YSA9IHBhcnRpY2xlLnNoYXBlRGF0YSwgYW5nbGUgPSBzaGFwZURhdGE/LmFuZ2xlID8/IHtcbiAgICAgICAgICAgIG1heDogMzYwLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICB9O1xuICAgICAgICBwYXJ0aWNsZS5jaXJjbGVSYW5nZSA9ICFpc09iamVjdChhbmdsZSlcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICBtYXg6IChhbmdsZSAqIE1hdGguUEkpIC8gMTgwLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7IG1pbjogKGFuZ2xlLm1pbiAqIE1hdGguUEkpIC8gMTgwLCBtYXg6IChhbmdsZS5tYXggKiBNYXRoLlBJKSAvIDE4MCB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJpc09iamVjdCIsIkNpcmNsZURyYXdlciIsImRyYXciLCJjb250ZXh0IiwicGFydGljbGUiLCJyYWRpdXMiLCJjaXJjbGVSYW5nZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJQSSIsImFyYyIsImdldFNpZGVzQ291bnQiLCJwYXJ0aWNsZUluaXQiLCJjb250YWluZXIiLCJzaGFwZURhdGEiLCJhbmdsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-circle/esm/CircleDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-circle/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-circle/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadCircleShape: () => (/* binding */ loadCircleShape)\n/* harmony export */ });\n/* harmony import */ var _CircleDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircleDrawer */ \"(ssr)/./node_modules/tsparticles-shape-circle/esm/CircleDrawer.js\");\n\nasync function loadCircleShape(engine, refresh = true) {\n    await engine.addShape(\"circle\", new _CircleDrawer__WEBPACK_IMPORTED_MODULE_0__.CircleDrawer(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUN2QyxlQUFlQyxnQkFBZ0JDLE1BQU0sRUFBRUMsVUFBVSxJQUFJO0lBQ3hELE1BQU1ELE9BQU9FLFFBQVEsQ0FBQyxVQUFVLElBQUlKLHVEQUFZQSxJQUFJRztBQUN4RCIsInNvdXJjZXMiOlsid2VicGFjazovL21vdml0YTIyLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLWNpcmNsZS9lc20vaW5kZXguanM/NWU2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaXJjbGVEcmF3ZXIgfSBmcm9tIFwiLi9DaXJjbGVEcmF3ZXJcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQ2lyY2xlU2hhcGUoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRTaGFwZShcImNpcmNsZVwiLCBuZXcgQ2lyY2xlRHJhd2VyKCksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbIkNpcmNsZURyYXdlciIsImxvYWRDaXJjbGVTaGFwZSIsImVuZ2luZSIsInJlZnJlc2giLCJhZGRTaGFwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-circle/esm/index.js\n");

/***/ })

};
;