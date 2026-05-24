const startBtn = document.getElementById("startBtn");

const inicio = document.getElementById("inicio");
const universo = document.getElementById("universo");

const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");

const closeBtn = document.getElementById("closeBtn");

const stars = document.querySelectorAll(".star");

const specialStar = document.getElementById("specialStar");

const finalScreen = document.getElementById("finalScreen");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const yesScreen = document.getElementById("yesScreen");

const noText = document.getElementById("noText");

let opened = 0;

/* COMEÇAR */
startBtn.addEventListener("click", () => {

  inicio.classList.remove("active");
  universo.classList.add("active");

});

/* ESTRELAS */
stars.forEach((star) => {

  star.addEventListener("click", () => {

    /* ESPECIAL */
    if(star.classList.contains("special")){

      if(opened >= 3){

        universo.classList.remove("active");
        finalScreen.classList.add("active");

      }else{

        alert("abra as outras estrelas primeiro ❤️");

      }

      return;
    }

    /* CARTA */
    messageText.innerText = star.dataset.text;

    messageBox.classList.remove("hidden");

    if(!star.classList.contains("opened")){

      star.classList.add("opened");
      opened++;

      star.style.opacity = "0.5";
    }

  });

});

/* FECHAR CARTA */
closeBtn.addEventListener("click", () => {

  messageBox.classList.add("hidden");

});

/* SIM */
yesBtn.addEventListener("click", () => {

  finalScreen.classList.remove("active");

  yesScreen.classList.add("active");

  criarCoracoes();

});

/* NÃO */
noBtn.addEventListener("click", () => {

  noText.innerHTML = `
  talvez você ainda não esteja pronta...
  <br><br>
  e eu respeito totalmente isso ❤️
  `;

});

/* CORAÇÕES */
function criarCoracoes(){

  setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "25px";

    heart.style.animation = "subir 4s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    },4000);

  },300);

}

/* ANIMAÇÃO */
const style = document.createElement("style");

style.innerHTML = `
@keyframes subir{
  from{
    transform:translateY(0);
    opacity:1;
  }

  to{
    transform:translateY(-120vh);
    opacity:0;
  }
}
`;

document.head.appendChild(style);