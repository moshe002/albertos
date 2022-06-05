// /* api key: AIzaSyDV_O60eK5Q27RUV-IzK1osWwn7BWbtMHE */
//10.310115, 123.906573

// let map;

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) { //parameter center
  mapboxgl.accessToken = 'pk.eyJ1IjoibW9zaGUwMDIiLCJhIjoiY2wzenB5MmFlMTJxczNjbzRmeWd1ZTE5cCJ9.kAVx1K7s3gXDu6wqzeEIaA';
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,//[-77.034084, 38.909671], center, (to get current location of user)
        zoom: 13
  });

  // albertos lutopan 10.308540973802993, 123.70970742034524
  // albertos toledo 10.37646042786487, 123.63507871166067
  // albertos pusok 10.324738579704233, 123.97464661663679
  // albertos soong 10.300596078443927, 124.00365791399511
  // albertos tamiya 10.29645184549317, 123.96435406581095

  const geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.70970742034524, 10.308540973802993]
        },
        "properties": {
          "address": "Lutopan",
          "city": "Toledo City",
          "country": "Philippines"
        }
      },
       {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.63507871166067, 10.37646042786487]
        },
        "properties": {
          "address": "Toledo",
          "city": "Toledo City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.97464661663679, 10.324738579704233]
        },
        "properties": {
          "address": "Toledo",
          "city": "Toledo City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [124.00365791399511, 10.300596078443927]
        },
        "properties": {
          "address": "Toledo",
          "city": "Toledo City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.96435406581095, 10.29645184549317] 
        },
        "properties": {
          "address": "Toledo",
          "city": "Toledo City",
          "country": "Philippines"
        }
      },
    ]
  };
  
  // add markers to map
  for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  }
}




