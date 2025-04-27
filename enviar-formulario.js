document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contacto');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Opcional: deshabilita el botón para evitar envíos múltiples
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    // Cambia estos valores por los de tu cuenta de EmailJS
    const SERVICE_ID = 'service_i5dm58e';
    const TEMPLATE_ID = 'template_lwuvxbq';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
      .then(function () {
        // Redirige con mensaje de éxito
        window.location.href = window.location.pathname + '?contacto=ok#contactame';
      }, function (error) {
        // Redirige con mensaje de error
        window.location.href = window.location.pathname + '?contacto=error#contactame';
      })
      .finally(() => {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
});