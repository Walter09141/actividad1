
// Ejercicio 3: Un maestro desea saber que porcentaje de hombres y que 
// porcentaje de mujeres hay en un grupo de estudiantes.
const Leer = requiere('prompt-sync')
constLeer = console
class condicion {
ejercicio3(){
	let num_hombres,num_mujeres 
	let total_estudiantes 
	let porcentajeH,porcentajeM 
	Escribir.log ('Digite el numero de hombres: ')
	num_hombres;
	Escribir.log ('Digite el numero de mujeres: ')
	num_mujeres;
	total_estudiantes <- num_hombres+num_mujeres;
	porcentajeH <- num_hombres/total_estudiantes*100;
	porcentajeM <- num_mujeres/total_estudiantes*100;
	Escribir.log ('El porcentaje de Hombres: '),porcentajeH,'%';
	Escribir.log ('El porcentaje de Mujeres. '),porcentajeM,'%';
}

}
