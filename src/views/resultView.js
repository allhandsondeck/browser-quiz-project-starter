'use strict';

import { RESTART_QUIZ_BUTTON_ID } from '../constants.js';

export const createResultElement = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
      <p class="result-paragraph">Thank you! You have completed this quiz!</p>
      <button id="${RESTART_QUIZ_BUTTON_ID}">Restart Quiz</button>
    `;
    return element;
  };