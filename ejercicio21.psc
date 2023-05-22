// Ejercicio 9: Hacer un programa que tenga un menú con las siguientes opciones:
// Opcion 1: Elevar un número a una potencia x
// Opcion 2: Sacar la raiz cuadrada de un número 
// Opcion 3: Salir 
Proceso ejercicio9
	Definir opcion como entero;
	Escribir "MENU";
	Escribir "1 Elevar un numero a una potencia X";
	Escribir "2 Sacar la raiz cuadrada de un numero";
	Escribir "3. Salir";
	Escribir "Digite una opcion: ";
	Leer opcion;
	Segun opcion  Hacer
		1:
			Definir num,pot,resultado Como Real;
			Escribir 'Digite un numero: ';
			Leer num;
			Escribir 'Digite la potencia';
			Leer pot;
			resultado <- num^pot;
			Escribir 'El resultado es: ',resultado;
		2:
			Definir num,resultado Como Real;
			Escribir 'Digite un numero: ';
			Leer num;
			resultado <- rc(num);
			Escribir 'El resultado es: ',resultado;
		3:
		De Otro Modo:
			Escribir 'Se esquivoco de opcion de menu';
	FinSegun
FinProceso
