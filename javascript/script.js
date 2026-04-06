const menu = document.querySelector('.header-right__links');
const burger = document.querySelector('.header-left__burger__div__svg')



const Close = document.querySelector('.close-icon');


  burger.addEventListener('click', function () {
    menu.style.transform = 'translateX(0%)';
  });

  Close.addEventListener('click', function () {
    menu.style.transform = 'translateX(100%)';
  });
