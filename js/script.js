window.addEventListener('DOMContentLoaded', () => {
    const burgMenu = document.querySelector('.header-wrapper'),
        burger = document.querySelector('.burger');

        burger.addEventListener('click', () => {
            burger.classList.toggle('burger-active');
            burgMenu.classList.toggle('header-wrapper-active');
        })
})