window.cipher = {

//Arrow function para cifrar el mensaje
encode: (firsText, numOffset) => {

  //Variable 'vacía' donde se almacenará el mensaje a modificar
  let strEmpty = '';
     
  for (let i = 0; i < firsText.length; i++){

  //Obteniendo el valor ASCII por medio de charCodeAt
  let positionStr = firsText.charCodeAt(i);

    if ((positionStr >= 65) && (positionStr <= 90)){ 
      let encript = (positionStr - 65 + parseInt(numOffset)) % 26 + 65;

      //Transformando el código ASCII a letra por medio de String.charCodeAt
      strEmpty += String.fromCharCode (encript);
    } //Valores ASCII Mayusculas
   
    if ((positionStr >= 97) && (positionStr <= 122)){
      let encript = (positionStr - 97 + parseInt(numOffset)) % 26 + 97;
      strEmpty += String.fromCharCode (encript);
    } //Valores ASCII Minusculas
  
  }
  //resultado de texto cifrados
return strEmpty;
}, 

//Arrow function para descifrar el mensaje
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
