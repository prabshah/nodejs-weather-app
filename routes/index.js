const tempConverter = require("../helpers/tempConverter");
const weatherData = require("../helpers/weatherData");

const weatherApi = process.env.weatherApi;

const index = (req, res) => {
  const position = req.body.position;
  const latitude = position.latitude;
  const longitude = position.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApi}`;

  request(url, (err, response, body) => {
    if (err) return;
    const weather = JSON.parse(body);
    if (weather.main == undefined) return res.redirect("404");
    const data = weatherData(weather);
  });
};

module.exports = index;
