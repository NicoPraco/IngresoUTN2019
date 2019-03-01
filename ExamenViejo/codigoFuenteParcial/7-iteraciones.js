//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {

    var i = 0
    var nota;
    var sexo;
    var notaBaja;
    var contador;
    var acumuladorNotas;
    var flag = 0


    for (i = 1; i <= 6; i++) {

        nota = parseInt(prompt("Ingrese las notas de los alumnos"));

        while (notas > 0 || notas < 10 || isNaN(nota)) {

            nota = parseInt(prompt("Error. Reingrese las notas de los alumnos"));
        }

        sexo = prompt("Ingrese el sexo de los alumnos"); {

            while (sexo != "F" || sexo != "f" || sexo != "M" || sexo != "m");
        }

        if(nota < notaBaja || flag == 0){

            notaBaja = nota;
            flag = 1
        }

        if(sexo == "M" || sexo == "m" && nota >= 6){

            

        }




    }





}

