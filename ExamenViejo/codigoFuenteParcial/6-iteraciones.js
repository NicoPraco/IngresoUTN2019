//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {

    var i = 0;
    var importe;
    var mayor;
    var menor;
    var diaMayor;
    var diaMenor;
    var flag = 0;



    for (i = 1; i <= 7; i++) {

        importe = parseFloat(prompt("Ingrese el importe de la venta en el dia " + i));

        while (importe <= 0 || isNaN(importe)) {

            importe = parseFloat(prompt("Error. Reingrese el importe de la venta en el dia " + i));
        }

        if (importe > mayor || flag == 0) {

            mayor = importe;
            diaMayor = i;

        }

        if (importe < menor || flag == 0) {

            menor = importe;
            diaMenor = i;
            flag = 1

        }        
    
    }

        console.log("El importe de venta mayor fue de $" + mayor + " en el día " + diaMayor);
        console.log("El importe de venta menor fue de $" + menor + " en el día " + diaMenor);




}

