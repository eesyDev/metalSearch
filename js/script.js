window.addEventListener('DOMContentLoaded', function() {
    const slideMenu = document.querySelector('.header-wrapper'),
        burger = document.querySelector('.burger');

        burger.addEventListener('click', function() {
            burger.classList.toggle('burger-active');
            slideMenu.classList.toggle('header-wrapper-active');
        });
        
        
        const popupLink = document.querySelector('.popup-link'),
              popupOverlay = document.querySelector('.popup'),
              popupWindow = document.querySelector('.popup-wrapper'),
              popupClose = document.querySelector('.close');

              popupLink.addEventListener('click', function() {
                  popupOverlay.classList.toggle('hide');
                  popupWindow.classList.toggle('hide');
              });
              popupClose.addEventListener('click', function() {
                  popupOverlay.classList.add('hide');
                  popupWindow.classList.add('hide');
              })
});