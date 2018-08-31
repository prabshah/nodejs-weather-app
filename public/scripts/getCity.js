document.addEventListener("DOMContentLoaded", function() {
  const sendFormData = event => {
    event.preventDefault();
    const formData = new FormData(document.querySelector("form"));
    const city = formData.get("city").trim();
    if (city) {
      window.location.replace(`/weather?city=${city}`);
    }
  };
  const button = document.getElementById("form-submit");
  button.addEventListener("click", sendFormData);
});
