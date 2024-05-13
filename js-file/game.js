"use strict";

let value = 6;
let colors = [];

function init() {
  checkDifficulty();
  setDifficulty();
  createCubes();
}

function checkDifficulty() { //done
  let selectedDifficulty = $("button.selected");
  value = selectedDifficulty.val();
  console.log('schwierigkeit',value);
}

function setDifficulty() { //done
  let buttons = document.querySelectorAll("button.difficulty");
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove("selected"));
      this.classList.add("selected");
      checkDifficulty();
      colors = [];
      createCubes();
    });
  });
}

function createCubes() {
  let amount = value;
  let container = document.querySelector(".items");
  container.innerHTML = "";
  for (let i = 0; i < amount ; i++) {
    let color = randomColor();
    container.innerHTML +=`
    <div class="square-wrapper">
    <div class="square" style="background-color: ${color}" onclick="checkColor(event)"></div>
    </div>`
    colors.push(color);
  }
  console.log(colors);
  let randomIndex = Math.floor(Math.random() * colors.length);
  let rgbCodeElement = document.querySelector("#rgbCode");
  rgbCodeElement.textContent = colors[randomIndex];
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function resetCubes() {
  colors = [];
  createCubes();
}

function checkColor(event) {
  let clickedColor = event.target.style.backgroundColor;
  let correctColor = String(document.querySelector("#rgbCode").textContent);
  console.log(clickedColor, correctColor);
  if (clickedColor === correctColor) {
    event.target.innerHTML = `<span class="check-information">Right</span>`;
    setTimeout(resetCubes, 3000);
  } else {
    event.target.innerHTML = `<span class="check-information">Wrong Color: ${clickedColor}</span>`;
  }
}
