var noOfSquares = 6;

//pallet
var arr = [];

//color picked for target
var picked;

//to get all squares div
var squares = document.getElementsByClassName("square");

//to get RGB Display
var targetColor = document.getElementById("targetColor");

//message that can be empty, try again or correct
var message = document.getElementById("message");

//heading
var head = document.querySelector("h1");

//reset button
var reset = document.getElementById("NewColor");

init();

function init() {
  //generate random colored pallete

  arr = generateRandomColor(noOfSquares);

  //get target color randomly from the array size
  picked = arr[randomPickedColorIndex()];

  //updating target RGB display
  targetColor.textContent = picked;

  for (var i = 0; i < squares.length; i++) {
    //setting square's color one by one to pallete color
    squares[i].style.backgroundColor = arr[i];

    //adding eventListener to all squares
    squares[i].addEventListener("click", function () {
      if (picked === this.style.backgroundColor) {
        message.textContent = "Correct";
        message.style.color = "green";

        //when correct, set everything to the target color and set newcolor to play again
        changeColor(this.style.backgroundColor);
        reset.textContent = "Play Again?";
      } else {
        message.textContent = "Try Again";
        message.style.color = "red";

        //to hide the wrong square, we will set it to the bg color
        this.style.backgroundColor = "#232323";
      }
    });
  }
}

//eventListener for reset button
reset.addEventListener("click", resetIn);

//Generating random color from existing pallete
function randomPickedColorIndex() {
  return Math.floor(Math.random() * arr.length);
  //(Math.random()*10) -> will give u numbers from 1-10 excluding 10
}

//To get random pallete of colors
function generateRandomColor(limit) {
  var color = [];
  for (var i = 0; i < limit; i++) color.push(rgbGenerator());
  return color;
}

//to generate single rgb
function rgbGenerator() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//when correct, change every square to the correct color
function changeColor(color) {
  for (var i = 0; i < squares.length; i++)
    squares[i].style.backgroundColor = color;
  head.style.backgroundColor = color;
}

//Set things when player resets
function resetIn() {
  arr = generateRandomColor(noOfSquares);
  picked = arr[randomPickedColorIndex()];
  targetColor.textContent = picked;
  message.textContent = "";
  head.style.backgroundColor = "steelblue";

  for (var i = 0; i < squares.length; i++)
    squares[i].style.backgroundColor = arr[i];
}
