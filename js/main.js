console.log("Made With 💗 By Andrew");
console.log("Start and End 10/11/2022");

document.querySelector("body").style.background = "#292d33";
let status = false;
function app() {
  if (status == false) {
    console.log(false);
    document.querySelector("body").style = `background :#fff; color:#000;`;
    status = true;
  } else {
    console.log(true);
    document.querySelector("body").style = `background :#292d33; color:#fff;`;
    status = false;
  }
}

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
