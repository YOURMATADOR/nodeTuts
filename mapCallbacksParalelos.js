const enviar = (colleccion, itinerar, cb) => {
	const pendientes = collecion.slice()
	const resultado = []
	function probar(mensaje, err) {
		resultado = [...resultado, mensaje]
		if (err) {
			cb(mensaje, err)
		} else {
			next()
		}
	}
	const next = () => {
		if (!pendientes.lenght) {
			cb(colleccion, null)
		} else {
			itinerar(pendientes.shift(), probar)
		}
	}
}

module.exports = {
	enviar
}
