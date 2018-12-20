const enviar = (colleccion, itinerar, cb) => {
	let llamado = false
	let pendiente = colleccion.lenght

	const callback = (mens,err) => {
		if (!llamado) {
			llamado = true
			cb(mens,err)
		}
	}
	const recibir = (mensaje, err) => {
		pendiente--
		if (err) {
			callback(mensaje,err)
		} else if (!pendiente) {
			callback(mensaje,null)
		}
	}
	colleccion.map((e) => itinerar(e, recibir))
}

module.exports ={
    enviar
}