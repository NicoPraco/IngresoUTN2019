function Mostrar() {
    //tomo el mes 
    var mesDelAnio = document.getElementById('mes').value;

    //alert (mesDelAño);

    switch (mesDelAnio) {


        case "Febrero":
            alert("28 dias");
            break;

        case "Enero":
        case "Marzo":
        case "Diciembre":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
            alert("31 días")

        default:
            alert("30 días");
            break;



    }
}//FIN DE LA FUNCIÓN