/* TEXTO DIGITANDO */
const typing =
document.getElementById("typing");

const text = `
24 de dezembro de 2025...

eu ainda não sabia...
mas naquele dia
eu encontraria alguém
que mudaria tudo ❤️
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

/* MÚSICA */
const music =
document.getElementById("music");

/* BOTÕES */
document.getElementById("startBtn")
.addEventListener("click", () => {

  screen1.classList.remove("active");

  screen2.classList.add("active");

});

/* FILME -> MÚSICA */
document.getElementById("next1")
.addEventListener("click", () => {

  screen2.classList.remove("active");

  screen3.classList.add("active");

  /* COMEÇA A MÚSICA */
  music.volume = 0;

  music.play().catch(() => {});

  /* FADE */
  let volume = 0;

  const fade = setInterval(() => {

    if(volume < 0.5){

      volume += 0.05;

      music.volume = volume;

    }else{

      clearInterval(fade);

    }

  },200);

});

/* MÚSICA -> FOTOS */
document.getElementById("next2")
.addEventListener("click", () => {

  screen3.classList.remove("active");

  screen4.classList.add("active");

});

/* FOTOS -> TEXTO */
document.getElementById("next3")
.addEventListener("click", () => {

  screen4.classList.remove("active");

  screen5.classList.add("active");

});

/* TEXTO -> CONTAGEM */
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

  const intervalo =
  setInterval(() => {

    numero--;

    if(numero > 0){

      count.innerHTML = numero;

    }else{

      clearInterval(intervalo);

      count.innerHTML = "❤️";

      /* MÚSICA AUMENTA */
      let volume = music.volume;

      const fade =
      setInterval(() => {

        if(volume < 1){

          volume += 0.05;

          music.volume = volume;

        }else{

          clearInterval(fade);

        }

      },200);

      setTimeout(() => {

        countScreen.classList.remove("active");

        proposalScreen.classList.add("active");

      },1500);

    }

  },1000);

}

/* SIM */
document.getElementById("yesBtn")
.addEventListener("click", () => {

  proposalScreen.classList.remove("active");

  finalScreen.classList.add("active");

  chuva();

});

/* NÃO */
document.getElementById("noBtn")
.addEventListener("click", () => {

  document.getElementById("noText")
  .innerHTML = `
  talvez você ainda não esteja pronta...
  <br><br>
  e eu respeito totalmente isso ❤️
  `;

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

/* CARROSSEL */
const slides =
document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

  slides[current]
  .classList.remove("active");

  current++;

  if(current >= slides.length){

    current = 0;

  }

  slides[current]
  .classList.add("active");

},3000);