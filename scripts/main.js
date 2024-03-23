const toggleNavbarBtn = document.querySelector('#nav-btn');
const toggleNavbarBtnTextOpen = document.querySelector('#nav-btn-open');
const toggleNavbarBtnTextClose = document.querySelector('#nav-btn-close');

const navWrapper = document.querySelector('nav');

const toggleNavigationMenu = () => {
  navWrapper.classList.toggle('hide');
  toggleNavbarBtnTextOpen.classList.toggle('hide');
  toggleNavbarBtnTextClose.classList.toggle('hide');
};

toggleNavbarBtn.addEventListener('click', toggleNavigationMenu);
