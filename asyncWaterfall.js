const async = require('async')
const fs = require('fs')
const path = require('path')

const carpeta = path.join(__dirname, 'temp')
const archivo = path.join(carpeta, 'temporal.js')
// let contenido = null
const probar = (nombre, cb) => setTimeout(cb, 1000, 'Hola ' + nombre)

const nombres = { nombre: 'Eduardo avila ' }
function miPrimerNombre(nombre, cb = probar,resultado) {
	// ? bind , call y apply no funcionan con la sintaxis de ES6
	
	console.log('nombre', this.nombre, arguments)
	const callback = (mes) => resultado(mes)

	 cb(nombre, (nombre) => {
		 callback(nombre)
		})
	 
}
console.log(nombres.nombre)
const l = miPrimerNombre.bind(nombres, 'Eduardo',undefined,(e) => console.log(e))
l("Nuevo parametro")

const colleccion = [
	fs.mkdir.bind(fs, carpeta),
	fs.readFile.bind(fs, __filename),
	(res,cb) => {console.log("Resultado",res,cb)  // llama a la funcion con un callback dentro de async la libreria
	cb(null,res)},
	fs.writeFile.bind(fs, archivo)
]
const done = (err) => (err ? console.log(err) : console.log('Todo listo C:'))
async.waterfall(colleccion, done)

// [0](fs,carpeta,cb) cb(null)
// [1](fs,archivo,cb)  cb anterior no retorna un resultado
// [2](fs,carpeta,contenido,cb) (contenido, cb)