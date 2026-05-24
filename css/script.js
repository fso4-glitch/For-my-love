function abrirCarta() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
}

function respostaSim() {
    document.getElementById("resposta").innerHTML = `
        <h1>Você disse sim 💜</h1>
        <p>
        desde o momento que você entrou na minha vida,
        meus dias ficaram mais bonitos.
        teu sorriso tem um jeito de acalmar tudo.
        eu quero viver momentos lindos com você,
        te apoiar, cuidar de você e construir memórias juntos 💖
        obrigado por existir ✨
        </p>

        <audio controls autoplay>
            <source src="musica.mp3" type="audio/mpeg">
        </audio>
    `;
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