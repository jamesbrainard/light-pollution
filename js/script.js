document.addEventListener("DOMContentLoaded", function () {
    const animatedMap = document.getElementById("animatedMap");
    const mapContainer = document.getElementById("mapContainer");
    const speedSlider = document.getElementById("speedSlider");

    const years = Array.from({ length: 27 }, (_, index) => 1992 + index); 

    let currentYearIndex = 0;
    let animationSpeed = 1000; 

    function updateMap() {
        const currentYear = years[currentYearIndex];
        animatedMap.src = `png/LightPollution_${currentYear}.png`;
    }

    function animateMap() {
        updateMap();
        currentYearIndex = (currentYearIndex + 1) % years.length;
        setTimeout(animateMap, animationSpeed);
    }

    animatedMap.style.width = "100%";
    animatedMap.style.height = "auto";

    animateMap();

    speedSlider.addEventListener("input", function () {
        animationSpeed = 2000 / speedSlider.value; // Adjust the speed based on the slider value
    });
});