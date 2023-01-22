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

prevBtn.onclick = function () {
  plusSlide(-1);
};
nextBtn.onclick = function () {
  plusSlide(1);
};
