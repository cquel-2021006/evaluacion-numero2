function validarContrasena(contrasena) {
    var mayusculas = false;
    var minusculas = false;
    var numero = false;

    for (let i = 0; i < contrasena.length; i++) {
        const caracter = contrasena[i];
        
        if (caracter >= 'a' && caracter <= 'z') {
            minusculas = true;
        } else if(caracter >= 'A' && caracter <= 'Z') {
            mayusculas = true;
        } else if(!isNaN(caracter)) {
            numero = true;
        }
    }

    if (minusculas && mayusculas && numero && contrasena.length >= 8) {
        return 'Contraseña válida';
    } else {
        return 'Contraseña inválida';
    }
}

document.getElementById('mostrarResultado4').addEventListener('click', function() {
    const contrasenaInput = document.getElementById('contrasenaInput').value;
    const resultado = validarContrasena(contrasenaInput);
    document.getElementById('resultado4').textContent = resultado;
});
