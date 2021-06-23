// par nome/valor
const saudacao = 'Opa' // contexto léxico 1 (local no qual a variavel foi definido)

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// como estão em contextos diferentes, não gera conflito

console.log(saudacao, exec())

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
   nome: 'Pedro',
   idade: 32,
   peso: 90,
   endereco: {
       logradouro: 'Rua',
       numero: 123
   } 
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

//https://pt.stackoverflow.com/questions/13034/o-que-são-escopo-léxico-e-escopo-dinâmico-e-quais-são-suas-principais-diferenças