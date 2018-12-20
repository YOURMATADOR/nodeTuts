const enviar = (colleccion, itinerar, cb) => {
	let llamado = false
	let pendiente = colleccion.lenght
	let resultados = []
	const callback = (mens, err) => {
		if (!llamado) {
			llamado = true
			cb(mens, err)
		}
	}
	const indexar = (index) => {
		pendiente--
		return (mensaje, err) => {
			resultados[index] = mensaje
			if (err) {
				callback(resultados, err)
			} else if (!pendiente) {
				callback(resultados, null)
			}
		}
	}
	colleccion.map((e, i) => itinerar(e, indexar(i)))
}

module.exports = {
	enviar
}
