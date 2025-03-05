// TODO 10 Fragenstruktur
const questions = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland",
    answers: [
      {
        id: "a",
        text: "München",
        correct: false,
      },
      {
        id: "b",
        text: "Berlin",
        correct: true,
      },
      {
        id: "c",
        text: "Hamburg",
        correct: false,
      },
      {
        id: "d",
        text: "Hannover",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Was ist die Hauptstadt von Frankreich",
    answers: [
      {
        id: "a",
        text: "München",
        correct: false,
      },
      {
        id: "b",
        text: "Berlin",
        correct: true,
      },
      {
        id: "c",
        text: "Hamburg",
        correct: false,
      },
      {
        id: "d",
        text: "Hannover",
        correct: false,
      },
    ],
  },
];

let currentQuestion;
let currentQuestionPointer = -1;

function renderQuestion(question) {
  const questionDiv = document.createElement("div");
  questionDiv.id = question.id;
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("div");
  questionDiv.classList.add("question-title");

  questionTitle.appendChild(document.createTextNode(question.question));

  const questionAnswers = document.createElement("div");
  questionAnswers.classList.add("question-answers");

  // [a,b,c,d] -->

  const answersCopy = [];
  question.answers.forEach((answer) => {
    answersCopy.push(answer);
  });
  while (answersCopy.length > 0) {
    const randomPointer = Math.floor(Math.random() * answersCopy.length);

    const answer = answersCopy.splice(randomPointer, 1)[0];

    const answerDiv = document.createElement("button");
    answerDiv.id = answer.id;
    answerDiv.setAttribute("onclick", `validate('${answer.id}')`);
    answerDiv.classList.add("answer");
    answerDiv.appendChild(document.createTextNode(answer.text));
    questionAnswers.appendChild(answerDiv);
  }

  questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(questionAnswers);
  document.getElementById("display-question").appendChild(questionDiv);
}

function nextQuestion() {
  if (currentQuestion) {
    document.getElementById(String(currentQuestion.id)).remove();
  }

  if (currentQuestionPointer + 1 < questions.length) {
    currentQuestionPointer++;
    currentQuestion = questions[currentQuestionPointer];
  } else {
    currentQuestionPointer = 0;
    currentQuestion = questions[currentQuestionPointer];
  }
  renderQuestion(currentQuestion);
}

function validate(answerId) {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });

  if (correctAnswer.id === answerId) {
    alert("Richtig");
    document.getElementById(answerId).classList.add("correct");
  } else {
    alert("Falsch");
    document.getElementById(answerId).classList.add("incorrect");
    document.getElementById(correctAnswer.id).classList.add("correct");
  }
}

function showSolution() {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });
  document.getElementById(correctAnswer.id).classList.add("correct");
}
