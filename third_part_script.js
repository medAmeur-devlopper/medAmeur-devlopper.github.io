document.addEventListener("DOMContentLoaded", function () {
    const numberElements = document.querySelectorAll("[id^='number']");
    
    const duration = 2000; // Duration of the animation in milliseconds
    const interval = 10; // Update interval in milliseconds

    const currentValues = Array.from(numberElements, (element) => ({
        element,
        currentValue: 1,
        endValue: parseFloat(element.getAttribute("data-end-value")),
    }));

    function updateNumbers() {
        currentValues.forEach((item) => {
            item.currentValue += (item.endValue / duration) * interval;
            if (item.currentValue >= item.endValue) {
                item.currentValue = item.endValue;
            }
            item.element.textContent = `+${Math.floor(item.currentValue)}`;
        });
    }

    // Start the rolling animation
    setInterval(updateNumbers, interval);
});