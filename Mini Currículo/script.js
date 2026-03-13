// pega os elementos do html
let botaoMensagem = document.getElementById("btnMensagem");
let botaoCor = document.getElementById("btnCor");
let mensagem = document.getElementById("mensagem");
let card = document.querySelector(".apresentacao");

// quando clicar no botão de mensagem
botaoMensagem.addEventListener("click", function () {
    mensagem.innerText = "Olá! Seja bem-vindo ao meu mini currículo.";
});

// variável para controlar a troca de cor
let corAtual = 0;

// quando clicar no botão de mudar cor
botaoCor.addEventListener("click", function () {
    if (corAtual == 0) {
        card.style.backgroundColor = "#dbeafe";
        corAtual = 1;
    } else {
        card.style.backgroundColor = "white";
        corAtual = 0;
    }
});
