const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const usuario = formCadastro.querySelector("input[placeholder='Usuário']").value;
  const email = formCadastro.querySelector("input[type='email']").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  if (usuario.trim() === "" || email.trim() === "" || senha.trim() === "" || confirmarSenha.trim() === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  window.location.href = "../index.html";
});


function togglePassword(idCampo, icon) {
  const campo = document.getElementById(idCampo);
  if (campo.type === "password") {
    campo.type = "text";
    icon.classList.remove("bx-show");
    icon.classList.add("bx-hide");
  } else {
    campo.type = "password";
    icon.classList.remove("bx-hide");
    icon.classList.add("bx-show");
  }
}
