const button = document.querySelector("button")
button.addEventListener("click", login)

async function login(event) {
    event.preventDefault()

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const mensagemDiv = document.querySelector("#mensagem")

    // Limpa mensagem anterior
    if (mensagemDiv) mensagemDiv.textContent = ""

    // Validações
    if (!email || !password) {
        mensagemDiv.textContent = "Preencha todas as informações!"
        mensagemDiv.style.color = "red"
        return
    }

    try {
        const response = await fetch("https://back-end-tropo-web.vercel.app/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }) // <-- Correção aqui
        }).then(res => res.json())

        if (response.message) {
            mensagemDiv.textContent = response.message
            mensagemDiv.style.color = "red"
            return
        }

        // Salva usuário logado
        const { id, name } = response
        sessionStorage.setItem("user", JSON.stringify({ id, name }))

        mensagemDiv.textContent = "Login realizado com sucesso!"
        mensagemDiv.style.color = "white"

        // Redireciona depois de 2s
        setTimeout(() => {
            window.location.href = "../index.html"
        }, 2000)

    } catch (error) {
        mensagemDiv.textContent = "Erro ao fazer login. Tente novamente."
        mensagemDiv.style.color = "red"
        console.error(error)
    }
}
