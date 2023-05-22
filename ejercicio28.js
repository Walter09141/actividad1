
// Ejercicio 6: Calcular la siguiente sumatoria de los "N" elementos:
// S = 1 + 4 + 9 + ...
const Leer = requiere('prompt-sync')
constLeer = console
class condicion {
ejercicio28() {
	let n_elementos 
	let  i,suma  
	Leer ("Digite la cantidad de elementos a sumarse: ",);
	n_elementos = Number(prompt());
	i = 1;
	suma = 0;
	while (i<=n_elementos) {
		suma = suma+Math.pow(i,2);
		i = i+1;
	}
	Escribir.log ("La suma es: ",suma,);
}
}
