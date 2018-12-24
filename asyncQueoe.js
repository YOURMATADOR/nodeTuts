const async = require('async')

const randomTime = () => Math.floor(Math.random() * 1e3)
const randomResult = () => Math.floor(Math.random() * 1e9)

const enviar = (mensaje, cb) => {
	console.log('Enviando mensajae', mensaje)
	const enviado = (err, res) => {
		if (err) {
			cb(err)
		} else {
			
			cb(err, res)
		}
	}
	setTimeout(enviado, randomTime(), null, randomResult())
}
var maxParalell = Number(process.env.MAX_QUEUE_CALLS) || 5

var queue = async.queue(enviar, maxParalell)

module.exports = queue
