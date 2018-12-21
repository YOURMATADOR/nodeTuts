const enviar = (limite, colleccion, itinerar, cb) => {
	
	const resultado = []
	let pos = 0
	let pendiente = 0

	function probar(mensaje, err) {
		if (err) {
			cb(mensaje, err)
		} else {
			next()
		}
	}
	const llamar = (ind) => {
		pendiente++
		return (men, err) => {
			pendiente--
			if (err) {
				cb(null, err)
			} else {
				resultado[ind] = men
				next()
			}
		}
	}
	const next = () => {
        console.log(colleccion.length,pos)
		if (pos >= colleccion.length) {
            if(!pendiente){
            cb(resultado, null)
            }
		} else if (pendiente < limite) {
			itinerar(colleccion[pos], llamar(pos))
			pos++
			next()
		}
    }
    next()
}

module.exports = {
	enviar
}
