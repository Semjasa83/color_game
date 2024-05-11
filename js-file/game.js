"use strict";

/*let randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}*/

// let amount_cubes = function () {
// /*  switch () {
//     case easy:

//   }*/
// }
let value = null;

function init() {
  console.log($("button"));
  checkDifficulty();
  setDifficulty();
}

function checkDifficulty() {
  let selectedDifficulty = $("button.selected");
  value = selectedDifficulty.val();
  console.log(value);
  return value;
}

function setDifficulty() {
  $("button").click(function () {
    // Entfernen Sie die Klasse 'selected' von allen Buttons
    $("button").removeClass("selected");
    // Fügen Sie die Klasse 'selected' zum geklickten Button hinzu
    $(this).addClass("selected");
    checkDifficulty();
  });
}
