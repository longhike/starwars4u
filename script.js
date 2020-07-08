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

// set counter
var timer = document.getElementById('timerSam')

// set question index
var qIndex = 0;

// results variable
var results = {
  correct: 0,
  false: 0
}

console.log(results)

console.log(questions)
// variable 'begin' to clear the div
var begin = document.getElementById('question-container')
// 'hideStart' to remove start button
var hideStart = document.getElementById('start-btn')



function createQuestion() {
  var currentQuestion = questions[qIndex];
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

  // for (var i = 0; i < currentQuestion.options.length; i++) {

  // }
  // set buttons - first button
  addFirstButton.setAttribute('id', 'opt1')
  addFirstButton.setAttribute('class', 'btn answer')
  addFirstButton.innerText = currentQuestion.options[0]
  addFirstButton.onclick = handleClick
  // set buttons - second button
  addSecondButton.setAttribute('id', 'opt2')
  addSecondButton.setAttribute('class', 'btn answer')
  addSecondButton.innerText = currentQuestion.options[1]
  addSecondButton.onclick = handleClick
  // set buttons - third button
  addThirdButton.setAttribute('id', 'opt3')
  addThirdButton.setAttribute('class', 'btn answer')
  addThirdButton.innerText = currentQuestion.options[2]
  addThirdButton.onclick = handleClick
  // set buttons - fourth button
  addFourthButton.setAttribute('id', 'opt4')
  addFourthButton.setAttribute('class', 'btn answer')
  addFourthButton.innerText = currentQuestion.options[3]
  addFourthButton.onclick = handleClick
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

function handleClick(event) {
  event.preventDefault()
  console.log(event)
  // some function here that lets me check if button chosen === questions[i].answer
  // if () {
  //   results.correct++
  //   alert('Nice! ')
  //   }
  // else {
  //   alert('Whoops, wrong answer')
  //   results.false++
  // }

  // cycles the question to next
  if (qIndex <= questions.length)

    createQuestion();
}


// start the quiz here - when clicked, clears the start the quiz info, start the timer
document.getElementById('start-btn').addEventListener('click', function () {
  //add start to timer here.
  createQuestion();
})

// console.log(document)
// //see which answer is correct
// var answerEls = document.getElementsByClassName('answer')
// console.log(answerEls)

// for (var i = 0; i < answerEls.length; i++) {
//   answerEls[i].addEventListener('click', function () {
//     alert('button works!')
//   })
// }





// var next = document.getElementById('next-btn').addEventListener(click, function () {

//   })


// function nextQuestion() {  }

// var questionOne = document.getElementById('question')
//     questions.innerText = questions[0].question

// var answer = document.getElementsByClassName('answer')
// console.log(answer);

// for (i = 0; i < questions[0].options.length; i++){
//     answer[i].textContent = questions.options[i]
// }


// var KEY = "new-localstorage-test";

// var myObj = {
//   name: 'Ben'
// }

// console.log(myObj)
// console.log(typeof myObj)
// console.log(myObj.toString())

// var stringy = JSON.stringify(myObj)
// console.log(typeof stringy)
// console.log(stringy)

// localStorage.setItem(KEY, stringy)

// var fromStorage = localStorage.getItem(KEY)
// console.log(typeof fromStorage)
// console.log(fromStorage)

// var parsed = JSON.parse(fromStorage)
// console.log(typeof parsed)
// console.log(parsed)

// var newKey = "TESTING";
// sessionStorage.setItem(newKey, JSON.stringify(myObj));

// var newVal = JSON.parse(sessionStorage.getItem(newKey));

// console.log(newVal)