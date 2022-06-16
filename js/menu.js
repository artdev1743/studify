const menuButton = document.getElementById('mobile-menu-burger');
const closeButton = document.getElementById('mobile-menu-close');
const menuBackground = document.getElementsByClassName('mobile-menu-background')[0];
const menuMobile = document.getElementsByClassName('mobile-menu')[0];
const body = document.getElementsByTagName('body')[0];

const openMobileMenu = function () {
  menuBackground.style.display = 'block';
  menuMobile.style.display = 'block';
  body.style.overflow = 'hidden';
};

const closeMobileMenu = function () {
  menuBackground.style.display = 'none';
  menuMobile.style.display = 'none';
  body.style.overflow = 'auto';
};

menuButton.addEventListener('click', openMobileMenu);
closeButton.addEventListener('click', closeMobileMenu);
