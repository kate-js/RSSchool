const nav_burger = document.querySelector(".nav_burger");
const navigation = document.querySelector(".nav");
const blockLogo = document.createElement("div");
const h1 = document.createElement("h1");
const span = document.createElement("span");

function createLogo() {
  blockLogo.classList.add("header_logo");
  blockLogo.classList.add("header_logo_nav");
  h1.innerHTML = "Cozy House";
  span.innerHTML = "Shelter for pets in Boston";
  blockLogo.append(h1);
  blockLogo.append(span);
  navigation.append(blockLogo);
}

function toggleMenu() {
  nav_burger.classList.toggle("open");
  navigation.classList.toggle("open");

  if (navigation.classList.contains("open")) {
    createLogo();
    console.log("ok");
  } else {
    console.log("no");
    blockLogo.remove();
    h1.remove();
    span.remove();
  }
}

nav_burger.addEventListener("click", toggleMenu);

const navLinks = document.querySelectorAll(".nav_link");

function closeMenu(event) {
  if (event.target.classList.contains("nav_link")) {
    nav_burger.classList.remove("open");
    navigation.classList.remove("open");
  }
}

navLinks.forEach((el) => el.addEventListener("click", closeMenu));
