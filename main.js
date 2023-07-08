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
  let tempCel = weatherData.current.temp_c + ' °C';
  let tempFar = weatherData.current.temp_f + ' °F';
  let feelCel = weatherData.current.feelslike_c + ' °C';
  let feelFar = weatherData.current.feelslike_f + ' °F';
  let windKph = weatherData.current.wind_kph + ' KPH';
  let windMph = weatherData.current.wind_mph + ' MPH';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E2QztBQUNUOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsV0FBVzs7QUFFWCx1Q0FBdUMsT0FBTyxLQUFLLFNBQVMsS0FBSyxjQUFjO0FBQy9FLDBCQUEwQix3QkFBd0I7QUFDbEQ7QUFDQTtBQUNBLFFBQVEsNkNBQU87QUFDZixzQ0FBc0MsNkNBQU8sb0JBQW9CLDBEQUFXO0FBQzVFLGVBQWU7QUFDZixPQUFPO0FBQ1Asd0JBQXdCLDZDQUFPLHVCQUF1QjtBQUN0RDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0Q7QUFDQSxvQkFBb0IsMEJBQTBCLElBQUksNkJBQTZCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ3FCOztBQUUxQzs7QUFFQSxnQ0FBZ0MsbURBQVU7QUFDMUMsbURBQVUsMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy93ZWF0aGVyLWluZm8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IFdlYXRoZXJJbmZvIH0gZnJvbSAnLi93ZWF0aGVyLWluZm8nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4vZGlzcGxheSc7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBBUElLZXkgPSAnMDk4MjEwY2ZlMWUxNGY5OThkZDE2MjA1ODIzMDMwNyc7XG4gIGNvbnN0IEFQSVVybCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS8nO1xuXG4gIGNvbnN0IHJlY292ZXJXZWF0aGVySW5mbyA9IChldmVudCkgPT4ge1xuICAgIGxldCBsb2NhdGlvbiA9ICcnO1xuICAgIGlmIChldmVudCAhPSBudWxsKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGlucHQgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI2Zvcm0tbG9jYXRpb24nKTtcbiAgICAgIGxvY2F0aW9uID0gaW5wdC52YWx1ZTtcbiAgICAgIGlmIChsb2NhdGlvbiA9PSAnJykgeyByZXR1cm4gfVxuICAgIH1cbiAgICBlbHNlIHsgbG9jYXRpb24gPSAnUGFyaXMnOyB9XG5cbiAgICBmZXRjaChBUElVcmwgKyBgY3VycmVudC5qc29uP2tleT0ke0FQSUtleX0mcT0ke2xvY2F0aW9ufWAsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCkgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBEaXNwbGF5LmNsZWFyV2VhdGhlckluZm8oKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yID09IG51bGwpIHsgRGlzcGxheS5kaXNwbGF5V2VhdGhlckluZm8oV2VhdGhlckluZm8ocmVzcG9uc2UpKTsgfVxuICAgICAgICBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UpIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4geyBEaXNwbGF5LmRpc3BsYXlFcnJvcihlcnJvcik7IH0pO1xuICB9O1xuICBcbiAgcmV0dXJuIHsgcmVjb3ZlcldlYXRoZXJJbmZvIH1cbn0pKCk7XG5cbmV4cG9ydCB7IENvbnRyb2xsZXIgfSIsImNvbnN0IERpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5LWxvY2F0aW9uJyk7XG4gIGNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlci1pY29uJyk7XG4gIGNvbnN0IGN1cnJlbnREZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlci1kZXNjJyk7XG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlci10ZW1wJyk7XG4gIGNvbnN0IGN1cnJlbnRGZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlci1mZWVsJyk7XG4gIGNvbnN0IGN1cnJlbnRXaW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlci13aW5kJyk7XG4gIGNvbnN0IGN1cnJlbnRIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXdlYXRoZXItaHVtaWRpdHknKTtcblxuICBjb25zdCBkaXNwbGF5V2VhdGhlckluZm8gPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmdldExvY2F0aW9uKCk7XG4gICAgY3VycmVudEljb24uc3JjID0gd2VhdGhlckRhdGEuZ2V0SWNvbigpO1xuICAgIGN1cnJlbnRJY29uLmFsdCA9IHdlYXRoZXJEYXRhLmdldERlc2MoKTtcbiAgICBjdXJyZW50RGVzYy50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmdldERlc2MoKTtcbiAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmdldFRlbXBDZWwoKTtcbiAgICBjdXJyZW50RmVlbC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmdldEZlZWxDZWwoKTtcbiAgICBjdXJyZW50V2luZC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmdldFdpbmRLcGgoKTtcbiAgICBjdXJyZW50SHVtaWRpdHkudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5nZXRIdW1pZGl0eSgpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyV2VhdGhlckluZm8gPSAoKSA9PiB7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnJztcbiAgICBjdXJyZW50SWNvbi5zcmMgPSAnJztcbiAgICBjdXJyZW50SWNvbi5jbGFzc0xpc3QuYWRkKCdoaWQnKVxuICAgIGN1cnJlbnREZXNjLnRleHRDb250ZW50ID0gJyc7XG4gICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSAnJztcbiAgICBjdXJyZW50RmVlbC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGN1cnJlbnRXaW5kLnRleHRDb250ZW50ID0gJyc7XG4gICAgY3VycmVudEh1bWlkaXR5LnRleHRDb250ZW50ID0gJyc7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgY3VycmVudERlc2MudGV4dENvbnRlbnQgPSBlcnJvcjtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH07XG4gIFxuICByZXR1cm4geyBkaXNwbGF5V2VhdGhlckluZm8sIGNsZWFyV2VhdGhlckluZm8sIGRpc3BsYXlFcnJvciB9XG59KSgpO1xuXG5leHBvcnQgeyBEaXNwbGF5IH0iLCJjb25zdCBXZWF0aGVySW5mbyA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBsZXQgbG9jYXRpb24gPSBgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lfSwgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG4gIGxldCBpY29uID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgbGV0IGRlc2MgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBsZXQgdGVtcENlbCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jICsgJyDCsEMnO1xuICBsZXQgdGVtcEZhciA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mICsgJyDCsEYnO1xuICBsZXQgZmVlbENlbCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MgKyAnIMKwQyc7XG4gIGxldCBmZWVsRmFyID0gd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZiArICcgwrBGJztcbiAgbGV0IHdpbmRLcGggPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoICsgJyBLUEgnO1xuICBsZXQgd2luZE1waCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9tcGggKyAnIE1QSCc7XG4gIGxldCBodW1pZGl0eSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyAnICUnO1xuXG4gIGNvbnN0IGdldExvY2F0aW9uID0gKCkgPT4gbG9jYXRpb247XG4gIGNvbnN0IGdldEljb24gPSAoKSA9PiBpY29uO1xuICBjb25zdCBnZXREZXNjID0gKCkgPT4gZGVzYztcbiAgY29uc3QgZ2V0VGVtcENlbCA9ICgpID0+IHRlbXBDZWw7XG4gIGNvbnN0IGdldFRlbXBGYXIgPSAoKSA9PiB0ZW1wRmFyO1xuICBjb25zdCBnZXRGZWVsQ2VsID0gKCkgPT4gZmVlbENlbDtcbiAgY29uc3QgZ2V0RmVlbEZhciA9ICgpID0+IGZlZWxGYXI7XG4gIGNvbnN0IGdldFdpbmRLcGggPSAoKSA9PiB3aW5kS3BoO1xuICBjb25zdCBnZXRXaW5kTXBoID0gKCkgPT4gd2luZE1waDtcbiAgY29uc3QgZ2V0SHVtaWRpdHkgPSAoKSA9PiBodW1pZGl0eTtcblxuICByZXR1cm4geyBnZXRMb2NhdGlvbiwgZ2V0SWNvbiwgZ2V0RGVzYywgZ2V0VGVtcENlbCwgZ2V0VGVtcEZhciwgZ2V0RmVlbENlbCwgZ2V0RmVlbEZhciwgZ2V0V2luZEtwaCwgZ2V0V2luZE1waCwgZ2V0SHVtaWRpdHkgfTtcbn07XG5cbmV4cG9ydCB7IFdlYXRoZXJJbmZvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgQ29udHJvbGxlci5yZWNvdmVyV2VhdGhlckluZm8pO1xuQ29udHJvbGxlci5yZWNvdmVyV2VhdGhlckluZm8obnVsbCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9