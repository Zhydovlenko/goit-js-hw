'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
};

let timerId;

refs.startButton.addEventListener('click', handleStart);
refs.stopButton.addEventListener('click', handleStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function handleStart() {
  timerId = setInterval(() => {
    changeColor();
  }, 1000);
  refs.stopButton.removeAttribute('disabled');
  refs.startButton.setAttribute('disabled', 'true');
}

function handleStop() {
  clearTimeout(timerId);
  refs.stopButton.setAttribute('disabled', 'true');
  refs.startButton.removeAttribute('disabled');
}

function changeColor() {
  const colorID = randomIntegerFromInterval(0, colors.length - 1);
  const bgColor = colors[colorID];
  refs.body.style.backgroundColor = `${bgColor}`;
}
