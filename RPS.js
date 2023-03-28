//inputs has the list of elements with class="bttn"
const inputs  = document.querySelectorAll('.bttn');

//Getting input names   --- i.e [rock, paper, scissors]
let inputNames = [];
for (const inp of inputs) {
    inputNames.push(inp.id);
}

let Score = document.getElementById('score');
let currScore = Score.innerText;
scoreNumber = Number(currScore.slice(7));


//the message to be displayed
let msg = document.getElementById('sentence');
console.log(msg);


//Randomise function
Rand = () => {return inputNames[Math.floor(Math.random() * inputNames.length)]}; 
 

//working function
calc = () => {
    inputs.forEach(input => {
        input.onclick = () =>{
            let compInput = Rand();
            console.log(compInput);
            if ((input.id == "rock" && compInput == "scissors") || (input.id == "scissors" && compInput == "paper") || (input.id == "paper" && compInput == "rock")){
                scoreNumber += 1;
                console.log(scoreNumber);
                msg.innerHTML = `<h2>You Won !!!</h2><h4>| You:  ${input.id} |   Comp:  ${compInput} |</h4>`;
                Score.innerHTML = `<h2>Score: ${scoreNumber}</h2>`;
            }
            else if(input.id == compInput){
                msg.innerHTML = `<h2>Its a tie!</h2><h4>| You:  ${input.id}   | Comp:  ${compInput} |</h4>`;
            }
            else {
                msg.innerHTML = `<h2>You lost :(</h2><h4>| You: ${input.id}  |  Comp:  ${compInput} |</h4>`;
            }
        } 
    });
}

calc();


//Defining reset
let Reset = document.getElementById('reset');
Reset.onclick = () => {
    scoreNumber = 0;
    Score.innerHTML = `<h2>Score: ${scoreNumber}</h2>`;
    msg.innerHTML = "";
}