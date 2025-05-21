function evaluar() {
    const respuestasCorrectas = {
        q1: "Sí",
        q2: "No",
        q3: "Sí"
    };

    let puntajes = [];
    let aciertos = 0;

    Object.keys(respuestasCorrectas).forEach((pregunta) => {
        const seleccion = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (!seleccion) {
            alert(`Selecciona una opción en la pregunta ${pregunta}`);
            return;
        }
        if (seleccion.value === respuestasCorrectas[pregunta]) {
            aciertos++;
            puntajes.push(10);
        } else {
            puntajes.push(0);
        }
    });

    document.getElementById("resultado").innerText = `Calificación: ${aciertos} respuestas correctas`;

    generarGrafico(puntajes);
}

function generarGrafico(puntajes) {
    const ctx = document.getElementById("grafico").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
            datasets: [{
                label: "Puntos obtenidos",
                data: puntajes,
                backgroundColor: ["red", "blue", "green"]
            }]
        }
    });
}

function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Resultados del Diagnóstico de Física", 20, 20);
    doc.text("---------------------------------------------------", 20, 30);
    doc.text(document.getElementById("resultado").innerText, 20, 40);
    doc.save("diagnostico_fisica.pdf");
}
