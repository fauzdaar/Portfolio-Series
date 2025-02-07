const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    if (nav.classList.contains("show")) {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
});

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
