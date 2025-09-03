const shuffle = (arr) => arr
  .map(v => ({ v, r: Math.random() }))
  .sort((a, b) => a.r - b.r)
  .map(({ v }) => v);

const QUESTIONS = [

  {
    difficulty: "easy",
    tag: "Conceitos",
    q: "Relação <em>intraespecífica</em> ocorre entre indivíduos de:",
    options: ["Mesma espécie", "Espécies diferentes", "Reinos diferentes", "Apenas plantas"],
    answer: 0,
    explain: "Intraespecífica = dentro da mesma espécie; interespecífica = entre espécies diferentes."
  },
  {
    difficulty: "easy",
    tag: "Harmônica",
    q: "No <strong>inquilinismo</strong>, um organismo usa o outro como moradia, sem prejudicá-lo. Um exemplo clássico é:",
    options: ["Peixe-palhaço e anêmona", "Orquídea sobre uma árvore", "Crocodilo e pássaro-palito", "Lobo e veado"],
    answer: 1,
    explain: "A orquídea vive sobre a árvore (forófito) apenas como suporte, sem retirar seiva: relação harmônica interespecífica."
  },
  {
    difficulty: "easy",
    tag: "Harmônica",
    q: "Na <strong>protocooperação</strong>:",
    options: ["Ambos se beneficiam e a associação é obrigatória", "Apenas um se beneficia", "Ambos se beneficiam e a associação é facultativa", "Sempre há prejuízo"],
    answer: 2,
    explain: "Protocooperação é mutualismo não obrigatório (facultativo)."
  },
  {
    difficulty: "easy",
    tag: "Desarmônica",
    q: "Ocorre <strong>predação</strong> quando:",
    options: ["Um ser se alimenta de partes de plantas", "Ambos se beneficiam da associação", "Um organismo mata outro para alimentar-se", "Dois indivíduos disputam recursos"],
    answer: 2,
    explain: "Predação: um predador mata e consome a presa."
  },
  {
    difficulty: "easy",
    tag: "Harmônica",
    q: "<strong>Colônias</strong> e <strong>sociedades</strong> são relações intraespecíficas. A diferença é que:",
    options: ["Colônias são por acaso; sociedades são obrigatórias", "Colônias têm indivíduos fisicamente unidos; sociedades são separadas", "Sociedades sempre são desarmônicas", "Colônias só ocorrem em mamíferos"],
    answer: 1,
    explain: "Colônias: indivíduos da mesma espécie fisicamente unidos (ex.: corais). Sociedades: indivíduos separados cooperando (ex.: abelhas)."
  },

  {
    difficulty: "medium",
    tag: "Desarmônica",
    q: "No <strong>parasitismo</strong>, o parasita:",
    options: ["Mata a presa imediatamente", "Vive às custas do hospedeiro, geralmente sem matá-lo rapidamente", "Se beneficia e o outro não é afetado", "Só ocorre entre plantas"],
    answer: 1,
    explain: "Parasitismo é relação interespecífica desarmônica: o parasita retira recursos do hospedeiro, que é prejudicado."
  },
  {
    difficulty: "medium",
    tag: "Harmônica",
    q: "O <strong>mutualismo</strong> obrigatório é quando:",
    options: ["A associação é indispensável para pelo menos um dos parceiros", "Há prejuízo para ambos", "É uma relação intraespecífica", "É o mesmo que protocooperação"],
    answer: 0,
    explain: "No mutualismo obrigatório, a sobrevivência/reprodução depende da associação (ex.: líquens: alga + fungo)."
  },
  {
    difficulty: "medium",
    tag: "Desarmônica",
    q: "Quando fungos produzem antibióticos que inibem bactérias na vizinhança, isso é:",
    options: ["Comensalismo", "Amensalismo", "Mutualismo", "Inquilinismo"],
    answer: 1,
    explain: "Amensalismo (ou antibiose): uma espécie inibe o crescimento de outra, que é prejudicada; o produtor não é beneficiado de forma direta."
  },
  {
    difficulty: "medium",
    tag: "Desarmônica",
    q: "Dois leões disputando território exemplificam:",
    options: ["Competição intraespecífica", "Competição interespecífica", "Comensalismo", "Canibalismo"],
    answer: 0,
    explain: "Mesma espécie disputando recursos = competição intraespecífica (desarmônica)."
  },
  {
    difficulty: "medium",
    tag: "Harmônica",
    q: "Peixe-palhaço e anêmona do mar costumam ilustrar:",
    options: ["Comensalismo", "Mutualismo", "Parasitismo", "Inquilinismo"],
    answer: 1,
    explain: "Ambos se beneficiam: proteção para o peixe e restos alimentares/movimentação da água para a anêmona (mutualismo)."
  },

  {
    difficulty: "hard",
    tag: "Desarmônica",
    q: "A herbivoria é, em geral, classificada como:",
    options: ["Harmônica interespecífica", "Desarmônica interespecífica", "Harmônica intraespecífica", "Desarmônica intraespecífica"],
    answer: 1,
    explain: "O herbívoro se alimenta de partes de plantas causando prejuízo ao vegetal: desarmônica entre espécies diferentes."
  },
  {
    difficulty: "hard",
    tag: "Conceitos",
    q: "A relação em que um organismo obtém alimento sem matar de imediato o outro e pode apresentar ciclos complexos de vida é:",
    options: ["Predação", "Parasitismo", "Comensalismo", "Protocooperação"],
    answer: 1,
    explain: "Parasitismo envolve ciclos e adaptação ao hospedeiro; na predação, a presa é geralmente morta."
  },
  {
    difficulty: "hard",
    tag: "Harmônica",
    q: "No <strong>comensalismo</strong>, o comensal se beneficia de restos alimentares do outro. Qual alternativa melhor representa?",
    options: ["Urubu e carcaça deixada por leão", "Rêmora presa ao tubarão para transporte e alimento", "Orquídea sobre árvore", "Corais formando recifes"],
    answer: 1,
    explain: "A rêmora desloca-se com o tubarão e aproveita restos de alimento, enquanto o tubarão não é afetado (comensalismo)."
  },
  {
    difficulty: "hard",
    tag: "Intraespecífica",
    q: "Abelhas com divisão de trabalho (rainha, operárias, zangões) exemplificam:",
    options: ["Colônia", "Sociedade", "Mutualismo", "Protocooperação"],
    answer: 1,
    explain: "Sociedade: indivíduos da mesma espécie, separados, cooperando com hierarquia e divisão de trabalho."
  },
  {
    difficulty: "hard",
    tag: "Desarmônica",
    q: "Quando indivíduos da mesma espécie se alimentam uns dos outros por escassez de recursos, temos:",
    options: ["Amensalismo", "Canibalismo", "Competição interespecífica", "Mutualismo"],
    answer: 1,
    explain: "Canibalismo é relação intraespecífica desarmônica de alimentação entre indivíduos da mesma espécie."
  }
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

const screenStart = $("#screen-start");
const screenQuiz = $("#screen-quiz");
const screenEnd = $("#screen-end");
const questionText = $("#questionText");
const optionsWrap = $("#options");
const tagEl = $("#tag");
const explanation = $("#explanation");
const progressBar = $("#progressBar");
const counter = $("#counter");

const btnStart = $("#btnStart");
const btnNext = $("#btnNext");
const btnSkip = $("#btnSkip");
const btnRetry = $("#btnRetry");
const btnReview = $("#btnReview");
const selectCount = $("#questionCount");
const selectDiff = $("#difficulty");
const reviewEl = $("#review");

const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");
let confettiPieces = [];

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function launchConfetti() {
  const N = 220;
  confettiPieces = Array.from({ length: N }, () => ({
    x: Math.random() * confettiCanvas.width,
    y: -10 - Math.random() * 60,
    r: 2 + Math.random() * 4,
    vx: -1 + Math.random() * 2,
    vy: 2 + Math.random() * 3,
    a: Math.random() * Math.PI * 2
  }));
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  ctx.globalAlpha = 0.9;
  confettiPieces.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.a += 0.05;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.a);
    ctx.fillStyle = ["#22d3ee","#a78bfa","#34d399","#f472b6","#fde68a"][Math.floor(Math.random()*5)];
    ctx.fillRect(-p.r, -p.r, p.r*2, p.r*2);
    ctx.restore();
  });
  confettiPieces = confettiPieces.filter(p => p.y < confettiCanvas.height + 20);
  requestAnimationFrame(drawConfetti);
}
requestAnimationFrame(drawConfetti);

