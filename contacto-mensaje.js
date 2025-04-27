// Este script debe cargarse después del HTML (al final del body o con defer)
document.addEventListener('DOMContentLoaded', function () {
    // Busca el parámetro 'contacto' en la URL
    const params = new URLSearchParams(window.location.search);
    const estado = params.get('contacto');
    if (!estado) return;
  
    // Crea el mensaje según el valor
    let mensajeDiv = document.createElement('div');
    mensajeDiv.classList.add('p-2', 'rounded', 'mb-2', 'text-center', 'font-semibold');
    if (estado === 'ok') {
      mensajeDiv.textContent = '¡Mensaje enviado correctamente!';
      mensajeDiv.classList.add('bg-green-100', 'text-green-700');
    } else if (estado === 'error') {
      mensajeDiv.textContent = 'Hubo un error al enviar el mensaje. Intenta de nuevo.';
      mensajeDiv.classList.add('bg-red-100', 'text-red-700');
    } else {
      return; // No muestra nada si el valor es inesperado
    }
  
    // Inserta el mensaje después del h2 de la sección de contacto
    const seccion = document.getElementById('contactame');
    const h2 = seccion.querySelector('h2');
    if (h2) {
      h2.insertAdjacentElement('afterend', mensajeDiv);
    }
  });