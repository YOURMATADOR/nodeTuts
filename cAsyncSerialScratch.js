const async = require('./asyncSerialScratch')

const fs = require('fs')
const path = require('path')

const carpeta = path.join(__dirname, 'temp')
const archivo = path.join(carpeta, 'temporal.js')
let l = null

const colleccion = [
	fs.mkdir.bind(fs, carpeta),
	(cb) => {
		fs.readFile(__filename, (err, res) => {
			if (err) {
				cb(err)
			} else {
				console.log('resultado', res)
				l = res
				cb(err,res)
			}
		})
	},

	(cb)=> fs.writeFile(archivo,l,cb)
]
const done = (err) => (err ? console.log(err) : console.log('Todo listo C:'))
async.serial(colleccion, done)
