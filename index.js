// para controlar la funcionalidad del menú 
const burger = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// desplazar hacia arriba
const scrollUp = document.querySelector("#scroll-up");

// nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function para mobile
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// cerrar el menu cuando el linlk se clickea 
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top flecha de la foto
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});