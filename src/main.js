import { menuButton, openMenu, sidebar, mapContainer, buttonName, buttonSidebar, hoverButton, dashboardButton, mapButton, proposalsButton } from "./pages/page.js";
import { API_KEY } from "./data/key.js";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

var map = new maplibregl.Map({
  container: 'map', // container id
  style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${API_KEY}`, // style URL
  // style: 'https://demotiles.maplibre.org/style.json',
  center: [110.99612103940123, -7.590151800182316],
  // center: [0, 0],
  zoom: 10,
  attributionControl: false,
});
map.addControl(new maplibregl.NavigationControl(), 'top-left');
map.addControl(
  new maplibregl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  }), 'top-left'
);

console.log(map);

var mapUsulan = new maplibregl.Map({
  container: 'mapUsulan', // container id
  style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${API_KEY}`, // style URL
  center: [0, 0], // starting position [lng, lat]
  zoom: 1 // starting zoom
});
mapUsulan.addControl(new maplibregl.NavigationControl(), 'top-left');
mapUsulan.addControl(
  new maplibregl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  }), 'top-left'
);

map.on('load', () => {
  map.addSource('buaGridd', {
    type: 'vector',
    scheme: 'tms',
    // tiles: [`http://localhost:8080/geoserver/gwc/service/tms/1.0.0/BVT:buaGrid@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf`]
    tiles: [`http://localhost:8080/geoserver/gwc/service/tms/1.0.0/Karanganyar:administrasi_desa_polygon@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf`]
  })

  $('#administrasiKelurahan').change(() => {
    if ($('#administrasiKelurahan').is(':checked')) {
      map.addLayer({
        'id': 'bua',
        'type': 'fill',
        'source': 'buaGridd',
        'source-layer': 'administrasi_desa_polygon',
        'paint': { 'fill-color': '#F2FFFF', 'fill-outline-color': '#000300' },
        'minzoom': 9,
        // 'paint': {
        //   'fill-color': {
        //     'property': `bua_2019`,
        //     'type': 'interval',
        //     'stops': [
        //       [0, '#F2FFFF'],
        //       [5, '#C6E3EC'],
        //       [33, '#9CC8DC'],
        //       [50, '#76ACCE'],
        //       [67, '#5590C0'],
        //       [83, '#3A73B0'],
        //       [100, '#2A569E']
        //     ]
        //   },
        //   'fill-opacity': 0.8,
        //   'fill-outline-color': 'white'}
      })} else {
        map.removeLayer('bua')
      }
    }
  )



  console.log(map.getSource('adminDesa'));
  // console.log(map.addLayer({
  //   'id': 'adminDesa',
  //   'type': 'fill',
  //   'source': 'adminDesa',
  //   // 'source-layer': '',
  //   'source-layer': 'adminDesa',
  //   // 'paint': {'fill-color': '#000000'},
  // }));
  // console.log(map.getLayer('adminDesa'));
})

// console.log(map.getSource('adminDesa'));

$('#usulanButton').click(() => $('#modalUsulan').toggleClass('hidden flex'))

$('#closeModalUsulan').click(() => $('#modalUsulan').toggleClass('hidden flex'))



menuButton.click(() => {
  openMenu(sidebar, mapContainer, buttonSidebar, buttonName)
})

hoverButton(dashboardButton, mapButton, proposalsButton, menuButton)

// $('#jalan').click(() => {
//   $('.material-symbols-outlined').html('arrow_drop_down')
// })

$('.dropdownButton').click((e) => {
  // console.log(e);
  if (e.target) {
    // $(e.target)
    $(e.target).closest('.dropdown')
      .find('.dropdownContent').toggleClass('hidden').end()
    if ($(e.target).closest('.dropdown').find('.expandedDropdown').css('display') === 'none') {
      $(e.target).closest('.dropdown').find('.expandedDropdown').show()
      $(e.target).closest('.dropdown').find('.collapsedDropdown').hide()
    } else {
      $(e.target).closest('.dropdown').find('.collapsedDropdown').show()
      $(e.target).closest('.dropdown').find('.expandedDropdown').hide()
    }
    // $('.dropdownContent').toggleClass('hidden')
  }

})

// if (event.target.matches('.dropbtn')) {
//   event.target.closest('.dropdown').querySelector('.dropdown-content').classList.toggle('show')
// }