import { COUNTER_ID } from '../constants.js';

export let countdownInterval;
export const initCounter = () => {
  let counter = 15;
  countdownInterval = setInterval(function () {
  let id = document.getElementById(COUNTER_ID);
  if (counter > 0) {
    id.innerHTML = `Last ${counter} seconds for this question!`;
  }
  else if (counter === 0) {
    id.innerHTML = 'Times Up!';
  }
  counter--;
  }, 1000);
}