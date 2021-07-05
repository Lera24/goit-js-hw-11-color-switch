const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('[data-action="start"]');

const btnStop = document.querySelector('[data-action="stop"]');

const mainСontent = document.querySelector('body');

let identifier = null;

const startChangingBackground = () => { 
  identifier = setInterval(() => { 
      const searchColor = colors[randomIntegerFromInterval(0, colors.length)]; 
      return mainСontent.style.backgroundColor = searchColor;}
      , 1000);
    
      btnStart.setAttribute('disabled', 'true');

      return identifier;
    };
  
btnStart.addEventListener('click', startChangingBackground);

const stopChangingBackground = function () {
  clearInterval(identifier);
  btnStart.removeAttribute('disabled')
};

btnStop.addEventListener('click', stopChangingBackground);
