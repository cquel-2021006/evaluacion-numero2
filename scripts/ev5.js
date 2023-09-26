function cantidadDigitos(numero) {
    const numeroTexto = numero.toString();
    const cantidad = numeroTexto.length;
    return cantidad;
}

document.getElementById('mostrarResultado5').addEventListener('click', function() {
    const numeroInput = document.getElementById('numeroInput').value;
    const cantidad = cantidadDigitos(numeroInput);
    document.getElementById('resultado5').textContent = `El número ${numeroInput} tiene ${cantidad} dígitos`;
});
