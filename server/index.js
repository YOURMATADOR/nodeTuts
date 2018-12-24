const net = require('net') // modulo de nod.js nativo para crear servidores TCP
const tgh = require('through2')
const PORT = process.env.PORT || 8000

const server = net.createServer()
server.on('connection', (mes) => {
    
    mes.setEncoding('utf8')
	let emit = mes.emit
	let convertirM = tgh.obj(function(d, enc, cb){
        console.log(d,enc,cb)
		this.push(d.toUpperCase())
		cb()
    })
    
	mes.pipe(convertirM).pipe(mes)
	// mes.emit = (res) => { // cuando el cleinte ejecute algun evento llamara a esta funcion con el tipo de evento como primer parametro
	// 	console.log('Evento emitido', res)
	// 	emit.apply(mes, arguments) // llamas a la funcion emitir con los parametros con lo  que se llamo
	// }
})

Array.prototype.imprimir = function(saludo){ console.log(`${saludo} ${this}` )}
let ejemplo = [1,2,3,4,5,6]
ejemplo.imprimir("HOLA")
console.log()

server.listen(PORT, () => console.log('Server montado en ', server.address()))
