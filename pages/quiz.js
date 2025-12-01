const perguntas = [
    { enunciado: "Quando duas espécies se beneficiam mutuamente, temos:", alternativas: ["Comensalismo", "Mutualismo", "Predação", "Amensalismo"], correta: 1 },
    { enunciado: "Quando uma espécie se alimenta da outra, causando sua morte:", alternativas: ["Herbivoria", "Predação", "Competição", "Parasitismo"], correta: 1 },
    { enunciado: "Qual relação ecológica ocorre entre plantas competindo por luz?", alternativas: ["Mutualismo", "Competição", "Comensalismo", "Neutralismo"], correta: 1 },
    { enunciado: "Um peixe-palhaço vivendo em uma anêmona é exemplo de:", alternativas: ["Protocooperação", "Amensalismo", "Mutualismo", "Comensalismo"], correta: 2 },
    { enunciado: "Um inseto vivendo dentro de uma planta sem prejudicá-la é:", alternativas: ["Comensalismo", "Parasitismo", "Competição", "Herbivoria"], correta: 0 }
];

const quizContainer = document.getElementById("quiz-container");
const resultadoDiv = document.getElementById("resultado");
const tempoSpan = document.getElementById("tempo");

let tempo = 0;
let intervalo;

// Inicia o timer
function iniciarTimer() {
    intervalo = setInterval(() => {
        tempo++;
        tempoSpan.textContent = tempo;
    }, 1000);
}

// Carrega o quiz na tela
function carregarQuiz() {
    perguntas.forEach((p, index) => {
        const div = document.createElement("div");
        div.className = "pergunta";

        div.innerHTML = `
            <h3>${index + 1}. ${p.enunciado}</h3>
            ${p.alternativas.map((alt, i) => `
                <div class="alternativa">
                    <input type="radio" name="pergunta${index}" value="${i}">
                    ${alt}
                </div>`).join('')}
        `;

        quizContainer.appendChild(div);
    });

    iniciarTimer();
}

// Finaliza o quiz, calcula acertos e salva no backend
async function finalizarQuiz() {
    clearInterval(intervalo);

    let acertos = 0;
    perguntas.forEach((p, i) => {
        const selecionado = document.querySelector(`input[name="pergunta${i}"]:checked`);
        if (selecionado && Number(selecionado.value) === p.correta) acertos++;
    });

    resultadoDiv.classList.remove("escondido");
    resultadoDiv.innerHTML = `
        <p>Você acertou <strong>${acertos}</strong> de <strong>${perguntas.length}</strong> perguntas.</p>
        <p>Seu tempo: <strong>${tempo}</strong> segundos.</p>
    `;

    // Pega usuário logado
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) return alert("Você precisa estar logado para salvar o resultado!");

    // Envia resultado para o backend
    await fetch("http://localhost:3333/salvarResultado", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario: user, acertos, tempo }) // <-- CORRIGIDO
    });

    // Redireciona para ranking
    window.location.href = "../pages/ranking.html";
}

document.getElementById("btnFinalizar").addEventListener("click", finalizarQuiz);

// Inicia o quiz ao carregar a página
carregarQuiz();
