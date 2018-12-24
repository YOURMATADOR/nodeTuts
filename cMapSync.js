const map = require('./mapSync')

const datos = [
	'mensaje 1',
	'Mensaje 2',
	'Mensaje 3',
	'mensaje 4',
	'Mensaje 5',
	'Mensaje 6'
]

const cb = (err) =>
	err ? console.error(err) : console.log('Todos los mensaje enviados!')

map.enviarMensajes(datos, cb)
