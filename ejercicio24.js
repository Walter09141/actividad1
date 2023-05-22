

// Ejercicio 3: Leer 10 n�meros e imprimir cuantos son positivos,
// cuantos negativos y cuantos neutros.
function ejercicio3() {
	let num,i
	let conteo_positivos,conteo_negativos,conteo_neutros  
	conteo_positivos = 0;
	conteo_negativos = 0;
	conteo_neutros = 0;
	for (i=1;i<=10;i++) {
		Escribir.log (i,". DIgite un numero: ",);
		num = Number(prompt());
		if (num==0) {
			conteo_neutros = conteo_neutros+1;
		} else {
			if (num>0) {
				conteo_positivos = conteo_positivos+1;
			} else {
				conteo_negativos = conteo_negativos+1;
			}
		}
	}
	Escribir.log ("La cantidad de positivos es: ",conteo_positivos,);
	Escribir.log ("La cantidad de negativos es: ",conteo_negativos,);
	Escribir.log ("la cantidad de neutros: ",conteo_neutros,);
}

