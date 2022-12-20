var timer = document.querySelector('#time');
var content = document.querySelector('.content');
var questionText = document.querySelector('.questionText');
var startBtn = document.getElementById("start-Btn");
var nextBtn = document.getElementById('next-btn');
var choiceA = document.getElementsByClassName('choiceA')
var choiceB = document.getElementsByClassName('choiceB');
var choiceC = document.getElementsByClassName('choiceC');
var choiceD = document.getElementsByClassName('choiceD');
var firstQuestion = 
    {
        question:"When creating an array in Javascript, what will the first index have a value of?",
        choice1:"1",
        choice2:"2",
        choice3:"0",
        choice4:"3"
        }

var nextQuestions = [ 
    {
    question: "What method is used to add new entries into the end of an existing array without manually adding it?",
    choice1: "push()",
    choice2: "unshift()",
    choice3: "pop()",
    choice4: "sort()"
    },
    {
    question:"What does the title element represent in html?",
    choice1: "The header of the webpage",
    choice2: "The name of the document on the tab",
    choice3: "Content shown on the webpage",
    choice4: "Listed items on a webpage"
    },
    {
    question: "Which type of sheet would you create to properly style your webpage?",
    choice1: "Javascript",
    choice2: "HTML",
    choice3: "Reset",
    choice4: "Stylesheet"
    }
]



function startGame() {
    startBtn.classList.add('hide');
    content.classList.add('hide');
    nextBtn.classList.add('show');
    questionText.textContent = firstQuestion.question;
    choiceA.textContent = firstQuestion.choice1;
}

function nextQuestion() {
}


function selectAnswer() {

}


startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextQuestion);
