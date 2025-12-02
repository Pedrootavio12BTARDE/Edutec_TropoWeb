const main = document.querySelector("main");

async function carregarRanking() {
    try {
        const response = await fetch("https://back-end-tropo-web.vercel.app/ranking");

        if (!response.ok) {
            throw new Error("Erro no servidor");
        }

        const ranking = await response.json();

        const titulo = `<h1 class="titulo">Ranking</h1>`;
        const cardsContainer = `<div class="cards"></div>`;

        main.innerHTML = titulo + cardsContainer;

        const container = document.querySelector(".cards");

        ranking.forEach((user, index) => {
            container.innerHTML += `
                <div class="card ${index === 0 ? "primeiro" : ""}">

                    <div class="foto"></div>

                    <h3>${index + 1}º Lugar</h3>
                    <p><strong>Nome:</strong> ${user.name}</p>
                    <p><strong>Acertos:</strong> ${user.acertos}</p>
                    <p><strong>Tempo:</strong> ${user.tempo}s</p>
                </div>
            `;
        });

    } catch (error) {
        console.error("Erro ao carregar ranking:", error);
    }
}

carregarRanking();
