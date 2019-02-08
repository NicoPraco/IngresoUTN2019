/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var importe;
    var resultado;

    parseInt(sueldo);

    sueldo = document.getElementById("sueldo").value;
    importe = (10 * sueldo / 100);
   
    parseInt(sueldo);
    parseInt(importe);

    resultado = sueldo + importe;

    parseInt(resultado);

    alert("El aumento es de " + importe);
    
    document.getElementById("resultado").value = resultado;

}
