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
    <div class="square" style="background-color: ${color}" onclick="checkColor(event)"> ${color} </div>`
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
    alert("Richtig!");
    setTimeout(resetCubes, 3000);
  } else {
    alert("Falsch!");
  }

/*    let clickedColor = event.target.style.backgroundColor;
    let rgbCodeElement = document.querySelector("#rgbCode");
    let rgbCode = rgbCodeElement.textContent;
    if (clickedColor === rgbCode) {
        alert("Richtig!");
    } else {
        alert("Falsch!");
    }
    resetCubes();*/

}








// function createCubes() {
//   let amount = value;
//   let container = document.querySelector(".items");
//   container.innerHTML = "";
//   for (let i = 0; i < amount ; i++) {
//     let cube = document.createElement("div");
//     cube.classList.add("square");
//     let color = randomColor();
//     cube.style.backgroundColor = color;
//     cube.textContent = color;
//     container.appendChild(cube);
//   }
//   console.log(colors);
//   let randomIndex = Math.floor(Math.random() * colors.length);
//   let rgbCodeElement = document.querySelector("#rgbCode");
//   rgbCodeElement.textContent = colors[randomIndex];
// }