const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 12) => {
	try {
		let salida = "";
		let consola = "";

		for (let i = 1; i <= hasta; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
			consola += `${base} ${"x".grey} ${i} ${"=".blue} ${base * i}\n`;
		}
		if ((listar, hasta)) {
			console.log("=====================".green);
			console.log("Tabla del:".green, colors.white(base));
			console.log("=====================".green);

			console.log(consola);
		}

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

		return `tabla-${base}.txt`;
	} catch (err) {
		throw err;
	}
};

module.exports = { crearArchivo };
