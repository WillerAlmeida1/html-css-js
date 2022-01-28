var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function aumenta(){
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}


function diminui(){
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}