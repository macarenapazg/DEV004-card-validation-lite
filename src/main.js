
// algoritmo de Luhn
const algoritmoLuhn=(cardnumber) => {
  let contador = 0; 
  let luhnNumber = cardnumber.length;

  if(luhnNumber==16){
      for(let i=0; i<luhnNumber; i++){
          let arrayAdittion = parseInt(cardnumber[i]);
  
          if((i+2) % 2 == 0)
             if(( arrayAdittion *=2) >9)
                  arrayAdittion -=9;
          contador += arrayAdittion;
      }
      return(contador % 10 ==0);
  }
  else{return(false);

  }
  
} 
// funcion de validación
 const validate = () => {
    let cardnumber = document.getElementById("cardnumber");
    let result = document.getElementById("result");
    let message="";

    if (algoritmoLuhn(cardnumber.value)) {
      message= "La tarjeta de crédito es válida :)";
    }
      // Show success in div#result
    
    else {message="La Tarjeta ingresada no es válida :("; 
  }
      // Show error message in div#result
    result.textContent=message;
  }