// Slide Show Script 1 (cnexiatech)
let slideIndex_cnexiatech = 1;
showSlides(slideIndex_cnexiatech);

function plusSlides(n) {
  showSlides(slideIndex_cnexiatech += n);
}

function currentSlide_cnexiatech(n) {
  showSlides(slideIndex_cnexiatech = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex_cnexiatech = 1; }    
  if (n < 1) { slideIndex_cnexiatech = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_cnexiatech - 1].style.display = "block";  
  dots[slideIndex_cnexiatech - 1].className += " active";
}

// Slide Show Script 2 (NOS TECHNOLGIES)

