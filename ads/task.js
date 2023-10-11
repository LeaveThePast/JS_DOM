const rotators = document.querySelectorAll(".rotator");

rotators.forEach((rotator) => {
    rotateText(rotator);
});

function rotateText(rotator) {
    const textBlocks = rotator.querySelectorAll(".rotator__case");
    let currentIndex = 0;

    function changeText() {
        textBlocks[currentIndex].classList.remove("rotator__case_active");
        currentIndex = (currentIndex + 1) % textBlocks.length;
        textBlocks[currentIndex].classList.add("rotator__case_active");
    }

    setInterval(changeText, 1000);
}
