// hacer un programa para ingresar el radio de un circulo y se 
// reporte su area y la longitud de la circunferencia.
// area = pi * radio^2
// longitud = * pi radio
Proceso ejercicio2
	definir radio,area,lon como real;
	Escribir "digite el valor del radio:";
	Leer radio;
	area <- pi * radio^2;
	lon <- 2 * pi * radio;
	Escribir "el area de la circunferencia es: ", area;
	Escribir "La longitud es: ",lon;
FinProceso
