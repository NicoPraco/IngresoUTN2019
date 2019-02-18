/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

function CalcularPrecio() {
    var cantidad;
    var marca;
    var descuento;
    var IIBB
    var precio;
    var precioFinal


    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;
    precio = cantidad * 35;

    if (cantidad >= 6) {
        descuento = precio * 50 / 100;
        precioFinal = precio - descuento;
        document.getElementById("precioDescuento").value = "$" + precioFinal;
    }
    else if (cantidad == 5) {
        if (marca == "ArgentinaLuz") {
            descuento = precio * 40 / 100;
            precioFinal = precio - descuento;
            document.getElementById("precioDescuento").value = "$" +precioFinal;
        }
        else {
            descuento = precio * 30 / 100;
            precioFinal = precio - descuento;
            document.getElementById("precioDescuento").value = "$" + precioFinal;
        }
    }
    else if (cantidad == 4) {
        if (marca == "ArgentinaLuz" || "FelipeLamparas"){
            descuento = precio * 25 / 100;
            precioFinal = precio - descuento;
            document.getElementById("precioDescuento").value = "$" + precioFinal;
        }
        else {
            descuento = precio * 20 / 100;
            precioFinal = precio - descuento;
            document.getElementById("precioDescuento").value = "$" + precioFinal;
        }
    }
    else if (cantidad = 3){
        if(marca == "ArgentinaLuz"){
            descuento = precio * 15 / 100;
            precioFinal = precio - descuento;
            document.getElementById("precioDocumento").value = "$" + precioFinal;
        }
        else if (maraca == "FelipeLamparas"){
            descuento = precio * 10 / 100;
            precioFinal = precio - descuento;
            document.getElementById("precioDescuento").value = "$" + precioFinal;
        }
        else{
            descuento = precio * 5 / 100;
            precioFinal = precio - descuento;
            document.getElementById("precioDocumento").value = "$" +precioFinal;
        }
    }
    if(precioFinal >= 120){
        IIBB = precioFinal * 10 / 100;
        precioFinal = precioFinal + IIBB;
        alert("Usted pago $" + IIBB + " de IIBB");
        document.getElementById("precioDocumento").value = "$" + precioFinal
    }

}