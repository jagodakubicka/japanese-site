const whyUsSection = document.querySelector('#why-us');
const numbers = document.querySelectorAll('.animated-number');
let interval = 2000;

const numCount = () => {
  numbers.forEach((number) => {
    let startNum = 0;
    let endNum = parseInt(number.getAttribute('data-value'));
    let duration = Math.floor(interval / endNum);

    let counter = setInterval(function () {
      startNum += 1;
      number.textContent = startNum;

      if (startNum == endNum) {
        clearInterval(counter);
      }
    }, duration);
  });
};

window.addEventListener(
  'scroll',
  function () {
    if (window.innerHeight > 100) numCount();
  },
  { once: true }
);
