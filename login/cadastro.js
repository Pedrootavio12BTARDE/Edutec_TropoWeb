const form = document.getElementById('formCadastro');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');
const mensagemErro = document.getElementById('mensagemErro');

form.addEventListener('submit', function(event) {
  if (senha.value !== confirmarSenha.value) {
    event.preventDefault();
    mensagemErro.textContent = 'As senhas não coincidem!';
  } else {
    mensagemErro.textContent = '';
    alert('Cadastro realizado com sucesso!');
    
  }
});

