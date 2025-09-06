function redirigir(url) {
    window.open(url, '_blank');
}

// Función para actualizar y guardar el estado de pago
function actualizarEstado(servicio, estado) {
    // Guardar en localStorage
    localStorage.setItem('estado_' + servicio, estado);
    
    // Opcional: Mostrar un mensaje de confirmación
    console.log(servicio + ' marcado como ' + estado);
}

// Función para cargar los estados guardados al cargar la página
function cargarEstados() {
    const servicios = ['claro', 'chilquinta', 'esval', 'agua', 'mundo', 'entel', 'movistar'];
    
    servicios.forEach(servicio => {
        const estadoGuardado = localStorage.getItem('estado_' + servicio);
        const selector = document.querySelector(`select[onchange*="${servicio}"]`);
        
        if (estadoGuardado && selector) {
            selector.value = estadoGuardado;
        }
    });
}

// Cargar estados cuando la página se carga
window.onload = function() {
    cargarEstados();
};