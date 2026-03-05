const tela = document.querySelector(".tela");

let seletorTamanho = document.getElementById('sizeInput');
let colorSelector = document.getElementById('colorSelector');
let color = document.getElementById('colorSelector').value;
let isPainting = false;
let isColorModeActive = true;

const eraserMode = document.getElementById('borracha-btn')
const colorMode = document.getElementById('color-btn')
const clearButton = document.getElementById('clear-btn')

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

function changeStyleButton () {
    if (!isColorModeActive) {

        eraserMode.style.backgroundColor = '#0a6610';
        eraserMode.style.color = 'white';

        colorMode.style.backgroundColor = '#fff';
        colorMode.style.color = '#c0392b';

    } else {

        colorMode.style.backgroundColor = '#0a6610';
        colorMode.style.color = 'white';


        eraserMode.style.backgroundColor = '#fff';
        eraserMode.style.color = '#c0392b';
    }
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

eraserMode.addEventListener('click', function () {
    color = 'white';
    isColorModeActive = false;
    !isColorModeActive && changeStyleButton();
})

colorMode.addEventListener('click', function () {
    color = document.getElementById('colorSelector').value;
    isColorModeActive = true
    isColorModeActive && changeStyleButton()
})

clearButton.addEventListener('click', function () {
    criadorDeGrid(seletorTamanho.value);
})

tela.addEventListener('pointerdown', startPainting)
tela.addEventListener('pointermove', paint)
document.addEventListener('pointerup', stopPainting)

window.onload = function () {
    criadorDeGrid(seletorTamanho.value);
}