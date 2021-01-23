'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value = secretNumber;

let score = 20;

const highScores = [];
let max;

function findMaxHighscore(arr) {
  max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

function printer(arg1, arg2) {
  document.querySelector(arg1).textContent = arg2;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    printer('.message', '⛔ No number');

    //when player type the number lower than 1 or greatet than 20
  } else if (guess < 1 || guess > 20) {
    printer('.message', '⚠ You must input the number between 1 and 20');

    //when player wins
  } else if (guess === secretNumber) {
    printer('.message', '🎉 Correct Number! YOU WIN');

    const score = document.querySelector('.score').textContent;

    //calculate highscore
    const currentHighscore = score;
    highScores.push(currentHighscore);

    printer('.highscore', findMaxHighscore(highScores));

    printer('.number', secretNumber);

    //change style when player wins.
    document.querySelector('body').style.backgroundColor = '#43e10e';
    document.querySelector('.number').style.width = '25rem';

    //if score is greater than zero
  } else if (score > 0) {
    printer('.message', guess > secretNumber ? '😬 Too high' : '😬 Too low');
    score--;
    printer('.score', score);

    //if score is lower than 0
  } else {
    printer('.message', '😒 GAME OVER!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  printer('.number', secretNumber);
  printer('.number', '?');

  printer('.message', 'Start guessing...');
  printer('.score', score);
  printer('.highscore', max);

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
