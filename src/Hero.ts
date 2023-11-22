//LEVEL 1

import { Weapon } from "./Weapon";

export class Hero {
  private name: string;
  private power: number;
  private life: number;
  weapon: Weapon | undefined;

  constructor(myName: string, myPower: number, nbrLife: number) {
    this.name = myName;
    this.power = myPower;
    this.life = nbrLife;
  }
  // pr contourner le private, je peux donc utiliser mes attibuts hors classe même s'ils sont privés
  pourName(): string {
    return this.name;
    console.log(this.name);
  }
  pourPower(): number {
    return this.power;
  }
  pourLife(): number {
    return this.life;
  }
  //Methode qu'il faut appeler pour lancer l'attaque
  attack(opponent: Hero): void {
    /*opponent de type Hero*/
    opponent.taper(this.power); //l'attaque lance: "qd adversaire tape, il tape avec ses pvr de valeur (qui st précisés ds les valeurs du héros)"
  }

  //qd l'attaque est lancer, ça lance la methode "taper", dc on enlève des vies, car life est diminué au fur et à mesure des coups donnés;
  //cette methode me permet de retirer les vies apres avoir taper
  taper(coups: number): void {
    this.life -= coups;
    if (this.life < 0) {
      this.life = 0;
    }
  }

  //pr verifier si le héros est toujours en vie
  isAlive() {
    if (this.life > 0) {
      return true;
    } else if ((this.life = 0)) {
      return false;
    }
  }
}
/*constante objet contenant des valeurs de ma classe Hero*/
const elo = new Hero("Elo", 2, 20);
const mart = new Hero("Martin", 6, 20);
console.log(
  `${elo.pourName()} se confronte à ${mart.pourName()}`
); /*pr afficher */
elo.attack(mart); /*appeler ma methode attaque avec pr opponent mart et c'est elo qui appel*/
console.log("Martin est-il toujours en vie? " + mart.isAlive());
console.log("Il reste " + mart.pourLife() + " vies à Martin");
