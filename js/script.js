const tela = document.querySelector(".tela");

let seletorTamanho = document.getElementById('sizeInput')

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

seletorTamanho.addEventListener('input', function () {
    document.getElementById("sizeNumber").textContent = `${seletorTamanho.value} x ${seletorTamanho.value}`;
});

seletorTamanho.addEventListener('change', function () {
    criadorDeGrid(seletorTamanho.value);
})

window.onload = function () {
    criadorDeGrid(seletorTamanho.value);
}