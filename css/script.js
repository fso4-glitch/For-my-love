function typeText(element, text, speed = 40) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

window.onload = () => {
    typeText(document.getElementById("title1"), "Eu preparei algo pra você...");
    setTimeout(() => {
        typeText(document.getElementById("text1"), "clica e confia em mim ❤️");
    }, 1200);
};

function next() {
    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.remove("hidden");

    typeText(document.getElementById("title2"), "Você mudou tudo...");
    setTimeout(() => {
        typeText(document.getElementById("text2"), "e eu não quero mais imaginar minha vida sem você.");
    }, 1200);
}

function next2() {
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step3").classList.remove("hidden");
}

const musica = new Audio("musica.mp3");

function yes() {
    document.body.innerHTML = `
        <div class="hero">
            <h1 style="color:#ff758f">Agora você é minha ❤️</h1>
            <p>
                Eu prometo cuidar de você, te fazer feliz
                e construir algo lindo juntos todos os dias.
            </p>
        </div>
    `;
    musica.play();
}

function no() {
    document.body.innerHTML = `
        <div class="hero">
            <h1>Eu entendo...</h1>
            <p>
                Talvez você não esteja pronta agora,
                e tudo bem. Eu respeito você de verdade.
            </p>
        </div>
    `;
}

setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";

    setTimeout(() => heart.remove(), 5000);
}, 400);