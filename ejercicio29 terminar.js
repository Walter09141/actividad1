

// Ejercicio 7: Ingresar "N" enteras, visualizar la suma de los numeros pares 
// de la lista, cu�ntos n�meros pares existe y cu�l es el promedio de los 
// n�meros impares
const Leer = requiere('prompt-sync')
constLeer = console
class condicion {
ejercicio29() {
	var conteo_pares;
	var n_elementos = new Number();
	var i = new Number();
	var num = new Number();
	var suma_pares = new Number();
	var suma_impares = new Number();
	var conteo_impares = new Number();
	Leer ("Digite la cantidad de elementos a ingresar: ",);
	n_elementos 
	i = 1;
	suma_pares = 0;
	conteo_pares = 0;
	while (i<=n_elementos) {
		Escirbir.log (i,"Digite un numero: ",);
		num 
		if (num%2==0) {
			// El num es par 
			// Suma interativa de pares
			suma_pares = conteo_pares+1;
			// conteo de pares 
			conteo_pares = conteo_pares+1;
			// conteo de partes
			conteo_pares = conteo_pares+1;
		}
		i = i+1;
	}
	if (conteo_pares==0) {
		Escirbir.log ("No se han digitado numeros pares",);
	} else {
		Escirbir.log ("La suma de los numeros pares es: ",suma_pares,);
		Escirbir.log ("El conteo de los numeros pares es: ",conteo_pares,);
	}
}
}
