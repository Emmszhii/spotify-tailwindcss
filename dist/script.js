const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");
const overlayBg = document.querySelector(".bg__overlay");
const linksItems = document.querySelectorAll(".link__items h3");

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

toggleMenu.addEventListener("click", onClickToggleMenu);
