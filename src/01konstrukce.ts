// podmíněné vykonávání

// výraz musí být boolean, nebo konvertovatelný na boolean
let expression: boolean = 5 > 2;
if (expression) {
    //tento kód je vykonán, když expression === true
} else {
    //vykonáno, když expression === false
}

//příklad.
let number1: number = 12;
let number2: number = 3*8-18;
if (number1 === number2) {
    console.log("čísla jsou stejná");
} else {
    console.log("čísla jsou různá");
}

let exp1: boolean = number1 > number2

if (exp1 === true) {
    console.log("jen newbie")
}
if (exp1) {
    console.log("takhle to děláme :-)")
}

let necoDuleziteho: string = "ahoj";
//podmíněné cyklické vykonávání
while (exp1) {
    //iterace cyklu
    //kód se vykonává několikrát - dokud je exp1 true
    //aby cyklus neskončil, 
    //  musí se někde uvnitř změnit hodnota proměnné použitá v podmínce
    exp1 = false; // jinak by to byl nekonečný cyklus
}

do {
    let necoDuleziteho: string = "čau";
    //tento kód se vykoná alespoň jednou
} while (exp1);
console.log(necoDuleziteho)

let i: number = 0;
while (i < 5) {
    console.log(`i je nyní: ${i}`);
    i++; //inkrementace
}

//stejná jako while, ale řídicí proměnná vzniká (a zaniká) 
// přímo v konstrukci for
for (let j: number = 0; j < 5; j++) {
    console.log(`j je nyní: ${j}`);
}
console.log(i);
//console.log(j); // chyba, j není definováno

//vícenásobné větvení
let day: number = 2;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    default:
        console.log('Unknown day');
}

//funkce add má 2 parametry a a b oba jsou typu number
//funkce vrací string
//pokud nejsou zadány parametry, použijí se defaultní hodnoty 1 a 0
function add(a: number = 1, b: number = 0): string {
    console.log('a + b =', a + b);
    return (a + b).toFixed(2);
}
console.log('add(2, 3) =', add(2, 3));


//funkceAdd je proměnná, která odkazuje na funkci add
//datový typ odpovídá signatuře funkce add a je (a: number,b:number) => string
let funkceAdd:(a: number,b:number) => string = add;

//funkceAdd(2,3) je volání funkce add s parametry 2 a 3
//výsledek je 5 a je převeden na string a uložen do proměnné kodAdd2
let kodAdd2: string = funkceAdd(2,3);

//add() je také volání funkce add - i když zde nejsou žádné parametry
let kodAdd: string = add();

console.log('kodAdd =', kodAdd);
console.log('kodAdd2 =', kodAdd2);