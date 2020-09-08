// set questions, correct answer, and answer options
var questions = [
  {
    question: 'On what planet was Anakin Skywalker born?',
    answer: 'Tatooine',
    options: ['Tatooine', 'Dagoba', 'Coruscant', 'Naboo']
  },
  {
    question: 'What is the symbiotic microbe that allows Jedi to feel the Force?',
    answer: 'midiclorians',
    options: ['red blood cells', 'white blood cells', 'midiclorians', 'grey matter']
  },
  {
    question: 'Who is Darth Vader?',
    answer: 'Anakin Skywalker',
    options: ['Luke Skywalker', 'Anakin Skywalker', 'Yoda', 'C3PO']
  }
]

console.log(questions)

// results variable
var results = {
  correct: 0,
  false: 0
}

var countdown;
var timer = 10
// variable for question index
var qIndex = 0

var highScore = document.getElementById('viewHighScores')

console.log(results)

// variable 'questionContainer' to clear the 
var questionContainer = document.getElementById('questionContainer')
// 'hideStart' to remove start button
var startBtn = document.getElementById('startBtn')
// timer selector
var timerEl = document.getElementsByClassName('timer-sam')[0]



// ######################### FUNCTIONS ######################### 

// start the quiz, run question function, timer function
startBtn.addEventListener('click', function (e) {
  // e.preventDefault() -- doesn't exist as not contained in <form></form>
  // removes start button
  startBtn.style.display = "none"
  runTimer()
  nextQuestion()
})


// question function (add correct answer, wrong answer conditional)
function nextQuestion() {
  // set nextQuestion function to the current index 
  var currentQuestion = questions[qIndex];

  // create the template for the questions
  // add break
  var addBreak = document.createElement('br')
  // add text of first question
  var setQuestion = document.createElement('p')
  // add option div
  var addFirstOptions = document.createElement('div')
  // add buttons
  var addFirstButton = document.createElement('button')
  var addSecondButton = document.createElement('button')
  var addThirdButton = document.createElement('button')
  var addFourthButton = document.createElement('button')
  //set the question text
  setQuestion.setAttribute('style', 'font-size: larger')
  setQuestion.innerText = currentQuestion.question
  // set the grid for the option buttons
  addFirstOptions.setAttribute('id', 'answer-buttons')
  addFirstOptions.setAttribute('class', 'btn-grid')

  // set buttons - first button
  addFirstButton.setAttribute('id', 'opt1')
  addFirstButton.setAttribute('class', 'btn answer')
  addFirstButton.innerText = currentQuestion.options[0]
  addFirstButton.addEventListener('click', checkAnswer)
  // addFirstButton.onclick = handleClick
  // set buttons - second button
  addSecondButton.setAttribute('id', 'opt2')
  addSecondButton.setAttribute('class', 'btn answer')
  addSecondButton.innerText = currentQuestion.options[1]
  addSecondButton.addEventListener('click', checkAnswer)
  // addSecondButton.onclick = handleClick
  // set buttons - third button
  addThirdButton.setAttribute('id', 'opt3')
  addThirdButton.setAttribute('class', 'btn answer')
  addThirdButton.innerText = currentQuestion.options[2]
  addThirdButton.addEventListener('click', checkAnswer)
  // addThirdButton.onclick = handleClick
  // set buttons - fourth button
  addFourthButton.setAttribute('id', 'opt4')
  addFourthButton.setAttribute('class', 'btn answer')
  addFourthButton.innerText = currentQuestion.options[3]
  addFourthButton.addEventListener('click', checkAnswer)
  // addFourthButton.onclick = handleClick
  // clears whole container
  questionContainer.innerHTML = ''

  // add break
  questionContainer.appendChild(addBreak)
  //create the question text
  questionContainer.appendChild(setQuestion)
  // create buttons - first button
  addFirstOptions.appendChild(addFirstButton)
  // create buttons - second button
  addFirstOptions.appendChild(addSecondButton)
  // create buttons - third button
  addFirstOptions.appendChild(addThirdButton)
  // create buttons - fourth button
  addFirstOptions.appendChild(addFourthButton)
  // create the grid for the option buttons
  questionContainer.appendChild(addFirstOptions)
}

// timer function
function runTimer() {
  // clear the timer first, so that if accidentally click 'start' again, resets
  clearInterval(countdown);

  countdown = setInterval(function () {
    timer--
    timerEl.textContent = timer

    if (timer <= 0) {
      endGame('Oops! Out of time! ')
    }
  }, 1000)
}

// highscores function (to show high scores div)

function showHighScore() {
  questionContainer.innerHTML = ''

  // code here to show score within question-container 

}


function checkAnswer() {
  console.log(this.innerText === questions[qIndex].answer)

  if (this.innerText === questions[qIndex].answer) {
    results.correct++
  }
  else {
    results.false++
  }

  qIndex++;

  if (qIndex < questions.length) {
    nextQuestion()
  } else {
    endGame('Game Over! ')
  }
}

function endGame(msg) {
  clearInterval(countdown)
  alert(`${msg} Here are your results: Correct: ${results.correct}; False: ${results.false}`)
  location.reload()
}

highScore.addEventListener('click', () => {
  alert('Not yet... to come!')
})