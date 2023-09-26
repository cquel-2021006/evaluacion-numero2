const vocales = 'aeiouAEIOU';
const consonantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

function buscador(texto) {
    var i1 = 0;
    var i2 = 0;

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];

        if (vocales.includes(caracter)) {
            i1++;
        } else if (consonantes.includes(caracter)) {
            i2++;
        }
    }

    if (i1 > 0 || i2 > 0) {
        return `Tiene ${i1} vocales y ${i2} consonantes.`;
    } else {
        return 'No hay nada que mostrar.';
    }
}

document.getElementById('mostrarResultado3').addEventListener('click', function() {
    const textoInput = document.getElementById('textoInput').value;
    const resultado = buscador(textoInput);
    document.getElementById('resultado3').textContent = resultado;
});
