const questionhtml = () => {
  return `
      <div class ="score-badge"> <p>SCORE  <span>${score}</span> </p>
      
      </div>
      <div class ="question-badge"> <p>QUESTION  <span>${qNumber +
        1}</span> </p>
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
};

const resulthtml = (r, msg) => {
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
