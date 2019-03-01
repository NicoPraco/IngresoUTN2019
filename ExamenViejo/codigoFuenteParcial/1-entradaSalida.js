//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var lado;
    var perimetro;

    lado = parseInt(document.getElementById("lado").value);

    perimetro = 3 * lado;

    alert("El perimetro del triangulo equilatero es igual a " + perimetro)
	
}

