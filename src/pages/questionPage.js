'use strict';

import {
  ANSWERS_LIST_ID,
  CORRECT_ANSWER_RATE_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initCounter } from '../views/countdownView.js';
import { countdownInterval } from '../views/countdownView.js';
import { resultPage } from '../pages/resultPage.js';
import { initQuestionProgress } from '../views/progressView.js';

let correctAnswerCount = 0;
let isCurrentAnswerCorrect = false;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  const correctAnswerCountElement = document.getElementById(CORRECT_ANSWER_RATE_ID);

  userInterface.appendChild(correctAnswerCountElement);

  for (const [answerLetter, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(answerLetter, answerText);
    answersListElement.appendChild(answerElement);

    // making answers clickable
    answerElement.addEventListener('click', function () {
      const correctAnswer = currentQuestion.correctAnswer;
      currentQuestion.selected = answerLetter;

      if (answerLetter == correctAnswer) {
        Array.from(answersListElement.children).forEach((element) => {
          element.classList.remove('red');
          
        });
        answerElement.classList.add('green');
        isCurrentAnswerCorrect = true;
      } else {
        Array.from(answersListElement.children)
          .find((child) => child.innerText.charAt(0) == correctAnswer)
          .classList.add('green');
        Array.from(answersListElement.children).forEach((element) => {
          element.classList.remove('red');
        });
        answerElement.classList.add('red');
        isCurrentAnswerCorrect = false;
      }
    });
  }
  initQuestionProgress(); 
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

export const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  clearInterval(countdownInterval);
  if(isCurrentAnswerCorrect){
    correctAnswerCount++;
    const correctAnswerCountElement = document.getElementById(CORRECT_ANSWER_RATE_ID);
    console.log(correctAnswerCount);
    correctAnswerCountElement.innerText = correctAnswerCount;

  }
  if(quizData.currentQuestionIndex>=quizData.questions.length){
    resultPage();
  } else {
  initQuestionPage();
  initCounter();

}
};
