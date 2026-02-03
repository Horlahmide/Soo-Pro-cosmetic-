const hamburgerMenu = document.querySelector(`#hamburger-menu`);
const navigationLinks = document.querySelector(`.nav-links`);

// Logic For the hamburger menu
hamburgerMenu.addEventListener(`click`, () => {
  navigationLinks.classList.toggle(`appear`);
});
