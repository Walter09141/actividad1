
// Ejercicio 8: Elabore un programa que me muestre el
// significado de aniversario de cada decada hasta los 60
const Leer = requiere('prompt-sync')
constLeer = console
class condicion {
ejercicio8() {
	let decada = new Number();
	Leer ("Digite una decada",);
	decada = Number(prompt());
	switch (decada) {
	case 10:
	Leer ("Bodas de Hojalata",);
		break;
	case 20:
    Leer ("Bodas de Porcelana",);
		break;
	case 30:
	Leer ("Bodas de Perlas",);
		break;
	case 40:
	Leer ("Bodas de Rubi",);
		break;
	case 50:
	Leer ("Bodas de Oro",);
		break;
	case 60:
	Leer ("Bodas de Diamante",);
		break;
	default:
	Leer ("Decada existente",);
	}
}
}
