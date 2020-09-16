// VARIABLE ASSIGNMENTS
    // grabs highScore div
    const highScore = document.getElementById('viewHighScores')

    // grabs whole question card
    const questionCard = document.getElementById('question-card')
    
    // grabs section for question text
    const questionContent = document.getElementById('question-container')
    console.log(questionContent);
    
    // grabs start button
    const startBtn = document.getElementById('startBtn')
    console.log(startBtn);
    
    // grab button holder div
    const buttonHolder = document.getElementsByClassName('controls')[0]
    console.log(buttonHolder);
    
    // grab answer button by class
    const buttonAnswer = document.getElementsByClassName('answer')

    // grab modal by class
    const modal = document.getElementsByClassName('modal')[0]

    //grabs close modal by class
    const closeModal = document.getElementsByClassName('_close')[0]
    console.log(closeModal);

    // grabs info card by id
    const infoCard = document.getElementById('info-card')
    console.log(infoCard);

    // grabs final score div
    const finalScore = document.getElementById('final-score')

    //grabs the play again button
    const playAgain = document.getElementById('play-again')
    
    // set timer variables:
    let countdown
    let timer = 30
    let timerEl = document.getElementsByClassName('timer-div')[0]

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
    changeStuff()
})

function changeStuff () {
    
    if (questions[qIndex] === undefined) {
        endGame('Game over! ')
        
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
        arrayButtons.setAttribute('class', 'btn btn-info answer')
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
            console.log(this.innerText);
            console.log(questions[qIndex - 1].answer);
            this.setAttribute('style','background-color: green;')
            // alert('Nice! Got that one.')
            score.correct++
            console.log(score);
            setTimeout(changeStuff, 1000)
        } else {
            console.log(this.innerText);
            console.log(questions[qIndex - 1].answer);
            // alert('You fool! Do better on the next one.')
            this.setAttribute('style','background-color: red;')
            score.incorrect++
            console.log(score);
            setTimeout(changeStuff, 1000)
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
    questionCard.style.display = 'none';
    infoCard.style.display = 'block';

        finalScore.innerHTML =
        `<h4>${msg}</h4>
        <h5>Here are your results:</h5> 
        <p>Correct: ${score.correct}</p>
        <p>Incorrect: ${score.incorrect}</p>
        <p>Missed: ${questions.length - (score.correct + score.incorrect)}</p>
        `;
}

playAgain.addEventListener('click', (e) => {
    e.preventDefault()
    location.reload()
})

highScore.addEventListener('click', (e) => {
        e.preventDefault()
        modal.style.display = 'block'
    }
)

closeModal.addEventListener('mouseover', (e) => {
    e.preventDefault()
    closeModal.style.cursor = 'pointer'
})

closeModal.addEventListener('mousedown', (e) => {
        e.preventDefault()
        console.log('clicked!');
        closeModal.style.color = 'black'
    }
)

closeModal.addEventListener('mouseup', (e) => {
    e.preventDefault()
    console.log('clicked!');
    modal.style.display = 'none'
    closeModal.style.color = '#aaa'
}
)