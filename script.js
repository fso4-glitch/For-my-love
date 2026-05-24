const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const openBtn = document.getElementById("openBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const noMessage = document.getElementById("noMessage");

const musicPlayer = document.getElementById("musicPlayer");

/* ABRIR TELA 2 */
openBtn.addEventListener("click", () => {

  screen1.classList.remove("active");
  screen2.classList.add("active");

});

/* BOTÃO SIM */
yesBtn.addEventListener("click", () => {

  screen2.classList.remove("active");
  screen3.classList.add("active");

  musicPlayer.play();

});

/* BOTÃO NÃO */
noBtn.addEventListener("click", () => {

  noMessage.style.display = "block";

});