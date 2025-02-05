document.addEventListener("DOMContentLoaded", function () {
    const animatedMap = document.getElementById("animatedMap");
    const mapContainer = document.getElementById("mapContainer");
    const speedSlider = document.getElementById("speedSlider");
    const currentYearText = document.getElementById("currentYear");
    const mapTitleText = document.getElementById("mapTitle");
    const mapSubtitleText = document.getElementById("mapSubtitle");

    const years = Array.from({ length: 27 }, (_, index) => 1992 + index);

    let currentYearIndex = 0;
    let animationSpeed = 1000;

    function updateMap() {
        const currentYear = years[currentYearIndex];
        animatedMap.src = `png/LightPollution_${currentYear}.png`;
        currentYearText.textContent = `${currentYear}`;
        mapTitleText.textContent = `Light Pollution (1992-2018)`;
        mapSubtitleText.textContent = `Excessive artificial light harms ecosystems, disrupts sleep, and wastes energy`;
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
        animationSpeed = 2000 / speedSlider.value;
    });
});
