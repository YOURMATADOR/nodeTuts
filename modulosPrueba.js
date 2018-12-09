const {tiemposRandom} = require('./callbacksParalelos')


tiemposRandom({ nombre: 'random' }, (err, res) => {
	if (err) console.log('Error al crear los numeros')
	else console.log('Los numeros son:', res)
})
