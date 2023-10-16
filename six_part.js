document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    const dotsContainer = document.querySelector('.slider-dots');

    let currentIndex = 0;

    // Generate dot navigation
    cards.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Add active class to the first dot
    dotsContainer.children[currentIndex].classList.add('active');

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dot navigation
        for (let i = 0; i < dotsContainer.children.length; i++) {
            dotsContainer.children[i].classList.remove('active');
        }
        dotsContainer.children[currentIndex].classList.add('active');
    }
});
