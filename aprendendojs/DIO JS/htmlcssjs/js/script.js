var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function aumenta() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber

  if (currentNumber >= 1) {
    document.getElementById('currentNumber').style.color = 'green'
  }
}

function diminui() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber

  if (currentNumber <= -1) {
    document.getElementById('currentNumber').style.color = 'red'
  }
}

//Vc tava até fazendo oq era pra fazer mas fora da função onde deveria estar kskskks, mas boa :D
/*function vermelho() {
  if (currentNumber <= -1) {
    document.getElementById('currentNumber').style.color = 'red'
  }
}*/

/*addEventListener()
var currentNumber = document.getElementById("currentNumber");
  currentNumber.addEventListener("click", currentNumber < 0);*/
