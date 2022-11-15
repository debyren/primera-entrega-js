

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
   const meses = tiempo(tiempo.value)
   hastaEl.innerHTML = meses
  
   localStorage.setItem("interesGanado", interes)
    localStorage.setItem("tiempoInvertido", meses )
    console.log(interes)
    console.log(meses)
    
 })
 


  //FUNCION PARA CALCULAR 30 DIAS A PARTIR DE LA FECHA ACTUAL
  function tiempo(){	
   
    const diasDevolucion = 30;
    let fechaDevolucion = new Date();
   
    fechaDevolucion.setDate(fechaDevolucion.getDate() + diasDevolucion);
    let diaDevolucion = fechaDevolucion.getDate();
    let mesDevolucion = fechaDevolucion.getMonth() + 1;
    let anioDevolucion = fechaDevolucion.getFullYear();
    let fechaFinal = diaDevolucion + "/" + mesDevolucion + "/" + anioDevolucion
    return fechaFinal
  }


//FUNCION PARA CALCULAR INTERES A 30 DIAS
    function plazoFijo(monto, dias30, intereses){
      while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
    dias30 = 1
    let resultadoFinal = 0
    resultadoFinal = monto * (Math.pow(1+6.25/100, dias30)*6.25/100)/(Math.pow(1+6.25/100, dias30)-1);
   
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
    const meses = tiempo2()
    hastaEl.innerHTML = meses
    
    localStorage.setItem("interesGanado", interes)
    localStorage.setItem("tiempoInvertido", meses )
    console.log(interes)
    console.log(meses)
})

//FUNCION PARA CALCULAR 60 DIAS A PARTIR DE LA FECHA ACTUAL
    function tiempo2(){	
   
    const diasDevolucion = 60;
    let fechaDevolucion = new Date();
    fechaDevolucion.setDate(fechaDevolucion.getDate() + diasDevolucion);
    let diaDevolucion = fechaDevolucion.getDate();
    let mesDevolucion = fechaDevolucion.getMonth() + 1;
    let anioDevolucion = fechaDevolucion.getFullYear();
    let fechaFinal = diaDevolucion + "/" + mesDevolucion + "/" + anioDevolucion
  
    return fechaFinal
}

 //FUNCION PARA CALCULAR INTERES A 60 DIAS
  function plazoFijo2(monto, dias60, intereses,){
    while(resultado.firstChild){
      resultado.removeChild(resultado.firstChild);
  }
        dias60 = 1
        let resultadoFinal = 0
        resultadoFinal = monto * (Math.pow(1+12.5/100, dias60)*12.5/100)/(Math.pow(1+12.5/100, dias60)-1);
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
   const meses = tiempo3()
   hastaEl.innerHTML = meses 
   localStorage.setItem("interesGanado", interes)
    localStorage.setItem("tiempoInvertido", meses )
    console.log(interes)
    console.log(meses)
  })

  //FUNCION PARA CALCULAR 90 DIAS A PARTIR DE LA FECHA ACTUAL
  function tiempo3(){	
  const diasDevolucion = 90;
  let fechaDevolucion = new Date();
   
  fechaDevolucion.setDate(fechaDevolucion.getDate() + diasDevolucion);
  let diaDevolucion = fechaDevolucion.getDate();
  let mesDevolucion = fechaDevolucion.getMonth() + 1;
  let anioDevolucion = fechaDevolucion.getFullYear();
  let fechaFinal = diaDevolucion + "/" + mesDevolucion + "/" + anioDevolucion
    
  return fechaFinal
}

 //FUNCION PARA CALCULAR INTERES A 90 DIAS
function plazoFijo3(monto, dias90, intereses){
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
}
    dias90 = 1
   
    let resultadoFinal = 0
    resultadoFinal = monto * (Math.pow(1+18.75/100, dias90)*18.75/100)/(Math.pow(1+18.75/100, dias90)-1);
    resultado.append( "$" + resultadoFinal)
    localStorage.setItem("ingresoMonto", monto)
    console.log(monto)
    intereses = resultadoFinal - monto
    return intereses
    }


