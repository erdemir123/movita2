"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-updater-wobble";
exports.ids = ["vendor-chunks/tsparticles-updater-wobble"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-updater-wobble/esm/Options/Classes/Wobble.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-wobble/esm/Options/Classes/Wobble.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Wobble: () => (/* binding */ Wobble)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/Utils.js\");\n/* harmony import */ var _WobbleSpeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WobbleSpeed */ \"(ssr)/./node_modules/tsparticles-updater-wobble/esm/Options/Classes/WobbleSpeed.js\");\n\n\nclass Wobble {\n    constructor(){\n        this.distance = 5;\n        this.enable = false;\n        this.speed = new _WobbleSpeed__WEBPACK_IMPORTED_MODULE_0__.WobbleSpeed();\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.distance !== undefined) {\n            this.distance = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.setRangeValue)(data.distance);\n        }\n        if (data.enable !== undefined) {\n            this.enable = data.enable;\n        }\n        if (data.speed !== undefined) {\n            if ((0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.isNumber)(data.speed)) {\n                this.speed.load({\n                    angle: data.speed\n                });\n            } else {\n                const rangeSpeed = data.speed;\n                if (rangeSpeed.min !== undefined) {\n                    this.speed.load({\n                        angle: rangeSpeed\n                    });\n                } else {\n                    this.speed.load(data.speed);\n                }\n            }\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvZXNtL09wdGlvbnMvQ2xhc3Nlcy9Xb2JibGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4RDtBQUNsQjtBQUNyQyxNQUFNRztJQUNUQyxhQUFjO1FBQ1YsSUFBSSxDQUFDQyxRQUFRLEdBQUc7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUc7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJTCxxREFBV0E7SUFDaEM7SUFDQU0sS0FBS0MsSUFBSSxFQUFFO1FBQ1AsSUFBSSxDQUFDQSxNQUFNO1lBQ1A7UUFDSjtRQUNBLElBQUlBLEtBQUtKLFFBQVEsS0FBS0ssV0FBVztZQUM3QixJQUFJLENBQUNMLFFBQVEsR0FBR0osaUVBQWFBLENBQUNRLEtBQUtKLFFBQVE7UUFDL0M7UUFDQSxJQUFJSSxLQUFLSCxNQUFNLEtBQUtJLFdBQVc7WUFDM0IsSUFBSSxDQUFDSixNQUFNLEdBQUdHLEtBQUtILE1BQU07UUFDN0I7UUFDQSxJQUFJRyxLQUFLRixLQUFLLEtBQUtHLFdBQVc7WUFDMUIsSUFBSVYsNERBQVFBLENBQUNTLEtBQUtGLEtBQUssR0FBRztnQkFDdEIsSUFBSSxDQUFDQSxLQUFLLENBQUNDLElBQUksQ0FBQztvQkFBRUcsT0FBT0YsS0FBS0YsS0FBSztnQkFBQztZQUN4QyxPQUNLO2dCQUNELE1BQU1LLGFBQWFILEtBQUtGLEtBQUs7Z0JBQzdCLElBQUlLLFdBQVdDLEdBQUcsS0FBS0gsV0FBVztvQkFDOUIsSUFBSSxDQUFDSCxLQUFLLENBQUNDLElBQUksQ0FBQzt3QkFBRUcsT0FBT0M7b0JBQVc7Z0JBQ3hDLE9BQ0s7b0JBQ0QsSUFBSSxDQUFDTCxLQUFLLENBQUNDLElBQUksQ0FBQ0MsS0FBS0YsS0FBSztnQkFDOUI7WUFDSjtRQUNKO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL21vdml0YTIyLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItd29iYmxlL2VzbS9PcHRpb25zL0NsYXNzZXMvV29iYmxlLmpzP2QyMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOdW1iZXIsIHNldFJhbmdlVmFsdWUsIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuaW1wb3J0IHsgV29iYmxlU3BlZWQgfSBmcm9tIFwiLi9Xb2JibGVTcGVlZFwiO1xuZXhwb3J0IGNsYXNzIFdvYmJsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSA1O1xuICAgICAgICB0aGlzLmVuYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwZWVkID0gbmV3IFdvYmJsZVNwZWVkKCk7XG4gICAgfVxuICAgIGxvYWQoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5kaXN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gc2V0UmFuZ2VWYWx1ZShkYXRhLmRpc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5lbmFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5zcGVlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5zcGVlZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkLmxvYWQoeyBhbmdsZTogZGF0YS5zcGVlZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlU3BlZWQgPSBkYXRhLnNwZWVkO1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVNwZWVkLm1pbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQubG9hZCh7IGFuZ2xlOiByYW5nZVNwZWVkIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZC5sb2FkKGRhdGEuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJpc051bWJlciIsInNldFJhbmdlVmFsdWUiLCJXb2JibGVTcGVlZCIsIldvYmJsZSIsImNvbnN0cnVjdG9yIiwiZGlzdGFuY2UiLCJlbmFibGUiLCJzcGVlZCIsImxvYWQiLCJkYXRhIiwidW5kZWZpbmVkIiwiYW5nbGUiLCJyYW5nZVNwZWVkIiwibWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-wobble/esm/Options/Classes/Wobble.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-wobble/esm/Options/Classes/WobbleSpeed.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-wobble/esm/Options/Classes/WobbleSpeed.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WobbleSpeed: () => (/* binding */ WobbleSpeed)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nclass WobbleSpeed {\n    constructor(){\n        this.angle = 50;\n        this.move = 10;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.angle !== undefined) {\n            this.angle = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.setRangeValue)(data.angle);\n        }\n        if (data.move !== undefined) {\n            this.move = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.setRangeValue)(data.move);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvZXNtL09wdGlvbnMvQ2xhc3Nlcy9Xb2JibGVTcGVlZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRDtBQUM1QyxNQUFNQztJQUNUQyxhQUFjO1FBQ1YsSUFBSSxDQUFDQyxLQUFLLEdBQUc7UUFDYixJQUFJLENBQUNDLElBQUksR0FBRztJQUNoQjtJQUNBQyxLQUFLQyxJQUFJLEVBQUU7UUFDUCxJQUFJLENBQUNBLE1BQU07WUFDUDtRQUNKO1FBQ0EsSUFBSUEsS0FBS0gsS0FBSyxLQUFLSSxXQUFXO1lBQzFCLElBQUksQ0FBQ0osS0FBSyxHQUFHSCxpRUFBYUEsQ0FBQ00sS0FBS0gsS0FBSztRQUN6QztRQUNBLElBQUlHLEtBQUtGLElBQUksS0FBS0csV0FBVztZQUN6QixJQUFJLENBQUNILElBQUksR0FBR0osaUVBQWFBLENBQUNNLEtBQUtGLElBQUk7UUFDdkM7SUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aXRhMjIvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvZXNtL09wdGlvbnMvQ2xhc3Nlcy9Xb2JibGVTcGVlZC5qcz8xNWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldFJhbmdlVmFsdWUgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5leHBvcnQgY2xhc3MgV29iYmxlU3BlZWQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gNTA7XG4gICAgICAgIHRoaXMubW92ZSA9IDEwO1xuICAgIH1cbiAgICBsb2FkKGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuYW5nbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHNldFJhbmdlVmFsdWUoZGF0YS5hbmdsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEubW92ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUgPSBzZXRSYW5nZVZhbHVlKGRhdGEubW92ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsic2V0UmFuZ2VWYWx1ZSIsIldvYmJsZVNwZWVkIiwiY29uc3RydWN0b3IiLCJhbmdsZSIsIm1vdmUiLCJsb2FkIiwiZGF0YSIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-wobble/esm/Options/Classes/WobbleSpeed.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-wobble/esm/Utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles-updater-wobble/esm/Utils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateWobble: () => (/* binding */ updateWobble)\n/* harmony export */ });\nfunction updateWobble(particle, delta) {\n    const { wobble: wobbleOptions } = particle.options, { wobble } = particle;\n    if (!wobbleOptions?.enable || !wobble) {\n        return;\n    }\n    const angleSpeed = wobble.angleSpeed * delta.factor, moveSpeed = wobble.moveSpeed * delta.factor, distance = moveSpeed * ((particle.retina.wobbleDistance ?? 0) * delta.factor) / (1000 / 60), max = 2 * Math.PI, { position } = particle;\n    wobble.angle += angleSpeed;\n    if (wobble.angle > max) {\n        wobble.angle -= max;\n    }\n    position.x += distance * Math.cos(wobble.angle);\n    position.y += distance * Math.abs(Math.sin(wobble.angle));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvZXNtL1V0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxhQUFhQyxRQUFRLEVBQUVDLEtBQUs7SUFDeEMsTUFBTSxFQUFFQyxRQUFRQyxhQUFhLEVBQUUsR0FBR0gsU0FBU0ksT0FBTyxFQUFFLEVBQUVGLE1BQU0sRUFBRSxHQUFHRjtJQUNqRSxJQUFJLENBQUNHLGVBQWVFLFVBQVUsQ0FBQ0gsUUFBUTtRQUNuQztJQUNKO0lBQ0EsTUFBTUksYUFBYUosT0FBT0ksVUFBVSxHQUFHTCxNQUFNTSxNQUFNLEVBQUVDLFlBQVlOLE9BQU9NLFNBQVMsR0FBR1AsTUFBTU0sTUFBTSxFQUFFRSxXQUFXLFlBQWMsRUFBQ1QsU0FBU1UsTUFBTSxDQUFDQyxjQUFjLElBQUksS0FBS1YsTUFBTU0sTUFBTSxJQUFNLFFBQU8sRUFBQyxHQUFJSyxNQUFNLElBQUlDLEtBQUtDLEVBQUUsRUFBRSxFQUFFQyxRQUFRLEVBQUUsR0FBR2Y7SUFDbk9FLE9BQU9jLEtBQUssSUFBSVY7SUFDaEIsSUFBSUosT0FBT2MsS0FBSyxHQUFHSixLQUFLO1FBQ3BCVixPQUFPYyxLQUFLLElBQUlKO0lBQ3BCO0lBQ0FHLFNBQVNFLENBQUMsSUFBSVIsV0FBV0ksS0FBS0ssR0FBRyxDQUFDaEIsT0FBT2MsS0FBSztJQUM5Q0QsU0FBU0ksQ0FBQyxJQUFJVixXQUFXSSxLQUFLTyxHQUFHLENBQUNQLEtBQUtRLEdBQUcsQ0FBQ25CLE9BQU9jLEtBQUs7QUFDM0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpdGEyMi8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLXdvYmJsZS9lc20vVXRpbHMuanM/YzlhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdXBkYXRlV29iYmxlKHBhcnRpY2xlLCBkZWx0YSkge1xuICAgIGNvbnN0IHsgd29iYmxlOiB3b2JibGVPcHRpb25zIH0gPSBwYXJ0aWNsZS5vcHRpb25zLCB7IHdvYmJsZSB9ID0gcGFydGljbGU7XG4gICAgaWYgKCF3b2JibGVPcHRpb25zPy5lbmFibGUgfHwgIXdvYmJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFuZ2xlU3BlZWQgPSB3b2JibGUuYW5nbGVTcGVlZCAqIGRlbHRhLmZhY3RvciwgbW92ZVNwZWVkID0gd29iYmxlLm1vdmVTcGVlZCAqIGRlbHRhLmZhY3RvciwgZGlzdGFuY2UgPSAobW92ZVNwZWVkICogKChwYXJ0aWNsZS5yZXRpbmEud29iYmxlRGlzdGFuY2UgPz8gMCkgKiBkZWx0YS5mYWN0b3IpKSAvICgxMDAwIC8gNjApLCBtYXggPSAyICogTWF0aC5QSSwgeyBwb3NpdGlvbiB9ID0gcGFydGljbGU7XG4gICAgd29iYmxlLmFuZ2xlICs9IGFuZ2xlU3BlZWQ7XG4gICAgaWYgKHdvYmJsZS5hbmdsZSA+IG1heCkge1xuICAgICAgICB3b2JibGUuYW5nbGUgLT0gbWF4O1xuICAgIH1cbiAgICBwb3NpdGlvbi54ICs9IGRpc3RhbmNlICogTWF0aC5jb3Mod29iYmxlLmFuZ2xlKTtcbiAgICBwb3NpdGlvbi55ICs9IGRpc3RhbmNlICogTWF0aC5hYnMoTWF0aC5zaW4od29iYmxlLmFuZ2xlKSk7XG59XG4iXSwibmFtZXMiOlsidXBkYXRlV29iYmxlIiwicGFydGljbGUiLCJkZWx0YSIsIndvYmJsZSIsIndvYmJsZU9wdGlvbnMiLCJvcHRpb25zIiwiZW5hYmxlIiwiYW5nbGVTcGVlZCIsImZhY3RvciIsIm1vdmVTcGVlZCIsImRpc3RhbmNlIiwicmV0aW5hIiwid29iYmxlRGlzdGFuY2UiLCJtYXgiLCJNYXRoIiwiUEkiLCJwb3NpdGlvbiIsImFuZ2xlIiwieCIsImNvcyIsInkiLCJhYnMiLCJzaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-wobble/esm/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-wobble/esm/WobbleUpdater.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles-updater-wobble/esm/WobbleUpdater.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WobbleUpdater: () => (/* binding */ WobbleUpdater)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var _Options_Classes_Wobble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options/Classes/Wobble */ \"(ssr)/./node_modules/tsparticles-updater-wobble/esm/Options/Classes/Wobble.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-updater-wobble/esm/Utils.js\");\n\n\n\nclass WobbleUpdater {\n    constructor(container){\n        this.container = container;\n    }\n    init(particle) {\n        const wobbleOpt = particle.options.wobble;\n        if (wobbleOpt?.enable) {\n            particle.wobble = {\n                angle: (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)() * Math.PI * 2,\n                angleSpeed: (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(wobbleOpt.speed.angle) / 360,\n                moveSpeed: (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(wobbleOpt.speed.move) / 10\n            };\n        } else {\n            particle.wobble = {\n                angle: 0,\n                angleSpeed: 0,\n                moveSpeed: 0\n            };\n        }\n        particle.retina.wobbleDistance = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(wobbleOpt?.distance ?? 0) * this.container.retina.pixelRatio;\n    }\n    isEnabled(particle) {\n        return !particle.destroyed && !particle.spawning && !!particle.options.wobble?.enable;\n    }\n    loadOptions(options, ...sources) {\n        if (!options.wobble) {\n            options.wobble = new _Options_Classes_Wobble__WEBPACK_IMPORTED_MODULE_1__.Wobble();\n        }\n        for (const source of sources){\n            options.wobble.load(source?.wobble);\n        }\n    }\n    update(particle, delta) {\n        if (!this.isEnabled(particle)) {\n            return;\n        }\n        (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.updateWobble)(particle, delta);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvZXNtL1dvYmJsZVVwZGF0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErRDtBQUNiO0FBQ1g7QUFDaEMsTUFBTUk7SUFDVEMsWUFBWUMsU0FBUyxDQUFFO1FBQ25CLElBQUksQ0FBQ0EsU0FBUyxHQUFHQTtJQUNyQjtJQUNBQyxLQUFLQyxRQUFRLEVBQUU7UUFDWCxNQUFNQyxZQUFZRCxTQUFTRSxPQUFPLENBQUNDLE1BQU07UUFDekMsSUFBSUYsV0FBV0csUUFBUTtZQUNuQkosU0FBU0csTUFBTSxHQUFHO2dCQUNkRSxPQUFPYiw2REFBU0EsS0FBS2MsS0FBS0MsRUFBRSxHQUFHO2dCQUMvQkMsWUFBWWYsaUVBQWFBLENBQUNRLFVBQVVRLEtBQUssQ0FBQ0osS0FBSyxJQUFJO2dCQUNuREssV0FBV2pCLGlFQUFhQSxDQUFDUSxVQUFVUSxLQUFLLENBQUNFLElBQUksSUFBSTtZQUNyRDtRQUNKLE9BQ0s7WUFDRFgsU0FBU0csTUFBTSxHQUFHO2dCQUNkRSxPQUFPO2dCQUNQRyxZQUFZO2dCQUNaRSxXQUFXO1lBQ2Y7UUFDSjtRQUNBVixTQUFTWSxNQUFNLENBQUNDLGNBQWMsR0FBR3BCLGlFQUFhQSxDQUFDUSxXQUFXYSxZQUFZLEtBQUssSUFBSSxDQUFDaEIsU0FBUyxDQUFDYyxNQUFNLENBQUNHLFVBQVU7SUFDL0c7SUFDQUMsVUFBVWhCLFFBQVEsRUFBRTtRQUNoQixPQUFPLENBQUNBLFNBQVNpQixTQUFTLElBQUksQ0FBQ2pCLFNBQVNrQixRQUFRLElBQUksQ0FBQyxDQUFDbEIsU0FBU0UsT0FBTyxDQUFDQyxNQUFNLEVBQUVDO0lBQ25GO0lBQ0FlLFlBQVlqQixPQUFPLEVBQUUsR0FBR2tCLE9BQU8sRUFBRTtRQUM3QixJQUFJLENBQUNsQixRQUFRQyxNQUFNLEVBQUU7WUFDakJELFFBQVFDLE1BQU0sR0FBRyxJQUFJVCwyREFBTUE7UUFDL0I7UUFDQSxLQUFLLE1BQU0yQixVQUFVRCxRQUFTO1lBQzFCbEIsUUFBUUMsTUFBTSxDQUFDbUIsSUFBSSxDQUFDRCxRQUFRbEI7UUFDaEM7SUFDSjtJQUNBb0IsT0FBT3ZCLFFBQVEsRUFBRXdCLEtBQUssRUFBRTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDUixTQUFTLENBQUNoQixXQUFXO1lBQzNCO1FBQ0o7UUFDQUwsb0RBQVlBLENBQUNLLFVBQVV3QjtJQUMzQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aXRhMjIvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvZXNtL1dvYmJsZVVwZGF0ZXIuanM/N2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRSYW5kb20sIGdldFJhbmdlVmFsdWUsIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuaW1wb3J0IHsgV29iYmxlIH0gZnJvbSBcIi4vT3B0aW9ucy9DbGFzc2VzL1dvYmJsZVwiO1xuaW1wb3J0IHsgdXBkYXRlV29iYmxlIH0gZnJvbSBcIi4vVXRpbHNcIjtcbmV4cG9ydCBjbGFzcyBXb2JibGVVcGRhdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfVxuICAgIGluaXQocGFydGljbGUpIHtcbiAgICAgICAgY29uc3Qgd29iYmxlT3B0ID0gcGFydGljbGUub3B0aW9ucy53b2JibGU7XG4gICAgICAgIGlmICh3b2JibGVPcHQ/LmVuYWJsZSkge1xuICAgICAgICAgICAgcGFydGljbGUud29iYmxlID0ge1xuICAgICAgICAgICAgICAgIGFuZ2xlOiBnZXRSYW5kb20oKSAqIE1hdGguUEkgKiAyLFxuICAgICAgICAgICAgICAgIGFuZ2xlU3BlZWQ6IGdldFJhbmdlVmFsdWUod29iYmxlT3B0LnNwZWVkLmFuZ2xlKSAvIDM2MCxcbiAgICAgICAgICAgICAgICBtb3ZlU3BlZWQ6IGdldFJhbmdlVmFsdWUod29iYmxlT3B0LnNwZWVkLm1vdmUpIC8gMTAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFydGljbGUud29iYmxlID0ge1xuICAgICAgICAgICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICAgICAgICAgIGFuZ2xlU3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgbW92ZVNwZWVkOiAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0aWNsZS5yZXRpbmEud29iYmxlRGlzdGFuY2UgPSBnZXRSYW5nZVZhbHVlKHdvYmJsZU9wdD8uZGlzdGFuY2UgPz8gMCkgKiB0aGlzLmNvbnRhaW5lci5yZXRpbmEucGl4ZWxSYXRpbztcbiAgICB9XG4gICAgaXNFbmFibGVkKHBhcnRpY2xlKSB7XG4gICAgICAgIHJldHVybiAhcGFydGljbGUuZGVzdHJveWVkICYmICFwYXJ0aWNsZS5zcGF3bmluZyAmJiAhIXBhcnRpY2xlLm9wdGlvbnMud29iYmxlPy5lbmFibGU7XG4gICAgfVxuICAgIGxvYWRPcHRpb25zKG9wdGlvbnMsIC4uLnNvdXJjZXMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLndvYmJsZSkge1xuICAgICAgICAgICAgb3B0aW9ucy53b2JibGUgPSBuZXcgV29iYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICAgICAgb3B0aW9ucy53b2JibGUubG9hZChzb3VyY2U/LndvYmJsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHBhcnRpY2xlLCBkZWx0YSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGVkKHBhcnRpY2xlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVdvYmJsZShwYXJ0aWNsZSwgZGVsdGEpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRSYW5kb20iLCJnZXRSYW5nZVZhbHVlIiwiV29iYmxlIiwidXBkYXRlV29iYmxlIiwiV29iYmxlVXBkYXRlciIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwiaW5pdCIsInBhcnRpY2xlIiwid29iYmxlT3B0Iiwib3B0aW9ucyIsIndvYmJsZSIsImVuYWJsZSIsImFuZ2xlIiwiTWF0aCIsIlBJIiwiYW5nbGVTcGVlZCIsInNwZWVkIiwibW92ZVNwZWVkIiwibW92ZSIsInJldGluYSIsIndvYmJsZURpc3RhbmNlIiwiZGlzdGFuY2UiLCJwaXhlbFJhdGlvIiwiaXNFbmFibGVkIiwiZGVzdHJveWVkIiwic3Bhd25pbmciLCJsb2FkT3B0aW9ucyIsInNvdXJjZXMiLCJzb3VyY2UiLCJsb2FkIiwidXBkYXRlIiwiZGVsdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-wobble/esm/WobbleUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-wobble/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles-updater-wobble/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadWobbleUpdater: () => (/* binding */ loadWobbleUpdater)\n/* harmony export */ });\n/* harmony import */ var _WobbleUpdater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WobbleUpdater */ \"(ssr)/./node_modules/tsparticles-updater-wobble/esm/WobbleUpdater.js\");\n\nasync function loadWobbleUpdater(engine, refresh = true) {\n    await engine.addParticleUpdater(\"wobble\", (container)=>new _WobbleUpdater__WEBPACK_IMPORTED_MODULE_0__.WobbleUpdater(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGUvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdEO0FBQ3pDLGVBQWVDLGtCQUFrQkMsTUFBTSxFQUFFQyxVQUFVLElBQUk7SUFDMUQsTUFBTUQsT0FBT0Usa0JBQWtCLENBQUMsVUFBVSxDQUFDQyxZQUFjLElBQUlMLHlEQUFhQSxDQUFDSyxZQUFZRjtBQUMzRiIsInNvdXJjZXMiOlsid2VicGFjazovL21vdml0YTIyLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItd29iYmxlL2VzbS9pbmRleC5qcz8xYWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdvYmJsZVVwZGF0ZXIgfSBmcm9tIFwiLi9Xb2JibGVVcGRhdGVyXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFdvYmJsZVVwZGF0ZXIoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRQYXJ0aWNsZVVwZGF0ZXIoXCJ3b2JibGVcIiwgKGNvbnRhaW5lcikgPT4gbmV3IFdvYmJsZVVwZGF0ZXIoY29udGFpbmVyKSwgcmVmcmVzaCk7XG59XG4iXSwibmFtZXMiOlsiV29iYmxlVXBkYXRlciIsImxvYWRXb2JibGVVcGRhdGVyIiwiZW5naW5lIiwicmVmcmVzaCIsImFkZFBhcnRpY2xlVXBkYXRlciIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-wobble/esm/index.js\n");

/***/ })

};
;