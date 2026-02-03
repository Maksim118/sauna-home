const buttonLeft = document.querySelector('[data-js-swip-left]')
const buttonRight = document.querySelector('[data-js-swip-right]')
const swapper = document.querySelector('[data-js-advantages-swiper]')
const swapperInner = document.querySelector('[data-js-swapper-inner]')

let isDown = false
let startX
let startSkroll 

swapper.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDown = true
    startX = e.pageX
    startSkroll = swapper.scrollLeft
})

document.addEventListener('mouseup', () => {
    isDown = false
})

swapper.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault();
    const dx = e.pageX - startX
    swapper.scrollLeft = startSkroll - dx
    swapperIndex = Math.round((swapper.scrollLeft / 333.5) + 1)
    swapperInner.textContent = `0${swapperIndex}`
})

let swapperIndex

buttonLeft.addEventListener('click', () => {
    swapper.scrollLeft = swapper.scrollLeft - 333.5
    swapperIndex = Math.round((swapper.scrollLeft / 333.5) + 1)
    swapperInner.textContent = `0${swapperIndex}`
})

buttonRight.addEventListener('click', () => {
    swapper.scrollLeft = swapper.scrollLeft + 333.5
    swapperIndex = Math.round((swapper.scrollLeft / 333.5) + 1)
    swapperInner.textContent = `0${swapperIndex}`
})
