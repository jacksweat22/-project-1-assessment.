//AVOID JQUERY
//review funtions battleship game as method is similar
//set new global variable
let currentCount;
//select the changing elements on html using js
let newCount = document.getElementById("counter");
let changedNumber = document.querySelector("input");

//set click event listeners
document.getElementById("plus").onclick = addNumber();
document.getElementById("minus").onclick = subtractNumber();

function render(){
    newCount.innerHTML = currentCount;
}
function init() { 
    changedNumber.value = 1;
    currentCount = 0;
    render();
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
