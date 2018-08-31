const request = require("request");
const weatherData = require("../helpers/weatherData");
const weather = (req, res) => {
  const city = req.query.city;
  const weatherApi = process.env.weatherApi;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}`;

  request(url, function(err, response, body) {
    if (err) {
      return res.redirect("404");
    }

    const weather = JSON.parse(body);
    if (weather.main == undefined) {
      return res.redirect("404");
    }

    const data = weatherData(weather);
    return res.render("weather", data);
  });
};

module.exports = weather;
