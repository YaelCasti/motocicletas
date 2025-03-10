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
    
    // Validar formulario de contacto
    $('#formulario-contacto').on('submit', function(event) {
        // Prevenir el envío del formulario por defecto
        event.preventDefault();

        // Obtener los valores de los campos
        const nombre = $('#nombre').val();
        const email = $('#email').val();
        const mensaje = $('#mensaje').val();

        // Verificar si los campos están vacíos
        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor, completa todos los campos antes de enviar.');
        } else if (!validarEmail(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
        } else {
            alert('Formulario enviado con éxito.');
         }
    });

    // Función para validar el formato del email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
