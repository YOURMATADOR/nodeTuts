const async = require('async')
const fs = require('fs')
const path = require('path')

const carpeta = path.join(__dirname, 'temp')
const archivo = path.join(carpeta, 'temporal.js')
let contenido = null

const nombres = { nombre: 'Eduardo avila ' }
function miPrimerNombre() {
	// ? bind , call y apply no funcionan con la sintaxis de ES6
	console.log('nombre', this.nombre)
}
console.log(nombres.nombre)
miPrimerNombre.call(nombres)

	(cb) => fs.mkdir(carpeta, cb),
	(cb) =>
		fs.readFile(__filename, (err, con) => {
			if (err) {
				cb(err)
			} else {
				console.log(con)
				contenido = con
				cb()
			}
		}),
	(cb) => fs.writeFile(archivo, contenido, cb)
]
const done = (err) => (err ? console.log(err) : console.log('Todo listo C:'))
async.series(colleccion, done)
