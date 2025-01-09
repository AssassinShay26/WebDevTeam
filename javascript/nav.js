//JAVASCRIPT FOR NAVMENU
const menu = document.querySelector('#mobile_menu'); 
const menuLinks = document.querySelector('.Navbar_links');
const navLogo = document.querySelector('.Nav_logo');
let ScreenWidth = window.innerWidth;


const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('is-active');
  if (window.innerWidth <= 782 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
console.log(ScreenWidth);