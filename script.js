const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
