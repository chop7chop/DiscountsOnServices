const mobBtn = document.querySelector('.menu__btn');
const mobMenu = document.querySelector('.menu__mob');

mobBtn.addEventListener('click', function() {
    mobMenu.classList.toggle('menu__mob_active');
    mobBtn.classList.toggle('menu__btn_active')
});