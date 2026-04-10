const menu = document.querySelector('.header-right__links');
const burger = document.querySelector('.header-left__burger__div__svg')
const Close = document.querySelector('.close-icon');

burger.addEventListener('click', function () {
  menu.style.transform = 'translateX(0%)';
});

Close.addEventListener('click', function () {
  menu.style.transform = 'translateX(100%)';
});

const popup = document.getElementById('popup');
const popupBtn = document.getElementById('popup-btn');
const entryHeader = document.getElementById('entry-header');
const popupClose = document.getElementById('popup-close');

popup.addEventListener('click', function () {
  popup.classList.toggle('popup-active');
  entryHeader.style.zIndex = '1';

});


popupBtn.addEventListener('click', function () {
  popup.classList.toggle('popup-active');
  entryHeader.style.zIndex = '0';
});

