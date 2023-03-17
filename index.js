const numeroAleatorio1 = Math.floor(Math.random () *6) + 1;//1-6

const mudarDeDado = "dice"+ numeroAleatorio1 +".png";//dice1.png

const mudarImagem = "images/"+ mudarDeDado;//images/dice1.png - image/dice6.png

const imagem1 = document.querySelectorAll("img") [0];

imagem1.setAttribute("src", mudarImagem);

const numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;

const mudarDeDado2 = "dice" + numeroAleatorio2 + ".png";

const mudarImagem2 = "images/" +mudarDeDado2;

const imagem2 = document.querySelectorAll ("img") [1];

imagem2.setAttribute ("src", mudarImagem2);

if (numeroAleatorio1 > numeroAleatorio2) {
   document.querySelector("h1").innerHTML = "Player 1 Wins"; 
}

else if (numeroAleatorio1 < numeroAleatorio2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";  
}

else {
document.querySelector("h1").innerHTML = "Draw";
}