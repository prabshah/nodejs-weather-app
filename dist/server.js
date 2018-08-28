"use strict";

var express = require("express");
var hbs = require("hbs");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

app.use(express.static(__dirname, +"/public"));

app.get("/", function (req, res) {
  res.render("index", {
    pageHeading: "Node-Express Weather App",
    footerMessage: "Weather App by prabesh.shah31@gmail.com"
  });
});

app.post("/", function (req, res) {
  console.log(req.body.city);
  res.render("index");
});

var PORT = process.env.PORT || 7777;

app.listen(PORT, function () {
  return console.log("Serving the app on port: " + PORT);
});