const questionhtml = () => {
  return `
  <section class ="q-section">
      <div class ="score-badge"> <p>SCORE  <span>${score}</span> </p>
      
      </div>
      <div class ="question-badge"> <p>QUESTION  <span>${qNumber +
        1}</span> </p>
      </div>
      <div class="container   questions">
        <p> ${QUIZ[qNumber].question} </p>
        <form id="q-question-form">
          <fieldset>
          
            <label  class="answer-select">
              <input
                type="radio"
                name="answer"
                id="q-option"
                required
                checked
                value=${QUIZ[qNumber].answer[0]}
              />
              <span>${QUIZ[qNumber].answer[0]}</span>
            </label>
            <br>
            <label  class="answer-select">
              <input
                type="radio"
                name="answer"
                id="q-option"
                required
                value=${QUIZ[qNumber].answer[1]} />
              <span>${QUIZ[qNumber].answer[1]}</span>
            </label>
            <br>
            <label  class="answer-select">
              <input
                type="radio"
                name="answer"
                id="q-option"
                required
                value=${QUIZ[qNumber].answer[2]}
              />
              <span>${QUIZ[qNumber].answer[2]}</span>
            </label>
            <br>
            <label  class="answer-select">
              <input
                type="radio"
                name="answer"
                id="q-option"
                required
                value=${QUIZ[qNumber].answer[3]}
              />
              <span>${QUIZ[qNumber].answer[3]}</span>
            </label>
            <br>
            <div class="buttons">
          <button type="submit" class=" btn btn-submit">Submit</button>
          </div>
          </fieldset>
          
        </form>
      </div>
      </section>`;
};

const resulthtml = (r, msg) => {
  return `
  <div class ="score-badge"> <p>SCORE  <span>${score}</span> </p>
    </div>

    <div class = "contain">
  <div class ="result-bar scale-up-center">
  <h3>${r}</h3>
  <p> ${msg} </p>
  </div>

  
  <button type="submit" class=" btn btn-next">NEXT</button>
  </div>
`;
};

const finalScoreHTML = () => {
  return ` <div class ="result-bar">
     
        <h2>Your score is ${score} / ${QUIZ.length}</h2>
        <button type="submit" class="btn btn-primary btn-restart">Restart</button>
      
    </div>`;
};
