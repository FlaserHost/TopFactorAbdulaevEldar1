// _______Бургер меню_______
const menuIcon = document.querySelector('#menu-icon');
const popup = document.querySelector('#popup');
const { body } = document;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector('#menu-list').cloneNode(1);

// При клике на иконку menuIcon вызываем ф-ию menuIconHandler
menuIcon.addEventListener('click', menuIconHandler);

// Выполняем действия при клике ..
function menuIconHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle('open');
  menuIcon.classList.toggle('active');
  body.classList.toggle('noscroll');
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener('click', closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove('open');
  menuIcon.classList.remove('active');
  body.classList.remove('noscroll');
}

// _______Выбор языка_______
const menuLanguage = document.querySelector('#language');
const popupLanguage = document.querySelector('#popup-language');

const menuLanguageList = document.querySelector('#language-list').cloneNode(1);

menuLanguage.addEventListener('click', menuLanguageHandler);

function menuLanguageHandler(e) {
  e.preventDefault();

  popupLanguage.classList.toggle('open-lang');
  menuLanguage.classList.toggle('active-lang');

  renderPopupLanguage();
}

function renderPopupLanguage() {
  popupLanguage.appendChild(menuLanguageList);
}

const linksMenu = Array.from(menuLanguageList.children);

linksMenu.forEach((link1) => {
  link1.addEventListener('click', closeOnClickLang);
});

function closeOnClickLang() {
  popupLanguage.classList.remove('open-lang');
  menuLanguage.classList.remove('active-lang');
}

// _______Banner-slider_______
const dots = document.getElementsByClassName('dots-item');
const dotsArea = document.getElementsByClassName('dots-block')[0];
const slides = document.getElementsByClassName('slider-item');
const prevBtn = document.getElementById('left-button');
const nextBtn = document.getElementById('right-button');
let slideIndex = 1;

function showSlides(n) {
  if (n < 1) {
    slideIndex = slides.length;
  } else if (n > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[slideIndex - 1].style.display = '';
  dots[slideIndex - 1].classList.add('active');
}
showSlides(slideIndex);

function plusSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

prevBtn.onclick = function () {
  plusSlide(-1);
};
nextBtn.onclick = function () {
  plusSlide(1);
};

dotsArea.onclick = function (e) {
  for (let i = 0; i < dots.length + 1; i++) {
    if (e.target.classList.contains('dots-item') && e.target === dots[i - 1]) {
      currentSlide(i);
    }
  }
};

