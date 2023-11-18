// LEVEL 3 //

// 1st 2nd 3rd question

/*stipuler dans ma classe située dans mon index2.ts que ma classe peut être importer*/
import { Fleurs } from "./index2";
/*pour l'utiliser, je créée une instance via l'ecriture suivante en donnant des valeurs aux attributs*/
let instance: Fleurs = new Fleurs(
  "rose",
  6
); /*je donne le nom que je veux à mon let...*/
console.log(instance);

//4rd 5rd 6rd question
import { Eleve } from "./index2";
let instance2: Eleve = new Eleve(
  "Sacha",
  7,
  "CP"
); /*appel du constructeur de la classe parente*/
console.log();
