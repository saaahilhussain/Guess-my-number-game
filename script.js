'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  //storing  it in a variable
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number...:(';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high...';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low...';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
  }
});
