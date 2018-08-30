const express = require("express");
const bodyParser = require("body-parser");
var expressLayouts = require("express-ejs-layouts");

const ejs = require("ejs");
require("dotenv").config();

const app = express();

const weather = require("./routes/weather");
const status404 = require("./routes/404");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressLayouts);
app.use(express.static(__dirname, +"/public"));
app.set("view engine", "ejs");
app.set("layout", "layouts/default");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/weather", weather);
app.use("/404", status404);

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => console.log(`Serving the app on port: ${PORT}`));
