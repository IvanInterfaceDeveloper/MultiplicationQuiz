const scoreELEMENT = document.getElementById('score');
const questionELEMENT = document.getElementById('question');
const inputELEMENT = document.getElementById('input');
const submit = document.getElementById('btn_submit');
const formELEMENT = document.getElementById('form');

const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const correctAnswer = num1 * num2;
questionELEMENT.innerText = `¿Cuánto es ${num1} multiplicado por ${num2}?`;

let score = JSON.parse(localStorage.getItem("score"));
scoreELEMENT.innerText = "Score: " + score;
formELEMENT.addEventListener("submit", ()=>{
    
    const userAnswer = +inputELEMENT.value; // el signo de suma en el valor de la variable, transforma el string del input a type number
    console.log(typeof userAnswer); 

    if (correctAnswer == userAnswer) {
        score++;
        console.log("el valor de score es: ", score);
        updateLocalStorage();
    }
    else { 
        scoreELEMENT.innerText = scoreELEMENT - 50;
        score--;
        console.log("el valor de score es: ", score);
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}









