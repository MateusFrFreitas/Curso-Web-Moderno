/*
  * bloco de código nomeado, para que você possa
  * chama-lo quantas vezes quiser. 
  * Pode receber parametros e retornar dados 
*/

console.log('Função sem retorno')

//funcao sem retorno
function imprimirSoma(a, b) {
    /*if(isNaN(a) || isNaN(b)) {
        console.log('A ou b não é um número')
    } else {*/
        console.log(a + b)
    //}
}

imprimirSoma(2, 3)
imprimirSoma(2) // posso passar somente 1, o outro será undefined
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // o restante é ignorado
imprimirSoma() // nenhum

console.log('Função com retorno')

// funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())