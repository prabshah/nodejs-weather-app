module.exports = {
  toCelsius: temp => {
    if (temp > 0) return Math.round(temp - 273.15);
  },
  toFahrenheit: temp => {
    if (temp > 0) return Math.round(temp * (9 / 5) + 32);
  }
};
