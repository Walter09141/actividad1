// Un alumno desea saber cuál sera su calificacion final en la materia de 
// Algoritmos. Dicha calificación se compone de los siguientes porcentaje: 
// 55%  del promedio de sus tres calificaciones parciales.
// 30%  de la calificaciom del examen final.
// 15%  de la calificacion de un trabajo final.
Proceso ejercicio6
	Definir parcial1,parcial2,parcial3,promedioP,notasparcial como reales;
	Definir examen_final,notaexamen como real;
	Definir notatrabajo,notafinaltrabajo como reales;
	Definir notafinal como real;
	Escribir "digite las 3 notas de los parciales";
	Leer parcial1,parcial2,parcial3;
	promedioP <- (parcial1+parcial2+parcial3)/3;
	notasparcial <- promedioP*0.55;
	Escribir "Digite la nota del examen final: ";
	Leer examen_final;
	notaexamen <- examen_final*0.3;
	Escribir "Digite la nota del trabajo final: ";
	Leer notatrabajo;
	notafinaltrabajo <- notatrabajo * 0.15;
	notafinal <- notasparcial+notaexamen+notafinaltrabajo;
	Escribir "la calidficacion final es: ",notafinal;
FinProceso
