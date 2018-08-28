const express = require("express");
const bodyParser = require("body-parser");

const request = require("request");
const ejs = require("ejs");
require("dotenv").config();
const tempConverter = require("./helpers/tempConverter");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(express.static(__dirname, +"/public"));

app.get("/", (req, res) => {
  res.render("index", {
    pageHeading: "Node-Express Weather App",
    footerMessage: "Weather App by prabesh.shah31@gmail.com"
  });
});

app.post("/", (req, res) => {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
    process.env.weatherApi
  }`;

  request(url, function(err, response, body) {
    if (err) {
      res.render("index", { weather: null, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);
      console.log(weather);
      //console.log(weather);
      if (weather.main == undefined) {
        res.render("index", {
          weather: null,
          error: "Error, please try again"
        });
      } else {
        let tempKelvin = Math.round(weather.main.temp);
        let tempCelcius = tempConverter.toCelsius(tempKelvin);
        let tempFahrenheit = tempConverter.toFahrenheit(tempCelcius);
        let place = weather.name;
        let weatherIconCode = weather.weather[0].icon;
        let weatherIconImgUrl = `http://openweathermap.org/img/w/${weatherIconCode}.png`;
        console.log("tempKelvin", tempKelvin);
        console.log("tempCelcius", tempCelcius);
        console.log("Fahrenheit", tempFahrenheit);
        console.log("place", place);
        console.log("icon code", weatherIconCode);
        console.log("iconUrl", weatherIconImgUrl);
        let weatherText = `It's ${tempCelcius} degrees in ${weather.name}!`;
        res.render("index", { weather: weatherText, error: null });
      }
    }
  });
  // ------------------------------------------------------

  // request(url, function(err, response, body) {
  //   if (err) {
  //     res.render("index", { weather: null, error: "Error, please try again" });
  //   } else {
  //     let weather = JSON.parse(body);
  //     console.log(weather);
  //     if (weather.main == undefined) {
  //       res.render("index", {
  //         weather: null,
  //         error: "Error, please try again"
  //       });
  //     } else {

  //       let weatherText = `It's ${weather.main.temp} degrees in ${
  //         weather.name
  //       }!`;
  //       res.render("index", { weather: weatherText, error: null });
  //     }
  //   }
  // });

  // -----------------------------------------------------------
});

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => console.log(`Serving the app on port: ${PORT}`));
