const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
	.then((nombreArchivo) => console.log(nombreArchivo.yellow, "creado".random))
	.catch((err) => console.log(err));

//Esto lo comente nada mas por que no lo voy a usar
// const [, , argv3 = "base=5"] = process.argv
// const [, base = 5] = argv3.split("=")
// console.log(argv3);

// const base = 1;

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, "creado"))
//     .catch(err => console.log(err)),
