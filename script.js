document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const darkModeToggle = document.querySelector(".dark-mode-toggle");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
