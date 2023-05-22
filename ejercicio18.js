const Leer = requiere('prompt-sync')
constLeer = console
class condicion {
ejercicio6() {
	let preciok,kilos,precioI 
	let descuento,precio_final
	leer  ("Cuento cuesta el kilo de manzanas? ",);
	preciok = Number(prompt());
	leer ("Cuantos kilos de manzana a comprado? ",);
	kilos = Number(prompt());
	precioi = preciok*kilos;
	if (kilos>=0 && kilos<=2) {
		descuento = 0;
	} else {
		if (kilos>=2.01 && kilos<=5) {
			descuento = precioi*0.1;
		} else {
			if (kilos>=5.01 && kilos<=10) {
				descuento = precioi*0.15;
			} else {
				descuento = precioi*0.2;
			}
		}
	}
	precio_final = precioi-descuento;
	Escribir.log ("El precio a pagar es: ",precio_final,);
}
}
