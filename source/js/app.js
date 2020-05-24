var buttonBurger = document.querySelector('.main-nav__burger');
var menuBurger = document.querySelector('.main-nav__list');

menuBurger.classList.remove('no-js');

buttonBurger.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuBurger.classList.toggle('main-nav__list--open');
  buttonBurger.classList.toggle('main-nav__burger--open');
})
