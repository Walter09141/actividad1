// Ejercicio 3: En un almacen se hace un 20 MOD  de descuento a los clientes
// cuya compra supere los $100. �cual sera la cantidad que pagara una 
// persona por 
Proceso ejercicio3
	Definir compra como real;
	Definir descuento,precio_final como real;
	Escribir "Digite la cantidad a pagar: ";
	Leer compra;
	Si compra>100 Entonces
		descuento <- compra * 0.2;
	SiNo
		descuento <- 0;
	FinSi
	precio_final <- compra - descuento;
	Escribir "El precio a pagar es: ",precio_final;
FinProceso
