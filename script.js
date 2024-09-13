const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.nav-sections');

menuToggle.addEventListener('click', function () {
  if (menuList.style.display === 'none' || menuList.style.display === '') {
    menuList.style.display = 'block';
    menuToggle.style.backgroundImage = "url('/images/cross.png')"
  } else {
    menuList.style.display = 'none';
    menuToggle.style.backgroundImage = "url('/images/burger.png')"
  }
});

const buyButtons = document.querySelectorAll('.buy-button');
const modal = document.querySelector('.modal');
const buyButtons2 = document.querySelectorAll('[data-category="privilages"]');
const modal2 = document.querySelector('.modal2');
const closeButton = document.querySelector('.close');
const closeButton2 = document.querySelector('.close2');

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    document.querySelector('.modal-backdrop').classList.add('active');
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  modal2.style.display = 'none';
  document.querySelector('.modal-backdrop').classList.remove('active');
});

buyButtons2.forEach(el => {
  el.addEventListener('click', () => {
    modal2.style.display = 'block';
    document.querySelector('.modal-backdrop').classList.add('active');
  });
});

closeButton2.addEventListener('click', () => {
  modal2.style.display = 'none';
  document.querySelector('.modal-backdrop').classList.remove('active');
});

function updateSliderTrack(slider) {
  const value = (slider.value - slider.min) / (slider.max - slider.min) * 100
  slider.style.background = 'linear-gradient(90deg, rgba(218, 194, 255, 1) ' + value + '%, rgba(115, 84, 172, 1)' + value + '%)'
}

const rangeSlider = document.querySelector('input[type="range"]')
rangeSlider.addEventListener('input', function () {
  updateSliderTrack(this)
});

updateSliderTrack(rangeSlider)

function addText(input, unit) {
  let number = input.value.replace(/[^0-9.]/g, '');
  if (number === '') {
    input.value = (unit === ' шт') ? '500 рублей' : '5000 V';
  } else {
    input.value = number + unit;
  }
}

