const mobBtn = document.querySelector('.menu__btn');
const mobMenu = document.querySelector('.menu__wrapper');

mobBtn.addEventListener('click', function() {
    mobMenu.classList.toggle('menu__wrapper_active');
    mobBtn.classList.toggle('menu__btn_active')
});