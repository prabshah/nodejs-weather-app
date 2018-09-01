document.addEventListener("DOMContentLoaded", function() {
  const sendFormData = event => {
    event.preventDefault();
    const city = document.querySelector("#city").value.trim();
    if (city) {
      window.location.replace(`/weather?city=${city}`);
    }
  };
  const button = document.getElementById("form-submit");
  button.addEventListener("click", sendFormData);
});
