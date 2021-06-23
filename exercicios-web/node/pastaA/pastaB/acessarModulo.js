const moduloA = require('../../moduloA') // utilizar case sensitive pois senão da erro no linux
console.log(moduloA.ola)

const saudacao = require('saudacao') // procura index.js
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

/*const http = require('http')
http.createServer((req, res) => {
	res.write('Bom dia!')
	res.end()
}).listen(8080)*/