let deck = [];
let current = 0;
let score = 0;
let answered = false;
let history = [];

function buildDeck() {
  const count = parseInt(selectCount.value, 10);
  const diff = selectDiff.value;
  let pool = QUESTIONS.slice();
  if (diff !== "mix") {
    pool = pool.filter(q => q.difficulty === diff);
  }
  deck = shuffle(pool).slice(0, count);
  current = 0; score = 0; history = [];
  updateProgress();
  counter.textContent = `0/${deck.length}`;
}

function showScreen(name) {
  [screenStart, screenQuiz, screenEnd].forEach(s => s.classList.remove("show"));
  if (name === "start") screenStart.classList.add("show");
  if (name === "quiz") screenQuiz.classList.add("show");
  if (name === "end") screenEnd.classList.add("show");
}

function updateProgress() {
  const pct = deck.length ? (current / deck.length) * 100 : 0;
  progressBar.style.width = pct + "%";
}

function renderQuestion() {
  answered = false;
  btnNext.disabled = true;
  explanation.hidden = true;
  explanation.textContent = "";
  const q = deck[current];
  tagEl.textContent = q.tag;
  questionText.innerHTML = q.q;
  optionsWrap.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = opt;
    btn.addEventListener("click", () => selectOption(i));
    optionsWrap.appendChild(btn);
  });
  counter.textContent = `${current + 1}/${deck.length}`;
  updateProgress();
}

