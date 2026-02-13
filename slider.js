const slider = document.getElementById("slider");
const left = document.getElementById("left");
const right = document.getElementById("right");

const move = 400; // slide distance

right.addEventListener("click", () => {
    slider.scrollLeft -= move;
});

left.addEventListener("click", () => {
    slider.scrollLeft += move;
});






