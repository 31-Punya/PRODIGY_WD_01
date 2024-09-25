// JavaScript for interactive navigation menu
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const navLinks = document.querySelectorAll('#navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = '#777';
    });

    link.add
