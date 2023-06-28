// script.js
function goBack() {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === 'usuario' && password === 'contrasena') {
            // Usuario y contraseña válidos
            window.location.href = 'diagramacion.html';
        } else {
            // Usuario o contraseña incorrectos
            alert('Usuario o contraseña incorrectos');
        }
    });
});
