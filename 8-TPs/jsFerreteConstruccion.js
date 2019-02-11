/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var resultado;
    var alambre;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    resultado = 2 * largo + ancho * 2;
    alambre = resultado * 3

    alert("Necesito unos " + alambre + " metros de alambre");

}
function Circulo () 
{
	var radio;
    var resultado;
    var alambre;

    radio = parseFloat(document.getElementById("Radio").value);

    resultado = Math.PI * radio * 2;
    alambre = resultado * 3; 

    alert(" Se necesitan unos " + alambre.toFixed(2) + " metros de alambre para el terreno");

}
function Materiales () 
{
	var largo;
    var ancho;
    var cal
    var cemento
    var resultado;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    resultado = ancho * largo;
    cal = resultado * 3
    cemento = resultado * 2

    alert("Se necesitan unas " + cemento +  " bolsas de cemento" + "y unas " + cal + " bolsas de cal, para las medidas del terreno ");
}