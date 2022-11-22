
const navMenu = document.getElementById("menus");
navToggle = document.getElementById("nav_toggle"),
navClose = document.getElementById("nav_close");


/*=============== SHOW MENU ===============*/
/* validate if constant exists  */
if(navToggle) {
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu")
  navClose.classList.add("show-menu1")
  console.log("toggle");
})
}

if(navClose) {
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu")
  navClose.classList.remove("show-menu1")
})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav_link");

function linkAction() {
navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))
