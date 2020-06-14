var questions = [
    {question:'On what planet was Anakin Skywalker born?',
    answer: 'Tatooine',
    options: ['Tatooine', 'Dagoba', 'Coruscant', 'Naboo']},
    {question: 'What is the symbiotic microbe that allows Jedi to feel the Force?',
    answer: 'midiclorians',
    options: ['red blood cells', 'white blood cells', 'midiclorians', 'grey matter']},
    {question: 'Who is Darth Vader?',
    answer: 'Anakin Skywalker',
    options: ['Luke Skywalker', 'Anakin Skywalker', 'Yoda', 'C3PO']}
]

console.log(questions)

// start the quiz here - when clicked, clears the start the quiz info, start the timer
var startQuiz = document.getElementById('start-btn').addEventListener('click',function () {
  // variable 'begin' to clear the div
  var begin = document.getElementById('question-container')
  // 'hideStart' to remove start button
  var hideStart = document.getElementById('start-btn')
  // add break
  var addBreak = document.createElement('br')
  // add text of first question
  var setQuestion = document.createElement('p')
  var addFirstOptions = document.createElement('div')
  var addFirstButton = document.createElement('button')
  var addSecondButton = document.createElement('button')
  var addThirdButton = document.createElement('button')
  var addFourthButton = document.createElement('button')
  // clears whole container
  begin.innerHTML = ''
  // removes start button
  hideStart.remove()
  // add break
  begin.appendChild(addBreak)
  //create the question text
  setQuestion.setAttribute('style','font-size: larger')
  setQuestion.innerText = questions[0].question
  begin.append(setQuestion)
  // set the grid for the option buttons
  addFirstOptions.setAttribute('id','answer-buttons')
  addFirstOptions.setAttribute('class','btn-grid')
  setQuestion.appendChild(addFirstOptions)
  // create buttons - first button
  addFirstButton.setAttribute('id','opt1')
  addFirstButton.setAttribute('class','btn answer')
  addFirstButton.innerText = questions[0].options[0]
  addFirstOptions.appendChild(addFirstButton)
  // create buttons - second button
  addSecondButton.setAttribute('id','opt2')
  addSecondButton.setAttribute('class','btn answer')
  addSecondButton.innerText = questions[0].options[1]
  addFirstOptions.appendChild(addSecondButton)
  // create buttons - third button
  addThirdButton.setAttribute('id','opt3')
  addThirdButton.setAttribute('class','btn answer')
  addThirdButton.innerText = questions[0].options[2]
  addFirstOptions.appendChild(addThirdButton)
  // create buttons - fourth button
  addFourthButton.setAttribute('id','opt4')
  addFourthButton.setAttribute('class','btn answer')
  addFourthButton.innerText = questions[0].options[3]
  addFirstOptions.appendChild(addFourthButton)

})



// function nextQuestion() {  }

// var questionOne = document.getElementById('question')
//     questions.innerText = questions[0].question

// var answer = document.getElementsByClassName('answer')
// console.log(answer);

// for (i = 0; i < questions[0].options.length; i++){
//     answer[i].textContent = questions.options[i]
// }