var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function aumenta() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
}

function diminui() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
}

/*function vermelho() {
  if (currentNumber <= -1) {
    document.getElementById('currentNumber').style.color = 'red'
  }
}*/

/*addEventListener()
var currentNumber = document.getElementById("currentNumber");
  currentNumber.addEventListener("click", currentNumber < 0);*/
