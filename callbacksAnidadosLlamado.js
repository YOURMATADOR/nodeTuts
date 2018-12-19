const anidados = require('./callbacksAnidados')

anidados.anidado([1, 23], (err, res) => {
	if (err) {
		console.log(err)
	} else {
		console.log(res)
	}
})
