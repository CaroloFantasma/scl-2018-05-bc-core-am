window.cipher = {

encode: (firsText, numOffset) => {
  let strEmpty = '';
     
  for (let i = 0; i < firsText.length; i++){
  let positionStr = firsText.charCodeAt(i); //Obtiene el valor ASCII
    if ((positionStr >= 65) && (positionStr <= 90)){ 
      let encript = (positionStr - 65 + parseInt(numOffset)) % 26 + 65;
      strEmpty += String.fromCharCode (encript);
    } //Valores ASCII Mayusculas
   
    if ((positionStr >= 97) && (positionStr <= 122)){
      let encript = (positionStr - 97 + parseInt(numOffset)) % 26 + 97;
      strEmpty += String.fromCharCode (encript);
    } //Valores ASCII Minusculas
  
  }
return strEmpty;
}, 

decode: (firsText, numOffset) => {
  let strEmpty = '';

  for (let i = 0; i < firsText.length; i++){
    let positionStr = firsText.charCodeAt(i);
    if ((positionStr >= 65) && (positionStr <= 90)){
    let decrypt = (positionStr - 90 - numOffset) % 26 + 90;
    strEmpty += String.fromCharCode (decrypt);
  }//conversión ASCII letras mayúsculas
    
    if ((positionStr >= 97) && (positionStr <= 122)){
    let decrypt = (positionStr - 122 - numOffset) % 26 + 122;
      strEmpty += String.fromCharCode (decrypt);
  }//conversión ASCII letras minúsculas
  }
  return strEmpty;
  },
} 
