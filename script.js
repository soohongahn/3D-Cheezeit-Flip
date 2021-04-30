var btn_LEFT = document.getElementById("left-btn");
var btn_RIGHT = document.getElementById("right-btn");
var btn_UP = document.getElementById("up-btn");
var btn_DOWN = document.getElementById("down-btn");
var btn_FRONT = document.getElementById("front-btn");
var btn_BACK = document.getElementById("back-btn");
var side = 0; //0=l, 1=r, 2=u, 3=d
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
  side = 1;
}
function turnRight(){
  clearTurn();
  cube.classList.add("right");
  side = 2;
}
function turnUp(){
  clearTurn();
  cube.classList.add("up");
  side = 3;
}
function turnDown(){
  clearTurn();
  cube.classList.add("down");
  side = 4;
}
function turnFront(){
  clearTurn();
  cube.classList.add("front");
  side = 5;
}
function turnBack(){
  clearTurn();
  cube.classList.add("back");
  side = 6;
}

function clearTurn(){
  switch (side) {
    case 0:
      return;
    break;
    case 1:
      cube.classList.remove("left");
      side = 0;
    break;
    case 2:
      cube.classList.remove("right");
      side = 0;
    break;
    case 3:
      cube.classList.remove("up");
      side = 0;
    break;
    case 4:
      cube.classList.remove("down");
      side = 0;
    break;
    case 5:
      cube.classList.remove("front");
      side = 0;
    break;
    case 6:
      cube.classList.remove("back");
      side = 0;
    break;

    return;
  }
}
