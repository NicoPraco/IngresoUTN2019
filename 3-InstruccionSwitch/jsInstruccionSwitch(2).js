function Mostrar() {
    //tomo el mes 
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {

        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert("Falta para el frio.");
            break;

        case "Julio":
        case "Agosto":
            alert("Abrigate que hace frio.");
            break;

        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Ya pasamos el frio, ahora viene el calor");
            break;

    }


    //alert(mesDelAño);




}//FIN DE LA FUNCIÓN