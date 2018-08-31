document.addEventListener("DOMContentLoaded", function() {
  if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latlng = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ latLng: latlng }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK && results[1]) {
          for (let ac = 0; ac < results[0].address_components.length; ac++) {
            const component = results[0].address_components[ac];
            switch (component.types[0]) {
              case "locality":
                const city = component.long_name || "London";
                return window.location.replace(`/weather?city=${city}`);
            }
          }
        }
      });
    });
  }
});
