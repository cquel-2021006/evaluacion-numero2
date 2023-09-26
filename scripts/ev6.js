function calcularDiferenciaEnDias(fecha1, fecha2) {
    const diferencia = fecha2 - fecha1;

    const milisegundosEnUnDia = 24 * 60 * 60 * 1000;
    const diferenciaDias = Math.floor(diferencia / milisegundosEnUnDia);

    return diferenciaDias;
}

document.getElementById('mostrarResultado6').addEventListener('click', function() {
    const fecha1Input = new Date(document.getElementById('fecha1Input').value);
    const fecha2Input = new Date(document.getElementById('fecha2Input').value);

    const resultado = calcularDiferenciaEnDias(fecha1Input, fecha2Input);

    if (!isNaN(resultado)) {
        document.getElementById('resultado6').textContent = `La diferencia entre las dos fechas es ${resultado} días`;
    } else {
        document.getElementById('resultado6').textContent = 'Por favor, ingresa fechas válidas.';
    }
});
