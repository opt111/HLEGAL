const menu = document.querySelector('.header-right__links');
const burger = document.querySelector('.header-left__burger__div__svg')
const Close = document.querySelector('.close-icon');
const body = document.querySelector('body');

const wraper = document.querySelector('.header-right__links');

burger.addEventListener('click', function () {
  menu.style.transform = 'translateX(0%)';
  body.classList.add('popup-body-overflow-hidden');

});


Close.addEventListener('click', function () {
  menu.style.transform = 'translateX(100%)';
  body.classList.remove('popup-body-overflow-hidden');
});



