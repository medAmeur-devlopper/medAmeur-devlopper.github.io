const slides = document.querySelectorAll('.main_content');
    const dotsContainer = document.querySelector('.dots');
    let currentSlide = 0;
    let sliding = false;

    function showSlide(slideIndex) {
      if (sliding || slideIndex === currentSlide) return;

      sliding = true;
      const currentSlideElement = slides[currentSlide];
      const nextSlideElement = slides[slideIndex];

      currentSlideElement.classList.remove('show');
      nextSlideElement.classList.add('show');

      setTimeout(() => {
        currentSlideElement.style.transform = 'translateX(100%)';
        nextSlideElement.style.transform = 'translateX(0)';
        currentSlideElement.classList.remove('show');
        nextSlideElement.classList.add('show');
        currentSlide = slideIndex;
        sliding = false;
      }, 500);

      updateDots();
    }

    function nextSlide() {
      const nextSlideIndex = (currentSlide + 1) % slides.length;
      showSlide(nextSlideIndex);
    }

    function prevSlide() {
      const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(prevSlideIndex);
    }

    function createDots() {
      slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
      });
    }

    function updateDots() {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add('active');
          dot.style.opacity = '1';
        } else {
          dot.classList.remove('active');
          dot.style.opacity = '0.5';
        }
      });
    }

    createDots();
    showSlide(0);

    // Remove arrow buttons, as we can now navigate using dots

    // Automatically switch slides every 5 seconds (adjust this time as needed)
    setInterval(nextSlide, 5000);
