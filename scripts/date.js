let hiragana = document.querySelector('.hero-top__text--hiragana');
let romaji = document.querySelector('.hero-top__text--romaji');

let hour = new Date().getHours();

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
