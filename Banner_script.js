document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".home_banner");
    const backgroundImage = document.querySelector(".banner_bcg");

    const images = [
        "https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/Frame34-1696335880106.jpg", // Replace with your image URLs
        "https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/Frame34z-1696337113536.jpg",
        "https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/Maskgroup-1696335881622.jpg",
        "https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/azdazd-1696335877685.jpg",
    ];

    let currentImageIndex = 0;

    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const imageUrl = images[currentImageIndex];
        backgroundImage.style.backgroundImage = `url('${imageUrl}')`;
    }

    // Change the background image every 5 seconds (5000 milliseconds)
    const interval = 4000; // Adjust the interval as needed
    setInterval(changeBackgroundImage, interval);

    // Initial background image
    changeBackgroundImage();
});