function selectOption(index) {
  if (answered) return;
  answered = true;
  const q = deck[current];
  const optionButtons = $$(".option");
  optionButtons.forEach((b, i) => {
    if (i === q.answer) b.classList.add("correct");
    if (i === index && i !== q.answer) b.classList.add("wrong");
    b.disabled = true;
  });
  const isCorrect = index === q.answer;
  if (isCorrect) score++;
  explanation.hidden = false;
  explanation.innerHTML = (isCorrect ? "✅ " : "❌ ") + q.explain;
  btnNext.disabled = false;
  history.push({ ...q, chosen: index, correct: isCorrect });
}

function nextQuestion() {
  if (current < deck.length - 1) {
    current++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function skipQuestion() {
  if (!answered) {
    history.push({ ...deck[current], chosen: -1, correct: false });
  }
  nextQuestion();
}

function finishQuiz() {
  showScreen("end");
  const pct = Math.round((score / deck.length) * 100);
  document.getElementById("scoreNumber").textContent = pct + "%";
  let msg = "";
  if (pct === 100) msg = "Perfeito! Você domina relações ecológicas.";
  else if (pct >= 80) msg = "Excelente! Quase um(a) ecólogo(a)!";
  else if (pct >= 60) msg = "Bom trabalho! Continue praticando.";
  else if (pct >= 40) msg = "Você está no caminho. Bora revisar?";
  else msg = "Sem drama! Errar faz parte do aprendizado. Tente novamente!";
  document.getElementById("scoreMsg").textContent = msg;

  if (pct >= 80) launchConfetti();
}

function showReview() {
  reviewEl.hidden = false;
  reviewEl.innerHTML = "";
  history.forEach((h, idx) => {
    const div = document.createElement("div");
    div.className = "review-item " + (h.correct ? "correct" : "wrong");
    const chosenText = h.chosen >= 0 ? h.options[h.chosen] : "<em>Pulada</em>";
    div.innerHTML = `
      <div class="tag">${h.tag}</div>
      <div style="font-weight:800;margin:6px 0">${idx+1}. ${h.q}</div>
      <div>✅ Correta: <strong>${h.options[h.answer]}</strong></div>
      <div>📝 Você: ${chosenText}</div>
      <div style="margin-top:6px;opacity:.9">${h.explain}</div>
    `;
    reviewEl.appendChild(div);
  });
}


btnStart.addEventListener("click", () => {
  buildDeck();
  showScreen("quiz");
  renderQuestion();
});
btnNext.addEventListener("click", nextQuestion);
btnSkip.addEventListener("click", skipQuestion);
btnRetry.addEventListener("click", () => {
  showScreen("start");
  reviewEl.hidden = true;
  progressBar.style.width = "0%";
});
btnReview.addEventListener("click", showReview);





