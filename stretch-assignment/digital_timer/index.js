let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');
let all = document.querySelectorAll('div');
let time = 0;
let time2 = 0;
let time3 = 0;
let time4 = 0;

let startButton = document.createElement('button');
startButton.textContent = 'START';
document.querySelector('.digits').appendChild(startButton);
startButton.onclick=initialize;

let resetButton = document.createElement('button');
resetButton.textContent = 'RESET';
document.querySelector('.digits').appendChild(resetButton);
resetButton.onclick=reset;



function initialize() { 
  startButton.disabled = true;
  id = setInterval(function() {
    if (time4 === 1) {
      startButton.disabled = false;
      all.forEach(e => {
        e.style.color = 'red';
      })
      clearInterval(id);
    } else {
      time += 1;
      if (time === 10) {
        time = 0;
        time2 += 1;
      }
      if (time2 === 10) {
        time2 = 0;
        time3 += 1;
      }
      if (time2 === 10) {
        time2 = 0;
        time3 += 1;
      }
      if (time3 === 10) {
        time3 = 0;
        time4 += 1;
      }
    }
    msTens.textContent = time;
    msHundreds.textContent = time2;
    secondOnes.textContent = time3;
    secondTens.textContent = time4;
  }, 10);
}

function reset() {
  all.forEach(e => {
    e.style.color = 'black';
  })
  time = 0;
  time2 = 0;
  time3 = 0;
  time4 = 0;
  msTens.textContent = time;
  msHundreds.textContent = time2;
  secondOnes.textContent = time3;
  secondTens.textContent = time4;
  clearInterval(id);
  startButton.disabled = false;
}
