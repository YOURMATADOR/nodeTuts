const numeroRandom = () => Math.floor(Math.random() * 1e3)

const call1 = (args, cb) => setTimeout(cb, numeroRandom(), null, numeroRandom())
const call2 = (args, cb) => setTimeout(cb, numeroRandom(), null, numeroRandom())
const call3 = (args, cb) => setTimeout(cb, numeroRandom(), null, numeroRandom())

const dispararError = (fn) => {
	return (err, res) => {
		if (err) {
			fn(err)
		} else {
			fn(null, res)
		}
	}
}
const anidado = (args, cb) => {
	call1(
		args,
		dispararError((err, res1) => {
			call2(
				args,
				dispararError((err, res2) => {
					call3(
						args,
						dispararError((err, res3) => {
							return err ? cb(err) : cb(null, [res1, res2, res3])
						})
					)
				})
			)
		})
	)
}

module.exports = {
	anidado
}
