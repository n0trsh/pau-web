const navSlide = () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        if (menuIcon.classList.contains('ri-menu-line')) {
            menuIcon.classList.replace('ri-menu-line', 'ri-close-line');
        } else {
            menuIcon.classList.replace('ri-close-line', 'ri-menu-line');
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            menuIcon.classList.replace('ri-close-line', 'ri-menu-line');
        });
    });
}
navSlide();