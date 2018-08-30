const tempConverter = require("../helpers/tempConverter");

const weatherApi = process.env.weatherApi;

const index = () => {
  res.render;
};

const index = (req, res) => {
  const position = req.body.position;
  const latitude = position.latitude;
  const longitude = position.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApi}`;

  request(url, (err, response, body) => {
    if (err) console.log(err);
    const weather = JSON.parse(body);
    if (weather.main == undefined) return res.redirect("404");

    const data = weatherData(weather);

    res.render("currentWeather", { data: "simple data" });
  });
};

const weatherData = weather => {
  const tempKelvin = Math.round(weather.main.temp);
  const tempCelcius = tempConverter.toCelsius(tempKelvin);
  const minTempCelcius = tempConverter.toCelsius(weather.main.temp_min);
  const maxTempCelcius = tempConverter.toCelsius(weather.main.temp_max);
  const tempFahrenheit = tempConverter.toFahrenheit(tempCelcius);
  const place = weather.name;
  const iconCode = weather.weather[0].icon;
  const desc = weather.weather[0].description;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  const humidity = weather.main.humidity;
  return {
    tempCelcius,
    place,
    iconUrl,
    tempFahrenheit,
    desc,
    humidity,
    minTempCelcius,
    maxTempCelcius
  };
};

module.exports = router;
