//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
    var ancho;
    var largo;
    var perimetro;
    var alambrado;

    ancho = parseInt(document.getElementById("ancho").value);
    largo = parseInt(document.getElementById("largo").value);
	
    perimetro = 2 * (ancho + largo);

    alambrado = perimetro * 6

    alert("Se necesita un total de " + alambrado + " m2")




}

