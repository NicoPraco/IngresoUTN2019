function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var num;
	

	while (contador < 5) {

		num = parseInt(prompt("Por favor, ingrese 5 numeros, siendo 1 por mensaje"));
		
		acumulador = acumulador + num;
		
		contador++;

	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN