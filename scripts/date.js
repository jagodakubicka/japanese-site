let hiragana = document.querySelector('.hero-top__text--hiragana');
let romaji = document.querySelector('.hero-top__text--romaji');
let rightsYear = document.querySelector('.nav-year');

let hour = new Date().getHours();
let year = new Date().getFullYear();

if (hour > 12 && hour < 18) {
  hiragana.innerHTML = 'こんにちは';
  romaji.innerHTML = 'konnichiwa!';
} else if (hour >= 18) {
  hiragana.innerHTML = 'こんばんは';
  romaji.innerHTML = 'konbanwa!';
} else {
  hiragana.innerHTML = 'おはよう';
  romaji.innerHTML = 'ohayou!';
}

rightsYear.innerHTML = year;
