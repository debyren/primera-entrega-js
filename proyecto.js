

//CAPTURO LOS ID'S DEL HTML

  let monto = document.getElementById('ingresoMonto')
  let dias30 = document.getElementById('30dias') 
  let dias60 = document.getElementById('60dias')
  let dias90 = document.getElementById('90dias')
  
  let intereses = document.getElementById('interesGanado')
  let hastaEl = document.getElementById('hasta')



  //EVENTO CLICK 30 DIAS
 
 dias30.addEventListener('click', () => {
    const interes = plazoFijo(monto.value, dias30.value, intereses.value);
    intereses.innerHTML = "$" + interes 
    hastaEl.innerHTML = (sumar.toLocaleString(DateTime.DATE_SHORT));
  
  localStorage.setItem('30dias', 30)
   localStorage.setItem("interesGanado", interes)
    localStorage.setItem("tiempoInvertido", 30 )
    console.log(interes)
    console.log(30)
 })
 


  //UTILIZO LIBRERIA LUXON PARA  CALCULAR 30 DIAS A PARTIR DE LA FECHA ACTUAL
  const DateTime = luxon.DateTime
  const hoy = DateTime.now()
  const sumar = hoy.plus({
   
        month: 1,
      
     });

//FUNCION PARA CALCULAR INTERES A 30 DIAS
    function plazoFijo(monto, dias30, intereses){
      while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
   
    dias30 = 1
    let resultadoFinal = 0
    resultadoFinal = monto * (Math.pow(1+6.25/100, dias30)*6.25/100)/(Math.pow(1+6.25/100, dias30)-1);

    (monto === "" )?  document.getElementById('condicionMonto').innerHTML = "¡Debe ingresar un monto!" : document.getElementById('condicionMonto').innerHTML = ""  ;
   
    resultado.append("$" + resultadoFinal )

    localStorage.setItem("ingresoMonto", monto)
    console.log(monto)
    intereses = resultadoFinal - monto
    return intereses 
   
    
}


//EVENTO CLICK 60 DIAS
    dias60.addEventListener('click', () => {
    const interes = plazoFijo2(monto.value, dias60.value, intereses.value);
    intereses.innerHTML = "$" + interes 
    hastaEl.innerHTML = (sumar60.toLocaleString(DateTime.DATE_SHORT));
    localStorage.setItem('60dias', 60)
    localStorage.setItem("interesGanado", interes)
    localStorage.setItem("tiempoInvertido", 60 )
    console.log(interes)
    console.log(60)
})

//UTILIZO LIBRERIA LUXON PARA CALCULAR 60 DIAS A PARTIR DE LA FECHA ACTUAL

const hoy60 = DateTime.now()
const sumar60 = hoy.plus({
 
  month: 2,
    
   });

 //FUNCION PARA CALCULAR INTERES A 60 DIAS
  function plazoFijo2(monto, dias60, intereses,){
    while(resultado.firstChild){
      resultado.removeChild(resultado.firstChild);
  }
        dias60 = 1
        let resultadoFinal = 0
        resultadoFinal = monto * (Math.pow(1+12.5/100, dias60)*12.5/100)/(Math.pow(1+12.5/100, dias60)-1);
        (monto === "" )?  document.getElementById('condicionMonto').innerHTML = "¡Debe ingresar un monto!" : document.getElementById('condicionMonto').innerHTML = ""  ;
        resultado.append("$" + resultadoFinal)
        localStorage.setItem("ingresoMonto", monto)
    console.log(monto)
        intereses = resultadoFinal - monto
    return intereses

  }

  //EVENTO CLICK 90 DIAS
  dias90.addEventListener('click', () => {
   const interes = plazoFijo3(monto.value, dias90.value, intereses.value);
   intereses.innerHTML = "$" + interes 
   
   hastaEl.innerHTML = (sumar90.toLocaleString(DateTime.DATE_SHORT));
   localStorage.setItem("interesGanado", interes)
    localStorage.setItem("tiempoInvertido", 90 )
    console.log(interes)
    console.log(90)
  })

  //UTILIZO LIBRERIA LUXON PARA  CALCULAR 90 DIAS A PARTIR DE LA FECHA ACTUAL
  const hoy90 = DateTime.now()
  const sumar90 = hoy.plus({
   
    month: 3,
      
     });

 //FUNCION PARA CALCULAR INTERES A 90 DIAS
function plazoFijo3(monto, dias90, intereses){
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
}
    dias90 = 1
   
    let resultadoFinal = 0
    resultadoFinal = monto * (Math.pow(1+18.75/100, dias90)*18.75/100)/(Math.pow(1+18.75/100, dias90)-1);
    (monto === "" )?  document.getElementById('condicionMonto') : document.getElementById('condicionMonto').innerHTML = ""  ;
    resultado.append( "$" + resultadoFinal)
    localStorage.setItem("ingresoMonto", monto)
    console.log(monto)
    intereses = resultadoFinal - monto
    return intereses
    }


