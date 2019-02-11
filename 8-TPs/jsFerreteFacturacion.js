/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var producto1;
    var producto2;
    var producto3;
    var resultado;

    producto1 = parseFloat(document.getElementById("PrecioUno").value);
    producto2 = parseFloat(document.getElementById("PrecioDos").value);
    producto3 = parseFloat(document.getElementById("PrecioTres").value);

    resultado = producto1 + producto2 + producto3;

    alert("La suma de los tres productos es de $" + resultado)

}
function Promedio () 
{
	var producto1;
    var producto2;
    var producto3;
    var resultado;

    producto1 = parseFloat(document.getElementById("PrecioUno").value);
    producto2 = parseFloat(document.getElementById("PrecioDos").value);
    producto3 = parseFloat(document.getElementById("PrecioTres").value);

    resultado = (producto1 + producto2 + producto3) / 3

    alert("El promedio de los precios es de $" + resultado)

}
function PrecioFinal () 
{
	var producto1;
    var producto2;
    var producto3;
    var resultado;
    var resultadoIva;
    var resultadoFinal;

    producto1 = parseFloat(document.getElementById("PrecioUno").value);
    producto2 = parseFloat(document.getElementById("PrecioDos").value);
    producto3 = parseFloat(document.getElementById("PrecioTres").value);

    resultado = producto1 + producto2 + producto3
    resultadoIva = (producto1 + producto2 + producto3) * 21 / 100;
    resultadoFinal = resultado + resultadoIva

    alert("El precio final es de $" + resultadoFinal.toFixed(2));

}