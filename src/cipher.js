window.cipher = {
  encode: (offset, str) => {
    let charcd = 
    let strEmpty = '';

    for (let i = 0; i <str.lenght; i++){
    
    let positionStr = (str.charCodeAt(i) - 65 + offset) % 26 + 65;
    strEmpty += String.fromCharCode (positionStr[i]);
    }
  return strEmpty;
  },
  

  decode: () => {
    /* Acá va tu código */
  }
}