const square = document.getElementById('square');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const btnInCircle = document.getElementById('e_btn');
const range = document.getElementById('range');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');

const logger = function() {    
    square.style.backgroundColor = text.value;    
};

const logger2 = function(event) {
    console.dir(event.type);
    span.textContent = event.target.value + '%';
    circle.style.width = span.textContent;
    circle.style.height = span.textContent;
};

btn.addEventListener('click', logger);

btnInCircle.style = 'display: none;';

range.addEventListener('input', logger2);
range.addEventListener('change', logger2);







