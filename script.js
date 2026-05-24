/* TEXTO DIGITANDO */
const typing =
document.getElementById("typing");

const text = `
24 de dezembro de 2025…

eu ainda não fazia ideia
que naquele dia
Deus colocaria na minha vida
a pessoa que mudaria completamente meu coração ❤️

porque foi ali
que eu encontrei alguém
que me trouxe paz,
felicidade,
amor
e a vontade de viver
um futuro inteiro ao lado dela ✨
`;

let i = 0;

function escrever(){

  if(i < text.length){

    typing.innerHTML += text.charAt(i);

    i++;

    setTimeout(escrever,50);

  }

}

escrever();

/* TELAS */
const screen1 =
document.getElementById("screen1");

const screen2 =
document.getElementById("screen2");

const screen3 =
document.getElementById("screen3");

const screen4 =
document.getElementById("screen4");

const screen5 =
document.getElementById("screen5");

const countScreen =
document.getElementById("countScreen");

const proposalScreen =
document.getElementById("proposalScreen");

const finalScreen =
document.getElementById("finalScreen");

/* BOTÕES */
document.getElementById("startBtn")
.addEventListener("click", () => {

  screen1.classList.remove("active");

  screen2.classList.add("active");

});

document.getElementById("next1")
.addEventListener("click", () => {

  screen2.classList.remove("active");

  screen3.classList.add("active");

});

document.getElementById("next2")
.addEventListener("click", () => {

  screen3.classList.remove("active");

  screen4.classList.add("active");

});

document.getElementById("next3")
.addEventListener("click", () => {

  screen4.classList.remove("active");

  screen5.classList.add("active");

});

document.getElementById("countBtn")
.addEventListener("click", () => {

  screen5.classList.remove("active");

  countScreen.classList.add("active");

  iniciarContagem();

});

/* CONTAGEM */
function iniciarContagem(){

  const count =
  document.getElementById("count");

  let numero = 3;

  count.innerHTML = numero;

  const intervalo =
  setInterval(() => {

    numero--;

    if(numero > 0){

      count.innerHTML = numero;

    }else{

      clearInterval(intervalo);

      count.innerHTML = "❤️";

      setTimeout(() => {

        countScreen.classList.remove("active");

        proposalScreen.classList.add("active");

      },1500);

    }

  },1000);

}

/* BOTÕES WHATSAPP */
const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

/* SIM */
yesBtn.addEventListener("click", () => {

  proposalScreen.classList.remove("active");

  finalScreen.classList.add("active");

  chuva();

  const btn =
  document.createElement("a");

  btn.href =
  "https://wa.me/5533997001131?text=eu%20aceito%20namorar%20com%20vc%20amor%20%E2%9D%A4%EF%B8%8F";

  btn.target = "_blank";

  btn.className =
  "whats-btn";

  btn.innerHTML =
  "se você aceita aperta aqui 💖";

  finalScreen.appendChild(btn);

});

/* NÃO */
noBtn.addEventListener("click", () => {

  const btn =
  document.createElement("a");

  btn.href =
  "https://wa.me/5533997001131?text=amor%20eu%20ainda%20n%C3%A3o%20estou%20pronta%20agora%20%E2%9D%A4%EF%B8%8F";

  btn.target = "_blank";

  btn.className =
  "whats-btn";

  btn.innerHTML =
  "se você acha que não é agora aperta aqui 🥺";

  proposalScreen.appendChild(btn);

});

/* CHUVA */
function chuva(){

  setInterval(() => {

    const heart =
    document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.top = "-20px";

    heart.style.fontSize =
    Math.random() * 20 + 20 + "px";

    heart.style.pointerEvents = "none";

    heart.style.animation =
    "fall 4s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    },4000);

  },250);

}

/* ANIMAÇÃO */
const style =
document.createElement("style");

style.innerHTML = `
@keyframes fall{

  from{
    transform:translateY(-20px);
    opacity:1;
  }

  to{
    transform:translateY(110vh);
    opacity:0;
  }

}
`;

document.head.appendChild(style);

const noText =
document.getElementById("noText");

const noWhatsappBtn =
document.getElementById("noWhatsappBtn");

document.getElementById("noBtn")
.addEventListener("click", () => {

  noText.style.display = "block";

  noWhatsappBtn.style.display = "block";

});

/* NÃO */
document.getElementById("noBtn")
.addEventListener("click", () => {

document.getElementById("noText")
.style.display = "block";

document.getElementById("noWhatsappBtn")
.style.display = "block";

});

/* BOTÃO WHATSAPP NÃO */
document.getElementById("noWhatsappBtn")
.addEventListener("click", () => {

window.open(
"https://wa.me/5533997001131?text=acho%20que%20ainda%20não%20é%20agora%20🥺",
"_blank"
);

});
