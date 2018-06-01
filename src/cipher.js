window.cipher = {

  //Arrow function para cifrar el mensaje
  encode: (firsText, numOffset) =>
  {

    //Variable 'vacía' donde se almacenará el mensaje a modificar
    let strEmpty = '';

    for (let i = 0; i < firsText.length; i++)
    {

      //Obteniendo el valor ASCII por medio de charCodeAt
      let positionStr = firsText.charCodeAt(i);

      //Condición para que se muestren los espacios en el texto
      if (positionStr === 32)
      {
        strEmpty += ' ';
      }

      if ((positionStr >= 65) && (positionStr <= 90))
      {

      //Fórmula para ASCII mayúsculas y transformando el código ASCII a letra por medio de String.charCodeAt
      let encript = (positionStr - 65 + parseInt(numOffset)) % 26 + 65;

        strEmpty += String.fromCharCode(encript);
      }

      //Fórmula para ASCII minúsculas y transformando el código ASCII a letra por medio de String.charCodeAt
      if ((positionStr >= 97) && (positionStr <= 122))
      {

        let encript = (positionStr - 97 + parseInt(numOffset)) % 26 + 97;
        strEmpty += String.fromCharCode(encript);
      } 

    }
    //resultado de texto cifrado
    return strEmpty;
  },

  //Arrow function para descifrar el mensaje, se sigue la misma estructura anterior
  decode: (firsText, numOffset) =>
  {
    let strEmpty = '';

    for (let i = 0; i < firsText.length; i++)
    {
      let positionStr = firsText.charCodeAt(i);

      if (positionStr === 32)
      {
        strEmpty += ' ';
      }

      if ((positionStr >= 65) && (positionStr <= 90))
      {
        let decrypt = (positionStr - 90 - parseInt(numOffset)) % 26 + 90;
        strEmpty += String.fromCharCode(decrypt);
      } 

      if ((positionStr >= 97) && (positionStr <= 122))
      {
        let decrypt = (positionStr - 122 - parseInt(numOffset)) % 26 + 122;
        strEmpty += String.fromCharCode(decrypt);
      } 
    }
    return strEmpty;
  },
}