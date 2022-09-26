const entrada = document.querySelector('input').value;
const contenido = document.querySelector('.contenido');
const submit = document.querySelector('button');



submit.addEventListener('submit', addData(entrada));

function addData(input) {
    parrafo = document.createElement('p');
    parrafo.textContent = `
    Hola que tal?
    Ingresaste esta cadena de texto:
    ${input}

    Es correcto?
    `;
    
    setTimeout(()=>{
        contenido.appendChild(parrafo);
    },2000)

}