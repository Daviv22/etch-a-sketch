const tela = document.querySelector(".tela");

let tamanho = 16

function criadorDeGrid(tamanho) {
    tela.style.gridTemplateColumns = `repeat(${tamanho}, 1fr)`;
    tela.style.gridTemplateRows = `repeat(${tamanho}, 1fr)`;
}

window.onload = () => {
    criadorDeGrid(tamanho);
}
