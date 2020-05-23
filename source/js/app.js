let buttonBurger = document.querySelector('.main-nav__burger');
let menuBurger = document.querySelector('.main-nav__list');

buttonBurger.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuBurger.classList.toggle('main-nav__list--open');
  buttonBurger.classList.toggle('main-nav__burger--open');
});
