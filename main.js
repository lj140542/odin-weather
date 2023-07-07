/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controller: () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _weather_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-info */ "./src/weather-info.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");



const Controller = (() => {
  const APIKey = '098210cfe1e14f998dd162058230307';
  const APIUrl = 'https://api.weatherapi.com/v1/';

  const recoverWeatherInfo = (event) => {
    let location = '';
    if (event != null) {
      event.preventDefault();
      let inpt = event.target.querySelector('#form-location');
      location = inpt.value;
      if (location == '') { return }
    }
    else { location = 'Paris'; }

    fetch(APIUrl + `current.json?key=${APIKey}&q=${location}`, { mode: 'cors' })
      .then(response => { return response.json() })
      .then(response => {
        _display__WEBPACK_IMPORTED_MODULE_1__.Display.clearWeatherInfo();
        if (response.error == null) { _display__WEBPACK_IMPORTED_MODULE_1__.Display.displayWeatherInfo((0,_weather_info__WEBPACK_IMPORTED_MODULE_0__.WeatherInfo)(response)); }
        else { return Promise.reject(response.error.message) }
      })
      .catch(error => { _display__WEBPACK_IMPORTED_MODULE_1__.Display.displayError(error); });
  };
  
  return { recoverWeatherInfo }
})();



/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Display: () => (/* binding */ Display)
/* harmony export */ });
const Display = (() => {
  const currentIcon = document.querySelector('#current-weather-icon');
  const currentDesc = document.querySelector('#current-weather-desc');
  const currentTempCel = document.querySelector('#current-weather-temp-cel');
  const currentTempFar = document.querySelector('#current-weather-temp-far');

  const displayWeatherInfo = (weatherData) => {
    currentIcon.src = weatherData.getCurrentIcon();
    currentDesc.textContent = weatherData.getCurrentDesc();
    currentTempCel.textContent = weatherData.getCurrentTempCel();
    currentTempFar.textContent = weatherData.getCurrentTempFar();
  };

  const clearWeatherInfo = () => {
    currentIcon.src = '';
    currentIcon.classList.add('hid')
    currentDesc.textContent = '';
    currentTempCel.textContent = '';
    currentTempFar.textContent = '';
  };

  const displayError = (error) => {
    currentDesc.textContent = error;
    console.log(error);
  };
  
  return { displayWeatherInfo, clearWeatherInfo, displayError }
})();



/***/ }),

/***/ "./src/weather-info.js":
/*!*****************************!*\
  !*** ./src/weather-info.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherInfo: () => (/* binding */ WeatherInfo)
/* harmony export */ });
const WeatherInfo = (weatherData) => {
  let currentIcon = weatherData.current.condition.icon;
  let currentDesc = weatherData.current.condition.text;
  let currentTempCel = weatherData.current.temp_c + '°C';
  let currentTempFar = weatherData.current.temp_f + '°F';
  const getCurrentIcon = () => currentIcon;
  const getCurrentDesc = () => currentDesc;
  const getCurrentTempCel = () => currentTempCel;
  const getCurrentTempFar = () => currentTempFar;
  return { getCurrentIcon, getCurrentDesc, getCurrentTempCel, getCurrentTempFar };
};



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");



const form = document.querySelector('form');

