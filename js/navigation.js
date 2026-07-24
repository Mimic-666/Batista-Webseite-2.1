const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navLinks");
const overlay = document.querySelector(".navOverlay");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});