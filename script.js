const scoreELEMENT = document.getElementById('score');
const questionELEMENT = document.getElementById('question');
const inputELEMENT = document.getElementById('input');
const submit = document.getElementById('btn_submit');

const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const correctAnswer = num1 * num2;
questionELEMENT.innerText = `¿Cuánto es ${num1} multiplicado por ${num2}?`;

const formELEMENT = document.getElementById('form');

formELEMENT.addEventListener("submit", ()=>{
    const userAnswer = +inputELEMENT.value;
    console.log('La respuesta del usuario es: ', userAnswer, typeof userAnswer);
});









