const button = document.querySelector("button")
button.addEventListener("click", sendUser)

async function sendUser(event){
    event.preventDefault()

    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const age = document.querySelector("#age").value
    const password = document.querySelector("#password").value
    const confirmPassword = document.querySelector("#confirmarSenha").value
    const mensagemDiv = document.querySelector("#mensagem")

    // Limpar mensagem anterior
    mensagemDiv.textContent = ""

    if (!name || !email || !age || !password || !confirmPassword) {
        mensagemDiv.textContent = "Preencha todas as informações!"
        mensagemDiv.style.color = "red"
        return
    }

    if (password !== confirmPassword) {
        mensagemDiv.textContent = "As senhas não coincidem!"
        mensagemDiv.style.color = "red"
        return
    }

    const user = { name, email, age, password }

    try {
        const response = await fetch("http://localhost:3333/cadastrar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user })
        }).then(res => res.json())

        mensagemDiv.textContent = response.message
        mensagemDiv.style.color = "white"

        // Redireciona após 2 segundos (opcional)
        setTimeout(() => {
            window.location.href = "../index.html"
        }, 2000)

    } catch (error) {
        mensagemDiv.textContent = "Erro ao cadastrar. Tente novamente."
        mensagemDiv.style.color = "red"
        console.error(error)
    }
}
