'use strict';

function checkAnswer() {
  const correctAnswer = '4';
  const userAnswer = document.querySelector('[name="quiz"]:checked').value;

  if (userAnswer === correctAnswer) {
    document.getElementById('feedback').textContent = 'Correct! Well done.';
  } else {
    document.getElementById('feedback').textContent =
      "That's incorrect. Try again!";
  }
}
const submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click', checkAnswer);