// VARIABLE ASSIGNMENTS
    // grabs highScore div
    const highScore = document.getElementById('viewHighScores')
    // grabs section for question text
    const questionContent = document.getElementById('question-container')
    console.log(questionContent);
    // grabs start button
    const startBtn = document.getElementById('startBtn')
    console.log(startBtn);
    // grab button holder
    const buttonHolder = document.getElementsByClassName('controls')[0]
    console.log(buttonHolder);
    // grab answer button by class
    const buttonAnswer = document.getElementsByClassName('answer')
    // set timer variables:
    let countdown
    let timer = 30
    let timerEl = document.getElementsByClassName('timer-sam')[0]

    // set question and score variables
    let qIndex = 0

    let score = {
        correct: 0,
        incorrect: 0
    }

// QUESTION SETUP
    const questions = [
        {
            question: "What is the name of Han Solo's spaceship?",
            answer: 'Millenium Falcon',
            options: ['Millenium Falcon', 'Centennial Pigeon', 'Lunar Moth', 'Kessel Run']
        },
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
        },
        {
            question: "What color is Mace Windu's lightsaber?",
            answer: 'purple',
            options: ['red', 'purple', 'green', 'blue']
        }
    ]


// LISTENERS AND FUNCTIONS

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none'
    runTimer()
    changeShit()
})

function changeShit () {
    
    if (questions[qIndex] === undefined) {
        endGame('Game over! ')
        location.reload()
        
    } else {
        questionContent.innerText = ''
        questionContent.innerText = questions[qIndex].question
        removeButtons()
        addButtons()
        getAnswer()
        qIndex++    
    }
}

function addButtons () {
    
    for (i = 0; i < questions[qIndex].options.length; i++) {
        let arrayButtons =  document.createElement('div')
        arrayButtons.setAttribute('class', 'btn answer')
        console.log(arrayButtons);
        arrayButtons.innerText = questions[qIndex].options[i]
        buttonHolder.appendChild(arrayButtons)
    }
}

function removeButtons () {
    buttonHolder.innerHTML = ''
}

function getAnswer () {
    let answerButtons = document.getElementsByClassName('answer')
    console.log(answerButtons);
    for (i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', function () {
            console.log(this.innerText);
            console.log(questions[qIndex - 1].answer);
        if (this.innerText === questions[qIndex - 1].answer) {
            this.setAttribute('style', 'background-color: green;')
            console.log(this.innerText);
            console.log(questions[qIndex - 1].answer);
            alert('Nice! Got that one.')
            score.correct++
            console.log(score);
            changeShit()
        } else {
            this.setAttribute('style', 'background-color: red;')
            console.log(this.innerText);
            console.log(questions[qIndex - 1].answer);
            alert('You fool! Do better on the next one.')
            score.incorrect++
            console.log(score);
            changeShit()
        }
        })
    } 
    
}

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

function endGame(msg) {
    clearInterval(countdown)
    alert(
    `
    ${msg} Here are your results: 
        Correct: ${score.correct}
        Incorrect: ${score.incorrect}
    Click "OK" to play again!
    `)
    location.reload()
}

highScore.addEventListener('click', () => {
    alert('Not yet... to come!')
})