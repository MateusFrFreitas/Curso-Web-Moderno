const funcs = []

for(var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // chama funcao em array
funcs[8]() // a variavel não é respeitada, pega o ultimo valor