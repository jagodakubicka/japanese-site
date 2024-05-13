let hiragana = document.querySelector('.hero-top__text--hiragana');
let romaji = document.querySelector('.hero-top__text--romaji');

let hour = new Date().getHours();

if (hour > 12 && hour < 19) {
  hiragana.innerHTML = 'こんにちは';
  romaji.innerHTML = 'konnichiwa!';
}
if (hour >= 19) {
  hiragana.innerHTML = 'こんばんは';
  romaji.innerHTML = 'konbanwa!';
} else {
  hiragana.innerHTML = 'おはよう';
  romaji.innerHTML = 'ohayou!';
}
