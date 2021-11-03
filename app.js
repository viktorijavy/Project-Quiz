
//questions will be updated
let questions = [
    {
        question: "Who directed 'Twin Peaks'?",
        answers: ["David Lynch and Mark Frost", "Ryan Murphy and Steven Canals", "Quentin Tarantino","Stanley Kubrick"],
        correctAnswer: "David Lynch and Mark Frost"
      },
      {
        question: "How much money were 'Friends' cast paid per person/episode in the last seasons of the show?",
        answers: ["$10 000", "$100 000", "$1 000 000","$500 0000"],
      
        correctAnswer: "$1 000 000"
      },
      {
        question: "What is the best (imdb) rated tv show?",
        answers: ["Planet Earth II","Sopranos","The Wire","Game of Thrones"],
        correctAnswer: "Planet Earth II"
      },
      {
        question: "Which tv show has produced most seasons (72)?",
        answers: ["Guiding light", "Days of our lives","Grey's Anatomy","Emmerdale"],
        correctAnswer: "Guiding light"
    },
    {
        question: "Where did the show 'The Wire' take place?",
        answers: ["Chicago", "LA", "Detroit", "Baltimore"],
        correctAnswer: "Baltimore"
    },
    {
        question: "Every episode of 'Seinfeld' contains an image or reference to what superhero?",
        answers: ["Batman","Superman","Wonderwoman","Black Panther"],
        correctAnswer: "Superman"
    },
    {
        question: "Where was 'Dark' filmed?",
        answers: ["in Winden","in Berlin/Brandenburg","in Bavaria","in Austria"],
        correctAnswer: "in Berlin/Brandenburg"
    },
    {
        question: "Which actor of 'The office' was originaly director assistant before joining the cast?",
        answers: ["Jenna Fisher","Mindy Calling","B.J. Novak","Phyllis Smith"],
        correctAnswer: "Phyllis Smith"
    },
    {
        question: "What is the most awarded TV show(291 wins)?",
        answers: ["Game of Thrones","Simpsons","Squid Game","Breaking Bad"],
        correctAnswer: "Game of Thrones"
    },
    {
        question: "Where did 'Breaking Bad' take place?",
        answers: ["Albuquerque","Dallas","Santa Fe","Houston"],
        correctAnswer: "Albuquerque"
    }];
    //console.log(questions)

    const questionNumber = document.querySelector("#questionNr");
    const questionText = document.querySelector(".question-text");
    const answerBox = document.querySelector(".answer-box");
    const nextButton = document.querySelector('.btn-next')
    const scoreCount = document.querySelector('#score')
    const resultPage = document.querySelector('.results')
    const quizPage = document.querySelector('.quiz-box')
    const resultText = document.querySelector('.resultcount')
    const youLose = document.querySelector('.you-lose')
    const congrats = document.querySelector('.congrats') 
    
    
    
    let questionCounter = 0;
    let currentQuestion;
    let scoreCounter = 0;
    let availableQuestions = [];
    let availableAnswers = [];
    let totalScoresPossible = 10;

  //getting only available questions in an array
    for (let i = 0; i < questions.length; i++) {
        availableQuestions.push(questions[i].question)
    }
 

  
  function getNewQuestion() {
      answerBox.innerHTML = ''
      //getting question number to change at the top
      questionNumber.innerHTML = 'Question ' + (questionCounter + 1) + ' of 10' 

      //creating a random question variable and getting random question displayed 
      const randomQuestion = questions[Math.floor(Math.random()* questions.length)]
      currentQuestion = randomQuestion
      questionText.innerHTML = currentQuestion.question

      //getting question index from the questions Array
      const index1 = questions.indexOf(randomQuestion)
      questions.splice(index1, 1)
      

      //getting possible answers in an array
      const answerLength = currentQuestion.answers.length  
      for (let i = 0; i < answerLength; i++){
          availableAnswers.push(i)
      }
      //displaying possible answers
      for (let i = 0; i < answerLength; i++) {
          const answers = document.createElement("button")
        
          answers.innerHTML = currentQuestion.answers[i];
          answers.className = "answer";
          answers.addEventListener('click', renderButton)
          
          answerBox.appendChild(answers)
          
    }
    questionCounter++
}
//console.log(answerBox)

let clickedAnswer = ''
let answerClicked = false;

function renderButton(event) {
if (answerClicked === false) {

clickedAnswer = event.target.innerText
event.target.classList.add('clicked-btn')
if (clickedAnswer === currentQuestion.correctAnswer) {
        scoreCounter ++ 
        console.log('correct')
        answerClicked = true
        
     } else if (clickedAnswer !== currentQuestion.correctAnswer) {
        console.log('incorrect!');
        scoreCounter;
        answerClicked = true
     }

    }

}

function calculateScore() {
    
scoreCount.innerHTML = 'Score: ' + scoreCounter
}





function displayResults() {
   
 resultPage.classList.remove('hide')
 quizPage.classList.add('hide') 
 resultText.innerHTML = scoreCounter
 if (scoreCounter > 6) {
    congrats.innerText = 'Well done!'
    winningGif = document.querySelector('.win-hide')
    winningGif.classList.remove('win-hide')
 } else {
    youLose.innerText = 'Not great!'
    loosingGif = document.querySelector('.lose-hide')
    loosingGif.classList.remove('lose-hide')
 }
}
 
  
  nextButton.addEventListener('click', function() {
      if (questionCounter === 10) {
          displayResults()
     } else {
        getNewQuestion()
        answerClicked = false
        calculateScore()
     }
 })
   
  
window.onload = function() {
    getNewQuestion()
}
  
  

