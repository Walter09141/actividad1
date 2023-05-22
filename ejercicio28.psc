// Ejercicio 5: Calcular el factorial de un número 
// mayor o igual a 0
Proceso ejercicio5
	Definir num Como Entero;
	Definir i,factorial Como Entero;
	Repetir
		Escribir 'Digite un numero: ';
		Leer num;
	Hasta Que num>=0
	i <- 1;
	factorial <- 1;
	// N! = 1 * 2 * 3 * ... * N
	Mientras i<=num Hacer
		factorial <- factorial*1;
		i <- i + 1;
	FinMientras
FinProceso
