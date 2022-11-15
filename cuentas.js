
//lista desplegable de cuentas
const lista = document.getElementById('listaCuentas')

    fetch('/cuentas.json')
         .then( (response) => {
             return response.json();
         }).then( (cuentas) => {
    
             for(const clientes of cuentas) {
               
                const opciones = document.createElement("option")
                opciones.innerHTML = clientes.cuenta
                opciones.value = clientes.cuenta
                
                lista.append(opciones)
                
                
                }
        }) 

let acreditaciones = document.getElementById('opcionAcreditacion')



    fetch('/acreditacion.json')
    .then( (response) => {
    return response.json();
    }).then( (acreditacion) => {

    for (const cuentas of acreditacion){

    const opciones = document.createElement("option")
    opciones.innerHTML = cuentas.opcion
    opciones.value = cuentas.opcion
    
    acreditaciones.append(opciones)
    

        
    }
})


 



    let importes = document.getElementById("importe")
    let mont = localStorage.getItem('ingresoMonto')
    
    importes.innerHTML = mont

   console.log(mont)


// importes.innerHTML(mont)





// importes.append(importeIngresado);

// function agregar(){


// var
//  apellido = document.getElementById('apellido').value;

// var
//  sexo = document.getElementById('sexo').value;

// var
//  textarea = document.getElementById('texto');


// if
// (nombre == ''|| apellido == '' || sexo == ''){

// alert
// (
// 'todos los campos son obligatorios'
// );
// }
// else
// {textarea.innerHTML = nombre+','+apellido+','+sexo;}





// }