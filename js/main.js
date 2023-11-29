const burgerBtn = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu__list");
const mobileNav = document.querySelector(".mobile-nav");

burgerBtn.addEventListener("click", (e) => {
  e.preventDefault;
  mobileMenu.classList.toggle("active");
  mobileNav.classList.toggle("active");
});
window.addEventListener("resize", (e) => {
  if (window.innerWidth > 860) {
    mobileMenu.classList.remove("active");
    mobileNav.classList.remove("active");
  }
});
