const slide_pictos = document.querySelector('.picto_slide_pictos');
const slide_pictoWidth = slide_pictos.clientWidth;
const dot_pictos_picto = document.querySelectorAll('.dot_picto');
let currentSlide_picto = 0;

function showSlide_picto(index) {
  slide_pictos.style.transform = `translateX(-${index * slide_pictoWidth}px)`;
  slide_pictos.querySelectorAll('.slide_picto').forEach((slide_picto, idx) => {
    slide_picto.classList.toggle('active', idx === index);
  });
  dot_pictos_picto.forEach((dot_picto, idx) => {
    dot_picto.classList.toggle('active', idx === index);
  });
}

function nextSlide() {
  currentSlide_picto = (currentSlide_picto + 1) % dot_pictos_picto.length;
  showSlide_picto(currentSlide_picto);
}

setInterval(nextSlide, 5000);

dot_pictos_picto.forEach((dot_picto, idx) => {
  dot_picto.addEventListener('click', () => {
    currentSlide_picto = idx;
    showSlide_picto(currentSlide_picto);
  });
});

// Initial setup
showSlide_picto(currentSlide_picto);
