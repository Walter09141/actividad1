//Ejercicio 7: Ingresar "N" enteras, visualizar la suma de los numeros pares 
// de la lista, cuántos números pares existe y cuál es el promedio de los 
// números impares
Proceso ejercicio7
	Definir n_elementos,i,num como enteros;
	Definir suma_pares como enteros;
	Definir suma_impares,conteo_impares como enteros;
	
	Escribir "Digite la cantidad de elementos a ingresar: ";
	Leer n_elementos;
	
	i<- 1;
	suma_pares <- 0;
	conteo_pares <- 0;
	
	Mientras i<= n_elementos Hacer
		Escribir i,"Digite un numero: ";
		Leer num;
		
		si num mod 2 = 0 Entonces 
			//El num es par 
			
			//Suma interativa de pares
			suma_pares <- conteo_pares + 1;
			
			//conteo de pares 
			conteo_pares <- conteo_pares + 1;
			
			//conteo de partes
			conteo_pares <- conteo_pares + 1;
		FinSi
		
		i <- i +1;
	FinMientras
	
	si conteo_pares = 0 Entonces 
		Escribir "No se han digitado numeros pares";
	SiNo
		Escribir "La suma de los numeros pares es: ",suma_pares;
	    Escribir "El conteo de los numeros pares es: ",conteo_pares;
FinProceso
	
