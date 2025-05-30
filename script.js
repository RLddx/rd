REMOVERalert("Olá curioso, seja bem vindo ao site do QUIZ DO RD!")

botaoIniciar = document.querySelector(".iniciar")

botaoIniciar.addEventListener("click", iniciarJogo)

function iniciarJogo() {
  telaInicial = document.querySelector(".tela-inicial")
  telaInicial.style.display = "none"// Tab to edit
}
