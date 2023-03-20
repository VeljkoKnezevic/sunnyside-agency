const hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__nav");
const navItem = document.querySelectorAll(".nav__item");
const hero = document.querySelector(".hero");
const button = document.querySelector(".nav__item__button");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
  hero.classList.toggle("hero--none");
  navItem.forEach((element) => {
    element.classList.toggle("nav__item--active");
  });
  button.classList.toggle("nav__item__button--active");
});
