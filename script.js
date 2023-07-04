const APIKey = '098210cfe1e14f998dd162058230307';
const APIUrl = 'https://api.weatherapi.com/v1/';

const displayWeatherInfo = (weatherData) => {
  const currentIcon = document.querySelector('#current-weather-icon');
  const currentDesc = document.querySelector('#current-weather-desc');
  const currentTempCel = document.querySelector('#current-weather-temp-cel');
  const currentTempFar = document.querySelector('#current-weather-temp-far');

  currentIcon.src = weatherData.current.condition.icon;
  currentDesc.textContent = weatherData.current.condition.text;
  currentTempCel.textContent = weatherData.current.temp_c + '°C';
  currentTempFar.textContent = weatherData.current.temp_f + '°F';

  console.log(weatherData.current);
};

const recoverWeatherInfo = (event) => {
  let location = '';

  if (event != null) {
    event.preventDefault();
    let inpt = event.target.querySelector('#form-location');
    location = inpt.value;
    if (location == '') { return }
  }
  else {
    location = 'Paris';
  }

  fetch(APIUrl + `current.json?key=${APIKey}&q=${location}`, { mode: 'cors' })
    .then(response => { return response.json() })
    .then(response => {
      displayWeatherInfo(response);
    })
    .catch(error => {
      console.log(error);
    });
};

const form = document.querySelector('form');
form.addEventListener('submit', recoverWeatherInfo);

recoverWeatherInfo(null);