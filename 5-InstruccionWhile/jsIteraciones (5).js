function Mostrar() {

    var sexo = prompt("ingrese f ó m .");

    // while (sexo != "m" && sexo != f)
    while (!(sexo == "m" || sexo == "f" || sexo == "F" || sexo == "M")) {

        sexo = prompt("Por favor, ingrese un sexo valido.").toLowerCase()

    }

    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN