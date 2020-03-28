//AVOID JQUERY
//review funtions battleship game as method is similar
//set new global variable
let currentCount;
//select the changing elements on html using js
let newCount = document.getElementById("counter");
let changedNumber = document.querySelector("num");

//set click event listeners
document.getElementById("add").onclick = addNumber();
document.getElementById("sub").onclick = subtractNumber();

function init() { 
    changedNumber.value = 1;
    currentCount = 0;
}

function render(){
    newCount.innerHTML = currentCount;
}
function addNumber() {
    currentCount = currentCount +  Math.floor(changedNumber.value);
    render();
}

function subtractNumber() {
    currentCount = currentCount -  Math.floor(changedNumber.value);
    render();
}

init();
