const menuBtn = document.querySelector(".menu-btn");

const humberger = document.querySelector(".menu-btn__burger");

const navBar = document.querySelector(".nav");

const menuNav = document.querySelector(".menu-nav");
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    humberger.classList.add("open");
    navBar.classList.add("open");
    menuNav.classList.add("open");
    showMenu = true;
  } else {
    humberger.classList.remove("open");
    navBar.classList.remove("open");
    menuNav.classList.remove("open");
    showMenu = false;
  }
}
