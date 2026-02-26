const tela = document.querySelector(".tela");

let tamanho = document.getElementById('sizeInput')

function criadorDeGrid(tamanho) {
    tela.innerHTML = "";
    tela.style.gridTemplateColumns = `repeat(${tamanho}, 1fr)`;
    tela.style.gridTemplateRows = `repeat(${tamanho}, 1fr)`;

    for (let i=0; i < tamanho * tamanho; i++) {
        const quadradinho = document.createElement("div");
        quadradinho.classList.add("quadradinho");
        tela.appendChild(quadradinho);

    }
}

tamanho.addEventListener('input', function () {
    const sizeNumber = document.getElementById("sizeNumber")
        .textContent = `${tamanho.value} x ${tamanho.value}`
    criadorDeGrid(tamanho.value)
});