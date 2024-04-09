export const dashboardButton = $('#dashboardButton')
export const mapButton = $('#mapButton')
export const proposalsButton = $('#proposalsButton')
export const menuButton = $('#menuButton')
export const sidebar = $('#sidebar')
export const mapContainer = $('#mapContainer')
export const buttonSidebar = $('.buttonSidebar')
export const buttonName = $('.buttonName')

export function openMenu(sidebar, map, button, buttonNamee) {
  sidebar.toggleClass('col-span-1 col-span-2')
  map.toggleClass('col-start-2 col-start-3')
  button.toggleClass('justify-center')
  buttonNamee.toggleClass('hidden')
}

export function hoverButton(...buttons) {
  buttons.forEach(item => {
    item.hover(() => {
      item.find('.buttonLogo').toggleClass('bg-white bg-black text-white')
    })
  })
}