//SCROLL

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("header", window.scrollY > 0 );
});


//Menu-Header en modo responsivo

const propertyLink = document.querySelectorAll('.menu__link');
const checkbox = document.getElementById('menu__header');

propertyLink.forEach(function(link) {
    link.addEventListener('click', function() {
    checkbox.checked = false;
    });
});



// FORM

var form = document.getElementById("form");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var asunto = document.getElementById("asunto");
var mensaje = document.getElementById("mensaje");


// Código para el input "nombre" de la section "contacto" / Error

var nombreResultado = document.getElementById("nombre-counter");
var nombreLimite = 40;
nombreResultado.textContent = 0 + "/" + nombreLimite;

nombre.addEventListener("input", function() {
    var nombreContacto = nombre.value.length;
    var nombreError = document.querySelector('.contacto__error--nombre');
    nombreResultado.textContent = nombreContacto + "/" + nombreLimite;

    if(nombreContacto > nombreLimite) {
        nombreError.innerText = 'El nombre completo debe tener máximo 40 caracteres';
        nombre.style.borderColor = "#FF2851";
        nombreResultado.style.color = "#FF2851";
    } 
    else {
        nombreError.innerText = '';
        nombre.style.borderColor = "#FFFFFF";
        nombreResultado.style.color = "var(--gris)";
    }
});

// Código para el input "asunto" de la section "contacto" / Error
var asuntoResultado = document.getElementById("asunto-counter");
var asuntoLimite = 40;
asuntoResultado.textContent = 0 + "/" + asuntoLimite;

asunto.addEventListener("input", function() {
    var asuntoContacto = asunto.value.length;
    var asuntoError = document.querySelector('.contacto__error--asunto');
    asuntoResultado.textContent = asuntoContacto + "/" + asuntoLimite;

    if(asuntoContacto > asuntoLimite) {
        asuntoError.innerText = 'El asunto debe tener un máximo de 40 caracteres';
        asunto.style.borderColor = "#FF2851";
        asuntoResultado.style.color = "#FF2851";
    } 
    else {
        asuntoError.innerText = '';
        asunto.style.borderColor = "#FFFFFF";
        asuntoResultado.style.color = "var(--gris)";
    }
});

// Código para el text area "mensaje" de la section "contacto" / Error
var mensajeResultado = document.getElementById("mensaje-counter");
var mensajeLimite = 250;
mensajeResultado.textContent = 0 + "/" + mensajeLimite;

mensaje.addEventListener("input", function() {
    var mensajeContacto = mensaje.value.length;
    var mensajeError = document.querySelector('.contacto__error--mensaje');
    mensajeResultado.textContent = mensajeContacto + "/" + mensajeLimite;

    if(mensajeContacto > mensajeLimite) {
      mensajeError.innerText = 'El mensaje debe tener un máximo de 250 caracteres';
      mensaje.style.borderColor = "#FF2851";
      mensajeResultado.style.color = "#FF2851";
    } 
    else {
      mensajeError.innerText = '';
      mensaje.style.borderColor = "#FFFFFF";
      mensajeResultado.style.color = "var(--gris)";
    }
});

// Evento Submit 

form.addEventListener('submit', e => {
    e.preventDefault();
});

// Código para enviar el formulario con EMAILJS

function enviarCorreo() {
    if (asunto.value != '' &&
        nombre.value != '' &&
        correo.value != '' &&
        mensaje.value != '' &&
        asunto.value.length <= asuntoLimite &&
        nombre.value.length <= nombreLimite &&
        mensaje.value.length <= mensajeLimite){

        var parameter = {
          subject: asunto.value,
          name: nombre.value,
          email: correo.value,
          message: mensaje.value
        };
  
        const serviceID = "service_lk5064b";
        const templateID = "template_d6ybiph";
  
        emailjs
            .send(serviceID, templateID, parameter)
            .then((res) => {
                console.log(res);
                alert("Mensaje enviado con éxito");
                asunto.value = '';
                nombre.value = '';
                correo.value = '';
                mensaje.value = '';
                nombreResultado.textContent = 0 + "/" + nombreLimite;
                asuntoResultado.textContent = 0 + "/" + asuntoLimite;
                mensajeResultado.textContent = 0 + "/" + mensajeLimite;
            })
            .catch((err) => console.log(err));
      }
}