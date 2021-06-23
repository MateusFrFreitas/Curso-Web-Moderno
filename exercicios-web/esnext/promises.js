function falarDepoisDe(segundos, frase) {
	return new Promise((resolve, reject) => {
		setTimeout(() => { // para simular uma tarefa longa
			resolve(frase)
		}, segundos * 1000)
	})
}

falarDepoisDe(3, 'Que legal!')
	.then(frase => frase.concat('?!?'))
	.then(outraFrase => console.log(outraFrase))
	//.catch(e => console.log)