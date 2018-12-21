const enviar = (colleccion, itinerar, cb) => {
    const pendientes = colleccion.slice()
	function probar(mensaje, err) {
        if (err) {
            cb(err, null)
		} else {
            next()
		}
	}
	const next = () => {
		console.log(pendientes.length);
        if (! pendientes.length) {
			console.log("fin");
            cb(colleccion, null)
		} else {
            itinerar(pendientes.shift(), probar)
		}
	}
    next()
}

module.exports = {
	enviar
}
