'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1 id="welcome-h1">Welcome</h1>
    <div id="rules-of-the-quiz">
      <h3>Rules of the quiz</h3>
      <ul id="list-of-rules">
        <li>The quiz consists of <span class="red-color">10 questions</span> in total.</li>
        <li>You will have <span class="red-color">15 seconds</span> for each question!</li>
        <li>You can't select two answers</li>
      </ul>
    </div>
    <button id="${START_QUIZ_BUTTON_ID}">Start Quiz</button>
  `;
  return element;
};
