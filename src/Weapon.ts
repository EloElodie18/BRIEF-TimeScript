//LEVEL 2

//récup de ma classe Hero
import { Hero } from "./Hero";

//envoie de ma classe Weapon à ma classe Hero pr les attributs de Hero
export class Weapon {
  name: string;
  constructor(elementName: string) {
    //ce constructeur me permet de valider la création du name: string, mais il sert à quoi cet attribut?
    this.name = elementName;
  }
}

// creation des classes enfants qui appelent le constructeur du parent en y ajoutant une arme supplementaire(ds chq class)
class HeroAxe extends Hero {
  //celle-ci c'est "si opponent=HeroSword alors power*2"
  constructor(
    /*elements de la classe parent , je pensais faire ça:this(name,power,life)<-----;*/
    myName: string,
    myPower: number,
    nbrLife: number
  ) {
    super(myName, myPower, nbrLife);
  }
  attack(opponent: HeroSword): void {
    opponent.taper(this.pourPower() * 2);
  }
}

class HeroSword extends Hero {
  // celle-ci c'est "si opponent=HeroSpear alors power*2"
  constructor(myName: string, myPower: number, nbrLife: number) {
    super(myName, myPower, nbrLife);
  }
  attack(opponent: HeroSpear): void {
    opponent.taper(this.pourPower() * 2);
  }
}

class HeroSpear extends Hero {
  // celle-ci c'est "si opponent=HeroAxe alors power*2"
  constructor(myName: string, myPower: number, nbrLife: number) {
    super(myName, myPower, nbrLife);
  }
  attack(opponent: HeroAxe): void {
    opponent.taper(this.pourPower() * 2);
  }
}

const elo = new Hero("Elo", 2, 20);
const mart = new Hero("Martin", 6, 20);
const herosAxe = new HeroAxe("Bob", 8, 20);
const herosSpear = new HeroSpear("Jack", 3, 20);
const herosSword = new HeroSword("Tomb", 4, 20);

//1ere attaque
console.log(`${herosAxe.pourName()} se confronte à ${herosSword.pourName()}`);
herosAxe.attack(herosSword);
console.log("Tomb est-il toujours en vie? " + herosSword.isAlive());
console.log("Il reste " + herosSword.pourLife() + " vies à Tomb");

//2eme attaque
console.log(`${herosSword.pourName()} se confronte à ${herosSpear.pourName()}`);
herosSword.attack(herosSpear);
console.log("Jack est-il toujours en vie? " + herosSpear.isAlive());
console.log("Il reste " + herosSpear.pourLife() + " vies à Jack");

//3eme attaque
console.log(`${herosSpear.pourName()} se confronte à ${herosAxe.pourName()}`);
herosSpear.attack(herosAxe);
console.log("Bob est-il toujours en vie? " + herosAxe.isAlive());
console.log("Il reste " + herosAxe.pourLife() + " vies à Jack");

// LEVEL3

//creer une fonction gnrle qui lance la castagne!

function battle(joueur1: Hero, joueur2: Hero) {
  while (joueur1.isAlive() && joueur2.isAlive()) {
    /*A RETENIR/ "&&" sert à faire des comparaisons donc pas adapté pr l'attaque simultanée*/
    /*il suffit de lancer les attaques de manière successive pour qu'ils se combattent simultanément*/
    joueur1.attack(joueur2);
    joueur2.attack(joueur1);
  }
  if (!joueur1.isAlive() && joueur2.isAlive()) {
    //si joueur 1 est mort et que joueur 2 est en vie
    return joueur2.pourName() + " est le vainqueur";
  } else if (!joueur2.isAlive() && joueur1.isAlive()) {
    //si joueur 2 est mort et que joueur 1 est en vie
    return joueur1.pourName() + " est le vainqueur";
  } else if (joueur1.pourLife() <= 0 && joueur2.pourLife() <= 0) {
    return "Il n'y a pas de vainqueur, match nul!";
  }
}
// LES 3 IF FONCTIONNNNNNNNNENT QD JE CHANGE MES VALEURS!!! 
const joueur1 = new Hero("Rasta", 5, 20); /*je crée mes deux joueurs*/
const joueur2 = new Hero("Rocket", 15, 20);
/*j'appel directement ma fonction via mon console.log*/
console.log(battle(joueur1, joueur2));
console.log("A l'issue du combat, " + joueur1.pourName() +" a "+ joueur1.pourLife() + " vies." );
console.log("A l'issue du combat, " + joueur2.pourName() +" a " +joueur2.pourLife() + " vies.");
