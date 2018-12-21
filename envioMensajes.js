const envio = require('./paralelosConLimite')

const mensajes = ['Mensaje 1', 'Mensaje 2', 'Mensaje 3']
let indi = 0

const randomTiempo = () => Math.floor(Math.random() * 1e3)
const enviar = (mensaje, cb) => {
	const error =
		Math.random() > 0.8
			? new Error('Error al enviar el mensaje ' + mensaje)
			: null
	setTimeout(cb, randomTiempo(), indi, error) // ? despues de un tiempo aletorio de llama a cb para retornar el error en caso que sea diferente a null
	indi++
}
envio.enviar(2,mensajes, enviar, (mens, err) =>
	err ? console.log(err) : console.log('Mensaje enviados', mens)
)
