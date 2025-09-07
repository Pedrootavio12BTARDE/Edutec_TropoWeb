const quizData = [
  {
    question: " Qual é a relação harmônica em que ambos os indivíduos se beneficiam?",
    options: ["Competição", "Mutualismo", "Parasitismo", "Predação"],
    answer: "Mutualismo"
  },
  {
    question: " Quando uma espécie se beneficia e a outra não é afetada, temos:",
    options: ["Comensalismo", "Amensalismo", "Predação", "Competição"],
    answer: "Comensalismo"
  },
  {
    question: " A relação em que um organismo se alimenta do outro, matando-o, é chamada:",
    options: ["Parasitismo", "Competição", "Predação", "Mutualismo"],
    answer: "Predação"
  },
  {
    question: " O parasita se beneficia enquanto o hospedeiro é prejudicado. Isso é:",
    options: ["Comensalismo", "Mutualismo", "Parasitismo", "Amensalismo"],
    answer: "Parasitismo"
  },
  {
    question: " Quando uma espécie libera substâncias que inibem outra, temos:",
    options: ["Amensalismo", "Mutualismo", "Parasitismo", "Competição"],
    answer: "Amensalismo"
  }
];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const startBtn = document.getElementById("start-btn");
const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");
const progressBar = document.getElementById("progress");

let currentQuestion = 0;
let score = 0;
let answered = false;

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQuestion();
});

function loadQuestion() {
  answered = false;
  const q = quizData[currentQuestion];
  quiz.innerHTML = `
    <h2>${q.question}</h2>
    ${q.options.map(option => 
      `<div class="option">${option}</div>`).join("")}
  `;
  document.querySelectorAll(".option").forEach(opt => {
    opt.addEventListener("click", selectOption);
  });
  updateProgress();
}

function selectOption(e) {
  if (answered) return;
  answered = true;

  const selected = e.target;
  const correct = quizData[currentQuestion].answer;
  
  if (selected.innerText === correct) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("wrong");
    document.querySelectorAll(".option").forEach(opt => {
      if (opt.innerText === correct) opt.classList.add("correct");
    });
  }
  
  document.querySelectorAll(".option").forEach(opt => {
    opt.style.pointerEvents = "none";
  });
}

nextBtn.addEventListener("click", () => {
  if (!answered) return; 
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function updateProgress() {
  const progressPercent = ((currentQuestion) / quizData.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

function showResult() {
  quiz.classList.add("hidden");
  nextBtn.classList.add("hidden");
  result.classList.remove("hidden");
  result.innerHTML = `
    <h2>🎉 Você acertou ${score} de ${quizData.length} perguntas!</h2>
    <button onclick="restartQuiz()">🔄 Jogar novamente</button>
  `;
  progressBar.style.width = "100%";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quiz.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
  result.classList.add("hidden");
  loadQuestion();
}
