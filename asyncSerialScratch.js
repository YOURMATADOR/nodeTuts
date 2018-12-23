const serial = (operaciones, done) => {
	let contador = 0
	let llamado = false
	const prueba = (err, men) => {
		contador++
		console.log(contador)

		if (!llamado) {
			if (err) {
				llamado = true
				done(err)
			} else {
				next(contador, men)
			}
		}
	}

	function next(contador, parametro = null) {
		if (contador >= operaciones.length) {
			if (!llamado) {
				llamado = true
				done()
			}
		} else {
			console.log(operaciones[contador])
			if (parametro) {
				operaciones[contador](prueba)
			} else {
				operaciones[contador](prueba)
			}
		}
	}
	next(contador)
}

module.exports = {
	serial
}
