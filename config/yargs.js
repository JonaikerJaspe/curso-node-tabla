const argv = require("yargs")
	.option("b", {
		alias: "base",
		type: "number",
		demandOption: true,
		describe: "Es la base de la tabla de multiplicar",
	})
	.option("l", {
		alias: "listar",
		type: "boolean",
		default: false,
		describe: "Muesta la tabla en consola",
	})
	.option("h", {
		alias: "hasta",
		type: "number",
		default: 12,
		describe: "Hasta donde quieres la tabla de multiplicar ",
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw "La base tiene que ser un Número";
		}
		return true;
	}).argv;

module.exports = argv;
