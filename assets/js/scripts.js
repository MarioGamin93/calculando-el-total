//* Variables
let body = document.querySelector('body');
let img = document.querySelector('img');

let form = document.getElementById('form');
let text = document.getElementById('text');
let number = document.getElementById('number');
const num2 = 80.000;



let cantidad = document.getElementById('cantidad');
let total = document.getElementById('total');


//* Evento
form.addEventListener('submit', (e) => {
    e.preventDefault()
    total.innerHTML = 'Total: $'+ parseFloat(number.value*num2).toFixed(3);
    cantidad.innerHTML = 'Cantidad: '+ number.value;
    color.style.backgroundColor = text.value;
})

//* Style 
body.style.backgroundColor = 'lightgreen';
body.style.color = '#333';
img.style.width = '100%';


