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
// const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
// links.forEach((link) => {
//   link.addEventListener('click', closeOnClick);
// });

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
  // popupLanguage.classList.remove('open-lang');
  // menuLanguage.classList.remove('active-lang');


  renderPopupLanguage();
}

function renderPopupLanguage() {
  popupLanguage.appendChild(menuLanguageList);
}

const linksMenu = Array.from(menuLanguageList.children);


linksMenu.forEach((link2) => {
  link2.addEventListener('click', closeOnClickLang);
});

function closeOnClickLang() {
  popupLanguage.classList.remove('open-lang');
  menuLanguage.classList.remove('active-lang');
  
}

// Закрытие по клику вне блока с меню выбора языка
document.addEventListener('click', (e) => {
  const clicOutsideMenu = e.composedPath().includes(menuLanguage);
  if ( !clicOutsideMenu ) {
    popupLanguage.classList.remove('open-lang');
    menuLanguage.classList.remove('active-lang');
  }
})


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

const linksCompany = Array.from(companyList.children);

linksCompany.forEach((el) => {
    el.addEventListener('click', closeOnClickCompany);
  });
  
  function closeOnClickCompany() {
    popupList.classList.remove('open-list');
    listCompany.classList.remove('active-list');
    imgCompany.classList.remove('active-img');
  }

  document.addEventListener('click', (e) => {
    const clicOutsideCompany = e.composedPath().includes(listCompany);
    if ( !clicOutsideCompany ) {
        popupList.classList.remove('open-list');
        listCompany.classList.remove('active-list');
        imgCompany.classList.remove('active-img');
    }
  })



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

const linksPlatform = Array.from(platformList.children);

linksPlatform.forEach((el) => {
    el.addEventListener('click', closeOnClickPlatform);
  });
  
  function closeOnClickPlatform() {
    popupListPlatform.classList.remove('open-list');
    listPlatfom.classList.remove('active-list');
    imgPlatform.classList.remove('active-img');
  }

  document.addEventListener('click', (e) => {
    const clicOutsidePlatform = e.composedPath().includes(listPlatfom);
    if ( !clicOutsidePlatform ) {
      popupListPlatform.classList.remove('open-list');
      listPlatfom.classList.remove('active-list');
      imgPlatform.classList.remove('active-img');
    }
  })



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

const linksPartners = Array.from(partnersList.children);

linksPartners.forEach((el) => {
    el.addEventListener('click', closeOnClickPartners);
  });
  
  function closeOnClickPartners() {
    popupListPartners.classList.remove('open-list');
    listPartners.classList.remove('active-list');
    imgPartners.classList.remove('active-img');
  }

  document.addEventListener('click', (e) => {
    const clicOutsidePartners = e.composedPath().includes(listPartners);
    if ( !clicOutsidePartners ) {
      popupListPartners.classList.remove('open-list');
      listPartners.classList.remove('active-list');
      imgPartners.classList.remove('active-img');
    }
  })


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

const linksStudy = Array.from(studyList.children);

linksStudy.forEach((el) => {
    el.addEventListener('click', closeOnClickStudy);
  });
  
  function closeOnClickStudy() {
    popupListStudy.classList.remove('open-list');
    listStudy.classList.remove('active-list');
    imgStudy.classList.remove('active-img');
  }

  document.addEventListener('click', (e) => {
    const clicOutsideStudy = e.composedPath().includes(listStudy);
    if ( !clicOutsideStudy ) {
      popupListStudy.classList.remove('open-list');
      listStudy.classList.remove('active-list');
      imgStudy.classList.remove('active-img');
    }
  })


// Список Footer-small

// Company
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

const linksCompanySmall = Array.from(companyListSmall.children);

linksCompanySmall.forEach((el) => {
    el.addEventListener('click', closeOnClickCompanySmall);
  });
  
  function closeOnClickCompanySmall() {
    popupListSmall.classList.remove('open-list');
    listCompanySmall.classList.remove('active-list');
    imgCompanySmall.classList.remove('active-img');
  }

  document.addEventListener('click', (e) => {
    const clicOutsideCompanySmall = e.composedPath().includes(listCompanySmall);
    if ( !clicOutsideCompanySmall ) {
        popupListSmall.classList.remove('open-list');
        listCompanySmall.classList.remove('active-list');
        imgCompanySmall.classList.remove('active-img');
    }
  })


// Platform
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

const linksPlatformSmall = Array.from(platformListSmall.children);

linksPlatformSmall.forEach((el) => {
    el.addEventListener('click', closeOnClickPlatformSmall);
  });
  
  function closeOnClickPlatformSmall() {
    popupListPlatformSmall.classList.remove('open-list');
    listPlatfomSmall.classList.remove('active-list');
    imgPlatformSmall.classList.remove('active-img');
  }

  document.addEventListener('click', (e) => {
    const clicOutsidePlatformSmall = e.composedPath().includes(listPlatfomSmall);
    if ( !clicOutsidePlatformSmall ) {
      popupListPlatformSmall.classList.remove('open-list');
      listPlatfomSmall.classList.remove('active-list');
      imgPlatformSmall.classList.remove('active-img');
    }
  })


// Partners
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

const linksPartnersSmall = Array.from(partnersListSmall.children);

linksPartnersSmall.forEach((el) => {
    el.addEventListener('click', closeOnClickPartnersSmall);
  });
  
  function closeOnClickPartnersSmall() {
    popupListPartnersSmall.classList.remove('open-list');
    listPartnersSmall.classList.remove('active-list');
    imgPartnersSmall.classList.remove('active-img');
  }

  document.addEventListener('click', (e) => {
    const clicOutsidePartnersSmall = e.composedPath().includes(listPartnersSmall);
    if ( !clicOutsidePartnersSmall ) {
      popupListPartnersSmall.classList.remove('open-list');
      listPartnersSmall.classList.remove('active-list');
      imgPartnersSmall.classList.remove('active-img');
    }
  })


// Study
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

const linksStudySmall = Array.from(studyListSmall.children);

linksStudySmall.forEach((el) => {
    el.addEventListener('click', closeOnClickStudySmall);
  });
  
  function closeOnClickStudySmall() {
    popupListStudySmall.classList.remove('open-list');
    listStudySmall.classList.remove('active-list');
    imgStudySmall.classList.remove('active-img');
  }

  document.addEventListener('click', (e) => {
    const clicOutsideStudySmall = e.composedPath().includes(listStudySmall);
    if ( !clicOutsideStudySmall ) {
      popupListStudySmall.classList.remove('open-list');
      listStudySmall.classList.remove('active-list');
      imgStudySmall.classList.remove('active-img');
    }
  })