// /* api key: AIzaSyDV_O60eK5Q27RUV-IzK1osWwn7BWbtMHE */

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 10.310115, lng: 123.906573 }, //10.310115, 123.906573
    zoom: 11,
  });
}

window.initMap = initMap;