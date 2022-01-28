//RETORNADOR DE NUMEROS PARES 2000

function retornapar(array) {
  let numpar = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      numpar.push(array[i]);
    } else {
      console.log(`${array[i]} Não é Par!`)
    }
  }
  console.log('Já esses outros números são pares malandro:',numpar);
}
let array = [1, 2, 4, 5, 7, 8];

retornapar(array);

/*function soma(a, b) {
soma = a / b
console.log(soma)
}
soma(5, 2)*/

