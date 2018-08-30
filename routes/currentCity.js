const currentCity = (req, res) => {
  const lat = req.query.lat;
  const lng = req.query.lng;

  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherApi}`;

  request(url, (err, response, body) => {
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

module.exports = currentCity;
