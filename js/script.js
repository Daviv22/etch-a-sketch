const tela = document.querySelector(".tela");

let tamanho = document.getElementById('sizeInput')

function criadorDeGrid(tamanho) {
    tela.style.gridTemplateColumns = `repeat(${tamanho}, 1fr)`;
    tela.style.gridTemplateRows = `repeat(${tamanho}, 1fr)`;
}

tamanho.addEventListener('input', function () {
    const sizeNumber = document.getElementById("sizeNumber")
        .textContent = `${tamanho.value} x ${tamanho.value}`
    criadorDeGrid(tamanho.value)
});