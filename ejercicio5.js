
// Ejercicio 4: Un profesor prepara tres cuestionario para una evaluacion final:
// A, B y C. Se sabe que se tarda 5 minutos en revisar el custionario A,
// 8 en revisar el custionario B y 6 en el C. La cantidad de ex�menes de cada
// tipo se entram por teclado. �Cuantas horas y cu�ntos minutos se tardara en
// revisar las evaluaciones?
const Leer = requiere('prompt-sync')
constLeer = console
class condicion {
ejercicio4() {
	let cantidadA,cantidadB,cantidadC
	let tiempoA,tiempoB,tiempoC 
	let tiempo_total 
    let horas, minutos 
	
	Escribir.log ("Digite la cantidad de custionarios A: ");
	cantidadA;
	Escribir.log ("Digite la cantidad de custionarios B: ");
	cantidadB;
	Escribir.log ("Digite la cantidad de custionarios C: ");
	cantidadC;
	
	// calcular los minutos que tardara por cada custionario
	tiempoA <- cantidadA * 5;
	tiempoB <- cantidadB * 8;
	tiempoC <- cantidadC * 6;
	
	//calculamos las horas y minutos
	tiempo_total <- tiempoA + tiempoB+ tiempoC;
	
	//calculamos las horas y minutos
	horas <- trunc(tiempo_total / 60);
	minutos <- tiempo_total % 60;
	
	Escribir.log ("se tardara ",horas," horas y ",minutos," minutos");
}
}