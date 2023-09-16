const prev = document.querySelector('.offer__slider-prev')
const next = document.querySelector('.offer__slider-next')
const slides = document.querySelectorAll('.offer__slide')
const currentView = document.querySelector('#current')
const totalView = document.querySelector('#total')

const tabsitem = document.querySelectorAll('.tabheader__item')
const tabscontent = document.querySelectorAll('.tabcontent')

let modal = document.querySelector('.modal')
let btnOpen = document.querySelectorAll('[data-modal]')
let btnClose = document.querySelectorAll('[data-close]')
console.log(btnClose);
btnOpen.forEach(item => item.onclick = () => modal.classList.add('show', 'fade'))
btnClose.forEach(btn => {
  btn.onclick = (event) => {
    if(event.target.getAttribute(`data-close`) !== null)
    modal.classList.remove('show')
  }
})

window.onkeyup = (e) => {
  if(e.code === 'Escape') {
    modal.classList.remove('show')
  }
}

tabsitem.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabsitem.forEach(tab => {tab.classList.remove('tabheader__item_active')})
    tab.classList.add('tabheader__item_active', 'fade')

    tabscontent.forEach(content => {content.classList.remove('content_active')})
    tabscontent[index].classList.add('content_active', 'fade')
  })
})





let slideIndex = 0
totalView.innerHTML = slides.length >= 10 ? slides.length : `0${slides.length}`

function slideshow(n) {

  if( n > slides.length -1) {
    slideIndex = 0
  }

  if( n < 0) {
    slideIndex = slides.length -1
  }
  
  slides.forEach(slide => slide.classList.add('fade','hide'))
  slides[slideIndex].classList.remove('hide')
  currentView.innerHTML = slideIndex +1 >= 10 ? slideIndex +1 : `0${slideIndex + 1}` 
}

slideshow()

prev.onclick = () => {
  slideIndex--
  slideshow(slideIndex)
}
next.onclick = () => {
  slideIndex++
  slideshow(slideIndex)
}