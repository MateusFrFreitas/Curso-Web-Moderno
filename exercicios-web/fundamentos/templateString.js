const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'


/* Considera espaços dentro da crase */
/*const template = `
    Olá
    ${nome}!`*/

const template = `Olá ${nome}!`

console.log(concatenacao, template)

// Expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

