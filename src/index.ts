//LEVEL 1//

//1st question
let chaine: string = "Brief";
let nombre: number = 2;
let bool: boolean = true;
let nombreVirgule: number = 2.5;
let symbole: symbol = Symbol("truc");
let nul: null = null;
let nondefini: undefined = undefined;
/*let grdNombre: bigint = 99999999999999n; non disponible avec cette version de package*/
console.log(
  chaine,
  " ",
  nombre,
  " ",
  bool,
  " ",
  nombreVirgule,
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
  return x + y;
}
console.log(1, 1);
