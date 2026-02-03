const slaider = document.querySelector('[data-js-slaider]')
const slaides = document.querySelectorAll('[data-js-slaid]')
const dots = document.querySelectorAll('[data-js-slaider-dot]')
let inner = 1

slaider.style.transform = `translateX(-${inner * 20}%)`


function nextSlaid() {
    inner++

    slaider.style.transition = 'transform 1s ease-in-out';
    slaider.style.transform = `translateX(-${inner * 20}%)`

    dots.forEach((dot, i) => {
        if(i === inner - 1) {
            dot.classList.add('is-active')
        }

        if(i !== inner - 1) {
            dot.classList.remove('is-active')
        }

    })

    if(inner === slaides.length - 1) {

        dots[0].classList.add('is-active')

    setTimeout(() => {
        inner = 1
        slaider.style.transition = 'none'
        slaider.style.transform = `translateX(-${inner * 20}%)`
    }, 1000)
}
}

setInterval(nextSlaid, 2000)