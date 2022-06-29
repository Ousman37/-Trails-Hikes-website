function initMap() {
  var options = {
    center: { lat: 34.76, lng: -26.94 },
    zoom: 8,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
