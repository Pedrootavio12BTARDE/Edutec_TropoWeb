const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = formLogin.querySelector("input[type='email']").value;
  const senha = formLogin.querySelector("input[type='password']").value;

  if (usuario.trim() === "" || senha.trim() === "") {
    alert("Preencha todos os campos!");
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


