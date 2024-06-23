document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.icon-menu');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('menu-active');
    });
});
