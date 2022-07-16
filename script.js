const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const ourMenuText = document.querySelector(".our-menu-text");

let isClicked = false;

function myFunction(x) {
  x.classList.toggle("change");
}

const setStyle = () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
};

hamburger.addEventListener("click", setStyle);
