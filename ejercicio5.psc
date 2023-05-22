//Ejercicio 4: Un profesor prepara tres cuestionario para una evaluacion final:
//A, B y C. Se sabe que se tarda 5 minutos en revisar el custionario A,
// 8 en revisar el custionario B y 6 en el C. La cantidad de exámenes de cada
//tipo se entram por teclado. ¿Cuantas horas y cuántos minutos se tardara en
// revisar las evaluaciones?

proceso ejercicio4
	Definir cantidadA,cantidadB,cantidadC como enteros;
	Definir tiempoA,tiempoB,tiempoC como enteros;
	Definir tiempo_total como enteros;
    Definir horas, minutos como enteros;
	
	Escribir "Digite la cantidad de custionarios A: ";
	Leer cantidadA;
	Escribir "Digite la cantidad de custionarios B: ";
	Leer cantidadB;
	Escribir "Digite la cantidad de custionarios C: ";
	Leer cantidadC;
	
	// calcular los minutos que tardara por cada custionario
	tiempoA <- cantidadA * 5;
	tiempoB <- cantidadB * 8;
	tiempoC <- cantidadC * 6;
	
	//calculamos las horas y minutos
	tiempo_total <- tiempoA + tiempoB+ tiempoC;
	
	//calculamos las horas y minutos
	horas <- trunc(tiempo_total / 60);
	minutos <- tiempo_total mod 60;
	
	Escribir "se tardara ",horas," horas y ",minutos," minutos";
FinProceso
