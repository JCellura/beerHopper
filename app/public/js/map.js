// Google Maps ------------------------------------------------------
// require("dotenv").config();

// var keys = require('./keys');
// var mapKey = keys.mapKey.id;
// console.log(mapKey);

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.7790, lng: -78.6394},
    zoom: 18,
    mapTypeId: 'satellite',
    heading: -90,
    tilt: 45
  });

  var marker = new google.maps.Marker({
    map: map,
    position: {lat: 35.7780, lng: -78.6386},
    title: 'The Raleigh Times'
  });

  var marker = new google.maps.Marker({
    map: map,
    position: {lat: 35.7774, lng: -78.6380},
    title: 'Trophy Brewing Tap and Table'
  });

  var marker = new google.maps.Marker({
    map: map,
    position: {lat: 35.7776, lng: -78.6394},
    title: 'The Big Easy'
  });
}

function rotate90() {
  var heading = map.getHeading() || 0;
  map.setHeading(heading + 90);
}

function autoRotate() {
  // Determine if we're showing aerial imagery.
  if (map.getTilt() !== 0) {
    window.setInterval(rotate90, 3000);
  }
}


// Navbar -----------------------------------------------------------
M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let options = document.querySelectorAll('option');
  let instances = M.Dropdown.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  let options = document.querySelectorAll('option');
  let instances = M.Sidenav.init(elems, options);
});


// Mobile -----------------------------------------------------------
function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
  }
}