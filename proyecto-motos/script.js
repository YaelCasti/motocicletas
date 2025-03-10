$(document).ready(function(){
    // Mostrar fecha y hora actual
    function actualizarFechaHora() {
        const ahora = new Date();
        const fechaHora = ahora.toLocaleString();
        document.getElementById('fecha-hora').textContent = fechaHora;
    }
    setInterval(actualizarFechaHora, 1000);
    actualizarFechaHora();

    // Inicializar bxSlider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 900,
        auto: true, 
        pause: 3000 
    });

    // Botón para ir arriba
    $('#ir-arriba').click(function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    // Envío del formulario de contacto con mensaje de confirmación
    $('#formulario-contacto').submit(function(event) {
        event.preventDefault(); // Evita el envío del formulario de forma predeterminada

        // Mostrar mensaje de éxito
        alert('¡Formulario enviado correctamente!');

        // Restablecer el formulario
        $('#formulario-contacto')[0].reset();
    });
});