
//questions will be updated
let questions = [
    {
        question: "Who directed 'Twin Peaks'?",
        answers: ["David Lynch and Mark Frost", "Ryan Murphy and Steven Canals", "Quentin Tarantino","Stanley Kubrick"],
        correctAnswer: "David Lynch and Mark Frost",
        id: 1
      },
      {
        question: "How much money were 'Friends' cast paid per person/episode in the last seasons of the show?",
        answers: ["$10 000", "$100 000", "$1 000 000","$500 0000"],
        correctAnswer: "$1 000 000",
        id: 2
      },
      {
        question: "What is the best (imdb) rated tv show?",
        answers: ["Planet Earth II","Sopranos","The Wire","Game of Thrones"],
        correctAnswer: "Planet Earth II",
        id: 3
      },
      {
        question: "Which tv show has produced most seasons (72)?",
        answers: ["Guiding light", "Days of our lives","Grey's Anatomy","Emmerdale"],
        correctAnswer: "Guiding light",
        id: 4
    },
    {
        question: "Where did the show 'The Wire' take place?",
        answers: ["Chicago", "LA", "Detroit", "Baltimore"],
        correctAnswer: "Baltimore",
        id: 5
    },
    {
        question: "Every episode of 'Seinfeld' contains an image or reference to what superhero?",
        answers: ["Batman","Superman","Wonderwoman","Black Panther"],
        correctAnswer: "Superman",
        id: 6
    },
    {
        question: "Where was 'Dark' filmed?",
        answers: ["in Winden","in Berlin/Brandenburg","in Bavaria","in Austria"],
        correctAnswer: "in Berlin/Brandenburg",
        id: 7
    },
    {
        question: "Which actor of 'The office' was originaly director assistant before joining the cast?",
        answers: ["Jenna Fisher","Mindy Calling","B.J. Novak","Phyllis Smith"],
        correctAnswer: "Phyllis Smith",
        id: 8
    },
    {
        question: "What is the most awarded TV show(291 wins)?",
        answers: ["Game of Thrones","Simpsons","Squid Game","Breaking Bad"],
        correctAnswer: "Game of Thrones",
        id: 9
    },
    {
        question: "Where did 'Breaking Bad' take place?",
        answers: ["Albuquerque","Dallas","Santa Fe","Houston"],
        correctAnswer: "Albuquerque",
        id: 10
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
    let imageContainer = document.querySelector('.img1')
    
    
    let questionCounter = 0;
    let currentQuestion;
    let scoreCounter = 0;
    let availableQuestions = [];
    let availableAnswers = [];
    

  //getting only available questions in an array
    for (let i = 0; i < questions.length; i++) {
        availableQuestions.push(questions[i].question)
    }
 
//let changingImg = document.querySelector('.img1')
  
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
      
      addImage()


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

function addImage() {
    
      let img = new Image();
      img.className = "img";
      imageContainer.appendChild(img) 
      if (currentQuestion.id === 1) {
          img.src ="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
      } else if (currentQuestion.id === 2) {
          img.src ="https://images.unsplash.com/photo-1586899028174-e7098604235b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHR2JTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
      } else if (currentQuestion.id === 3) {
          img.src = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
      } else if (currentQuestion.id === 4) {
          img.src = "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
      } else if (currentQuestion.id === 5) {
          img.src = "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
      } else if (currentQuestion.id === 6) {
          img.src = "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
      } else if (currentQuestion.id === 7) {
          img.src = "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
      } else if (currentQuestion.id === 8) {
          img.src = "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
      } else if (currentQuestion.id === 9) {
          img.src = "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
      } else if (currentQuestion.id === 10) {
          img.src = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
      }
}


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
  
  

