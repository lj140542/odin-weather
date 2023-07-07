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

export { Display }