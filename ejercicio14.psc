//Ejerccio 1: Ingrese un numero entero y reportar si es par o impar.

proceso ejercicio1
	Definir num como enteros;
	
	Escribir "Digite un numero: ";
	Leer num;
	
	si num mod 2 = 0 Entonces
		Escribir "El numero ",num," es par";
	sino
		Escribir "El numero ",num," es impar";
	FinSi
FinProceso
