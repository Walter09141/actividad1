

// Ejercicio 9: Hacer un programa que tenga un men� con las siguientes opciones:
// Opcion 1: Elevar un n�mero a una potencia x
// Opcion 2: Sacar la raiz cuadrada de un n�mero 
// Opcion 3: Salir 
const Leer = requiere('prompt-sync')
constLeer = console
class condicion {
ejercicio21() {
let opcion 
Leer ("MENU",);
Leer ("1 Elevar un numero a una potencia X",);
Leer ("2 Sacar la raiz cuadrada de un numero",);
Leer ("3. Salir",);
Leer ("Digite una opcion: ",);
	opcion = Number(prompt());
	switch (opcion) {
	case 1:
		let num = new Number();
		let pot = new Number();
		let resultado = new Number();
		Escirbir.log ("Digite un numero: ",);
		num = Number(prompt());
		document.write("Digite la potencia",);
		pot = Number(prompt());
		resultado = Math.pow(num,pot);
		document.write("El resultado es: ",resultado,);
		break;
	case 2:
		var num 
		var resultado
		document.write("Digite un numero: ",);
		num = Number(prompt());
		resultado = Math.sqrt(num);
		Escirbir.log ("El resultado es: ",resultado,);
		break;
	case 3:
		break;
	default:
		Escirbir.log ("Se esquivoco de opcion de menu",);
	}
}

}