var timer = document.querySelector('#time');
var content = document.querySelector('.content');
var questionText = document.querySelector('.questionText');
var startBtn = document.getElementById("start-Btn");
var nextBtn = document.getElementById('next-btn');
var choiceA = document.querySelector('.choiceA');
var choiceB = document.querySelector('.choiceB');
var choiceC = document.querySelector('.choiceC');
var choiceD = document.querySelector('.choiceD');
var checkedA = document.querySelector('#A');
var checkedB = document.querySelector('#B');
var checkedC = document.querySelector('#C');
var checkedD = document.querySelector('#D');
var highscore = 0
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
    var timerStart = 45;
    var startTimer = setInterval(function() {
        timerStart--;
        timer.textContent = timerStart;
        if(timerStart <= 0)
        clearInterval(startTimer);
    }, 1000);
    questionText.textContent = firstQuestion.question;
    choiceA.textContent = firstQuestion.choice1;
    choiceB.textContent = firstQuestion.choice2;
    choiceC.textContent = firstQuestion.choice3;
    choiceD.textContent = firstQuestion.choice4;
}

function secondQuestion() {
    if ((checkedA.checked) ||
    (checkedB.checked) ||
    (checkedD.checked)) {
        window.alert("wrong!")
        checkedA.checked = false;
        checkedB.checked = false;
        checkedD.checked = false;
questionText.textContent = nextQuestions[0].question;
choiceA.textContent = nextQuestions[0].choice1;
choiceB.textContent = nextQuestions[0].choice2;
choiceC.textContent = nextQuestions[0].choice3;
choiceD.textContent = nextQuestions[0].choice4;

} else if(checkedC.checked) {
    window.alert("correct!")
    checkedC.checked = false;
    highscore++;
questionText.textContent = nextQuestions[0].question;
choiceA.textContent = nextQuestions[0].choice1;
choiceB.textContent = nextQuestions[0].choice2;
choiceC.textContent = nextQuestions[0].choice3;
choiceD.textContent = nextQuestions[0].choice4;
}

if((checkedB.checked) ||
(checkedC.checked) ||
(checkedD.checked)) {
    window.alert("wrong!")
    checkedB.checked = false;
    checkedC.checked = false;
    checkedD.checked = false;
    questionText.textContent = nextQuestions[1].question;
choiceA.textContent = nextQuestions[1].choice1;
choiceB.textContent = nextQuestions[1].choice2;
choiceC.textContent = nextQuestions[1].choice3;
choiceD.textContent = nextQuestions[1].choice4;
} else if(checkedA.checked) {
    window.alert("correct!")
    checkedA.checked = false;
    highscore++;
questionText.textContent = nextQuestions[1].question;
choiceA.textContent = nextQuestions[1].choice1;
choiceB.textContent = nextQuestions[1].choice2;
choiceC.textContent = nextQuestions[1].choice3;
choiceD.textContent = nextQuestions[1].choice4;
}}


startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', secondQuestion);
