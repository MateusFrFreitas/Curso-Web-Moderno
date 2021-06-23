const funcs = []

for(let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // chama funcao
funcs[8]() // respeita o valor da variavel