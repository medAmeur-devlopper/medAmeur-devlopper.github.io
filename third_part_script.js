document.addEventListener("DOMContentLoaded", function () {
    const numberElements = document.querySelectorAll("[id^='number']");

    const duration = 2000; // Duration of the animation in milliseconds
    const interval = 10; // Update interval in milliseconds

    const currentValues = Array.from(numberElements, (element) => ({
        element,
        currentValue: 0,
        endValue: parseFloat(element.getAttribute("data-end-value")),
    }));

    function updateNumbers() {
        const isAllAnimationsComplete = currentValues.every((item) => item.currentValue >= item.endValue);

        currentValues.forEach((item) => {
            item.currentValue += (item.endValue / duration) * interval;
            if (item.currentValue >= item.endValue) {
                item.currentValue = item.endValue;
            }
            item.element.textContent = `${Math.floor(item.currentValue)}`;
        });

        if (isAllAnimationsComplete) {
            // All animations have ended, change innerHTML
            document.querySelector('#number1').innerHTML = '<span>2</span><span style="color: #03B585;">K</span>';
        }
    }

    // Start the rolling animation
    const animationInterval = setInterval(updateNumbers, interval);

 

    // Assuming the duration is the same for all elements, you can use a timeout to stop the interval
    setTimeout(stopInterval, duration);
});
