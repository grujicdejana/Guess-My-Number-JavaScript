'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉 Correct Number! YOU WIN';
    const score = document.querySelector('.score').textContent;
    document.querySelector('.highscore').textContent = score;
    //document.querySelector('.message').textContent = '🏆 You win!';
  } else if (score > 0) {
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = '😬 Too high.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😬 Too low.';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '😒 GAME OVER! ';
  }
});
