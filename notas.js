/*## Transformar notas escolares

Crie um algoritmo que transforme as notas do sistemas numérico para sistema de notas em caracteres tipo A B C D ou F

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/


function getScore (score) {

  let scoreA = score >= 90 && score <=100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 69
  let scoreF = score <60 && score >= 0
  
  let scoreFinal;
  
  if (scoreA) {
    scoreFinal = "A"
  } else if (scoreB) {
    scoreFinal = "B"
  } else if (scoreC) {
    scoreFinal = "C"
  } else if (scoreD) {
    scoreFinal = "D"
  } else if (scoreF) {
    scoreFinal = "F"
  } else {
    scoreFinal = "Nota inválida"
  }

  return scoreFinal
  
}

console.log(getScore(80))
console.log(getScore(55))
console.log(getScore(1252))
console.log(getScore(8))
console.log(getScore(66))
console.log(getScore(12))
console.log(getScore(24))
console.log(getScore(99))
console.log(getScore(100))
console.log(getScore(-55))

/*foi criado varavéis para mapear a nota junto ao caracter correspondente, em seguida usamos o função com if e Else if para que retornasse o valor*/