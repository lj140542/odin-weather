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

export { WeatherInfo }