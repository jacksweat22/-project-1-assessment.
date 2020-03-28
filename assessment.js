//AVOID JQUERY
//review funtions battleship game as method is similar
//set new global variable
let currentCount;
//select the changing elements on html using js
let newCount = document.getElementById("counter");
let changedNumber = document.getElementById("input");

//set click event listeners
document.getElementById("add").onclick = addNumber;
document.getElementById("sub").onclick = subtractNumber;

function init() { 
    changedNumber.value = 1;
    newCount = 0;
}
function addNumber() {
    currentCount = currentCount +  Math.floor(Math.changedNumber);
}

function subtractNumber() {
    currentCount = currentCount -  Math.floor(Math.changedNumber);
}

init()
