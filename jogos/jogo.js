const startBtn = document.getElementById("start-btn");
{
q: "Quando um organismo vive às custas de outro, causando-lhe prejuízo sem matá-lo de imediato:",
options: ["Mutualismo", "Comensalismo", "Parasitismo", "Predação"],
correct: 2
},
{
q: "Abelhas e flores mantêm uma relação de:",
options: ["Predação", "Mutualismo", "Amensalismo", "Parasitismo"],
correct: 1
}
];


let currentQuestion = 0;
let score = 0;


startBtn.addEventListener("click", () => {
startScreen.classList.add("hidden");
quizScreen.classList.remove("hidden");
showQuestion();
});


nextBtn.addEventListener("click", () => {
currentQuestion++;
if (currentQuestion < questions.length) {
showQuestion();
} else {
endQuiz();
}
});


function showQuestion() {
nextBtn.classList.add("hidden");
const q = questions[currentQuestion];
questionEl.textContent = q.q;
answersEl.innerHTML = "";


q.options.forEach((opt, i) => {
const btn = document.createElement("button");
btn.textContent = opt;
btn.addEventListener("click", () => selectAnswer(i, btn));
answersEl.appendChild(btn);
});


progressEl.style.width = ((currentQuestion) / questions.length) * 100 + "%";
}


function selectAnswer(i, btn) {
const q = questions[currentQuestion];
const buttons = answersEl.querySelectorAll("button");


buttons.forEach(b => b.disabled = true);


if (i === q.correct) {
btn.classList.add("correct");
score++;
} else {
btn.classList.add("wrong");
buttons[q.correct].classList.add("correct");
}


nextBtn.classList.remove("hidden");
}


function endQuiz() {
quizScreen.classList.add("hidden");
endScreen.classList.remove("hidden");
scoreEl.textContent = `Você acertou ${score} de ${questions.length}`;
progressEl.style.width = "100%";
}
  

































