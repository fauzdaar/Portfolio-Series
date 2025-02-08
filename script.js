// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});
