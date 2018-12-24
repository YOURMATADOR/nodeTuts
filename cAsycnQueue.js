const queue = require('./asyncQueoe')

const mensajes = ['Mensaje 1']

const done = (err, mes) =>
	err ? console.error(err) : console.log('ENVIADO --->',mes)
for (let i = 0; i < 100; i++) {
	(function(i) {
		let mensaje = 'Mensaje ' + i
		queue.push(mensaje, done)
	})(i)
}

queue.drain = () => console.log("TODOS LOS MENSAJE ENVIADOS")