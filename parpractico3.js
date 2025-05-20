document.addEventListener('DOMContentLoaded', () => {
    const subtotalInput = document.getElementById('subtotal');
    const porcentajeInput = document.getElementById('porcentaje');
    const calcularBtn = document.getElementById('calcular');
    const resultadoDiv = document.getElementById('resultado');
    const resultadoPropina = document.getElementById('resultado-propina');
    const resultadoTotal = document.getElementById('resultado-total');
    const formulario = document.getElementById('calculadora-propina');

    calcularBtn.addEventListener('click', (event) => {
        // Evitamos el comportamiento predeterminado del botón dentro de un formulario
        event.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const subtotal = parseFloat(subtotalInput.value);
        const porcentajePropina = parseFloat(porcentajeInput.value);

        if (isNaN(subtotal) || isNaN(porcentajePropina)) {
            alert('Por favor, ingrese valores numéricos válidos.');
            return;
        }

        if (subtotal < 0 || porcentajePropina < 0 || porcentajePropina > 100) {
            alert('Por favor, ingrese valores positivos para el total y un porcentaje de propina entre 0 y 100.');
            return;
        }

        const propina = (subtotal * porcentajePropina) / 100;
        const totalPagar = subtotal + propina;

        resultadoPropina.textContent = `$${propina.toFixed(2)}`;
        resultadoTotal.textContent = `$${totalPagar.toFixed(2)}`;
        resultadoDiv.classList.remove('hidden');
    });
});