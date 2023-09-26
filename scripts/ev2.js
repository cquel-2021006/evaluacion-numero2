function encontrarPalindromo(index) {
    const indexReverso = index.split('').reverse().join('')
    return indexReverso === index ? 'Es un palindromo' : 'No es un palindromo' 
}

document.getElementById('mostrarResultado2').addEventListener('click', function () {
   const cadena = document.getElementById('cadena').value;
   const resultado = encontrarPalindromo(cadena);
   document.getElementById('resultado2').textContent = resultado 
})