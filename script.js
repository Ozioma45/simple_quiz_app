const quizData = [
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
    answer: "Tokyo",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Nikola Tesla",
      "Galileo Galilei",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "Which country is famous for inventing pizza?",
    options: ["France", "Italy", "USA", "Mexico"],
    answer: "Italy",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    options: ["90°C", "100°C", "120°C", "80°C"],
    answer: "100°C",
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Central Program Unit",
      "Control Processing Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Iron"],
    answer: "Oxygen",
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "South America"],
    answer: "Africa",
  },
  {
    question: "Which company created the iPhone?",
    options: ["Samsung", "Google", "Apple", "Microsoft"],
    answer: "Apple",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressElement = document.getElementById("progress");
const resultContainer = document.getElementById("result");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");

function updateProgressBar() {
  let progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
  progressBar.style.width = progress + "%";
}

function loadQuestion() {
  resetState();
  let currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${
    quizData.length
  }`;

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("btn");
    button.addEventListener("click", () =>
      checkAnswer(option, currentQuestion.answer)
    );
    answerButtons.appendChild(button);
  });

  updateProgressBar();
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("quiz").classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreElement.textContent = `${score} / ${quizData.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("quiz").classList.remove("hidden");
  resultContainer.classList.add("hidden");
  loadQuestion();
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  }
});

loadQuestion();
