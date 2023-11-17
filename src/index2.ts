//LEVEL 2//

//1st question
/*création de la classe --> export pour le level3*/
export class Fleurs {
  nom: string; /*designation des attributs(propriétés)*/
  nombreDePetales: number;

  //2nd question //5th question
  /*ajout du constructeur*/
  constructor(nom: string, nombreDePetales: number) {
    this.nom =
      nom; /*le this vient initialiser les attributs, les prendre en compte*/
    this.nombreDePetales = nombreDePetales;
  }

  //6th question
  /*ajout d'une methode pour agir sur les propriétés des instances*/
  odeurFloral() {
    console.log("Parfun général des fleurs");
  }
}

//3rd question
/*création de l'instance d'une classe*/
const myFleur1 = new Fleurs("pivoine", 92);
console.log(myFleur1);
myFleur1.odeurFloral(); /*pr pouvoir utiliser ma methode, il faut imperativement qu'un new objet soit instancié, dc attribuer la metgode à l'objet*/

//4th question
console.log(
  myFleur1 instanceof Fleurs
); /*verifier l'appartenance de myFleur1 à Fleur: si ok: true */

//7th and 8th question
/*modificateur d'acces donc visibilité des attributs -->création d'un nvl classe pour donner des modificateurs aux attributs*/
class Eleve {
  public nom: string;
  private age: number;
  protected niveau: string;
  constructor(nom: string, age: number, niveau: string) {
    this.nom = nom;
    this.age = age;
    this.niveau = niveau;
  }
}
/* modificateur d'accès PROTECTED, création de la class enfant du parent Eleve */
class EleveA extends Eleve {
  info() {
    console.log(`L'enfant 2  de la sous class eleveA est en ${this.niveau}`);
  }
}
const myEleve = new Eleve("Amaury", 5, "GS");
console.log(myEleve.nom);
//TEST DU MODIFICATEUR PRIVATE/ console.log(myEleve.age);  impossible car accessible seulement dans la classe
const myEleve2 = new EleveA("Charlie", 15, "terminal");
myEleve2.info();
console.log(myEleve2);
