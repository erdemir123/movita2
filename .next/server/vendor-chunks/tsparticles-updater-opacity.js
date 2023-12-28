"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-updater-opacity";
exports.ids = ["vendor-chunks/tsparticles-updater-opacity"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-updater-opacity/esm/OpacityUpdater.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-opacity/esm/OpacityUpdater.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OpacityUpdater: () => (/* binding */ OpacityUpdater)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/Utils.js\");\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-updater-opacity/esm/Utils.js\");\n\n\nclass OpacityUpdater {\n    constructor(container){\n        this.container = container;\n    }\n    init(particle) {\n        const opacityOptions = particle.options.opacity;\n        particle.opacity = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.initParticleNumericAnimationValue)(opacityOptions, 1);\n        const opacityAnimation = opacityOptions.animation;\n        if (opacityAnimation.enable) {\n            particle.opacity.velocity = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.getRangeValue)(opacityAnimation.speed) / 100 * this.container.retina.reduceFactor;\n            if (!opacityAnimation.sync) {\n                particle.opacity.velocity *= (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_1__.getRandom)();\n            }\n        }\n    }\n    isEnabled(particle) {\n        return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && ((particle.opacity.maxLoops ?? 0) <= 0 || (particle.opacity.maxLoops ?? 0) > 0 && (particle.opacity.loops ?? 0) < (particle.opacity.maxLoops ?? 0));\n    }\n    reset(particle) {\n        if (particle.opacity) {\n            particle.opacity.time = 0;\n            particle.opacity.loops = 0;\n        }\n    }\n    update(particle, delta) {\n        if (!this.isEnabled(particle)) {\n            return;\n        }\n        (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.updateOpacity)(particle, delta);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1vcGFjaXR5L2VzbS9PcGFjaXR5VXBkYXRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtHO0FBQzFEO0FBQ2pDLE1BQU1JO0lBQ1RDLFlBQVlDLFNBQVMsQ0FBRTtRQUNuQixJQUFJLENBQUNBLFNBQVMsR0FBR0E7SUFDckI7SUFDQUMsS0FBS0MsUUFBUSxFQUFFO1FBQ1gsTUFBTUMsaUJBQWlCRCxTQUFTRSxPQUFPLENBQUNDLE9BQU87UUFDL0NILFNBQVNHLE9BQU8sR0FBR1QscUZBQWlDQSxDQUFDTyxnQkFBZ0I7UUFDckUsTUFBTUcsbUJBQW1CSCxlQUFlSSxTQUFTO1FBQ2pELElBQUlELGlCQUFpQkUsTUFBTSxFQUFFO1lBQ3pCTixTQUFTRyxPQUFPLENBQUNJLFFBQVEsR0FDckIsa0VBQWVILGlCQUFpQkksS0FBSyxJQUFJLE1BQU8sSUFBSSxDQUFDVixTQUFTLENBQUNXLE1BQU0sQ0FBQ0MsWUFBWTtZQUN0RixJQUFJLENBQUNOLGlCQUFpQk8sSUFBSSxFQUFFO2dCQUN4QlgsU0FBU0csT0FBTyxDQUFDSSxRQUFRLElBQUlmLDZEQUFTQTtZQUMxQztRQUNKO0lBQ0o7SUFDQW9CLFVBQVVaLFFBQVEsRUFBRTtRQUNoQixPQUFRLENBQUNBLFNBQVNhLFNBQVMsSUFDdkIsQ0FBQ2IsU0FBU2MsUUFBUSxJQUNsQixDQUFDLENBQUNkLFNBQVNHLE9BQU8sSUFDbEJILFNBQVNHLE9BQU8sQ0FBQ0csTUFBTSxJQUN0QixFQUFDTixTQUFTRyxPQUFPLENBQUNZLFFBQVEsSUFBSSxNQUFNLEtBQ2hDLENBQUNmLFNBQVNHLE9BQU8sQ0FBQ1ksUUFBUSxJQUFJLEtBQUssS0FDaEMsQ0FBQ2YsU0FBU0csT0FBTyxDQUFDYSxLQUFLLElBQUksS0FBTWhCLENBQUFBLFNBQVNHLE9BQU8sQ0FBQ1ksUUFBUSxJQUFJLEVBQUU7SUFDaEY7SUFDQUUsTUFBTWpCLFFBQVEsRUFBRTtRQUNaLElBQUlBLFNBQVNHLE9BQU8sRUFBRTtZQUNsQkgsU0FBU0csT0FBTyxDQUFDZSxJQUFJLEdBQUc7WUFDeEJsQixTQUFTRyxPQUFPLENBQUNhLEtBQUssR0FBRztRQUM3QjtJQUNKO0lBQ0FHLE9BQU9uQixRQUFRLEVBQUVvQixLQUFLLEVBQUU7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQ1IsU0FBUyxDQUFDWixXQUFXO1lBQzNCO1FBQ0o7UUFDQUwscURBQWFBLENBQUNLLFVBQVVvQjtJQUM1QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aXRhMjIvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1vcGFjaXR5L2VzbS9PcGFjaXR5VXBkYXRlci5qcz8xMDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFJhbmRvbSwgZ2V0UmFuZ2VWYWx1ZSwgaW5pdFBhcnRpY2xlTnVtZXJpY0FuaW1hdGlvblZhbHVlLCB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmltcG9ydCB7IHVwZGF0ZU9wYWNpdHkgfSBmcm9tIFwiLi9VdGlsc1wiO1xuZXhwb3J0IGNsYXNzIE9wYWNpdHlVcGRhdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfVxuICAgIGluaXQocGFydGljbGUpIHtcbiAgICAgICAgY29uc3Qgb3BhY2l0eU9wdGlvbnMgPSBwYXJ0aWNsZS5vcHRpb25zLm9wYWNpdHk7XG4gICAgICAgIHBhcnRpY2xlLm9wYWNpdHkgPSBpbml0UGFydGljbGVOdW1lcmljQW5pbWF0aW9uVmFsdWUob3BhY2l0eU9wdGlvbnMsIDEpO1xuICAgICAgICBjb25zdCBvcGFjaXR5QW5pbWF0aW9uID0gb3BhY2l0eU9wdGlvbnMuYW5pbWF0aW9uO1xuICAgICAgICBpZiAob3BhY2l0eUFuaW1hdGlvbi5lbmFibGUpIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLm9wYWNpdHkudmVsb2NpdHkgPVxuICAgICAgICAgICAgICAgIChnZXRSYW5nZVZhbHVlKG9wYWNpdHlBbmltYXRpb24uc3BlZWQpIC8gMTAwKSAqIHRoaXMuY29udGFpbmVyLnJldGluYS5yZWR1Y2VGYWN0b3I7XG4gICAgICAgICAgICBpZiAoIW9wYWNpdHlBbmltYXRpb24uc3luYykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlLm9wYWNpdHkudmVsb2NpdHkgKj0gZ2V0UmFuZG9tKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNFbmFibGVkKHBhcnRpY2xlKSB7XG4gICAgICAgIHJldHVybiAoIXBhcnRpY2xlLmRlc3Ryb3llZCAmJlxuICAgICAgICAgICAgIXBhcnRpY2xlLnNwYXduaW5nICYmXG4gICAgICAgICAgICAhIXBhcnRpY2xlLm9wYWNpdHkgJiZcbiAgICAgICAgICAgIHBhcnRpY2xlLm9wYWNpdHkuZW5hYmxlICYmXG4gICAgICAgICAgICAoKHBhcnRpY2xlLm9wYWNpdHkubWF4TG9vcHMgPz8gMCkgPD0gMCB8fFxuICAgICAgICAgICAgICAgICgocGFydGljbGUub3BhY2l0eS5tYXhMb29wcyA/PyAwKSA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgKHBhcnRpY2xlLm9wYWNpdHkubG9vcHMgPz8gMCkgPCAocGFydGljbGUub3BhY2l0eS5tYXhMb29wcyA/PyAwKSkpKTtcbiAgICB9XG4gICAgcmVzZXQocGFydGljbGUpIHtcbiAgICAgICAgaWYgKHBhcnRpY2xlLm9wYWNpdHkpIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLm9wYWNpdHkudGltZSA9IDA7XG4gICAgICAgICAgICBwYXJ0aWNsZS5vcGFjaXR5Lmxvb3BzID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocGFydGljbGUsIGRlbHRhKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZWQocGFydGljbGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlT3BhY2l0eShwYXJ0aWNsZSwgZGVsdGEpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRSYW5kb20iLCJnZXRSYW5nZVZhbHVlIiwiaW5pdFBhcnRpY2xlTnVtZXJpY0FuaW1hdGlvblZhbHVlIiwidXBkYXRlT3BhY2l0eSIsIk9wYWNpdHlVcGRhdGVyIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJpbml0IiwicGFydGljbGUiLCJvcGFjaXR5T3B0aW9ucyIsIm9wdGlvbnMiLCJvcGFjaXR5Iiwib3BhY2l0eUFuaW1hdGlvbiIsImFuaW1hdGlvbiIsImVuYWJsZSIsInZlbG9jaXR5Iiwic3BlZWQiLCJyZXRpbmEiLCJyZWR1Y2VGYWN0b3IiLCJzeW5jIiwiaXNFbmFibGVkIiwiZGVzdHJveWVkIiwic3Bhd25pbmciLCJtYXhMb29wcyIsImxvb3BzIiwicmVzZXQiLCJ0aW1lIiwidXBkYXRlIiwiZGVsdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-opacity/esm/OpacityUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-opacity/esm/Utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles-updater-opacity/esm/Utils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateOpacity: () => (/* binding */ updateOpacity)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nfunction checkDestroy(particle, value, minValue, maxValue) {\n    switch(particle.options.opacity.animation.destroy){\n        case \"max\":\n            if (value >= maxValue) {\n                particle.destroy();\n            }\n            break;\n        case \"min\":\n            if (value <= minValue) {\n                particle.destroy();\n            }\n            break;\n    }\n}\nfunction updateOpacity(particle, delta) {\n    const data = particle.opacity;\n    if (particle.destroyed || !data?.enable || (data.maxLoops ?? 0) > 0 && (data.loops ?? 0) > (data.maxLoops ?? 0)) {\n        return;\n    }\n    const minValue = data.min, maxValue = data.max, decay = data.decay ?? 1;\n    if (!data.time) {\n        data.time = 0;\n    }\n    if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {\n        data.time += delta.value;\n    }\n    if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {\n        return;\n    }\n    switch(data.status){\n        case \"increasing\":\n            if (data.value >= maxValue) {\n                data.status = \"decreasing\";\n                if (!data.loops) {\n                    data.loops = 0;\n                }\n                data.loops++;\n            } else {\n                data.value += (data.velocity ?? 0) * delta.factor;\n            }\n            break;\n        case \"decreasing\":\n            if (data.value <= minValue) {\n                data.status = \"increasing\";\n                if (!data.loops) {\n                    data.loops = 0;\n                }\n                data.loops++;\n            } else {\n                data.value -= (data.velocity ?? 0) * delta.factor;\n            }\n            break;\n    }\n    if (data.velocity && data.decay !== 1) {\n        data.velocity *= decay;\n    }\n    checkDestroy(particle, data.value, minValue, maxValue);\n    if (!particle.destroyed) {\n        data.value = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.clamp)(data.value, minValue, maxValue);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1vcGFjaXR5L2VzbS9VdGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUMzQyxTQUFTQyxhQUFhQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxRQUFRO0lBQ3JELE9BQVFILFNBQVNJLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUNDLE9BQU87UUFDOUMsS0FBSztZQUNELElBQUlOLFNBQVNFLFVBQVU7Z0JBQ25CSCxTQUFTTyxPQUFPO1lBQ3BCO1lBQ0E7UUFDSixLQUFLO1lBQ0QsSUFBSU4sU0FBU0MsVUFBVTtnQkFDbkJGLFNBQVNPLE9BQU87WUFDcEI7WUFDQTtJQUNSO0FBQ0o7QUFDTyxTQUFTQyxjQUFjUixRQUFRLEVBQUVTLEtBQUs7SUFDekMsTUFBTUMsT0FBT1YsU0FBU0ssT0FBTztJQUM3QixJQUFJTCxTQUFTVyxTQUFTLElBQUksQ0FBQ0QsTUFBTUUsVUFBVyxDQUFDRixLQUFLRyxRQUFRLElBQUksS0FBSyxLQUFLLENBQUNILEtBQUtJLEtBQUssSUFBSSxLQUFNSixDQUFBQSxLQUFLRyxRQUFRLElBQUksSUFBSztRQUMvRztJQUNKO0lBQ0EsTUFBTVgsV0FBV1EsS0FBS0ssR0FBRyxFQUFFWixXQUFXTyxLQUFLTSxHQUFHLEVBQUVDLFFBQVFQLEtBQUtPLEtBQUssSUFBSTtJQUN0RSxJQUFJLENBQUNQLEtBQUtRLElBQUksRUFBRTtRQUNaUixLQUFLUSxJQUFJLEdBQUc7SUFDaEI7SUFDQSxJQUFJLENBQUNSLEtBQUtTLFNBQVMsSUFBSSxLQUFLLEtBQUtULEtBQUtRLElBQUksR0FBSVIsQ0FBQUEsS0FBS1MsU0FBUyxJQUFJLElBQUk7UUFDaEVULEtBQUtRLElBQUksSUFBSVQsTUFBTVIsS0FBSztJQUM1QjtJQUNBLElBQUksQ0FBQ1MsS0FBS1MsU0FBUyxJQUFJLEtBQUssS0FBS1QsS0FBS1EsSUFBSSxHQUFJUixDQUFBQSxLQUFLUyxTQUFTLElBQUksSUFBSTtRQUNoRTtJQUNKO0lBQ0EsT0FBUVQsS0FBS1UsTUFBTTtRQUNmLEtBQUs7WUFDRCxJQUFJVixLQUFLVCxLQUFLLElBQUlFLFVBQVU7Z0JBQ3hCTyxLQUFLVSxNQUFNLEdBQUc7Z0JBQ2QsSUFBSSxDQUFDVixLQUFLSSxLQUFLLEVBQUU7b0JBQ2JKLEtBQUtJLEtBQUssR0FBRztnQkFDakI7Z0JBQ0FKLEtBQUtJLEtBQUs7WUFDZCxPQUNLO2dCQUNESixLQUFLVCxLQUFLLElBQUksQ0FBQ1MsS0FBS1csUUFBUSxJQUFJLEtBQUtaLE1BQU1hLE1BQU07WUFDckQ7WUFDQTtRQUNKLEtBQUs7WUFDRCxJQUFJWixLQUFLVCxLQUFLLElBQUlDLFVBQVU7Z0JBQ3hCUSxLQUFLVSxNQUFNLEdBQUc7Z0JBQ2QsSUFBSSxDQUFDVixLQUFLSSxLQUFLLEVBQUU7b0JBQ2JKLEtBQUtJLEtBQUssR0FBRztnQkFDakI7Z0JBQ0FKLEtBQUtJLEtBQUs7WUFDZCxPQUNLO2dCQUNESixLQUFLVCxLQUFLLElBQUksQ0FBQ1MsS0FBS1csUUFBUSxJQUFJLEtBQUtaLE1BQU1hLE1BQU07WUFDckQ7WUFDQTtJQUNSO0lBQ0EsSUFBSVosS0FBS1csUUFBUSxJQUFJWCxLQUFLTyxLQUFLLEtBQUssR0FBRztRQUNuQ1AsS0FBS1csUUFBUSxJQUFJSjtJQUNyQjtJQUNBbEIsYUFBYUMsVUFBVVUsS0FBS1QsS0FBSyxFQUFFQyxVQUFVQztJQUM3QyxJQUFJLENBQUNILFNBQVNXLFNBQVMsRUFBRTtRQUNyQkQsS0FBS1QsS0FBSyxHQUFHSCx5REFBS0EsQ0FBQ1ksS0FBS1QsS0FBSyxFQUFFQyxVQUFVQztJQUM3QztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aXRhMjIvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1vcGFjaXR5L2VzbS9VdGlscy5qcz9jOWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsYW1wIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuZnVuY3Rpb24gY2hlY2tEZXN0cm95KHBhcnRpY2xlLCB2YWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlKSB7XG4gICAgc3dpdGNoIChwYXJ0aWNsZS5vcHRpb25zLm9wYWNpdHkuYW5pbWF0aW9uLmRlc3Ryb3kpIHtcbiAgICAgICAgY2FzZSBcIm1heFwiOlxuICAgICAgICAgICAgaWYgKHZhbHVlID49IG1heFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcGFydGljbGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtaW5cIjpcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8PSBtaW5WYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPcGFjaXR5KHBhcnRpY2xlLCBkZWx0YSkge1xuICAgIGNvbnN0IGRhdGEgPSBwYXJ0aWNsZS5vcGFjaXR5O1xuICAgIGlmIChwYXJ0aWNsZS5kZXN0cm95ZWQgfHwgIWRhdGE/LmVuYWJsZSB8fCAoKGRhdGEubWF4TG9vcHMgPz8gMCkgPiAwICYmIChkYXRhLmxvb3BzID8/IDApID4gKGRhdGEubWF4TG9vcHMgPz8gMCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWluVmFsdWUgPSBkYXRhLm1pbiwgbWF4VmFsdWUgPSBkYXRhLm1heCwgZGVjYXkgPSBkYXRhLmRlY2F5ID8/IDE7XG4gICAgaWYgKCFkYXRhLnRpbWUpIHtcbiAgICAgICAgZGF0YS50aW1lID0gMDtcbiAgICB9XG4gICAgaWYgKChkYXRhLmRlbGF5VGltZSA/PyAwKSA+IDAgJiYgZGF0YS50aW1lIDwgKGRhdGEuZGVsYXlUaW1lID8/IDApKSB7XG4gICAgICAgIGRhdGEudGltZSArPSBkZWx0YS52YWx1ZTtcbiAgICB9XG4gICAgaWYgKChkYXRhLmRlbGF5VGltZSA/PyAwKSA+IDAgJiYgZGF0YS50aW1lIDwgKGRhdGEuZGVsYXlUaW1lID8/IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoIChkYXRhLnN0YXR1cykge1xuICAgICAgICBjYXNlIFwiaW5jcmVhc2luZ1wiOlxuICAgICAgICAgICAgaWYgKGRhdGEudmFsdWUgPj0gbWF4VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXR1cyA9IFwiZGVjcmVhc2luZ1wiO1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5sb29wcykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmxvb3BzID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0YS5sb29wcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YS52YWx1ZSArPSAoZGF0YS52ZWxvY2l0eSA/PyAwKSAqIGRlbHRhLmZhY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZGVjcmVhc2luZ1wiOlxuICAgICAgICAgICAgaWYgKGRhdGEudmFsdWUgPD0gbWluVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXR1cyA9IFwiaW5jcmVhc2luZ1wiO1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5sb29wcykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmxvb3BzID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0YS5sb29wcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YS52YWx1ZSAtPSAoZGF0YS52ZWxvY2l0eSA/PyAwKSAqIGRlbHRhLmZhY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoZGF0YS52ZWxvY2l0eSAmJiBkYXRhLmRlY2F5ICE9PSAxKSB7XG4gICAgICAgIGRhdGEudmVsb2NpdHkgKj0gZGVjYXk7XG4gICAgfVxuICAgIGNoZWNrRGVzdHJveShwYXJ0aWNsZSwgZGF0YS52YWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICBpZiAoIXBhcnRpY2xlLmRlc3Ryb3llZCkge1xuICAgICAgICBkYXRhLnZhbHVlID0gY2xhbXAoZGF0YS52YWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiY2xhbXAiLCJjaGVja0Rlc3Ryb3kiLCJwYXJ0aWNsZSIsInZhbHVlIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIm9wdGlvbnMiLCJvcGFjaXR5IiwiYW5pbWF0aW9uIiwiZGVzdHJveSIsInVwZGF0ZU9wYWNpdHkiLCJkZWx0YSIsImRhdGEiLCJkZXN0cm95ZWQiLCJlbmFibGUiLCJtYXhMb29wcyIsImxvb3BzIiwibWluIiwibWF4IiwiZGVjYXkiLCJ0aW1lIiwiZGVsYXlUaW1lIiwic3RhdHVzIiwidmVsb2NpdHkiLCJmYWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-opacity/esm/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-opacity/esm/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles-updater-opacity/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadOpacityUpdater: () => (/* binding */ loadOpacityUpdater)\n/* harmony export */ });\n/* harmony import */ var _OpacityUpdater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OpacityUpdater */ \"(ssr)/./node_modules/tsparticles-updater-opacity/esm/OpacityUpdater.js\");\n\nasync function loadOpacityUpdater(engine, refresh = true) {\n    await engine.addParticleUpdater(\"opacity\", (container)=>new _OpacityUpdater__WEBPACK_IMPORTED_MODULE_0__.OpacityUpdater(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1vcGFjaXR5L2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrRDtBQUMzQyxlQUFlQyxtQkFBbUJDLE1BQU0sRUFBRUMsVUFBVSxJQUFJO0lBQzNELE1BQU1ELE9BQU9FLGtCQUFrQixDQUFDLFdBQVcsQ0FBQ0MsWUFBYyxJQUFJTCwyREFBY0EsQ0FBQ0ssWUFBWUY7QUFDN0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpdGEyMi8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLW9wYWNpdHkvZXNtL2luZGV4LmpzP2Q5NTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3BhY2l0eVVwZGF0ZXIgfSBmcm9tIFwiLi9PcGFjaXR5VXBkYXRlclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRPcGFjaXR5VXBkYXRlcihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZFBhcnRpY2xlVXBkYXRlcihcIm9wYWNpdHlcIiwgKGNvbnRhaW5lcikgPT4gbmV3IE9wYWNpdHlVcGRhdGVyKGNvbnRhaW5lciksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbIk9wYWNpdHlVcGRhdGVyIiwibG9hZE9wYWNpdHlVcGRhdGVyIiwiZW5naW5lIiwicmVmcmVzaCIsImFkZFBhcnRpY2xlVXBkYXRlciIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-opacity/esm/index.js\n");

/***/ })

};
;