

// Ejercicio 3: En un almacen se hace un 20 MOD  de descuento a los clientes
// cuya compra supere los $100. �cual sera la cantidad que pagara una 
// persona por 
const Leer = requiere('prompt-sync')
constLeer = console
class condicion {
ejercicio3() {
	let compra = new Number();
	let descuento = new Number();
	let precio_final = new Number();
	Escribir.log ("Digite la cantidad a pagar: ",);
	compra = Number(prompt());
	if (compra>100) {
		descuento = compra*0.2;
	} else {
		descuento = 0;
	}
	precio_final = compra-descuento;
	Escribir.log ("El precio a pagar es: ",precio_final,);
}

}