'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What is the default value of the position property??',
      answers: {
        a: 'fixed',
        b: 'relative',
        c: 'absolute',
        d: 'static',
      },
      correctAnswer: 'd',
    },
    {
      text: 'How do you group selectors?',
      answers: {
        a: 'Separate each selector with a plus sign',
        b: 'Separate each selector with a comma',
        c: 'Separate each selector with a space',
        d: 'Separate each selector with dash',
      },
      correctAnswer: 'c',
    },
    {
      text: 'How do you select all p elements inside a div element?',
      answers: {
        a: 'div p',
        b: 'div + p',
        c: 'div.p',
        d: 'div, p',
      },
      correctAnswer: 'a',
    },
    {
      text: 'How do you make a list that lists its items with squares?',
      answers: {
        a: 'list-type: square',
        b: 'list-style-type: square',
        c: 'list: square',
        d: 'Non of the above',
      },
      correctAnswer: 'b',
    },
    {
      text: 'Which is the correct CSS syntax?',
      answers: {
        a: '{body;color:black;}',
        b: 'body:color=black;',
        c: 'body {color: black;}',
        d: '{body:color=black;}',
      },
      correctAnswer: 'c',
    },
    {
      text: 'How do you make the text bold?',
      answers: {
        a: 'style:bold',
        b: 'font:bold',
        c: 'font-weight:bold',
        d: 'style-font: bold',
      },
      correctAnswer: 'c',
    },
    {
      text: 'Which property is used to change the font of an element?',
      answers: {
        a: 'font-family',
        b: 'font-weight',
        c: 'font-style',
        d: 'font-text',
      },
      correctAnswer: 'a',
    },
    {
      text: 'How do you make each word in a text start with a capital letter?',
      answers: {
        a: 'You cannot do that with CSS',
        b: 'transform:capitalize',
        c: 'text-transform:capitalize',
        d: 'text-style:capitalize',
      },
      correctAnswer: 'c',
    },
    {
      text: 'Which HTML attribute is used to define inline styles?',
      answers: {
        a: 'style',
        b: 'class',
        c: 'styles',
        d: 'src',
      },
      correctAnswer: 'a',
    },
    {
      text: 'What does CSS stand for?',
      answers: {
        a: 'Creative Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Computer Style Sheets',
        d: 'Colorful Style Sheets',
      },
      correctAnswer: 'b',
    },
  ],
};
