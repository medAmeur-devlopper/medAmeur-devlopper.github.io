const carousel_N1234 = document.querySelector('.carousel_N1234');
const slide_N1234 = carousel_N1234.querySelector('.carousel_N1234__slide');
const items_N1234 = carousel_N1234.querySelectorAll('.carousel_N1234__item');
const prevButton_N1234 = carousel_N1234.querySelector('.carousel_N1234__arrow--prev');
const nextButton_N1234 = carousel_N1234.querySelector('.carousel_N1234__arrow--next');
const dots_N1234 = carousel_N1234.querySelectorAll('.carousel_N1234__dot');

let slideIndex_N1234 = 0;

function showSlide_N1234(index) {
  slide_N1234.style.transform = `translateX(-${index * 90}%)`;
  slideIndex_N1234 = index;

  updateNavigation();
}

function updateNavigation() {
  dots_N1234.forEach((dot, index) => {
    if (index === slideIndex_N1234) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  if (slideIndex_N1234 === 0) {
    prevButton_N1234.classList.add('hidden');
  } else {
    prevButton_N1234.classList.remove('hidden');
  }

  if (slideIndex_N1234 === items_N1234.length / 4 - 1) {
    nextButton_N1234.classList.add('hidden');
  } else {
    nextButton_N1234.classList.remove('hidden');
  }
}

prevButton_N1234.addEventListener('click', () => {
  if (slideIndex_N1234 > 0) {
    showSlide_N1234(slideIndex_N1234 - 1);
  }
});

nextButton_N1234.addEventListener('click', () => {
  if (slideIndex_N1234 < items_N1234.length / 4 - 1) {
    showSlide_N1234(slideIndex_N1234 + 1);
  }
});

dots_N1234.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide_N1234(index);
  });
});

showSlide_N1234(0);
