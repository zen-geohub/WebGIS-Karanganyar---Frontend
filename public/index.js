import { menuButton, openMenu, sidebar, mapContainer, buttonName, buttonSidebar, hoverButton, dashboardButton, mapButton, proposalsButton } from "../components/page.js";

var map = new maplibregl.Map({
  container: 'map', // container id
  style: 'https://demotiles.maplibre.org/style.json', // style URL
  center: [0, 0], // starting position [lng, lat]
  zoom: 1 // starting zoom
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
    if ($(e.target).closest('.dropdown').find('.logoo').css('display') === 'none') {
      $(e.target).closest('.dropdown').find('.logoo').show()
      $(e.target).closest('.dropdown').find('.logo').hide()
    } else {
      $(e.target).closest('.dropdown').find('.logo').show()
      $(e.target).closest('.dropdown').find('.logoo').hide()
    }
    // $('.dropdownContent').toggleClass('hidden')
  }

})

// if (event.target.matches('.dropbtn')) {
//   event.target.closest('.dropdown').querySelector('.dropdown-content').classList.toggle('show')
// }