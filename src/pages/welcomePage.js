'use strict';

import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID, PROGRESS_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { initCounter } from '../views/countdownView.js';
import { initQuestionProgress } from '../views/progressView.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  initQuestionPage();
  initCounter();
  initQuestionProgress();
};
