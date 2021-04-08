import './styles.css';
import colors from './colorsData';

const bodyRef = document.body;
const startBtnRef = bodyRef.querySelector('[data-action="start"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId;
const renderStart = () => {
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  startBtnRef.disabled = true;
};

bodyRef.addEventListener('click', event => {
  const action = event.target.dataset.action;
  if (action === 'start' && !timerId) {
    // if (action === 'start') {
    renderStart();
  } else if (action === 'stop') {
    clearInterval(timerId);
    startBtnRef.disabled = false;
    timerId = undefined;
  }
});
