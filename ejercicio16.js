

// Ejercicio $: Leer 2 n�meros; si son iguales que los multiplique, si el 
// primero es mayor que el segundo que los reste y si no que los sume
const Leer = requiere('prompt-sync')
constLeer = console
class condicion {
ejercicio16() {
let num1,num2,resultado 

	Leer ("Digite dos numeros: ");
	num1,num2;
	Leer ("Digite dos numeros: ",);
	num1 = Number(prompt());
	num2 = Number(prompt());
	if (num1==num2) {
		// si son iguales multiplicamos
		resultado = num1*num2;
	} else {
		if (num1>num2) {
			// si el primer numero es mayor los restamos
			resultado = num1-num2;
		} else {
			resultado = num1-num2;
		}
	}
	Escribir.log ("El resultado es: ",resultado,);
}
}
