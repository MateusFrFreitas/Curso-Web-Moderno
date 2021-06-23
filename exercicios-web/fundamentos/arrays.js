const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

console.log('lenght...')
console.log(valores.length)

console.log('push...')
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log('empty items...')
valores[15] = 10
console.log(valores)

console.log('tirando valores...')
console.log(valores.pop())
console.log(valores.length)

console.log('excluindo valores...')
delete valores[0] // exclui item e deixa posicao empty
console.log(valores)
console.log(valores.length)
/*console.log(valores.pop(), valores.pop(), valores.pop(), valores.pop(), valores.pop(), valores.pop(), valores.pop())
console.log(valores)*/

console.log(typeof valores)