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
    $('#ir-arriba').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    // Envío del formulario de contacto con mensaje de confirmación
    $('#formulario-contacto').on('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario automáticamente

        // Simulación de éxito sin servidor
        alert('¡Formulario enviado correctamente!');

        // Restablece el formulario
        $(this)[0].reset();
    });
});