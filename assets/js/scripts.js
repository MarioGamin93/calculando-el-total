//* Variables
let body = document.querySelector('body');
let img = document.querySelector('img');

let form = document.getElementById('form');
let text = document.getElementById('text');
let number = document.getElementById('number');
const precio = 80000;

let cantidad = document.getElementById('cantidad');
let total = document.getElementById('total');


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


