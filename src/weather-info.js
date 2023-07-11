const WeatherInfo = (weatherData) => {
  let location = `${weatherData.location.name}, ${weatherData.location.country}`;
  let icon = weatherData.current.condition.icon;
  let desc = weatherData.current.condition.text;
  let tempCel = weatherData.current.temp_c + ' °C';
  let tempFar = weatherData.current.temp_f + ' °F';
  let feelCel = weatherData.current.feelslike_c + ' °C';
  let feelFar = weatherData.current.feelslike_f + ' °F';
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

export { WeatherInfo }