import { valida } from "./validaciones.js";

// Selecciona todos los input del formulario

const inputs = document.querySelectorAll("input");

// Escucha el contenido de cada input y ejecuta la validación

inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });
});

