//let zahájí deklaraci proměnné s blokovým rozsahem
//následuje název proměnné 
//za dvojtečkou její typ (číslo, text, boolean, atd.)
let prvniCislo: number; //toto je deklarace proměnné s hodnotou undefined
let druheCislo: number = 5; //toto je deklarace i inicializace proměnné
// = je operátor přiřazení hodnoty
prvniCislo = 10; //přiřazení hodnoty do již deklarované proměnné

//deklarace konstanty
const tretiCislo: number = 15; //konstanty musí být inicializovány při deklaraci
//tretiCislo = 15; //toto by vyvolalo chybu

//proměnné mohou být různých typů
let textovaPromenna: string = "Ahoj světe!"; //toto je textová proměnná
let logickaPromenna: boolean = true; //toto je logická proměnná

//typy mohou být i složitější, například pole nebo objekty
type OvoceDruh = "jablko" | "banán" | "pomeranč"; //vlastní typ pro řetězec, který může být pouze jedním z uvedených hodnot
type MishMash = number | undefined; //vlastní typ pro číslo nebo undefined
type BoxOvoce = { //vlastní typ pro objekt s dvěma vlastnostmi
    druh: OvoceDruh;
    kusy: number;
}

//deklarace proměnné s vlastním typem
const ovoce: Array<OvoceDruh> = ["jablko", "banán"]; 
//pole objektů typu BoxOvoce
const kosik: Array<BoxOvoce> = [ 
    {
        druh: "pomeranč",
        kusy: 3
    }, 
    {
        druh: "jablko",
        kusy: 5
    }
]
kosik[0].druh = "banán"; //změna druhu ovoce v první položce kosíku
kosik[0].kusy += 2; //přidání 2 kusů k první položce kosíku

for (let ovoce of kosik) {
    if (ovoce.druh === "jablko") {
        ovoce.kusy += 2; //přidání 2 kusů k položce s jablky
    }
    if (ovoce.druh === "pomeranč") {
     ovoce.kusy += 1; //přidání 1 kusu ke každé položce kosíku
    }
}