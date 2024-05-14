const footer = document.querySelector('.footer');
const whySection = document.querySelector('#why-us');
const cards = document.querySelector('#what-we-do');
const header = document.querySelector('header');

const whatCardsWrapper = document.querySelector('.what-we-do__wrapper');
const whatCards = document.querySelectorAll('.what-we-do__card--animated');

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

const whyCardAnimation = anime({
  targets: '.why-card',
  translateY: -50,
  autoplay: false,
  delay: anime.stagger(1000, { easing: 'easeOutQuad' }),
  easing: 'easeInOutQuad',
});

const footerCircleAnimation = anime({
  targets: '.footer-circle',
  backgroundColor: ['rgb(250, 197, 92)', 'rgb(248, 109, 135)'],
  translateY: 50,
  duration: 4000,
  autoplay: false,
  easing: 'easeInOutQuad',
});

// const origamiCardAnimation = anime.timeline({
//   autoplay: false,
//   easing: 'easeInOutQuad',
// });
// whatCards.forEach((card, index) => {
//   origamiCardAnimation.add(
//     {
//       targets: card,
//       translateY: `-${(index + 1) * 100}%`,
//       duration: 1000,
//     },
//     0
//   );
// });

// const origamiCardAnimation = anime({
//   targets: whatCards,
//   autoplay: false,
//   easing: 'easeInOutQuad',
//   translateY: `-${1 * 100}%`,
//   duration: 1000,
// });

const animateElement = function (div, speed = 400, offset = 800) {
  const scrollPercent = window.scrollY - div.offsetTop;
  return (scrollPercent + offset) / speed;
};

window.addEventListener('scroll', function () {
  footerCircleAnimation.seek(
    animateElement(footer) * footerCircleAnimation.duration
  );
  // origamiCardAnimation.seek(
  //   animateElement(whatCardsWrapper, 500) * origamiCardAnimation.duration
  // );
  HeaderNameAnimation.seek(
    animateElement(header, 4000, 0) * HeaderNameAnimation.duration
  );
  whyCardAnimation.seek(
    animateElement(whySection, 400, 650) * whyCardAnimation.duration
  );
});
