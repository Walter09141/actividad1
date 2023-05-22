//SubAlgoritmo 
//Diseñar un algoritmo que resuelva la siguiente expresion matematica
// Entrada: x=0(calcular),a=0(leer)b=0(leer),c=0(calculada)
// Proceso: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))
// Salida: x 
Funcion expresion()
	Definir x, a,b,c Como Real
    x=0;a=0;b=0;c=0
	Escribir "Ingrese el valor de a: "
	leer a
	Escribir "Ingrese el valor de b: "
	leer b
	c=azar(11)
	Escribir c
	x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))
	Escribir "((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))"
FinFuncion "sen=",sen(a),"cos=",cos(b),"mod=",trunc(a) mod 2

FinFuncion
// Algoritmo principal
Algoritmo ejerciciosecuencial
	expresion()
FinAlgoritmo
FinProceso
