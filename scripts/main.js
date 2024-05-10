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

const scroller = document.querySelector('.clients-scroller');

document.addEventListener('DOMContentLoaded', function () {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addCarouselAnimation();
  }
});

function addCarouselAnimation() {
  scroller.setAttribute('data-animated', true);

  const scrollerWrapper = scroller.querySelector('.clients-scroller__wrapper');
  const scrollerContent = Array.from(scrollerWrapper.children);

  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute('aria-hidden', true);
    scrollerWrapper.appendChild(duplicatedItem);
  });
}
