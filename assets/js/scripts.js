//* Variables
const body = document.querySelector('body');
const img = document.querySelector('img');

const form = document.getElementById('form');
const text = document.getElementById('text');
const number = document.getElementById('number');
let precio = 80000;

const cantidad = document.getElementById('cantidad');
const total = document.getElementById('total');


//* Evento
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let resultado = (number.value*precio).toLocaleString('es-CL');
    total.innerHTML = (`Total: $${resultado}`);
    cantidad.innerHTML = (`Cantidad: ${number.value}`);
    color.style.backgroundColor = (text.value);
})

//* Style 
body.style.backgroundColor = ('lightgreen');
body.style.color = ('#333');
img.style.width = ('100%');


