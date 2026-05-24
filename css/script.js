function abrirCarta() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("pedido").style.display = "block";
}

function respostaSim() {
    document.getElementById("pedido").style.display = "none";
    document.getElementById("final").style.display = "block";

    document.getElementById("musica").play();
}

function respostaNao() {
    document.getElementById("resposta").innerHTML = `
        <h1>Tá tudo bem 🤍</h1>
        <p>
        talvez você ainda não esteja pronta...
        e eu respeito totalmente isso.
        o carinho que sinto por você continua aqui ✨
        </p>
    `;
}