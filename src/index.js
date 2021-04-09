import './styles.css';
import colors from './colorsData';

const bodyRef = document.body;
const startBtnRef = bodyRef.querySelector('[data-action="start"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

const renderStart = () => {
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  startBtnRef.disabled = true;
};

bodyRef.addEventListener('click', event => {
  // if (action === 'start' && !timerId) {
  if (event.target.dataset.action === 'start') {
    renderStart();
  } else if (event.target.dataset.action === 'stop') {
    clearInterval(timerId);
    startBtnRef.disabled = false;
    // timerId = null;
  }
});
