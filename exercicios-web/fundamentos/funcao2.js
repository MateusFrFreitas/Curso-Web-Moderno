// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

console.log('Função Arrow')

// Armazenando uma funcao arrow(=> = function) em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

console.log('Retorno implicito')

// retorno implicito
const subtracao = (a, b) => a - b
// se é uma linha, ele já sabe o return

console.log(subtracao(10, 5))

console.log('Terminando...')

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')