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
        console.log(response);
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
  const location = document.querySelector('#display-location');
  const currentIcon = document.querySelector('#current-weather-icon');
  const currentDesc = document.querySelector('#current-weather-desc');
  const currentTemp = document.querySelector('#current-weather-temp');
  const currentFeel = document.querySelector('#current-weather-feel');
  const currentWind = document.querySelector('#current-weather-wind');
  const currentHumidity = document.querySelector('#current-weather-humidity');

  const displayWeatherInfo = (weatherData) => {
    location.textContent = weatherData.getLocation();
    currentIcon.src = weatherData.getIcon();
    currentIcon.alt = weatherData.getDesc();
    currentDesc.textContent = weatherData.getDesc();
    currentTemp.textContent = weatherData.getTempCel();
    currentFeel.textContent = weatherData.getFeelCel();
    currentWind.textContent = weatherData.getWindKph();
    currentHumidity.textContent = weatherData.getHumidity();
  };

  const clearWeatherInfo = () => {
    location.textContent = '';
    currentIcon.src = '';
    currentIcon.classList.add('hid')
    currentDesc.textContent = '';
    currentTemp.textContent = '';
    currentFeel.textContent = '';
    currentWind.textContent = '';
    currentHumidity.textContent = '';
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
  let location = `${weatherData.location.name}, ${weatherData.location.country}`;
  let icon = weatherData.current.condition.icon;
  let desc = weatherData.current.condition.text;
  let tempCel = weatherData.current.temp_c;
  let tempFar = weatherData.current.temp_f;
  let feelCel = weatherData.current.feelslike_c;
  let feelFar = weatherData.current.feelslike_f;
  let windKph = weatherData.current.wind_kph + ' km/h';
  let windMph = weatherData.current.wind_mph + ' mph';
  let humidity = weatherData.current.humidity + ' %';

  const getLocation = () => location;
  const getIcon = () => icon;
  const getDesc = () => desc;
  const getTempCel = () => tempCel;
  const getTempFar = () => tempFar;
  const getFeelCel = () => feelCel;
  const getFeelFar = () => feelFar;
  const getWindKph = () => windKph;
  const getWindMph = () => windMph;
  const getHumidity = () => humidity;

  return { getLocation, getIcon, getDesc, getTempCel, getTempFar, getFeelCel, getFeelFar, getWindKph, getWindMph, getHumidity };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E2QztBQUNUOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsV0FBVzs7QUFFWCx1Q0FBdUMsT0FBTyxLQUFLLFNBQVMsS0FBSyxjQUFjO0FBQy9FLDBCQUEwQix3QkFBd0I7QUFDbEQ7QUFDQTtBQUNBLFFBQVEsNkNBQU87QUFDZixzQ0FBc0MsNkNBQU8sb0JBQW9CLDBEQUFXO0FBQzVFLGVBQWU7QUFDZixPQUFPO0FBQ1Asd0JBQXdCLDZDQUFPLHVCQUF1QjtBQUN0RDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0Q7QUFDQSxvQkFBb0IsMEJBQTBCLElBQUksNkJBQTZCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ3FCOztBQUUxQzs7QUFFQSxnQ0FBZ0MsbURBQVU7QUFDMUMsbURBQVUsMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3dlYXRoZXItaW5mby5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgV2VhdGhlckluZm8gfSBmcm9tICcuL3dlYXRoZXItaW5mbyc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5JztcblxuY29uc3QgQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IEFQSUtleSA9ICcwOTgyMTBjZmUxZTE0Zjk5OGRkMTYyMDU4MjMwMzA3JztcbiAgY29uc3QgQVBJVXJsID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxLyc7XG5cbiAgY29uc3QgcmVjb3ZlcldlYXRoZXJJbmZvID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGxvY2F0aW9uID0gJyc7XG4gICAgaWYgKGV2ZW50ICE9IG51bGwpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgaW5wdCA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1sb2NhdGlvbicpO1xuICAgICAgbG9jYXRpb24gPSBpbnB0LnZhbHVlO1xuICAgICAgaWYgKGxvY2F0aW9uID09ICcnKSB7IHJldHVybiB9XG4gICAgfVxuICAgIGVsc2UgeyBsb2NhdGlvbiA9ICdQYXJpcyc7IH1cblxuICAgIGZldGNoKEFQSVVybCArIGBjdXJyZW50Lmpzb24/a2V5PSR7QVBJS2V5fSZxPSR7bG9jYXRpb259YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIERpc3BsYXkuY2xlYXJXZWF0aGVySW5mbygpO1xuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IgPT0gbnVsbCkgeyBEaXNwbGF5LmRpc3BsYXlXZWF0aGVySW5mbyhXZWF0aGVySW5mbyhyZXNwb25zZSkpOyB9XG4gICAgICAgIGVsc2UgeyByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UuZXJyb3IubWVzc2FnZSkgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7IERpc3BsYXkuZGlzcGxheUVycm9yKGVycm9yKTsgfSk7XG4gIH07XG4gIFxuICByZXR1cm4geyByZWNvdmVyV2VhdGhlckluZm8gfVxufSkoKTtcblxuZXhwb3J0IHsgQ29udHJvbGxlciB9IiwiY29uc3QgRGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXktbG9jYXRpb24nKTtcbiAgY29uc3QgY3VycmVudEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13ZWF0aGVyLWljb24nKTtcbiAgY29uc3QgY3VycmVudERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13ZWF0aGVyLWRlc2MnKTtcbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13ZWF0aGVyLXRlbXAnKTtcbiAgY29uc3QgY3VycmVudEZlZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13ZWF0aGVyLWZlZWwnKTtcbiAgY29uc3QgY3VycmVudFdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13ZWF0aGVyLXdpbmQnKTtcbiAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlci1odW1pZGl0eScpO1xuXG4gIGNvbnN0IGRpc3BsYXlXZWF0aGVySW5mbyA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZ2V0TG9jYXRpb24oKTtcbiAgICBjdXJyZW50SWNvbi5zcmMgPSB3ZWF0aGVyRGF0YS5nZXRJY29uKCk7XG4gICAgY3VycmVudEljb24uYWx0ID0gd2VhdGhlckRhdGEuZ2V0RGVzYygpO1xuICAgIGN1cnJlbnREZXNjLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZ2V0RGVzYygpO1xuICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZ2V0VGVtcENlbCgpO1xuICAgIGN1cnJlbnRGZWVsLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZ2V0RmVlbENlbCgpO1xuICAgIGN1cnJlbnRXaW5kLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZ2V0V2luZEtwaCgpO1xuICAgIGN1cnJlbnRIdW1pZGl0eS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmdldEh1bWlkaXR5KCk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJXZWF0aGVySW5mbyA9ICgpID0+IHtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIGN1cnJlbnRJY29uLnNyYyA9ICcnO1xuICAgIGN1cnJlbnRJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZCcpXG4gICAgY3VycmVudERlc2MudGV4dENvbnRlbnQgPSAnJztcbiAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGN1cnJlbnRGZWVsLnRleHRDb250ZW50ID0gJyc7XG4gICAgY3VycmVudFdpbmQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjdXJyZW50SHVtaWRpdHkudGV4dENvbnRlbnQgPSAnJztcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5RXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICBjdXJyZW50RGVzYy50ZXh0Q29udGVudCA9IGVycm9yO1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfTtcbiAgXG4gIHJldHVybiB7IGRpc3BsYXlXZWF0aGVySW5mbywgY2xlYXJXZWF0aGVySW5mbywgZGlzcGxheUVycm9yIH1cbn0pKCk7XG5cbmV4cG9ydCB7IERpc3BsYXkgfSIsImNvbnN0IFdlYXRoZXJJbmZvID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGxldCBsb2NhdGlvbiA9IGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWV9LCAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcbiAgbGV0IGljb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICBsZXQgZGVzYyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGxldCB0ZW1wQ2VsID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2M7XG4gIGxldCB0ZW1wRmFyID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Y7XG4gIGxldCBmZWVsQ2VsID0gd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYztcbiAgbGV0IGZlZWxGYXIgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mO1xuICBsZXQgd2luZEtwaCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9rcGggKyAnIGttL2gnO1xuICBsZXQgd2luZE1waCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9tcGggKyAnIG1waCc7XG4gIGxldCBodW1pZGl0eSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyAnICUnO1xuXG4gIGNvbnN0IGdldExvY2F0aW9uID0gKCkgPT4gbG9jYXRpb247XG4gIGNvbnN0IGdldEljb24gPSAoKSA9PiBpY29uO1xuICBjb25zdCBnZXREZXNjID0gKCkgPT4gZGVzYztcbiAgY29uc3QgZ2V0VGVtcENlbCA9ICgpID0+IHRlbXBDZWw7XG4gIGNvbnN0IGdldFRlbXBGYXIgPSAoKSA9PiB0ZW1wRmFyO1xuICBjb25zdCBnZXRGZWVsQ2VsID0gKCkgPT4gZmVlbENlbDtcbiAgY29uc3QgZ2V0RmVlbEZhciA9ICgpID0+IGZlZWxGYXI7XG4gIGNvbnN0IGdldFdpbmRLcGggPSAoKSA9PiB3aW5kS3BoO1xuICBjb25zdCBnZXRXaW5kTXBoID0gKCkgPT4gd2luZE1waDtcbiAgY29uc3QgZ2V0SHVtaWRpdHkgPSAoKSA9PiBodW1pZGl0eTtcblxuICByZXR1cm4geyBnZXRMb2NhdGlvbiwgZ2V0SWNvbiwgZ2V0RGVzYywgZ2V0VGVtcENlbCwgZ2V0VGVtcEZhciwgZ2V0RmVlbENlbCwgZ2V0RmVlbEZhciwgZ2V0V2luZEtwaCwgZ2V0V2luZE1waCwgZ2V0SHVtaWRpdHkgfTtcbn07XG5cbmV4cG9ydCB7IFdlYXRoZXJJbmZvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgQ29udHJvbGxlci5yZWNvdmVyV2VhdGhlckluZm8pO1xuQ29udHJvbGxlci5yZWNvdmVyV2VhdGhlckluZm8obnVsbCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9