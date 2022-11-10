console.log("Made With 💗 By Andrew");
console.log("Start and End 10/11/2022");

/*======== NAV MENU=========*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");
let menu_status = false;

navToggle.addEventListener("click", () => {
  if (menu_status == false) {
    /*===== MENU SHOW =====*/
    navMenu.classList.add("show-menu");
    menu_status = true;
  } else if (menu_status == true) {
    /*===== MENU Close =====*/
    navMenu.classList.remove("show-menu");
    menu_status = false;
  }
});
