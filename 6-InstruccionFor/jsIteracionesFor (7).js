function Mostrar() {

    var numero;
    var contadorDivisores = 0;

    numero = parseInt(prompt("Ingrese un numero"));

    while (numero < 0 || isNaN(numero)) {

        numero = parseInt(prompt("Por favor, Ingrese un numero valido"));

    }

    for (var i = 0; i <= numero; i++) {

        if (numero % i == 0 ) {

            console.log(i);
            contadorDivisores++;

        }

    }

    console.log("Cantidad de divisores: " + contadorDivisores);


}//FIN DE LA FUNCIÓN