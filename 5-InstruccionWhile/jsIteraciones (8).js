function Mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = 'si';

	do {

		num = parseInt(prompt("Ingrese un numero."));

		respuesta = prompt("¿Quiere ingresar otro número?").toLowerCase();

		contador = contador + 1;

		if (num >= 0) {
			positivo = positivo + num;
		}
		else if (num < 0){
			negativo = negativo * num
		}

	} while (respuesta == "si");

	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN