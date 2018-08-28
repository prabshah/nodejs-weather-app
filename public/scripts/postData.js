const sendFormData = event => {
  event.preventDefault();

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(res => {
  //     console.log(res);
  //   });
  // }

  let formData = new FormData(document.querySelector("form"));
  let city = formData.get("city").trim();
  if (city) window.location.replace(`/weather?city=${city}`);
};

let button = document.getElementById("formSubmit");

button.addEventListener("click", sendFormData);
