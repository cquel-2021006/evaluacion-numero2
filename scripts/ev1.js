function message1() {
    return 'Python';
}

function message2() {
    return 'JavaScript';
}

function message3() {
    return 'Java';
}

function message4() {
    return 'C++';
}

function message5() {
    return 'C#';
}

var mensajes = [message1, message2, message3, message4, message5];

function mensajeAleatorio() {
    const i = Math.floor(Math.random() * mensajes.length);    
    return mensajes[i]();
}

document.getElementById('mostrarResultado').addEventListener('click', function() {
    const resultado = mensajeAleatorio();
    document.getElementById('resultado1').textContent = resultado;
});
