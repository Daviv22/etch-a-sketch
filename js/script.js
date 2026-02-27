const tela = document.querySelector(".tela");

let seletorTamanho = document.getElementById('sizeInput');
let colorSelector = document.getElementById('colorSelector');
let color = 'red';
let isPainting = false;

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

function startPainting (e) {
    isPainting = true;
    paintCell(e.target)
}

function paint(e) {
    if (!isPainting) return
    paintCell(e.target)
}

function stopPainting() {
    isPainting = false
}

function paintCell(target) {
    if (!target.classList.contains('quadradinho')) return
    target.style.backgroundColor = color;
}

seletorTamanho.addEventListener('input', function () {
    document.getElementById("sizeNumber").textContent = `${seletorTamanho.value} x ${seletorTamanho.value}`;
});

seletorTamanho.addEventListener('change', function () {
    criadorDeGrid(seletorTamanho.value);
})

colorSelector.addEventListener('input', function (e) {
    color = e.target.value;
})

tela.addEventListener('pointerdown', startPainting)
tela.addEventListener('pointermove', paint)
document.addEventListener('pointerup', stopPainting)

window.onload = function () {
    criadorDeGrid(seletorTamanho.value);
}