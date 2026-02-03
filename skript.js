const itemMenu = document.querySelector('[data-js-item-menu]')
const subMenu = document.querySelector('[data-js-submenu]')
const headerMenuArrow = document.querySelector('[data-js-header-arrow]')
const body = document.body

const burgerButton = document.querySelector('[data-js-burger-button]')
const headerMenu = document.querySelector('[data-js-navigation-menu]')

itemMenu.addEventListener('click' ,() => {
    subMenu.classList.toggle('no-visible')
    headerMenuArrow.classList.toggle('is-active')
})

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('is-active')
    headerMenu.classList.toggle('is-active')
    body.classList.toggle('no-overflow')
})

