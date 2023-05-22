

// Un alumno desea saber cu�l sera su calificacion final en la materia de 
// Algoritmos. Dicha calificaci�n se compone de los siguientes porcentaje: 
// 55%  del promedio de sus tres calificaciones parciales.
// 30%  de la calificaciom del examen final.
// 15%  de la calificacion de un trabajo final.

const Leer = requiere('prompt-sync')
constLeer = console
class condicion {
ejercicio6(){
	let parcial1,parcial2,parcial3,promedioP,notasparcial 
	let examen_final,notaexamen 
	let notatrabajo,notafinaltrabajo
	let notafinal
	Escribir.log ("digite las 3 notas de los parciales");
	parcial1,parcial2,parcial3;
	promedioP <- (parcial1+parcial2+parcial3)/3;
	notasparcial <- promedioP*0.55;
	Escribir.log ("Digite la nota del examen final: ");
	examen_final;
	notaexamen <- examen_final*0.3;
	Escribir.log ("Digite la nota del trabajo final: ");
    notatrabajo;
	notafinaltrabajo <- notatrabajo * 0.15;
	notafinal <- notasparcial+notaexamen+notafinaltrabajo;
	Escribir.log ("la calidficacion final es: ",notafinal);
}
}
