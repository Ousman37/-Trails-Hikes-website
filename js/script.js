// Global variables
const menuToggleIcon = document.getElementById("menu-toggle-icon");
const navMobile = document.getElementById("nav");
const headerElement = document.getElementById("header");
const navL = document.querySelectorAll(".nav-mobile .list-link");
const skyImage = document.getElementById("sky");
const heroData = document.getElementById("hero-data");

console.log(navL);

//Toggle navigation
const toggleMenu = () => {
  navMobile.classList.toggle("active");
  headerElement.classList.toggle("active");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// add / remove header border bottom on scroll

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  //skyImage.style.transform = "translateY(" + -scrollPosition + 0.04 + "%)";
  heroData.style.opacity = 1 - scrollPosition + 0.002;
});
