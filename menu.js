const menu = document.querySelector("nav.menu");

function initMenu() {
    if (!menu) return;  // Garante que o menu existe na página

    const user = JSON.parse(sessionStorage.getItem("user"));

    // Limpa o menu antes de adicionar os links
    menu.innerHTML = "";

    if (user) {
        // Menu para usuário logado
        menu.innerHTML += `
            <a href="./pages/ranking.html">Ranking</a>
            <a href="./conteudo/conteudo-pagina-veado.html">Conteúdo</a>
            <a href="./sobre-nos/sobre.html">Sobre Nós</a>
            <a href="./pages/quiz.html">Quiz</a>
            <span style="
                font-family: 'Akira Expanded', sans-serif; 
                color: white; 
                font-size: 1.1rem;
                margin-left: 1rem;
            ">Usuário: ${user.name}</span>
            <button id="logout" style="
                margin-left: 1rem;
                padding: 0.4rem 0.8rem;
                border-radius: 5px;
                border: none;
                background: #A6FF00;
                color: #000;
                cursor: pointer;
                font-weight: bold;
            ">Sair</button>
        `;

        // Evento para logout
        const logoutBtn = document.querySelector("#logout");
        logoutBtn.addEventListener("click", () => {
            sessionStorage.removeItem("user");
            window.location.href = "../index.html";
        });

        return;
    }

    // Menu para usuário não logado
    menu.innerHTML += `
        <a href="./pages/ranking.html">Ranking</a>
        <a href="./conteudo/conteudo-pagina-veado.html">Conteúdo</a>
        <a href="./sobre-nos/sobre.html">Sobre Nós</a>
        <a href="./pages/quiz.html">Quiz</a>
        <a href="./pages/cadastro.html">Sign up</a>
        <a href="./pages/login.html">Login</a>
    `;
}

// Inicializa o menu ao carregar a página
initMenu();
