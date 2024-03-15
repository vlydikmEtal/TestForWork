const selectTrigger = document.querySelector('.select-trigger')
const selectOptions = document.querySelector('.select-options')
const trigger = selectTrigger.querySelector('.trigger')
const arrow = selectTrigger.querySelector('.arrow')

const slider = document.querySelector('#myRange')
const output = document.querySelector('.demo')

let fileFind = document.querySelectorAll('.field__file')

const preloder = document.querySelector('.preloder')

preloder.classList.add('active')

console.log(preloder)

setTimeout(() => {
    preloder.classList.remove('active')
}, 500)

document.addEventListener('click', function(e) {
  if (e.target === selectTrigger || e.target === trigger || e.target === arrow) {
    selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block'
    arrow.style.transform = `rotate(${selectOptions.style.display === 'block' ? '180' : '0'}deg)`
    arrow.classList.toggle('active')
    selectTrigger.style.backgroundColor = selectOptions.style.display === 'block' ? '#3D4050' : '#fff'
    trigger.style.color = selectOptions.style.display === 'block' ? '#fff' : '#000'
  } else if (!selectOptions.contains(e.target)) {
    selectOptions.style.display = 'none'
  } else if (e.target.tagName === 'LI') {
    const selectedOption = e.target.textContent;
    selectTrigger.innerHTML = `<span>${selectedOption}</span>`
    selectOptions.style.display = 'none'
  }
})

output.innerHTML = slider.value

slider.oninput = function() {
  output.innerHTML = this.value
}

Array.prototype.forEach.call(fileFind, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.field__file-fake').innerText

  input.addEventListener('change', function (e) {
    let countFiles = ''
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length

    if (countFiles)
      label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles
    else
      label.querySelector('.field__file-fake').innerText = labelVal
  })
})

const cardAnimation = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation__card')
    }
  })
})
cardAnimation.observe(document.querySelector('.design__order-cards'))

const titleBoxAnimation = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation__title-box')
    }
  })
})
titleBoxAnimation.observe(document.querySelector('.design__title-box'))

const formAnimation = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('form__animation')
    }
  })
})
formAnimation.observe(document.querySelector('.design__order-form'))

const footerAnimation = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('footer__animation')
    }
  })
})
footerAnimation.observe(document.querySelector('.footer__inner'))

const burger = document.querySelector('.burger')
const header = document.querySelector('.header__top')

burger.addEventListener('click', () => {
  header.classList.toggle('header__top--open')
  burger.classList.toggle('burger__active')
})