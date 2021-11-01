

let questions = [
    {
        question: "What is the best tv-show ever?",
        answers: ["game of thrones", "friends", "dark","breaking bad"],
        correctAnswer: 1
      },
      {
        question: "How much money were Friends cast paid per person/episode in the last seasons of the show?",
        answers: ["10 000", "100 000", "1 000 000","500 0000"],
      
        correctAnswer: 2
      },
      {
        question: "What is the best (imdb) rated tv show?",
        answers: ["Planet Earth II","Sopranos","The Wire","Game of Thrones"],
        correctAnswer: 0
      },
      {
        question: "Which tv show has produced most seasons",
        answers: ["Guiding light", "Days of our lives","Greys Anatomy","Emmerdale"],
        correctAnswer: 0
    },
    {
        question: "Where did the show 'The Wire' take place",
        answers: ["Chicago", "LA", "Detroit","Baltimore"],
        correctAnswer: 3
    },
    {
        question: "Every episode of Seinfeld contains an image or reference to what superhero?",
        answers: ["Batman","Superman","Wonderwoman","Black Panther"],
        correctAnswer: 0
    },
    {
        question: "Where was 'Dark' filmed?",
        answers: ["in Winden","in Berlin/Brandenburg","in Bavaria","in Austria"],
        correctAnswer: 1
    },
    {
        question: "Which actor of The office was originaly director assistant before joining the cast?",
        answers: ["Jenna Fisher","Mindy Calling","B.J. Novak","Phyllis Smith"],
        correctAnswer: 3
    },
    {
        question: "What is the best tv show about vampires?",
        answers: ["What we do in the shadows","Dark Shadows","True Blood","The Vampire diaries"],
        correctAnswer: 0
    },
    {
        question: "Where did Breaking Bad take place?",
        answers: ["Alberqueque","Dallas","Santa Fe","Houston"],
        correctAnswer: 0
    }];
    //console.log(questions)

    const questionNumber = document.querySelector("#questionNr");
    const questionText = document.querySelector(".question-text");
    const answerBox = document.querySelector(".answer-box");
    const nextButton = document.querySelector('.btn-next')
    const startButton = document.querySelector('.start-button')
    
    
    let questionCounter = 0;
    let currentQuestion;
    let scoreCounter = 0;
    let availableQuestions = [];
    let availableAnswers = [];

  
    

 function setAvailableQuestions() {
     for (let i = 0; i < questions.length; i++){
       availableQuestions.push(questions[i])
     } 
     return availableQuestions
 } 
 

  
  function getNewQuestion() {
      //getting question number to change at the top
      questionNumber.innerHTML = 'Question ' + (questionCounter + 1) + ' of ' + questions.length
      //getting a random question displayed
      const randomQuestion = questions[Math.floor(Math.random()* questions.length)]
      currentQuestion = randomQuestion
      questionText.innerHTML = currentQuestion.question
      //getting possible answers in an array
      const answerLength = currentQuestion.answers.length
      for (let i = 0; i < answerLength; i++){
          availableAnswers.push(i)
      }
      //displaying possible answers
      for (let i=0; i < answerLength; i++) {
          const answer = document.createElement("button")
          answer.innerHTML = currentQuestion.answers[i];
          answer.className = "answer";
          answerBox.appendChild(answer)
    }
    questionCounter++
}

 
  
  nextButton.addEventListener('click', function() {
      if (questionCounter === questions.length) {
          displayResults()
     } else {
         getNewQuestion()
     }
 })
   
  
window.onload = function() {
    getNewQuestion()
}
  
  

