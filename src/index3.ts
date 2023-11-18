// LEVEL 3 //

// 1st 2nd 3rd question

/*stipuler dans ma classe située dans mon index2.ts que ma classe peut être importer avec le temre "export"*/
import { Fleurs } from "./index2";
/*pour l'utiliser, je créée une instance via l'ecriture suivante en donnant des valeurs aux attributs*/
let instance: Fleurs = new Fleurs(
  "rose",
  6
); /*je donne le nom que je veux à mon let...*/
console.log(instance);

//4rd 5rd 6rd question
/*créer une nouvelle class pour essayer l'heritage*/

class Legumes {
  name: string;
  saison: string;
  poids: number;

  constructor(
    elementName: string,
    elementSaison: string,
    elementPoids: number
  ) {
    this.name = elementName;
    this.saison = elementSaison;
    this.poids = elementPoids;
  }

  conseil() {
    console.log("Il faut manger 5 fruits et légumes");
  }
}
class legumesVerts extends Legumes {
  /*on crée la classe enfant*/
  interetsLegumesVerts() {
    /*méthode propre à la classe enfant, créee pour elle*/
    console.log("les légumes verts sont riches en fibre");
  }
  constructor(
    /*on appel le constructeur de la classe parent, possible grâce à l'instruction super, est-ce bien ça?*/
    elementName: string,
    elementSaison: string,
    elementPoids: number
  ) {
    super(elementName, elementSaison, elementPoids);
  }
}

const legume1 = new legumesVerts("Poireaux", "hiver et été", 300);
legume1.conseil(); /*appel de la methode contenue ds la classe parent via la classe enfant*/
legume1.interetsLegumesVerts();
console.log(legumesVerts);
console.log(" Dans les ", legume1, "grammes");

//polymorphism static: ATTENTION PB, CA NE FONCTIONNE PAS AVEC LE MEME NOM DE METHODE...
class Addition {
  add1(a: number, b: number): number {
    return a + b;
  }

  add2(a: string, b: string): string {
    return a + b;
  }
}
const addition = new Addition();
console.log(addition.add1(2, 8));
console.log(addition.add2("Je ", "t'aime"));

//polymorphism dynamic:
class Vehicule {
  sound(): void {
    console.log("generic sound");
  }
}
class Moto extends Vehicule {
  sound(): void {
    console.log("Vraum Vraum");
  }
}
const maMoto: Vehicule = new Moto(); // création de l'objet en polymorphism dynamic
maMoto.sound(); //appel la methode de la classe Moto
