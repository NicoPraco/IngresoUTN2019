//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
    var precio;
    var iva;
    var precioFinal;

    precio = parseInt(prompt("Ingrese el valor del producto"));

    iva = precio * 0.21;

    precioFinal = precio + iva;

    document.getElementById("importe").value = precioFinal


}

