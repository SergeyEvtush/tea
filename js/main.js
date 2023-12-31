const burgerBtn = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu__list");
const closeBtn = document.querySelector(".menu__close");
const shadowBackground = document.querySelector(".background-shadow");

const addClass = (element, addingClass) => {
  element.classList.toggle(addingClass);
};
const removeClass = (element, removingClass) => {
  element.classList.remove(removingClass);
};
function closeMobileMenu() {
  removeClass(mobileMenu, "active");
  removeClass(shadowBackground, "active");
}

burgerBtn.addEventListener("click", (e) => {
  e.preventDefault;
  addClass(mobileMenu, "active");
  addClass(shadowBackground, "active");
});

closeBtn.addEventListener("click", closeMobileMenu);

window.addEventListener("resize", () => {
  if (
    window.innerWidth > 860 ||
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    closeMobileMenu();
  }
});
