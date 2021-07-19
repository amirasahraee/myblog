/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/***/ (() => {

eval("let toggle;\nlet menuClose;\n\nconst load = () => {\n    const menuToggle = document.querySelector('.menuToggle');\n    const menuIcon = document.getElementById('menuIcon');\n    const navigation = document.body.querySelector('.navigation');\n    // for opening menu\n    toggle = () => {\n        menuToggle.classList.toggle('active');\n        navigation.classList.toggle('active');\n\n\n        if (menuToggle.classList.contains('active')) {\n            menuIcon.classList.remove('fa-bars');\n            menuIcon.classList.add('fa-close');\n        } else {\n            menuIcon.classList.remove('fa-close');\n            menuIcon.classList.add('fa-bars');\n        }\n    }\n\n    window.addEventListener('scroll', function() {\n        const header = document.querySelector('header');\n        header.classList.toggle('sticky', window.scrollY > 0);\n    })\n\n    //navigation close menu after clicked any link\n\n    menuClose = () => {\n        menuToggle.classList.remove('active');\n        navigation.classList.remove('active');\n        menuIcon.classList.remove('fa-close');\n        menuIcon.classList.add('fa-bars');\n    }\n\n}\n\n//# sourceURL=webpack://myblog/./src/pages/home/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/pages/home/index.js"]();
/******/ 	
/******/ })()
;