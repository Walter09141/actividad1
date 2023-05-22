

// Ejercicio 4: Suponga que se tiene un conjunto de calificaciones de un grupo 
// de 10 alumnos. Realizar un algoritmo para calcular la calificacion promedio y 
// la calificacion mas baja de todo el grupo.
const Leer = requiere('prompt-sync')
constLeer = console
class condicion {
ejercicio27() {
	let calificacion_promedio,calificacion_baja
	let calificacion,suma 
	let i
	suma = 0;
	calificacion_baja = 99999;
	for (i=1;i<=10;i++) {
		Escribir.log (i,"Digite una calificacion: ",);
		calificacion = Number(prompt());
		// Suma interativa de las calificaciones
		suma = suma+calificacion;
		// calculamos la menor calificacion
		if (calificacion<calificacion_baja) {
			calificacion_baja = calificacion;
		}
	}
	calificacion_promedio = suma/10;
	Escribir.log ("la calificacion promedio es: ",calificacion_promedio,);
	Escribir.log ("La calificacion mas baja es: ",calificacion_baja,);
}

}