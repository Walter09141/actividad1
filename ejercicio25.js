

// Ejercicio 2: Se desea calcular independientemente la suma 
// de los n�meros pares e impares comprendidos entre 1 y 50.
const Leer = requiere('prompt-sync')
constLeer = console
class condicion {
ejercicio25() {
	let suma_pares,suma_impares,i 
	suma_pares = 0;
	suma_impares = 0;
	for (i=2;i<=49;i++) {
		if (i%2==0) {
			suma_pares = suma_impares+i;
		} else {
			suma_impares = suma_impares+i;
		}
		Escribir.log ("La suma de pares es: ",suma_pares,);
		Escribir.log ("La suma de impares: ",suma_impares,);
	}
}
}
