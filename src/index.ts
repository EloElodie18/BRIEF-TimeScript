//LEVEL 1//

//1st question

let chaine: string = "Brief";
let nombre: number = 2;
let bool: boolean = true;
let nombreavirgule: number = 2.5;
let symbole: symbol = Symbol("truc");
/*let grdNombre: bigint = 9999999999999999999999999999n; non disponible avec version de packages*/
let nul: null = null;
let nondefini: undefined = undefined;
console.log(
  chaine,
  " ",
  nombre,
  " ",
  bool,
  " ",
  nombreavirgule,
  " ",
  symbole,
  " ",
  nul,
  " ",
  nondefini
);

//2nd question
let fruits: string[] = ["pomme", "poire", "orange"];

/*An other way:  let fruits: Array<string> = ["pomme", "poire", "orange"]   --->scd maniere*/
console.log(fruits);

//3rd question
let tout: any;
console.log(tout);

//4th question
function cool(x: number, y: number): number {
  /*je peux me l'ecrire d'une autre manière*/
  return x + y;
}
console.log(1, 1);
