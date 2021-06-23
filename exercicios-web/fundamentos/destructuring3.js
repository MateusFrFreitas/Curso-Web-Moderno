function rand({ min = 0, max = 1000 }) { // esse parametro não é um objeto, é uma desestruturação
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, intrometido: 100, min: 40 }
console.log(rand(obj))
console.log(rand({}))
//console.log(rand())