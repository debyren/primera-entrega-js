

function plazoFijo (numero, dias){
    console.log (dias)
    switch (dias){
        case 30:
        return (numero * 75 /100 / 12 + numero);
        break;
        case 60:
        return (numero * 75 / 100 /6 + numero);
        break;
        case 90:
        return (numero * 75 / 100 /12 * 3 + numero);
        break;
        default:
        return 0;
        break;
    }

}


let numero1 = parseInt(prompt("ingrese el importe"))
while(numero1 < 1000){
    alert("el importe tiene que ser minimo $1000")
    numero1 = parseInt(prompt("ingrese el importe"))
}
let cantidadDias = parseInt(prompt("ingrese la cantidad de dias"))
let resultado = plazoFijo(numero1, cantidadDias)


while(cantidadDias < 1) {
    alert("por favor ingrese 30, 60 o 90 dias")
    cantidadDias = parseInt(prompt("ingrese la cantidad de dias"))
    if(cantidadDias == 30) {
        resultado = plazoFijo(numero1, cantidadDias)
    }
    if(cantidadDias == 60){
        resultado = plazoFijo(numero1, cantidadDias)
    }
    if(cantidadDias == 90){
        resultado = plazoFijo(numero1, cantidadDias)
    }
    else 
    alert("ingrese un importe, minimo $1000")
}

 alert("el resultado de su pazo fijo a " + cantidadDias + " dias es: $"  + resultado);


  



