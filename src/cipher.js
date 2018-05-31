window.cipher = {

encode: ((str, offset) => {
  let strEmpty = '';
     
  for (let i = 0; i < str.length; i++){
  let positionStr = str.charCodeAt(i); //Obtiene el valor ASCII
    if ((positionStr >= 65) && (positionStr <= 90)){ 
      let encript = (positionStr - 65 + offset) % 26 + 65;
      strEmpty += String.fromCharCode (encript);
      } //Flujo de control de valores ASCII Mayusculas
   
    if ((positionStr >= 97) && (positionStr <= 122)){
          let encript = (positionStr - 97 + offset) % 26 + 97;
          strEmpty += String.fromCharCode (encript);
      } //Flujo de control de valores ASCII Minusculas
  
  }
return strEmpty;
}), 

decode: ((str, offset) => {
  let strEmpty = '';

  for (let i = 0; i < str.length; i++){
    let positionStr = str.charCodeAt(i);
  
    if ((positionStr >= 65) && (positionStr <= 90)){
    let decode = (positionStr - 90 - offset) % 26 + 90;
    strEmpty += String.fromCharCode (decrypt);
  }//conversión ASCII letras mayúsculas
    
    if ((positionStr >= 97) && (positionStr <= 122)){
    let decrypt = (positionStr - 122 - offset) % 26 + 122;
      strEmpty += String.fromCharCode (decrypt);
  }//conversión ASCII letras minúsculas
  }
  return strEmpty;
  }),
} 
