
var quizQuestions = [
    {
    Question: "1) This GIT command notes a change to a local repo",
    Answers: [
        "A: mkdir",
        "B: git commit -m",
        "C: git add",
        "D: cd .."
    ],

},

{
    Question: "2) <br> tag is a command for a/an",
    Answers: [
        "A: line break",
        "B: image",
        "C: heading",
        "D: link"
    ],

},

{
    Question: "3) In the array [Winter, Spring, Summer, Fall], value 1 will return",
    Answers: [
        "A: Winter",
        "B: Spring",
        "C: Summer",
        "D: Fall"
    ],
 
},

{
    Question: "4) This element has no closing tag",
    Answers: [
        "A: <img>",
        "B: <h1>",
        "C: <div>",
        "D: <header>"
    ],

},

{
Question: "5) (.timerElem) tell you that timerElem is a/an",
Answers: [
    "A: header",
    "B: image",
    "C: id",
    "D: class"
],

},

{
    Question: "6) Using a/an _____ is like asking the user a yes or no question on a webpage",
    Answers: [
        "A: confirm",
        "B: alert",
        "C: for loop",
        "D: if/else statement"
    ],
 
    },

{
    Question: "7) This is NOT a basic type to represent values",
    Answers: [
        "A: Boolean",
        "B: Number",
        "C: Class",
        "D: String"
    ],

},

{
    Question: "8) We use a/an ____ to access information on the internet",
    Answers: [
        "A: repository",
        "B: browser",
        "C: VS Code",
        "D: MS Paint"
    ],

},

{
    Question: "9) classQuiz is an example of",
    Answers: [
        "A: if/else statement",
        "B: Var (variable) name",
        "C: camelcase",
        "D: Both B and C"
    ],
 
},

{
    Question: "10) We use this to check for bugs in the debugger",
    Answers: [
        "A: .debug",
        "B: <div>",
        "C: alert",
        "D: console.log"
    ],

    },

];

let correctAnswer2 = ["B: git commit -m", "A: line break", "B: Spring", "A: <img>", "D: class", "A: confirm", "C: Class", "B: browser", "A: <img>", "D: console.log"];
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
let scoreElem = document.getElementById("highScore")

function startquiz () {
    // hide quiz start screen
    let landingPageElem = document.getElementById("landingPage");
    landingPageElem.setAttribute("class", "hide");

    // Show questions div
    quizElem.removeAttribute("class");

    // Start quiz timer
    timerId = setInterval(timerTick, 1000);

    // Show starting time
    timerElem.textContent = timeRemaining;

    // Calling Generate question
    generateQuestion();
}

    function generateQuestion () {        
        let newQuestion = quizQuestions[questionIndex];
        questionElem.textContent= newQuestion.Question;
        answersElem.innerHTML = "";

        newQuestion.Answers.forEach(function(ans, i) {
            
            // Create button for each choice
            let ansElem = document.createElement("Button");
            ansElem.setAttribute("class", "ans");
            ansElem.setAttribute("value", ans);
            ansElem.textContent = i + 1 + ". " + ans;

            ansElem.onclick= answerClick;
            answersElem.appendChild(ansElem);
            console.log(ans);
        });
    }
        function answerClick() {
            if (this.value !== quizQuestions[questionIndex].correctAnswer) {
                timeRemaining -= 10;
                if (timerElem < 0) {
                    clearInterval(answerClick);
                    document.getElementById("timer").innerHTML = "EXPIRED";
                }
                timerElem.textContent = timeRemaining;
                // try to display incorrect answer

            }
            else {
                // try to indicate correct answer
                console.log("correctAnswer");
            }
            questionIndex++;
            
        }

    // function generateResults (questions, quizContainer, resultsContainer) {

    // }
    // showQuestions(questions, quizContainer);

    // submitButton.onclick = function(){
	// 	showResults(questions, quizContainer, resultsContainer);
	// }
        // Local Storage
        let playerScore = localStorage.getItem(scoreElem);


    // function showQuestions


function timerTick() {
    timeRemaining--;
    timerElem.textContent = timeRemaining;
 if (timeRemaining >= 0) {
    endQuiz();
    }

}
starterBtn.onclick = startquiz;