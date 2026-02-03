const swapperResult = document.querySelector('[data-js-results-slider]')
const dotResult = document.querySelectorAll('[data-js-pagination-dot]')
const numberResult = document.querySelector('[data-js-result-number]')

let swipIndex = 0
let startPosition
let lastPosition
let dotActive = 0

const scroll = () => {
    swapperResult.scrollTo({
        left: swapperResult.clientWidth * swipIndex,
        behavior: 'smooth'
    })
}

const dotTogle = () => {
    dotResult[swipIndex].classList.add('is-active')
    dotResult[dotActive].classList.remove('is-active')
    dotActive = swipIndex
}

const innerTogle = () => {
    numberResult.textContent = `0${swipIndex + 1}`
}

swapperResult.addEventListener('pointerdown', (e) => {
    startPosition = e.clientX
    e.preventDefault();
})

swapperResult.addEventListener('pointerup', (e) => {
    lastPosition = e.clientX
    const dx = startPosition - lastPosition
    e.preventDefault();

    if(dx > 0) {
        if(swipIndex < 5) {
            swipIndex++
        } else {
            swipIndex = 0
        }
        console.log(swipIndex + 1)
        scroll()
        dotTogle()
        innerTogle()
    } 

    if(dx < 0) {
        if(swipIndex > 0) {
            swipIndex--
        } else {
            swipIndex = 5
        }
        console.log(swipIndex + 1)
        scroll()
        dotTogle()
        innerTogle()
    }
})

dotResult.forEach((e, i) => {
    e.addEventListener('click', () => {
        swipIndex = i
        scroll()
        dotTogle()
        innerTogle()
    })
})
