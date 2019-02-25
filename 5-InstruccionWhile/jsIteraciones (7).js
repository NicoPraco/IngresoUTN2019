function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta = "si";

	do {

		num = parseInt(prompt("Ingrese un numero."));

		acumulador = acumulador + num;

		respuesta = prompt("¿Quiere ingresar otro número?").toLowerCase();

		contador = contador + 1;

	}

	while (respuesta == "si");

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN