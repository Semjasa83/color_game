"use strict";

let value = 6;
let colors = [];
let message = document.querySelector("#message");

function init() {
  checkDifficulty();
  setDifficulty();
  createCubes();
}

function checkDifficulty() { //done
  let selectedDifficulty = $("button.selected");
  value = selectedDifficulty.val();
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
  message.innerHTML = "";
  container.innerHTML = "";
  for (let i = 0; i < amount ; i++) {
    let color = randomColor();
    container.innerHTML +=`
    <div class="square-wrapper">
    <div class="square" style="background-color: ${color}" onclick="checkColor(event)"></div>
    </div>`
    colors.push(color);
  }
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

function checkColor(event) {
  let clickedColor = event.target.style.backgroundColor;
  let correctColor = String(document.querySelector("#rgbCode").textContent);
  if (clickedColor === correctColor) {
    message.innerHTML = `<span class="check-information"><span class="success-information">Right</span></span>`;
    preventClick();
    setTimeout(resetCubes, 3000);
  } else {
    message.innerHTML = `<span class="check-information"><span class="error-information">${clickedColor}</span></span>`;
    setTimeout(() => {
      message.innerHTML = "";
    }, 1500);
  }
}

function resetCubes() {
  colors = [];
  createCubes();
}

function preventClick() {
  let squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.style.pointerEvents = "none";
  });
}