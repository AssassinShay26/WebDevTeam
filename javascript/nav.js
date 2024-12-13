//JAVASCRIPT FOR NAVMENU
const menu = document.querySelector('#mobile_menu'); 
const menuLinks = document.querySelector('.Navbar');
const navLogo = document.querySelector('.Nav_Button');
// function closeNavBar(){
//   document.getElementById("SideNav").style.width ="0px"
// }
// function opneNavBar(){
//   document.getElementById("SideNav").style.width ="250px"
// }
// function toggle(x) {
//     x.classList.toggle('change');
//   }
//   function opneNavBar() {
//     let holder = document.getElementById("mobile_Menu");
//     if(holder.className === "Nav_button"){
//       holder.className += "mobile_Menu";
//     }
//     else{
//       holder.className = "Nav_button"
//     }
//   }
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };
  
  menu.addEventListener('click', mobileMenu);

  const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };

  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);