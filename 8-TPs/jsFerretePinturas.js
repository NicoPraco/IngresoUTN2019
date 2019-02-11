/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var tempF;
    var tempC;

    tempF = parseFloat(document.getElementById("Temperatura").value);

    tempC = (tempF - 32) * 5 / 9;

    alert(tempF + "º Fahrenheit es equivalente a " + tempC.toFixed(2) + "º centígrados");
}

function CentigradosFahrenheit () 
{
	var tempF;
    var tempC;

    tempC = parseFloat(document.getElementById("Temperatura").value);

    tempF = 9 / 5 * tempC + 32;

    alert(tempC + "º Centígrados es equivalente a " + tempF + "º Fahrenheit");
}
