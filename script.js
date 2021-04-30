var btn_LEFT = document.getElementById("left-btn");
var btn_RIGHT = document.getElementById("right-btn");
var btn_UP = document.getElementById("up-btn");
var btn_DOWN = document.getElementById("down-btn");
var btn_FRONT = document.getElementById("front-btn");
var btn_BACK = document.getElementById("back-btn");
var cube = document.getElementById("cube");

btn_LEFT.addEventListener('click', turnLeft);
btn_RIGHT.addEventListener('click', turnRight);
btn_UP.addEventListener('click', turnUp);
btn_DOWN.addEventListener('click', turnDown);
btn_FRONT.addEventListener('click', turnFront);
btn_BACK.addEventListener('click', turnBack);

function turnLeft(){
  clearTurn();
  cube.classList.add("left");
}
function turnRight(){
  clearTurn();
  cube.classList.add("right");
}
function turnUp(){
  clearTurn();
  cube.classList.add("up");
}
function turnDown(){
  clearTurn();
  cube.classList.add("down");
}
function turnFront(){
  clearTurn();
  cube.classList.add("front");
}
function turnBack(){
  clearTurn();
  cube.classList.add("back");
}

function clearTurn(){
  cube.classList.remove("left", "right", "up", "down", "front", "back");
}
