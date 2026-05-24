function abrirPedido(){
document.getElementById("inicio").classList.add("hidden");
document.getElementById("pedido").classList.remove("hidden");
}

function aceitou(){
document.getElementById("pedido").classList.add("hidden");
document.getElementById("final").classList.remove("hidden");

document.getElementById("musica").play();
}

function recusou(){
document.getElementById("pedido").innerHTML=`
<h1>Talvez você ainda não esteja pronta ❤️</h1>

<p class="texto">
e tá tudo bem...

eu respeito totalmente sua decisão.

o mais importante pra mim
sempre vai ser te ver feliz ✨

mas precisava te mostrar
o quanto você é especial pra mim.
</p>

<button onclick="location.reload()">Voltar</button>
`;
}