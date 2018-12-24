const sync = require('async')

const tiempoRandom = () => Math.floor(Math.random() * 1e3)
const resultadoRandom = () => Math.floor(Math.random() * 1e3)

const operacion = (mensaje, cb) => {
	function enviado(err, men) {
		console.log('ENVIADO ..>', mensaje)
		if (err) {
			cb(err)
		} else {
			cb()
		}
	}
	console.log('enviando -->', mensaje)
	setTimeout(enviado, tiempoRandom(), null, resultadoRandom())
}
const enviarMensajes = (mensajes, cb) => sync.mapSeries(mensajes, operacion, cb)

module.exports = { enviarMensajes }
