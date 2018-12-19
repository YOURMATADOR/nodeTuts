const fs = require('fs')

const numeroRandom = () => Math.floor(Math.random() * 1e3)



const call1 = (args, cb) => setTimeout(cb, numeroRandom(), null, numeroRandom())

const tiemposRandom = (args, cb) => {
    let resultado = []
    let subida = 0
    let called = false
	const callback = (err, res) => {
        if(!called){
            called = true
            cb(err,res)
        }

    }
		

	const ejecFuncion = () => {
		var orden = subida // la variable se guarda localmente con lo que no afecta si se llama otra funcion antes no modificara el valor de esta
		subida++
		return (err, resul) => {
			subida--
			if (err) callback(err)
			else {
				resultado[orden] = resul
				if (!subida) {
					callback(null, resultado)
				}
			}
		}
	}

	call1(args, ejecFuncion())
}

module.exports = {
	tiemposRandom,
	panchita: 'Hola soy panchita'
}

