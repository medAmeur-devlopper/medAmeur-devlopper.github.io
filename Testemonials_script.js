
    const carousel = document.querySelector('.Testemonials_slider');
    const slides = document.querySelectorAll('.testemonials_carousel');
    const prevButton = document.querySelector('.left');
    const nextButton = document.querySelector('.right');

    let currentIndex = 1;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.style.display = "grid";
                } else {
                    slide.style.display = "none";
                }
            });
        }

        function nextSlide() {
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            }
            showSlide(currentIndex);
        }

        nextButton.addEventListener("click", nextSlide);
        prevButton.addEventListener("click", prevSlide);

        // Automatic slide change every 5 second
        setInterval(nextSlide, 5000);

        showSlide(currentIndex);
