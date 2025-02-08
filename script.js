const menuToggler = document.getElementById("menu-toggler");
const menu = document.getElementById("menu");
const themeToggler = document.getElementById("theme-toggler");

menuToggler.addEventListener("click", () => {
    menu.classList.toggle("show");
});

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggler.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        menuToggler.style.display = "block";
    } else {
        menuToggler.style.display = "none";
        menu.classList.remove("show");
    }
});

window.dispatchEvent(new Event("resize"));