form.addEventListener('submit', _controller__WEBPACK_IMPORTED_MODULE_1__.Controller.recoverWeatherInfo);
_controller__WEBPACK_IMPORTED_MODULE_1__.Controller.recoverWeatherInfo(null);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E2QztBQUNUOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsV0FBVzs7QUFFWCx1Q0FBdUMsT0FBTyxLQUFLLFNBQVMsS0FBSyxjQUFjO0FBQy9FLDBCQUEwQix3QkFBd0I7QUFDbEQ7QUFDQSxRQUFRLDZDQUFPO0FBQ2Ysc0NBQXNDLDZDQUFPLG9CQUFvQiwwREFBVztBQUM1RSxlQUFlO0FBQ2YsT0FBTztBQUNQLHdCQUF3Qiw2Q0FBTyx1QkFBdUI7QUFDdEQ7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDcUI7O0FBRTFDOztBQUVBLGdDQUFnQyxtREFBVTtBQUMxQyxtREFBVSwwQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3dlYXRoZXItaW5mby5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgV2VhdGhlckluZm8gfSBmcm9tICcuL3dlYXRoZXItaW5mbyc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5JztcblxuY29uc3QgQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IEFQSUtleSA9ICcwOTgyMTBjZmUxZTE0Zjk5OGRkMTYyMDU4MjMwMzA3JztcbiAgY29uc3QgQVBJVXJsID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxLyc7XG5cbiAgY29uc3QgcmVjb3ZlcldlYXRoZXJJbmZvID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGxvY2F0aW9uID0gJyc7XG4gICAgaWYgKGV2ZW50ICE9IG51bGwpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgaW5wdCA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1sb2NhdGlvbicpO1xuICAgICAgbG9jYXRpb24gPSBpbnB0LnZhbHVlO1xuICAgICAgaWYgKGxvY2F0aW9uID09ICcnKSB7IHJldHVybiB9XG4gICAgfVxuICAgIGVsc2UgeyBsb2NhdGlvbiA9ICdQYXJpcyc7IH1cblxuICAgIGZldGNoKEFQSVVybCArIGBjdXJyZW50Lmpzb24/a2V5PSR7QVBJS2V5fSZxPSR7bG9jYXRpb259YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBEaXNwbGF5LmNsZWFyV2VhdGhlckluZm8oKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yID09IG51bGwpIHsgRGlzcGxheS5kaXNwbGF5V2VhdGhlckluZm8oV2VhdGhlckluZm8ocmVzcG9uc2UpKTsgfVxuICAgICAgICBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UpIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4geyBEaXNwbGF5LmRpc3BsYXlFcnJvcihlcnJvcik7IH0pO1xuICB9O1xuICBcbiAgcmV0dXJuIHsgcmVjb3ZlcldlYXRoZXJJbmZvIH1cbn0pKCk7XG5cbmV4cG9ydCB7IENvbnRyb2xsZXIgfSIsImNvbnN0IERpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBjdXJyZW50SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXdlYXRoZXItaWNvbicpO1xuICBjb25zdCBjdXJyZW50RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXdlYXRoZXItZGVzYycpO1xuICBjb25zdCBjdXJyZW50VGVtcENlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXdlYXRoZXItdGVtcC1jZWwnKTtcbiAgY29uc3QgY3VycmVudFRlbXBGYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13ZWF0aGVyLXRlbXAtZmFyJyk7XG5cbiAgY29uc3QgZGlzcGxheVdlYXRoZXJJbmZvID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgY3VycmVudEljb24uc3JjID0gd2VhdGhlckRhdGEuZ2V0Q3VycmVudEljb24oKTtcbiAgICBjdXJyZW50RGVzYy50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmdldEN1cnJlbnREZXNjKCk7XG4gICAgY3VycmVudFRlbXBDZWwudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5nZXRDdXJyZW50VGVtcENlbCgpO1xuICAgIGN1cnJlbnRUZW1wRmFyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZ2V0Q3VycmVudFRlbXBGYXIoKTtcbiAgfTtcblxuICBjb25zdCBjbGVhcldlYXRoZXJJbmZvID0gKCkgPT4ge1xuICAgIGN1cnJlbnRJY29uLnNyYyA9ICcnO1xuICAgIGN1cnJlbnRJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZCcpXG4gICAgY3VycmVudERlc2MudGV4dENvbnRlbnQgPSAnJztcbiAgICBjdXJyZW50VGVtcENlbC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGN1cnJlbnRUZW1wRmFyLnRleHRDb250ZW50ID0gJyc7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgY3VycmVudERlc2MudGV4dENvbnRlbnQgPSBlcnJvcjtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH07XG4gIFxuICByZXR1cm4geyBkaXNwbGF5V2VhdGhlckluZm8sIGNsZWFyV2VhdGhlckluZm8sIGRpc3BsYXlFcnJvciB9XG59KSgpO1xuXG5leHBvcnQgeyBEaXNwbGF5IH0iLCJjb25zdCBXZWF0aGVySW5mbyA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBsZXQgY3VycmVudEljb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICBsZXQgY3VycmVudERlc2MgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBsZXQgY3VycmVudFRlbXBDZWwgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYyArICfCsEMnO1xuICBsZXQgY3VycmVudFRlbXBGYXIgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZiArICfCsEYnO1xuICBjb25zdCBnZXRDdXJyZW50SWNvbiA9ICgpID0+IGN1cnJlbnRJY29uO1xuICBjb25zdCBnZXRDdXJyZW50RGVzYyA9ICgpID0+IGN1cnJlbnREZXNjO1xuICBjb25zdCBnZXRDdXJyZW50VGVtcENlbCA9ICgpID0+IGN1cnJlbnRUZW1wQ2VsO1xuICBjb25zdCBnZXRDdXJyZW50VGVtcEZhciA9ICgpID0+IGN1cnJlbnRUZW1wRmFyO1xuICByZXR1cm4geyBnZXRDdXJyZW50SWNvbiwgZ2V0Q3VycmVudERlc2MsIGdldEN1cnJlbnRUZW1wQ2VsLCBnZXRDdXJyZW50VGVtcEZhciB9O1xufTtcblxuZXhwb3J0IHsgV2VhdGhlckluZm8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBDb250cm9sbGVyLnJlY292ZXJXZWF0aGVySW5mbyk7XG5Db250cm9sbGVyLnJlY292ZXJXZWF0aGVySW5mbyhudWxsKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=