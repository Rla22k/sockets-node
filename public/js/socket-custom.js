var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Conexion perdida');
});

// Enviar informacion (emit: envia, on: escucha)
//socket.emit('enviarMensaje', '123');
socket.emit('enviarMensaje', {
    usuario: 'Rafa Lara',
    mensaje: 'Hola Mundo'
}, function (respuesta) {
    //console.log('Se dispara el callback');
    console.log(respuesta);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});