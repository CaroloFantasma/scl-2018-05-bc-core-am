/* Acá va tu código */

const chosenOffset = document.getElementById ('codificar').addEventListener('click',() => {
let numOffset = document.getElementById('offsetChoice').value;
let firsText = document.getElementById('textIn').value;
let result= window.cipher.encode(firsText, numOffset);
document.getElementById('textOut').innerHTML = result;
})

const chosenOffset2 = document.getElementById ('codificar').addEventListener('click',() => {
let firsText = document.getElementById('textIn').value;
let numOffset2 = document.getElementById('offsetChoice').value;
let result= window.cipher.decode(firsText, numOffset);
document.getElementById('textOut').innerHTML = result;
})


    