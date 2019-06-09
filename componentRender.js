// ------------------ENTRY POINT INTO THE QUIZ  -----------------//

const renderLandingPageComponent = () => {
  $(".quiz-q-form").hide();
  $(".landing-page").on("click", `.btn-quiz-start`, renderQuestions);
};

//   ----------------SECTION 1 :Quiz questions render function ------------//

const renderQuestions = () => {
  $(".landing-page").remove();

  $(".quiz-q-form").show();

  $(".quiz-q-form").html(quizForm());

  $("#q-question-form").on("submit", userSelectOption);
};

const quizForm = () => {
  if (qNumber < QUIZ.length) {
    const x = questionhtml();
    return x;
  } else {
    renderFinalScore();
  }
};

//   ----------------SECTION 2 : Check for user select option ------------//

//   Compares the user selected option and the correct option
const userSelectOption = e => {
  e.preventDefault();

  const userAnswer = $("#q-option:checked").val();
  const correctAnswer = `${QUIZ[qNumber].correct}`;
  if (userAnswer === correctAnswer) {
    updateScore();

    resultIs("Goal!", "You are spot on!");
    $(".btn-next").on("click", renderNextQuestion);
  } else {
    resultIs("wrong!", `The correct option is  ${correctAnswer}`);
    $(".btn-next").on("click", renderNextQuestion);
  }
};

//   Based on the result the message is altered

const resultIs = (res, msg) => {
  $(".quiz-q-form").html(displayResult(res, msg));
};

const displayResult = (r, msg) => {
  const displayRes = resulthtml(r, msg);

  return displayRes;
};

//   ----------------SECTION 3 : Render next question------------//

//UPDATE the iterator (qNumber) and repeat from section 1
const renderNextQuestion = () => {
  updateQNumber();

  $(".quiz-q-form").html(quizForm());

  $("#q-question-form").on("submit", userSelectOption);
};

//   ----------------SECTION 4 : Display Final Score------------//

const renderFinalScore = () => {
  $(".quiz-q-form").html(scorecard);
  $(".quiz-q-form").on("click", `.btn-restart`, restartQuiz);
};

const scorecard = () => {
  const finalScore = finalScoreHTML();
  return finalScore;
};

const restartQuiz = () => {
  location.reload();
};

//   ----------------ITERATOR CLASSES------------//

const updateQNumber = () => {
  return qNumber++;
};

const updateScore = () => {
  score++;
};
