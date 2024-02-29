document.addEventListener("DOMContentLoaded", function () {
    const animatedMap = document.getElementById("animatedMap");
    const speedSlider = document.getElementById("speedSlider");

    const years = Array.from({ length: 27 }, (_, index) => 1992 + index);

    let currentYearIndex = 0;
    let animationSpeed = 1000; 

    function updateMap() {
        const currentYear = years[currentYearIndex];
        animatedMap.style.backgroundImage = `url('png/LightPollution_${currentYear}.png')`;
    }

    function animateMap() {
        updateMap();
        currentYearIndex = (currentYearIndex + 1) % years.length;
        setTimeout(animateMap, animationSpeed);
    }

    animateMap();

    speedSlider.addEventListener("input", function () {
        animationSpeed = 2000 / speedSlider.value; // Adjust the speed based on the slider value
    });
});
