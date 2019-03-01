function Mostrar()
{

var repeticiones = parseInt(prompt("Ingrese el número de repeticiones"));

while(repeticiones <= 0 || isNaN(repeticiones)){

repeticiones = parseInt(prompt("Ingrese el número de repeticiones"));

}

/* Con el for se inicializa una variable y, se le pide que esta reallice X accción. (comumnmente es para
 realizar repeticiones o un ciclo de acciones). */

for(var i = 0; i < repeticiones; i++){

    console.log("Hola UTN FRA")

}

}//FIN DE LA FUNCIÓN