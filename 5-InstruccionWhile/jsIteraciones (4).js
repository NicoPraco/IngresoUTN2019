function Mostrar() {

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while (!(numero >= 0 && numero <= 9)) {

		numero = parseInt(prompt("Por favor, ingrese un numero que se encuentre entre 0 y 9."))

	}

	document.getElementById("Numero").value = "El numero " + numero + " es valido."

}//FIN DE LA FUNCIÓN