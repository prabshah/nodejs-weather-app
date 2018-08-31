const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const currentCityText = document.querySelector(".current-city-text");

document.addEventListener("DOMContentLoaded", function() {
  if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const apiKey = `09b24da1e0a717371cbf564329e8a449`;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${
        position.coords.latitude
      }&lon=${position.coords.longitude}&appid=${apiKey}`;

      fetch(url)
        .then(res => res.json())
        .then(data => {
          currentCityText.innerHTML = "Current City";
          city.innerHTML = data.name;
          temperature.innerHTML = `${Math.round(
            data.main.temp - 273.15
          )}&#8451`;
          description.innerHTML = data.weather[0].description;
        })
        .catch(err => console.log(err));
    });
  }
});
