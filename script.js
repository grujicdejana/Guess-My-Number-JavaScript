'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';

    //when player type the number lower than 1 or greatet than 20
  } else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      '⚠ You must input the number between 1 and 20';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉 Correct Number! YOU WIN';
    const score = document.querySelector('.score').textContent;
    document.querySelector('.highscore').textContent = score;

    document.querySelector('.number').textContent = secretNumber;
    //change style when player wins.
    document.querySelector('body').style.backgroundColor = '#43e10e';
    document.querySelector('.number').style.width = '25rem';

    //if score is greater than zero
  } else if (score > 0) {
    //if input number is greater than secret number
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = '😬 Too high.';
      score--;
      document.querySelector('.score').textContent = score;

      //if input number is lower than secret number
    } else {
      document.querySelector('.message').textContent = '😬 Too low.';
      score--;
      document.querySelector('.score').textContent = score;
    }
    //if score is lower than 0
  } else {
    document.querySelector('.message').textContent = '😒 GAME OVER! ';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').value = secretNumber;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = 0;

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
