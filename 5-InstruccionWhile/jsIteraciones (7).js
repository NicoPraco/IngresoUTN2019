function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta = "si";

	while (respuesta == "si") {

		num = parseInt(prompt("Ingrese una cantidad de numeros que asi desee."));

		acumulador = acumulador + num;

		contador++

	}


	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN