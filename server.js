require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");

const weather = require("./routes/weather");
const status404 = require("./routes/404");
const currentCity = require("./routes/currentCity");

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

app.get("/weather", weather);
app.get("/404", status404);

app.get("/currentCity", currentCity);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Serving the app on port: ${PORT}`));
