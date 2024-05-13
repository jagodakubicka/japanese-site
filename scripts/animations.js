const footer = document.querySelector('.footer');
const cards = document.querySelector('#what-we-do');
const header = document.querySelector('header');

const HeaderNameAnimation = anime({
  targets: '.header-company-name',
  translateX: -65,
  autoplay: false,
});
const heroBgCircleAnimation = anime({
  targets: '.hero-main__overlap-circle--second',
  translateX: function () {
    return anime.random(-50, 400);
  },
  translateY: function () {
    return anime.random(-200, 200);
  },
  direction: 'alternate',
  easing: 'linear',
  duration: 8000,
  loop: true,
});

const heroBgTopCircleAnimation = anime({
  targets: '.hero-main__overlap-circle--first',
  translateX: function () {
    return anime.random(0, 200);
  },
  translateY: function () {
    return anime.random(-100, 100);
  },
  direction: 'alternate',
  easing: 'linear',
  duration: 8000,
  loop: true,
});

const footerCircleAnimation = anime({
  targets: '.footer-circle',
  backgroundColor: ['rgb(250, 197, 92)', 'rgb(248, 109, 135)'],
  translateY: 50,
  duration: 4000,
  autoplay: false,
  easing: 'easeInOutQuad',
});

const animateElement = function (div, speed = 400, offset = 800) {
  const scrollPercent = window.scrollY - div.offsetTop;
  return (scrollPercent + offset) / speed;
};
const origamiCardAnimation = anime({
  targets: '.what-we-do__card--animated',
  translateY: -200,
  autoplay: false,
  delay: anime.stagger(400),
  easing: 'easeInOutQuad',
});

window.onscroll = function () {
  footerCircleAnimation.seek(
    animateElement(footer) * footerCircleAnimation.duration
  );
  origamiCardAnimation.seek(
    animateElement(cards, 1000) * origamiCardAnimation.duration
  );
  HeaderNameAnimation.seek(
    animateElement(header, 4000, 0) * HeaderNameAnimation.duration
  );
};
