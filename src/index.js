//Mediante el uso de DOM, 'almacenamos' la información de HTML

const chosenOffset = document.getElementById('codificar').addEventListener('click', () =>{
  let numOffset = document.getElementById('offsetChoice').value;
  let firsText = document.getElementById('textIn').value;
  let result = window.cipher.encode(firsText, numOffset);
  document.getElementById('textOut').innerHTML = result;
})

const chosenOffset2 = document.getElementById('decodificar').addEventListener('click', () =>{
  let firsText = document.getElementById('textIn').value;
  let numOffset = document.getElementById('offsetChoice').value;
  let result = window.cipher.decode(firsText, numOffset);
  document.getElementById('textOut').innerHTML = result;
})

    