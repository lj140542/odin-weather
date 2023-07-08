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

export { Display }