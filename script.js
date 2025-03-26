'use strict';

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  //storing  it in a variable
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number...:(';
  } else {
    document.querySelector('.message').textContent = '🎉 Correct answer!';
  }
});
