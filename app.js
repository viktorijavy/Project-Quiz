

let questions = [
    {
        question: "What is the best tv-show ever?",
        answers: {
          a: "game of thrones",
          b: "friends",
          c: "dark",
          d: "breaking bad"
        },
        correctAnswer: "b"
      },
      {
        question: "How much money were Friends cast paid per person/episode in the last seasons of the show?",
        answers: {
          a: "10 000",
          b: "100 000",
          c: "1 000  000",
          d: "500 0000"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the best (imdb) rated tv show?",
        answers: {
          a: "Planet Earth II",
          b: "Sopranos",
          c: "The Wire",
          d: "Game of Thrones"
        },
        correctAnswer: "a"
      },
      {
        question: "Which tv show has produced most seasons",
        answers: {
          a: "Guiding light",
          b: "Days of our lives",
          c: "Greys Anatomy",
          d: "Emmerdale"
        },
        correctAnswer: "a"
    },
    {
        question: "Where did the show 'The Wire' take place",
        answers: {
          a: "Chicago",
          b: "LA",
          c: "Detroit",
          d: "Baltimore"
        },
        correctAnswer: "d"
    },
    {
        question: "Every episode of Seinfeld contains an image or reference to what superhero?",
        answers: {
          a: "Batman",
          b: "Superman",
          c: "Wonderwoman",
          d: "Black Panther"
        },
        correctAnswer: "b"
    },
    {
        question: "Where was 'Dark' filmed?",
        answers: {
          a: "in Winden",
          b: "in Berlin/Brandenburg",
          c: "in Bavaria",
          d: "in Austria"
        },
        correctAnswer: "b"
    },
    {
        question: "Which actor of The office was originaly director assistant before joining the cast?",
        answers: {
          a: "Jenna Fisher",
          b: "Mindy Calling",
          c: "Phyllis Smith",
          d: "B.J. Novak"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the best tv show about vampires?",
        answers: {
          a: "What we do in the shadows",
          b: "Dark Shadows",
          c: "True Blood",
          d: "The Vampire diaries"
        },
        correctAnswer: ""
    },
    {
        question: "Where did Breaking Bad take place?",
        answers: {
          a: "Alberqueque",
          b: "Dallas",
          c: "Santa Fe",
          d: "Houston"
        },
        correctAnswer: ""
    }];
    //console.log(questions)

    const questionNumber = document.querySelector("#questionNr");
    const questionText = document.querySelector(".question-text");
    const answerBox = document.querySelector(".answer-box");

    let questionCounter = 0;
    let currentQuestion;
    let scoreCounter = 0;

 

  
  function getNewQuestion() {
      questionNumber.innerHTML = 'Question ' + (questionCounter + 1) + ' of ' + questions.length
      const randomQuestion = questions[Math.floor(Math.random()* questions.length)]
      currentQuestion = randomQuestion
      questionText.innerHTML = currentQuestion.question
      questionCounter++
  }
  const nextButton = document.querySelector('.btn-next')
  nextButton.addEventListener('click', function() {
      if (questionCounter === questions.length) {
          console.log('game over')
      } else {
          getNewQuestion()
      }
  })

  window.onload = function() {
      //setAvailableQuestions()
      getNewQuestion()
  }
  

