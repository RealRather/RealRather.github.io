/*modal-menu*/
var navMenu = document.querySelector(".main-nav");
var mainToogle = document.querySelector(".main-nav__toggle");
navMenu.classList.remove("main-nav--withoutjs");
mainToogle.addEventListener('click', function() {
  if (navMenu.classList.contains("main-nav--close")) {
    navMenu.classList.remove("main-nav--close");
    navMenu.classList.add("main-nav--open");
  } else {
    navMenu.classList.add("main-nav--close");
    navMenu.classList.remove("main-nav--open");  }});
