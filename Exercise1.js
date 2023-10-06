

let santeMentale = 10;
let nbEssais = 0; // Initialisation du compteur d'essais.
let nbFeuRouge = 0; // Nombre de feu rouges.

for (let i = 0; i < 30; i++) {

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 5)
console.log(rndInt)

if (rndInt === 1){
    santeMentale -= 1; // Le chiffre 1 réduit la santé mentale de 1.
    console.log(`Cette musique... Anissa de Wejdenne?! Noooooon... *le joueur change de taxi. Santé mentale actuelle : ${santeMentale},  *nombres de feu rouges passé : ${nbFeuRouge}*`);
    nbFeuRouge += 1; // Le chiffre 1 augmente le nb de Feu Rouges passé de 1.
}

if (rndInt =2){
nbFeuRouge += 1; // Augmente le nombre de feu rouge passé de 1.
console.log(`On est bien, c'est du Daft Punk! *nombres de feu rouges passé : ${nbFeuRouge}*`)
}

if (rndInt =3){
nbFeuRouge += 1; // Augmente le nombre de feu rouge passé de 1.
console.log(`Stylé, du Nirvana! *nombres de feu rouges passé : ${nbFeuRouge}*`)
}

if (rndInt =4){
nbFeuRouge += 1; // Augmente le nombre de feu rouge passé de 1.
console.log(`Excellent! AC/DC!! *nombres de feu rouges passé : ${nbFeuRouge}*`)
}

if (rndInt =5){
nbFeuRouge += 1; // Augmente le nombre de feu rouge passé de 1.
console.log(`Aya Nakamura, du moment que c'est pas du Wejdenne... *nombres de feu rouges passé : ${nbFeuRouge}*`)
}

if (santeMentale <= 0 ) {
    console.log("Le joueur finis aspiré par la radio et disparais dans les néant.");
    nbEssais += 1;
  } else if (nbFeuRouge == 30) { 
    console.log("Le joueur a terminé l'aventure avec une santé mentale finale de : " + santeMentale);
    nbEssais += 1;
  }

  console.log(`Nombre d'essais effectués : ${nbEssais}`);
}
