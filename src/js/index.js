const botoes = document.querySelectorAll(".botao");
const consoles = document.querySelectorAll(".console");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const consoleSelcionado = document.querySelector(".console.selecionado");
        consoleSelcionado.classList.remove("selecionado");

        consoles[indice].classList.add("selecionado");

    });
});

