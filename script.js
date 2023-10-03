var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");

saveButton.addEventListener("click", function(event) {
event.preventDefault();
var studentGrade = {
    grade: grade.value,
    comment: comment.value.trim()
  };
  
  localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
  renderMessage();
  
  });

  function renderMessage() {
    var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
    if (lastGrade !== null) {
      document.querySelector(".message").textContent = " You " + comment.value.trim() + 
      " have received a: " + grade.value
    }
  }


var secondsLeft = 60;

function setTime() {

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Time's Up!";

}

setTime();

const Questions = [{
    q: "To store groups of data in a single variable, we use...",
    a: [{ text: "Collections", isCorrect: false },
    { text: "Systems", isCorrect: false },
    { text: "Arrays", isCorrect: true },
    { text: "Groups", isCorrect: false }
    ]
},
{
    q: "To access a value stored in a variable, use the variable's...",
    a: [{ text: "Number", isCorrect: false },
    { text: "Name", isCorrect: true },
    { text: "Function", isCorrect: false },
    { text: "Replica", isCorrect: false }
    ]
},
{
    q: "What are reusable blocks of code that perform a specific task?",
    a: [{ text: "Functions", isCorrect: true },
    { text: "Arrays", isCorrect: false },
    { text: "CSS", isCorrect: false },
    { text: "Links", isCorrect: false }
    ]
},
{
    q: "Use .querySelectorAll() to access...",
    a: [{ text: "Functions", isCorrect: false },
    { text: "Arrays", isCorrect: false },
    { text: "Special characters", isCorrect: false },
    { text: "Multiple elements", isCorrect: true }
    ]  
}

]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}

