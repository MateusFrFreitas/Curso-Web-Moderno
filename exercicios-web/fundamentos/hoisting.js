// var a // isso é jogado para cima
console.log('a =', a) // existe, mas indefinida
var a = 2 // jogou para cima
console.log('a =', a) // valor definido

console.log('Teste com função')

function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}
teste()

console.log('Teste com let')
console.log('b =', b) // existe, mas indefinida
let b = 2 // jogou para cima
console.log('b =', b) // valor definido