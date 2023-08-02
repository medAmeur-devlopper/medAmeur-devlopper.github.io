
let cnexiatech_slideIndex = 1;
showSlides(cnexiatech_slideIndex);

function plusSlides(n) {
  showSlides(cnexiatech_slideIndex += n);
}

function currentSlide_cnexiatech(n) {
  showSlides(cnexiatech_slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {cnexiatech_slideIndex = 1}    
  if (n < 1) {cnexiatech_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }npm install --save npm-git-install
  slides[cnexiatech_slideIndex-1].style.display = "block";  
  dots[cnexiatech_slideIndex-1].className += " active";
}


window.document.onkeydown = function(e) {
if (!e) {
e = event;
}
if (e.keyCode == 27) {
lightbox_close();
}
}

function lightbox_open() {
var lightBoxVideo = document.getElementById("VisaChipCardVideo");
window.scrollTo(0, 0);
document.getElementById('light').style.display = 'block';
document.getElementById('fade').style.display = 'block';
lightBoxVideo.play();
}

function lightbox_close() {
var lightBoxVideo = document.getElementById("VisaChipCardVideo");
document.getElementById('light').style.display = 'none';
document.getElementById('fade').style.display = 'none';
lightBoxVideo.pause();
}


// NOS TECHNOLGIES SCRIPT

const carousel_N1234 = document.querySelector('.carousel_N1234');
  const slide = carousel_N1234.querySelector('.carousel_N1234__slide');
  const items = carousel_N1234.querySelectorAll('.carousel_N1234__item');
  const prevButton = carousel_N1234.querySelector('.carousel_N1234__arrow--prev');
  const nextButton = carousel_N1234.querySelector('.carousel_N1234__arrow--next');
  const dots = carousel_N1234.querySelectorAll('.carousel_N1234__dot');

  let slideIndex = 0;

  function showSlide(index) {
    slide.style.transform = `translateX(-${index * 27}%)`;
    slideIndex = index;

    updateNavigation();
  }

  function updateNavigation() {
    dots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    if (slideIndex === 0) {
      prevButton.classList.add('hidden');
    } else {
      prevButton.classList.remove('hidden');
    }

    if (slideIndex === items.length / 4 - 1) {
      nextButton.classList.add('hidden');
    } else {
      nextButton.classList.remove('hidden');
    }
  }

  prevButton.addEventListener('click', () => {
    if (slideIndex > 0) {
      showSlide(slideIndex - 1);
    }
  });

  nextButton.addEventListener('click', () => {
    if (slideIndex < items.length / 4 - 1) {
      showSlide(slideIndex + 1);
    }
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  showSlide(0);

    
