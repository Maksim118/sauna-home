const reviewButtonPrev = document.querySelector('[data-js-reviews-button-prew]')
const reviewButtonNext = document.querySelector('[data-js-reviews-button-next]')

const reviewScrollItem = document.querySelector('[ data-js-reviews-skrollitem]')
const reviewsScrollBar = document.querySelector('[data-js-reviews-scrollbar]')

const reviewCards = document.querySelectorAll('[data-js-reviews-item]')
let reviewCurent = 2
let isAnimating = false
let reviewsScrollPosition = 0

// reviewCards[reviewCurent].scrollIntoView({
//         behavior: 'auto',   
//         inline: 'center',
//         block: 'nearest'
//     });

function scrollCarding() {
    if (isAnimating) return;
    isAnimating = true;

    reviewCards[reviewCurent].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
    })

    if(reviewCurent === 1) {
            reviewCurent = reviewCards.length - 3
            reviewCards[reviewCards.length - 3].classList.add('is-active')
            setTimeout(() => {
                reviewCards[reviewCurent].scrollIntoView({
                        behavior: 'auto',
                        inline: 'center',
                        block: 'nearest'
                    })
                reviewCards[1].classList.remove('is-active')
                isAnimating = false
            },350)
        }

    if(reviewCurent === reviewCards.length - 2) {
        reviewCurent = 2
        reviewCards[reviewCurent].classList.add('is-active')

            setTimeout(() => {
                reviewCards[reviewCurent].scrollIntoView({
                        behavior: 'auto',
                        inline: 'center',
                        block: 'nearest'
                    })
                reviewCards[reviewCards.length - 2].classList.remove('is-active')
                isAnimating = false;
            },400)
        }

        setTimeout(() => {
            isAnimating = false;
        }, 400);
}

function onScrollBar() {
    if(reviewsScrollPosition === reviewCards.length - 4) {
        reviewsScrollPosition = 0
    }

    if(reviewsScrollPosition < 0) {
        reviewsScrollPosition = reviewCards.length - 5
    }

    const scrollbarWidth = reviewsScrollBar.clientWidth
    const scrollItemWidth = reviewScrollItem.clientWidth
    let barWidthNoItem = 100 - ((scrollItemWidth * 100) / scrollbarWidth)
    let scrollStep = (barWidthNoItem / (reviewCards.length - 5)) * reviewsScrollPosition
    let scrollTranslate = (scrollbarWidth * scrollStep) / 100
    reviewScrollItem.style.transform = `translateX(${scrollTranslate}px)`
}

reviewButtonNext.addEventListener('click', () => {
    if (isAnimating) return;
    reviewsScrollPosition++
    reviewCurent = (reviewCurent + 1) % reviewCards.length 
    reviewCards[reviewCurent].classList.add('is-active')
    reviewCards[reviewCurent - 1].classList.remove('is-active')
    scrollCarding()   
    onScrollBar()
})

reviewButtonPrev.addEventListener('click', () => {
    if (isAnimating) return;
    reviewsScrollPosition--
    reviewCurent = (reviewCurent - 1 + reviewCards.length) % reviewCards.length
    reviewCards[reviewCurent].classList.add('is-active')
    reviewCards[reviewCurent + 1].classList.remove('is-active')
    scrollCarding()
    onScrollBar()
})

// window.addEventListener('DOMContentLoaded', () => {
//     reviewCards[reviewCurent].classList.add('is-active')
//     reviewCards[reviewCurent].scrollIntoView({
//         behavior: 'auto',   
//         inline: 'center',
//         block: 'nearest'
//     });
// });
