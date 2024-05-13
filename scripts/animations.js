const footer = document.querySelector('.footer');

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

window.onscroll = function () {
  footerCircleAnimation.seek(
    animateElement(footer) * footerCircleAnimation.duration
  );
};
