const burguer = document.querySelector(".burguer");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");
const backdrop = document.createElement("div");
const year = document.getElementById("current-year");
const darkMode = window.matchMedia("(prefers-color-scheme: dark)");

backdrop.classList.add("menu-backdrop");

body.appendChild(backdrop);

burguer.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  backdrop.classList.toggle("display");

  body.classList.toggle("fixed-position");

  burguer.classList.toggle("toggle");
});

backdrop.addEventListener("click", () => {
  navLinks.classList.remove("nav-active");
  this.classList.remove("display"); // Oculta el menu
  body.classList.remove("fixed-position");
  burguer.classList.remove("toggle");
});

/* Detecta por medio de un change el modo oscuro del sistema */
darkMode.matches;

darkMode.addEventListener("change", (res) => {
  res.matches;
});

// Muestra el año actual en el footer
year.innerHTML = new Date().getFullYear();
