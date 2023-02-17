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

// ________onClick learnMore________

document.getElementById('resBtnMore').onclick = function() {
document.getElementById('results__row').classList.toggle('results__row--active');
document.getElementById('arrow-down').classList.toggle('arrow-down--active')
}


// Список Footer

const listCompany = document.querySelector('#company');
const popupList = document.querySelector('#popup-list');
const imgCompany = document.querySelector('#img-company')

const companyList = document.querySelector('#company-list').cloneNode(1);

listCompany.addEventListener('click', listCompanyHandler);

function listCompanyHandler(e) {
  e.preventDefault();

  popupList.classList.toggle('open-list');
  listCompany.classList.toggle('active-list');
  imgCompany.classList.toggle('active-img');

  renderPopupList();
}

function renderPopupList() {
  popupList.appendChild(companyList);
}


const listPlatfom = document.querySelector('#platform');
const imgPlatform = document.querySelector('#img-platform')
const popupListPlatform = document.querySelector('#popup-list-platform');


const platformList = document.querySelector('#platform-list').cloneNode(1);

listPlatfom.addEventListener('click', listPlatformHandler);

function listPlatformHandler(e) {
  e.preventDefault();

  popupListPlatform.classList.toggle('open-list');
  listPlatfom.classList.toggle('active-list');
  imgPlatform.classList.toggle('active-img');

  renderPopupListPlatform();
}

function renderPopupListPlatform() {
  popupListPlatform.appendChild(platformList);
}


const listPartners = document.querySelector('#partners');
const imgPartners = document.querySelector('#img-partners')
const popupListPartners = document.querySelector('#popup-list-partners');


const partnersList = document.querySelector('#partners-list').cloneNode(1);

listPartners.addEventListener('click', listPartnersHandler);

function listPartnersHandler(e) {
  e.preventDefault();

  popupListPartners.classList.toggle('open-list');
  listPartners.classList.toggle('active-list');
  imgPartners.classList.toggle('active-img');

  renderPopupListPartners();
}

function renderPopupListPartners() {
  popupListPartners.appendChild(partnersList);
}


const listStudy = document.querySelector('#study');
const imgStudy = document.querySelector('#img-study')
const popupListStudy = document.querySelector('#popup-list-study');


const studyList = document.querySelector('#study-list').cloneNode(1);

listStudy.addEventListener('click', listStudyHandler);

function listStudyHandler(e) {
  e.preventDefault();

  popupListStudy.classList.toggle('open-list');
  listStudy.classList.toggle('active-list');
  imgStudy.classList.toggle('active-img');

  renderPopupListStudy();
}

function renderPopupListStudy() {
  popupListStudy.appendChild(studyList);
}


// Список Footer-small

const listCompanySmall = document.querySelector('#company-small');
const popupListSmall = document.querySelector('#popup-list-small');
const imgCompanySmall = document.querySelector('#img-company-small')

const companyListSmall = document.querySelector('#company-list-small').cloneNode(1);

listCompanySmall.addEventListener('click', listCompanySmallHandler);

function listCompanySmallHandler(e) {
  e.preventDefault();

  popupListSmall.classList.toggle('open-list');
  listCompanySmall.classList.toggle('active-list');
  imgCompanySmall.classList.toggle('active-img');

  renderPopupListSmall();
}

function renderPopupListSmall() {
  popupListSmall.appendChild(companyListSmall);
}



const listPlatfomSmall = document.querySelector('#platform-small');
const imgPlatformSmall = document.querySelector('#img-platform-small')
const popupListPlatformSmall = document.querySelector('#popup-list-platform-small');


const platformListSmall = document.querySelector('#platform-list-small').cloneNode(1);

listPlatfomSmall.addEventListener('click', listPlatformSmallHandler);

function listPlatformSmallHandler(e) {
  e.preventDefault();

  popupListPlatformSmall.classList.toggle('open-list');
  listPlatfomSmall.classList.toggle('active-list');
  imgPlatformSmall.classList.toggle('active-img');

  renderPopupListPlatformSmall();
}

function renderPopupListPlatformSmall() {
  popupListPlatformSmall.appendChild(platformListSmall);
}



const listPartnersSmall = document.querySelector('#partners-small');
const imgPartnersSmall = document.querySelector('#img-partners-small')
const popupListPartnersSmall = document.querySelector('#popup-list-partners-small');


const partnersListSmall = document.querySelector('#partners-list-small').cloneNode(1);

listPartnersSmall.addEventListener('click', listPartnersSmallHandler);

function listPartnersSmallHandler(e) {
  e.preventDefault();

  popupListPartnersSmall.classList.toggle('open-list');
  listPartnersSmall.classList.toggle('active-list');
  imgPartnersSmall.classList.toggle('active-img');

  renderPopupListPartnersSmall();
}

function renderPopupListPartnersSmall() {
  popupListPartnersSmall.appendChild(partnersListSmall);
}



const listStudySmall = document.querySelector('#study-small');
const imgStudySmall = document.querySelector('#img-study-small')
const popupListStudySmall = document.querySelector('#popup-list-study-small');


const studyListSmall = document.querySelector('#study-list-small').cloneNode(1);

listStudySmall.addEventListener('click', listStudySmallHandler);

function listStudySmallHandler(e) {
  e.preventDefault();

  popupListStudySmall.classList.toggle('open-list');
  listStudySmall.classList.toggle('active-list');
  imgStudySmall.classList.toggle('active-img');

  renderPopupListStudySmall();
}

function renderPopupListStudySmall() {
  popupListStudySmall.appendChild(studyListSmall);
}