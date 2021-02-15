
var quizQuestions = [
    {
    Question: "Q1",
    Answers: [
        "A: Who",
        "B: What",
        "C: Where",
        "D: Why"
    ],
    correctAnswer: "C: Where"
},

{
    Question: "Q2",
    Answers: [
        "A: Who",
        "B: What",
        "C: Where",
        "D: Why"
    ],
    correctAnswer: "D: Why"
},

{
    Question: "Q3",
    Answers: [
        "A: Who",
        "B: What",
        "C: Where",
        "D: Why"
    ],
    correctAnswer: "A: Who"
},

{
    Question: "Q4",
    Answers: [
        "A: Who",
        "B: What",
        "C: Where",
        "D: Why"
    ],
    correctAnswer: "B: What"
}
];

// Set up variables for DOM elements and timer
let questionIndex = 0;
let timeRemaining = 120;
let timerId;

let quizElem = document.getElementById("quiz");
let timerElem = document.getElementById("timer");
let answersElem = document.getElementById("answers");
let questionElem = document.getElementById("question");
let initialSubmitBtn = document.getElementById("initial-submit");
let starterBtn = document.getElementById("starterButton");
let initialsElem = document.getElementById("initials");

function startquiz () {
    // hide quiz start screen
    let landingPageElem = document.getElementById("landingPage");
    landingPageElem.setAttribute("class", "hide");
}
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function generateQuestions () {        

    }
    function generateResults (questions, quizContainer, resultsContainer) {

    }
    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

    

    // function showQuestions

}
starterBtn.onclick=startquiz;