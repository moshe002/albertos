// /* api key: AIzaSyDV_O60eK5Q27RUV-IzK1osWwn7BWbtMHE */
//10.310115, 123.906573

// let map;

function myFunction() {
  var x = document.getElementById('nav');
  if(x.style.visibility !== "visible") {
      x.style.visibility = "visible";
  } else {
      x.style.visibility = "hidden";
  }
}


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

  // albertos minglanilla 10.246210502506685, 123.7974376318967
  // albertos minglanilla lipata 10.255756695656286, 123.81125615817527
  // albertos dumlog 10.24709157514339, 123.8392289156555
  // albertos tabunok 10.262389324964628, 123.84103672482806
  // albertos laray, talisay 10.258588710784318, 123.85918991537127
  // albertos bulacao 10.276820685574993, 123.85244147782548
  // albertos pardo 10.287778367336484, 123.86321859432063
  // albertos mambaling 10.29237562445158, 123.87055443622737
  // albertos uc pri 10.29914999077435, 123.89399694357667
  // albertos near usc 10.30040731145718, 123.89815529039463
  // albertos near fuente osmena 10.308941663434084, 123.8912378732456
  // albertos capitol 10.315079181416474, 123.89097487170591
  // albertos mabolo 10.320441297186179, 123.91108607454433
  // albertos mandaue 10.330384191457242, 123.93303727260906
  // albertos banilad 10.343704221137244, 123.9140257757486
  // albertos cordova 10.264472359913485, 123.96271323558408

  const geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.70970742034524, 10.308540973802993] // lutopan
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
          "coordinates": [123.63507871166067, 10.37646042786487] // toledo
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
          "coordinates": [123.97464661663679, 10.324738579704233] // pusok
        },
        "properties": {
          "address": "Pusok",
          "city": "Lapu-Lapu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [124.00365791399511, 10.300596078443927] // soong
        },
        "properties": {
          "address": "Soong I, Mactan",
          "city": "Lapu-Lapu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.96435406581095, 10.29645184549317] // tamiya
        },
        "properties": {
          "address": "Tamiya, Basak",
          "city": "Lapu-Lapu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.7974376318967, 10.246210502506685] // minglanilla 
        },
        "properties": {
          "address": "Minglanilla",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.81125615817527, 10.255756695656286] // minglanilla lipata
        },
        "properties": {
          "address": "Lipata, Minglanilla",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.8392289156555, 10.24709157514339] // dumlog
        },
        "properties": {
          "address": "Dumlog",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.84103672482806, 10.262389324964628] // tabunok 
        },
        "properties": {
          "address": "Tabunok",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.85918991537127, 10.258588710784318] //lara talisay 
        },
        "properties": {
          "address": "Lara, Talisay",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.85244147782548, 10.276820685574993] //bulacao 
        },
        "properties": {
          "address": "Bulacao",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.86321859432063, 10.287778367336484] //pardo
        },
        "properties": {
          "address": "Pardo, Cebu",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.87055443622737, 10.29237562445158] //mambaling 
        },
        "properties": {
          "address": "Mambaling",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.89399694357667, 10.29914999077435] //uc pri 
        },
        "properties": {
          "address": "Near UC Pri",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.89815529039463, 10.30040731145718] //near usc 
        },
        "properties": {
          "address": "Near USC",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.8912378732456, 10.308941663434084] //near fuente osmena
        },
        "properties": {
          "address": "Near Fuente Osmeña",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.89097487170591, 10.315079181416474] //capitol
        },
        "properties": {
          "address": "Capitol",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.91108607454433, 10.320441297186179] //mabolo 
        },
        "properties": {
          "address": "Mabolo",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.93303727260906, 10.330384191457242] //mandaue
        },
        "properties": {
          "address": "Mandaue",
          "city": "Mandaue City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.9140257757486, 10.343704221137244] //banilad 
        },
        "properties": {
          "address": "Banilad",
          "city": "Cebu City",
          "country": "Philippines"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [123.96271323558408, 10.264472359913485] //cordova
        },
        "properties": {
          "address": "Cordova",
          "city": "Cordova",
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




