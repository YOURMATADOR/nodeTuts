const numeroRandom = () => Math.floor(Math.random() * 1e3)

const revizarError = (cb) => {
	return (err, res) => {
		if (err) imprimirError(err)
		else cb(res)
	}
}

const call1 = (args, cb) => setTimeout(cb, numeroRandom(), null, numeroRandom())

const tiemposRandom = (args, cb) =>
	call1(args, revizarError((res) => cb(null, [res])))

module.exports = {
    tiemposRandom,
    panchita:"Hola soy panchita"
}
console.log(module.exports);
