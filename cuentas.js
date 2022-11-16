
//LISTA DESPLEGABLE DE CUENTAS

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


//LISTA DE DONDE SE ACREDITARA EL PLAZO FIJO
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


//RECUPERO EL MONTO DE LOCALSTORAGE
let importes = document.getElementById("importe")
importes.value = JSON.parse(localStorage.getItem('ingresoMonto'))


let botonContinuar = document.getElementById('botonCalcular')

botonContinuar.addEventListener('click', () =>{
    Swal.fire({
        title: 'Su plazo fijo ha sido constituido',
        
        icon: 'success',
        confirmButtonText: 'OK'
      })
})




