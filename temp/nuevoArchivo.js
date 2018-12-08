const fs = require("fs");
const path = require("path");
const direcctorio = path.join(__dirname,"temp");
const contenido = __filename;
const nuevoArchivo = path.join(direcctorio,"nuevoArchivo.js");
const miCallback = (err,res) => {
    if(err){
        console.log("Error al leer el archivo");
    }
    else{
        console.log("El contenido del archivo es \n", res);
    }
}

fs.readFile("archivo.json","utf8",miCallback);

// * crear un directorio con un nuevo archivo con el mismo contenido de este archivo 


const tratarError = (err) => console.log(err);


const hacerDirecctorio = (nombre) => fs.mkdirSync(nombre);

const leerArchivo  = (nombre ) => fs.readFileSync(nombre,"utf8");

const escribirArchivo = (nombre,txt) => fs.writeFileSync(nombre,txt)

// const crearNuevoArchivo = (carpeta,texto,nombre) => 
// hacerDirecctorio(carpeta)
// .then((result) => {
//     leerArchivo(texto)
// })
// .then(()=>
// escribirArchivo(nombre))
// .then(()=> console.log("Archivo creado correctamente"))
// .catch((err) => {
//     console.log("Error al escribir el nuevo archivo");
// });
const crearNuevoArchivo = async(carpeta,texto,nombre) => {
    try {
        var m = await hacerDirecctorio(carpeta);
        var x = await leerArchivo(texto);
        console.log(x);
        var l = await escribirArchivo(nombre,x);
    } catch (error) {
console.log(error);
    }
}
crearNuevoArchivo(direcctorio,contenido,nuevoArchivo);