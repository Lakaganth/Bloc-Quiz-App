//REnder Final Score

const renderFinalScore = () => {
  $(".quiz-q-form").html(scorecard);
  $(".quiz-q-form").on("click", `.btn-restart`, restartQuiz);
};

const scorecard = () => {
  return ` <div class ="result-bar">
   
      <h2>Your score is ${score}/10</h2>
      <button type="submit" class="btn btn-primary btn-restart">Restart</button>
    
  </div>`;
};

const restartQuiz = () => {
  location.reload();
};

//REnder Next Question
const updateQNumber = () => {
  return qNumber++;
};
const renderNextQuestion = () => {
  console.log("5.Entered rendering Next Question");
  updateQNumber();
  console.log(qNumber);
  $(".quiz-q-form").html(quizForm());

  $("#q-question-form").on("submit", userSelectOption);
};

//USER SELECT OPTION

const userSelectOption = e => {
  e.preventDefault();
  console.log("3. Entered USer Select component");
  const userAnswer = $("input:checked").val();
  const correctAnswer = `${QUIZ[qNumber].correct}`;
  if (userAnswer === correctAnswer) {
    updateScore();
    console.log("Score", score);
    resultIs("Goal!", "You are spot on!");
    $(".btn-next").on("click", renderNextQuestion);
    Toastify({
      text: `Did you Know: ${QUIZ[qNumber].didYouKnow}`,

      duration: 3000
    }).showToast();
  } else {
    resultIs("wrong!", `The correct option is  ${correctAnswer}`);
    $(".btn-next").on("click", renderNextQuestion);
  }
};

const resultIs = (res, msg) => {
  console.log("4.Enterd Results page");
  if (res === "correct") {
    $(".quiz-q-form").html(displayResult(res, msg));

    console.log(score);
  } else {
    $(".quiz-q-form").html(displayResult(res, msg));
  }
};

const displayResult = (r, msg) => {
  return `
  <div class ="score-badge"> <p>SCORE  <span>${score}</span> </p>
    </div>
  <div class ="result-bar scale-up-center">
  <h3>${r}</h3>
  <p> ${msg} </p>
  </div>

  
  <button type="submit" class=" btn btn-next">NEXT</button>
`;
};

const updateScore = () => {
  score++;
};

// Render the landing page

const renderLandingPageComponent = () => {
  console.log("1. Entered Landing page");

  $(".landing-page").on("click", `.btn-quiz-start`, displayQuestions);
};

// const renderQuestionComponent = () => {
//   $(".landing-page").on("click", `.btn-quiz-start`, displayQuestions);
//   // $(".quiz-content").on("click", `.q-start-btn`, displayQuestions);
// };

// Replaces the Quiz card with Questions
const displayQuestions = () => {
  $(".quiz-content").remove();
  $(".landing-page").remove();

  $(".quiz-q-form").css("dispay", "block");

  $(".quiz-q-form").html(quizForm());
  console.log("2. Enterd Question render component");
  $("#q-question-form").on("submit", userSelectOption);
};

const quizForm = () => {
  if (qNumber < QUIZ.length) {
    // Check the naming for functions . Clean code book -Robert Martin
    // Return the Html as constant
    // Game mode function
    return `   
    <div class ="score-badge"> <p>SCORE  <span>${score}</span> </p>
    </div>
    <div class ="question-badge"> <p>QUESTION  <span>${qNumber + 1}</span> </p>
    </div>
    <div class="container questions">
      <p> ${QUIZ[qNumber].question} </p>
      <form id="q-question-form">
        <fieldset>
        <div className="answer">
          <label for="q-option" class="answer-select">
            <input
              type="radio"
              name="answer"
              id="q-option"
              required
              value=${QUIZ[qNumber].answer[0]} 
            />
            <span>${QUIZ[qNumber].answer[0]}</span>
          </label>
          </div> <div className="answer">
          <label for="q-option" class="answer-select">
            <input
              type="radio"
              name="answer"
              id="q-option"
              required
              value=${QUIZ[qNumber].answer[1]} />
            <span>${QUIZ[qNumber].answer[1]}</span>
          </label>
          </div> <div className="answer">
          <label for="q-option" class="answer-select">
            <input
              type="radio"
              name="answer"
              id="q-option"
              required
              value=${QUIZ[qNumber].answer[2]}            
            />
            <span>${QUIZ[qNumber].answer[2]}</span>
          </label>
          </div> <div className="answer">
          <label for="q-option" class="answer-select">
            <input
              type="radio"
              name="answer"
              id="q-option"
              required
              value=${QUIZ[qNumber].answer[3]} 
            />
            <span>${QUIZ[qNumber].answer[3]}</span>
          </label>
          </div>
        </fieldset>
        <div class="buttons">
        <button type="submit" class=" btn btn-submit">Submit</button>
        </div>
      </form>
    </div>`;
  } else {
    renderFinalScore();
  }
};

// Utility Class for displaying the landing page

// const displayLandingPage = (title, btnText) => {
//   return `<div class="container">
//   <div class="card">
//     <div class="card-body">
//       <h3>${title}</h3>
//       <button  class="btn btn-primary q-start-btn">${btnText}</button>
//     </div>
//   </div>
// </div>`;
// };
