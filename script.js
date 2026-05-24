const startBtn = document.getElementById("startBtn");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");

const stars = document.querySelectorAll(".star");

const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");

const closeBtn = document.getElementById("closeBtn");
const closeModal = document.getElementById("closeModal");

const specialStar = document.getElementById("specialStar");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const noMessage = document.getElementById("noMessage");

const starNumber = document.getElementById("starNumber");

let opened = 0;

/* COMEÇAR */
startBtn.addEventListener("click", () => {

  screen1.classList.remove("active");
  screen2.classList.add("active");

});

/* ESTRELAS */
stars.forEach((star) => {

  star.addEventListener("click", () => {

    /* ESPECIAL */
    if(star.classList.contains("special")){

      if(opened >= 3){

        screen2.classList.remove("active");
        screen3.classList.add("active");

      }else{

        alert("abra as outras estrelas primeiro ❤️");

      }

      return;
    }

    modal.classList.remove("hidden");

    modalText.innerText = star.dataset.text;

    starNumber.innerText = star.dataset.id;

    if(!star.classList.contains("opened")){

      star.classList.add("opened");

      star.style.opacity = "0.4";

      opened++;

    }

  });

});

/* FECHAR */
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

/* SIM */
yesBtn.addEventListener("click", () => {

  screen3.classList.remove("active");
  screen4.classList.add("active");

  chuva();

});

/* NÃO */
noBtn.addEventListener("click", () => {

  noMessage.innerHTML = `
  <br>
  talvez você ainda não esteja pronta...
  <br><br>
  e eu respeito totalmente isso ❤️
  `;

});

/* CHUVA */
function chuva(){

  setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "-20px";

    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    heart.style.pointerEvents = "none";

    heart.style.animation = "fall 4s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    },4000);

  },200);

}

/* ANIMAÇÃO */
const style = document.createElement("style");

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