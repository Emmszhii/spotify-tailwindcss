const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");
const overlayBg = document.querySelector(".bg__overlay");
const linksItems = document.querySelectorAll(".link__items h3");
const devNav = document.querySelector(".developers__nav");
const devMenu = document.querySelector(".developers__menu");
const devBanner = document.querySelector(".devBanner");

linksItems.forEach((link) => {
  link.addEventListener("click", () => {
    link.parentElement.classList.toggle("open");
    link.querySelector("i").classList.toggle("open");
  });
});

const onClickToggleMenu = () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  overlayBg.classList.toggle("open");
};

const onClickDevelopersMenu = () => {
  devNav.classList.toggle("open");
  devMenu.classList.toggle("open");
  devBanner.classList.toggle("open");
};

if (toggleMenu) toggleMenu.addEventListener("click", onClickToggleMenu);
if (devMenu) devMenu.addEventListener("click", onClickDevelopersMenu);
