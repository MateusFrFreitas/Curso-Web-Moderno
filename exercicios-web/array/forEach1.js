const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array, x) {
	console.log(`${indice + 1}) ${nome}`)
	console.log(array)
	console.log(x)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

/*const obj = {
	teste: ['a', 'b', 'c']	
}

Object.defineProperty(obj, 'paraCada', { 
	value: function(funcao) {
		for(let i = 0; i < this.teste.length; i++) {
			funcao(this.teste[i], i, this.teste)
		}
	}, 
	enumerable: false 
})

obj.paraCada(function(a, b, c) { console.log(a, b, c) })*/