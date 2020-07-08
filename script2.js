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

// variable for question index
var qIndex = 0

// results variable
var results = {
    correct: 0,
    false: 0
  }

  console.log(results)

// variable 'begin' to clear the div
var begin = document.getElementById('question-container')
// 'hideStart' to remove start button
var hideStart = $('#startBtn')



// ######################### FUNCTIONS ######################### 

// start the quiz, run question function, timer function
$('#startBtn').on('click', function (e) { 
    e.preventDefault()

    runTimer()
    // nextQuestion()

    
 } 
)


// question function (add correct answer, wrong answer conditional)
function nextQuestion () {
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
    // addFirstButton.onclick = handleClick
    // set buttons - second button
    addSecondButton.setAttribute('id', 'opt2')
    addSecondButton.setAttribute('class', 'btn answer')
    addSecondButton.innerText = currentQuestion.options[1]
    // addSecondButton.onclick = handleClick
    // set buttons - third button
    addThirdButton.setAttribute('id', 'opt3')
    addThirdButton.setAttribute('class', 'btn answer')
    addThirdButton.innerText = currentQuestion.options[2]
    // addThirdButton.onclick = handleClick
    // set buttons - fourth button
    addFourthButton.setAttribute('id', 'opt4')
    addFourthButton.setAttribute('class', 'btn answer')
    addFourthButton.innerText = currentQuestion.options[3]
    // addFourthButton.onclick = handleClick
    // clears whole container
    begin.innerHTML = ''
    // removes start button
    hideStart.remove()
    // add break
    begin.appendChild(addBreak)
    //create the question text
    begin.append(setQuestion)
    // create the grid for the option buttons
    begin.appendChild(addFirstOptions)
    // create buttons - first button
    addFirstOptions.appendChild(addFirstButton)
    // create buttons - second button
    addFirstOptions.appendChild(addSecondButton)
    // create buttons - third button
    addFirstOptions.appendChild(addThirdButton)
    // create buttons - fourth button
    addFirstOptions.appendChild(addFourthButton)
  
    qIndex++;
  }


// timer function
function runTimer () {
    var timer = 10
    var countdown = setInterval(function(){
        timer--
        $('#timerSam').text(timer)
        if(timer <= 0) {
            // end countdown
            clearInterval(countdown)
            begin.empty()
            begin.text("Time's up!")
        }
    },1000)

}

// highscores function (to show high scores div)

function showHighScore () {
    begin.empty()

    // code here to show score within question-container 
    
}




    
