"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/sections/Pricing.tsx":
/*!**********************************!*\
  !*** ./src/sections/Pricing.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pricing: function() { return /* binding */ Pricing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_check_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/check.svg */ \"(app-pages-browser)/./src/assets/check.svg\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ Pricing auto */ \n\n\n\nconst pricingTiers = [\n    {\n        title: \"Free\",\n        monthlyPrice: 0,\n        buttonText: \"Get started for free\",\n        popular: false,\n        inverse: false,\n        features: [\n            \"Up to 5 project members\",\n            \"Unlimited tasks and projects\",\n            \"2GB storage\",\n            \"Integrations\",\n            \"Basic support\"\n        ]\n    },\n    {\n        title: \"Pro\",\n        monthlyPrice: 9,\n        buttonText: \"Sign up now\",\n        popular: true,\n        inverse: true,\n        features: [\n            \"Up to 50 project members\",\n            \"Unlimited tasks and projects\",\n            \"50GB storage\",\n            \"Integrations\",\n            \"Priority support\",\n            \"Advanced support\",\n            \"Export support\"\n        ]\n    },\n    {\n        title: \"Business\",\n        monthlyPrice: 19,\n        buttonText: \"Sign up now\",\n        popular: false,\n        inverse: false,\n        features: [\n            \"Up to 5 project members\",\n            \"Unlimited tasks and projects\",\n            \"200GB storage\",\n            \"Integrations\",\n            \"Dedicated account manager\",\n            \"Custom fields\",\n            \"Advanced analytics\",\n            \"Export capabilities\",\n            \"API access\",\n            \"Advanced security features\"\n        ]\n    }\n];\nconst Pricing = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-24 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-heading\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"section-title\",\n                            children: \"Pricing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"section-description mt-5\",\n                            children: \"Free forever. Upgrade for unlimitad tasks, better security, and exclusive features.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center\",\n                    children: pricingTiers.map((param)=>{\n                        let { title, monthlyPrice, buttonText, popular, inverse, features } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)(\"card\", inverse === true && \"border-black bg-black text-white\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)(\"text-lg font-bold text-black/50\", inverse === true && \"text-white/60\"),\n                                            children: [\n                                                \" \",\n                                                title\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        popular === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                                animate: {\n                                                    backgroundPositionX: \"-100%\"\n                                                },\n                                                transition: {\n                                                    repeat: Infinity,\n                                                    ease: \"linear\",\n                                                    repeatType: \"loop\"\n                                                },\n                                                className: \"bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF, #DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium\",\n                                                children: \"Popular\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex item-baseline gap-1 mt-[30px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-4xl font-bold tracking-tighter leading-none\",\n                                            children: [\n                                                \"$\",\n                                                monthlyPrice\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"tracking-tight font-bold text-black/50\",\n                                            children: \"/month\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)(\"btn btn-primary w-full mt-[30px]\", inverse === true && \"bg-white text-black\"),\n                                    children: buttonText\n                                }, void 0, false, {\n                                    fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"flex flex-col gap-5 mt-8\",\n                                    children: features.map((feature)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-sm flex items-center gap-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_check_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    className: \"h-6 w-6\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                                                    lineNumber: 133,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: feature\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                                                    lineNumber: 134,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                                            lineNumber: 132,\n                                            columnNumber: 21\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/matheusduarte/Desktop/CASE 52ABX-32QJ/Projects/Modelo Landing Page Parallax/src/sections/Pricing.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Pricing;\nvar _c;\n$RefreshReg$(_c, \"Pricing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZWN0aW9ucy9QcmljaW5nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMkM7QUFDRjtBQUNGO0FBR3ZDLE1BQU1HLGVBQWU7SUFDbkI7UUFDRUMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLFlBQVk7UUFDWkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFVBQVU7WUFDUjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VMLE9BQU87UUFDUEMsY0FBYztRQUNkQyxZQUFZO1FBQ1pDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxVQUFVO1lBQ1I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLFlBQVk7UUFDWkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFVBQVU7WUFDUjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7Q0FDRDtBQUVNLE1BQU1DLFVBQVU7SUFDckIscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNmLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FBZ0I7Ozs7OztzQ0FDOUIsOERBQUNHOzRCQUFFSCxXQUFVO3NDQUEyQjs7Ozs7Ozs7Ozs7OzhCQUt4Qyw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ1pULGFBQWFhLEdBQUcsQ0FDZjs0QkFBQyxFQUNDWixLQUFLLEVBQ0xDLFlBQVksRUFDWkMsVUFBVSxFQUNWQyxPQUFPLEVBQ1BDLE9BQU8sRUFDUEMsUUFBUSxFQUNUOzZDQUNDLDhEQUFDSTs0QkFDQ0QsV0FBV1gsdURBQU9BLENBQ2hCLFFBQ0FPLFlBQVksUUFBUTs7OENBR3RCLDhEQUFDSztvQ0FBSUQsV0FBVTs7c0RBQ2IsOERBQUNLOzRDQUNDTCxXQUFXWCx1REFBT0EsQ0FDaEIsbUNBQ0FPLFlBQVksUUFBUTs7Z0RBR3JCO2dEQUNBSjs7Ozs7Ozt3Q0FFRkcsWUFBWSxzQkFDWCw4REFBQ007NENBQUlELFdBQVU7c0RBQ2IsNEVBQUNWLGlEQUFNQSxDQUFDZ0IsSUFBSTtnREFDWkMsU0FBUztvREFDUEMscUJBQXFCO2dEQUN2QjtnREFDQUMsWUFBWTtvREFDVkMsUUFBUUM7b0RBQ1JDLE1BQU07b0RBQ05DLFlBQVk7Z0RBRWQ7Z0RBQ0FiLFdBQVU7MERBQW1NOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FNbk4sOERBQUNDO29DQUFJRCxXQUFVOztzREFDYiw4REFBQ007NENBQUtOLFdBQVU7O2dEQUFtRDtnREFDL0RQOzs7Ozs7O3NEQUVKLDhEQUFDYTs0Q0FBS04sV0FBVTtzREFBeUM7Ozs7Ozs7Ozs7Ozs4Q0FJM0QsOERBQUNjO29DQUNDZCxXQUFXWCx1REFBT0EsQ0FDaEIsb0NBQ0FPLFlBQVksUUFBUTs4Q0FHckJGOzs7Ozs7OENBRUgsOERBQUNxQjtvQ0FBR2YsV0FBVTs4Q0FDWEgsU0FBU08sR0FBRyxDQUFDLENBQUNZLHdCQUNiLDhEQUFDQzs0Q0FBR2pCLFdBQVU7OzhEQUNaLDhEQUFDWix5REFBU0E7b0RBQUNZLFdBQVU7Ozs7Ozs4REFDckIsOERBQUNNOzhEQUFNVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVc3QixFQUFFO0tBdEZXbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL1ByaWNpbmcudHN4PzJjZDkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJ0AvYXNzZXRzL2NoZWNrLnN2Zyc7XG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSAndGFpbHdpbmQtbWVyZ2UnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cblxuY29uc3QgcHJpY2luZ1RpZXJzID0gW1xuICB7XG4gICAgdGl0bGU6ICdGcmVlJyxcbiAgICBtb250aGx5UHJpY2U6IDAsXG4gICAgYnV0dG9uVGV4dDogJ0dldCBzdGFydGVkIGZvciBmcmVlJyxcbiAgICBwb3B1bGFyOiBmYWxzZSxcbiAgICBpbnZlcnNlOiBmYWxzZSxcbiAgICBmZWF0dXJlczogW1xuICAgICAgJ1VwIHRvIDUgcHJvamVjdCBtZW1iZXJzJyxcbiAgICAgICdVbmxpbWl0ZWQgdGFza3MgYW5kIHByb2plY3RzJyxcbiAgICAgICcyR0Igc3RvcmFnZScsXG4gICAgICAnSW50ZWdyYXRpb25zJyxcbiAgICAgICdCYXNpYyBzdXBwb3J0JyxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQcm8nLFxuICAgIG1vbnRobHlQcmljZTogOSxcbiAgICBidXR0b25UZXh0OiAnU2lnbiB1cCBub3cnLFxuICAgIHBvcHVsYXI6IHRydWUsXG4gICAgaW52ZXJzZTogdHJ1ZSxcbiAgICBmZWF0dXJlczogW1xuICAgICAgJ1VwIHRvIDUwIHByb2plY3QgbWVtYmVycycsXG4gICAgICAnVW5saW1pdGVkIHRhc2tzIGFuZCBwcm9qZWN0cycsXG4gICAgICAnNTBHQiBzdG9yYWdlJyxcbiAgICAgICdJbnRlZ3JhdGlvbnMnLFxuICAgICAgJ1ByaW9yaXR5IHN1cHBvcnQnLFxuICAgICAgJ0FkdmFuY2VkIHN1cHBvcnQnLFxuICAgICAgJ0V4cG9ydCBzdXBwb3J0JyxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdCdXNpbmVzcycsXG4gICAgbW9udGhseVByaWNlOiAxOSxcbiAgICBidXR0b25UZXh0OiAnU2lnbiB1cCBub3cnLFxuICAgIHBvcHVsYXI6IGZhbHNlLFxuICAgIGludmVyc2U6IGZhbHNlLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICAnVXAgdG8gNSBwcm9qZWN0IG1lbWJlcnMnLFxuICAgICAgJ1VubGltaXRlZCB0YXNrcyBhbmQgcHJvamVjdHMnLFxuICAgICAgJzIwMEdCIHN0b3JhZ2UnLFxuICAgICAgJ0ludGVncmF0aW9ucycsXG4gICAgICAnRGVkaWNhdGVkIGFjY291bnQgbWFuYWdlcicsXG4gICAgICAnQ3VzdG9tIGZpZWxkcycsXG4gICAgICAnQWR2YW5jZWQgYW5hbHl0aWNzJyxcbiAgICAgICdFeHBvcnQgY2FwYWJpbGl0aWVzJyxcbiAgICAgICdBUEkgYWNjZXNzJyxcbiAgICAgICdBZHZhbmNlZCBzZWN1cml0eSBmZWF0dXJlcycsXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBQcmljaW5nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHktMjQgYmctd2hpdGUnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLWhlYWRpbmcnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJz5QcmljaW5nPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdzZWN0aW9uLWRlc2NyaXB0aW9uIG10LTUnPlxuICAgICAgICAgIEZyZWUgZm9yZXZlci4gVXBncmFkZSBmb3IgdW5saW1pdGFkIHRhc2tzLCBiZXR0ZXIgc2VjdXJpdHksIGFuZFxuICAgICAgICAgIGV4Y2x1c2l2ZSBmZWF0dXJlcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTYgaXRlbXMtY2VudGVyIG10LTEwIGxnOmZsZXgtcm93IGxnOml0ZW1zLWVuZCBsZzpqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAge3ByaWNpbmdUaWVycy5tYXAoXG4gICAgICAgICAgICAoe1xuICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgbW9udGhseVByaWNlLFxuICAgICAgICAgICAgICBidXR0b25UZXh0LFxuICAgICAgICAgICAgICBwb3B1bGFyLFxuICAgICAgICAgICAgICBpbnZlcnNlLFxuICAgICAgICAgICAgICBmZWF0dXJlcyxcbiAgICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dHdNZXJnZShcbiAgICAgICAgICAgICAgICAgICdjYXJkJyxcbiAgICAgICAgICAgICAgICAgIGludmVyc2UgPT09IHRydWUgJiYgJ2JvcmRlci1ibGFjayBiZy1ibGFjayB0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dHdNZXJnZShcbiAgICAgICAgICAgICAgICAgICAgICAndGV4dC1sZyBmb250LWJvbGQgdGV4dC1ibGFjay81MCcsXG4gICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZSA9PT0gdHJ1ZSAmJiAndGV4dC13aGl0ZS82MCdcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIHtwb3B1bGFyID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lubGluZS1mbGV4IHRleHQtc20gcHgtNCBweS0xLjUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXdoaXRlLzIwJz5cbiAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnNwYW4gXG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uWDogJy0xMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fSBcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IEluZmluaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRUeXBlOiAnbG9vcCcsXG5cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctW2xpbmVhci1ncmFkaWVudCh0b19yaWdodCwjREQ3RERGLCNFMUNEODYsI0JCQ0I5MiwjNzFDMkVGLCMzQkZGRkYsI0REN0RERiwgI0REN0RERiwjRTFDRDg2LCNCQkNCOTIsIzcxQzJFRiwjM0JGRkZGLCNERDdEREYpXSBbYmFja2dyb3VuZC1zaXplOjIwMCVdIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGZvbnQtbWVkaXVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBvcHVsYXJcbiAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbS1iYXNlbGluZSBnYXAtMSBtdC1bMzBweF0nPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlciBsZWFkaW5nLW5vbmUnPlxuICAgICAgICAgICAgICAgICAgICAke21vbnRobHlQcmljZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndHJhY2tpbmctdGlnaHQgZm9udC1ib2xkIHRleHQtYmxhY2svNTAnPlxuICAgICAgICAgICAgICAgICAgICAvbW9udGhcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3R3TWVyZ2UoXG4gICAgICAgICAgICAgICAgICAgICdidG4gYnRuLXByaW1hcnkgdy1mdWxsIG10LVszMHB4XScsXG4gICAgICAgICAgICAgICAgICAgIGludmVyc2UgPT09IHRydWUgJiYgJ2JnLXdoaXRlIHRleHQtYmxhY2snXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTUgbXQtOCc+XG4gICAgICAgICAgICAgICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3RleHQtc20gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQnPlxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPSdoLTYgdy02JyAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntmZWF0dXJlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJDaGVja0ljb24iLCJ0d01lcmdlIiwibW90aW9uIiwicHJpY2luZ1RpZXJzIiwidGl0bGUiLCJtb250aGx5UHJpY2UiLCJidXR0b25UZXh0IiwicG9wdWxhciIsImludmVyc2UiLCJmZWF0dXJlcyIsIlByaWNpbmciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJwIiwibWFwIiwiaDMiLCJzcGFuIiwiYW5pbWF0ZSIsImJhY2tncm91bmRQb3NpdGlvblgiLCJ0cmFuc2l0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiLCJlYXNlIiwicmVwZWF0VHlwZSIsImJ1dHRvbiIsInVsIiwiZmVhdHVyZSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/sections/Pricing.tsx\n"));

/***/ })

});