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
  $(".quiz-q-form").html(displayResult(res, msg));
};

const displayResult = (r, msg) => {
  const displayRes = resulthtml(r, msg);

  return displayRes;
};

const updateScore = () => {
  score++;
};

// Render the landing page

const renderLandingPageComponent = () => {
  $(".quiz-q-form").hide();

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

  $(".quiz-q-form").show();

  $(".quiz-q-form").html(quizForm());
  console.log("2. Enterd Question render component");
  $("#q-question-form").on("submit", userSelectOption);
};

const quizForm = () => {
  if (qNumber < QUIZ.length) {
    // Check the naming for functions . Clean code book -Robert Martin
    // Return the Html as constant
    // Game mode function
    const x = questionhtml();
    return x;
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
