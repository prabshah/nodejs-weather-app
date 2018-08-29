const express = require("express");
const bodyParser = require("body-parser");
var expressLayouts = require("express-ejs-layouts");
const request = require("request");
const ejs = require("ejs");

require("dotenv").config();
const tempConverter = require("./helpers/tempConverter");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressLayouts);
app.use(express.static(__dirname, +"/public"));

app.set("view engine", "ejs");
app.set("layout", "layouts/default");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/404", (req, res) => {
  res.render("404");
});

app.get("/weather", (req, res) => {
  const city = req.query.city;
  console.log(req.body, req.query);
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
    process.env.weatherApi
  }`;

  request(url, function(err, response, body) {
    if (err) return res.redirect("404");

    const weather = JSON.parse(body);
    console.log(weather);

    if (weather.main == undefined) return res.redirect("404");

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
    const data = {
      tempCelcius,
      place,
      iconUrl,
      tempFahrenheit,
      desc,
      humidity,
      minTempCelcius,
      maxTempCelcius
    };
    return res.render("weather", data);
  });
});

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => console.log(`Serving the app on port: ${PORT}`));
