const toCelsius = temp => {
  if (temp > 0) return Math.round(temp - 273.15);
};
const toFahrenheit = temp => {
  if (temp > 0) return Math.round(temp * (9 / 5) + 32);
};

const weatherData = weather => {
  const tempKelvin = weather.main.temp;
  const tempCelcius = toCelsius(tempKelvin);
  const minTempCelcius = toCelsius(weather.main.temp_min);
  const maxTempCelcius = toCelsius(weather.main.temp_max);
  const tempFahrenheit = toFahrenheit(tempCelcius);
  const city = `${weather.name}, ${weather.sys.country}`;
  const iconCode = weather.weather[0].icon;
  const desc = weather.weather[0].description;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  const humidity = weather.main.humidity;

  return {
    tempCelcius,
    city,
    iconUrl,
    tempFahrenheit,
    desc,
    humidity,
    minTempCelcius,
    maxTempCelcius
  };
};

module.exports = weatherData;
