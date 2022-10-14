'use strict';

import {
  ANSWERS_LIST_ID,
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

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

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
      } else {
        //should highligh the correct answer green NOT WORKING
        Array.from(answersListElement.children).find((child) => {
          //child.innerHTML.charAt(0) should return the first letter of a string which supposed to be the answerLetter
          (child.innerHTML.charAt(0) == correctAnswer).classList.add('green');
        });  

         //only one wrong answer highlighted in red
        Array.from(answersListElement.children).forEach((element) => {
          element.classList.remove('red');
        });
        answerElement.classList.add('red');
        
      }
    });
  }
  initQuestionProgress(); 
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  clearInterval(countdownInterval);
  if(quizData.currentQuestionIndex>=quizData.questions.length){
    resultPage();
  } else {
  initQuestionPage();
  initCounter();
}
};
