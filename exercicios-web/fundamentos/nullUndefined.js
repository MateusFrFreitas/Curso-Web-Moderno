// ver aula 24
let valor // variável não foi inicializada
console.log(valor)

valor = null // ausencia de valor, foi deifinida, 
             // mas não aponta para local de memória
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // undefined - produto é definido, mas preço não
//console.log(produto.preco.a)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)

//delete produto.preco

console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)