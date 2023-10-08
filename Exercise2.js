class Personnage {
    constructor(nom, probaDie, probaDodge, revenge, hp, hit, dmg) {
      this.nom = nom;
      this.probaDie = probaDie;
      this.probaDodge = probaDodge;
      this.revenge = revenge;
      this.hp = hp = hp;
      this.hit = hit;
      this.dmg = dmg;

      let nerd = new Personnage("Nerd", 0.7, 0.3, 0.3, 1, 0, 10);
      let jock = new Personnage("Jock", 0.3, 0.7, 1, 1, 0, 10);
      let cheerleader = new Personnage("Cheerleader", 0.7, 0.7, 0.3, 1, 0, 10);
      let weirdo = new Personnage("Weirdo", 0.4, 0.4, 0.4, 1, 0, 10);
      let bro = new Personnage("Bro", 0.4, 0.7, 0.9, 1, 0, 10);
      let jason = new Personnage("Jason", 0, 0, 0, 100, 1, 1)

      attaquer(cible); {
        // Dodge check
        if (Math.random() < this.probadodge) {
          // Dodge check fail
          console.log(`${this.nom} attaque ${cible.nom}, il n'ésquive pas a temps et meurs.`);
          // hp reduced call
          cible.takendmg(this.dmg);
        } else {
          // dodge check succes
          console.log(`${this.nom} rate son attaque contre ${cible.nom} et subis ${cible.dmg}.`);
          this.takedmg(cible.nom)

          if (bro.hp <= 0);
          (jason.hp -= bro.dmg);
          console.log('Bro meurs, et comme par la bonté divine des cieux, réussi à infliger des dégats au Tueur. Jason as ',$,jason.hp,' point de vie restant')

          if(weirdo.hp <= 0);
          (jason.hp -= weirdo.dmg)
          console.log('Weirdo meurs, mais avant cela, sors son couteau et avec un dernier souffle, poignarde le tueur. Jason as ',$,jason.hp,' point de vie restant')

          if(cheerleader.hp <= 0);
          (jason.hp -= cheerleader.dmg)
          console.log('Cheerleader meurs, mais en tombant, fait trébuché le tueur et lui inflige un dernier brin de dégats. Jason as ',$,jason.hp,' point de vie restant')

          if(jock.hp <= 0);
          (jason.hp -= jock.dmg)
          console.log('Jock meurs, mais avec son énorme carure, fait mal au tueur en lui tombant decu. Jason as ',$,jason.hp,' point de vie restant')

          if(nerd.hp <= 0);
          (jason.hp -= nerd.dmg)
          console.log('Nerd meurs, mais le tueur prend des dégats, on sait pas pourquoi. Jason as ',$,jason.hp,' point de vie restant')


          if (jason.hp <= 0) {
            console.log("Jason est mort! Nous pouvons enfin profiter de nos vancances au châlet!");
          } else if (nerd.hp <= 0) { //je sais pas comment choisir tout les membres d'une classe sauf un, desoler
            console.log("Tout le monde est mort, Jason s'échappe, mais reste dans les parages pour ses prochaines victimes.");
          } else {
            console.log("Le silence prend son emprise sur les lieux, personne survie a cette nuit.");
          }
        }
      }
    }
  }

