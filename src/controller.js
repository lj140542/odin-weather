import { WeatherInfo } from './weather-info';
import { Display } from './display';

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
        Display.clearWeatherInfo();
        if (response.error == null) { Display.displayWeatherInfo(WeatherInfo(response)); }
        else { return Promise.reject(response.error.message) }
      })
      .catch(error => { Display.displayError(error); });
  };
  
  return { recoverWeatherInfo }
})();

export { Controller }