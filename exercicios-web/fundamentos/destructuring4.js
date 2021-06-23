function rand([min = 0, max = 1000]) { // esse parametro não é um objeto, é uma desestruturação
    if(min > max) [min, max] = [max, min] // destructuring = array

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const ary = [50, 40]
console.log(rand(ary))
console.log(rand([]))
console.log(rand([992]))
console.log(rand([, 10]))
//console.log(rand())