// Questão 1

function someFun(parametos, retorno1) {
  retorno1(parametos.someProperty)

  return 1
}

// Questão 2

function someFn(numero) {
  const returnFunction = (value) => {
    switch (value) {
      case 3:
        return 4
      case 1:
        return 5
      case 5:
        return 10
    }
  }

  return returnFunction
}

// Questão 3

function calculator(x1, y2) {
  return callback => callback(x1, y2)
}

// Questão 4

/**
 * Ficará nessa ordem:
 * 4
 * 1
 * 5
 * 1
 */

// Questão 5

function tabuada(numero1) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero1} X ${i} = ${numero1 * i}`)
  }
}
