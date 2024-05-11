const numbers = document.querySelectorAll('.animated-number');
let interval = 2000;

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
