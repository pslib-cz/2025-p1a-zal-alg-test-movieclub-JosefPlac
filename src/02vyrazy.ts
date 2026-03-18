//výrazy a jejich typy
let a; //antipattern: implicit type any
let b = 3;
let c: number = 3;
let resultNum: number;
let s1: string = "1";
let s2: string = "2";
let resultStr: string;

a = 5; // type of a is any
a = "ahoj"; // type of a is any

c = 10; // type of c is number

resultNum = b + c; // + ve významu sčítání čísel
console.log(`Výsledek sčítání ${b} + ${c} je: ${resultNum}`);
resultStr = s1 + s2; // + ve významu spojování řetězců
console.log(`Výsledek spojení "${s1}" + "${s2}" je: "${resultStr}"`);

resultNum = b - c; // - ve významu odčítání čísel
console.log(`Výsledek odčítání ${b} - ${c} je: ${resultNum}`);
//resultStr = s1 - s2; // Chyba: Operátor '-' nelze použít na typy 'string' a 'string'.

resultNum = b * c; // * ve významu násobení čísel
console.log(`Výsledek násobení ${b} * ${c} je: ${resultNum}`);
resultNum = c / b; // / ve významu dělení čísel
console.log(`Výsledek dělení ${c} / ${b} je: ${resultNum}`);

resultNum = c % b; // % ve významu zbytku po dělení čísel (MODULO)
console.log(`Zbytek po dělení ${c} % ${b} je: ${resultNum}`);

resultNum = c ** b; // ** ve významu umocňování čísel
console.log(`Výsledek umocnění ${c} na ${b} je: ${resultNum}`);

resultNum += b; // zkrácený zápis pro resultNum = resultNum + b;
resultNum -= b; // zkrácený zápis pro resultNum = resultNum - b;
resultNum *= b; // zkrácený zápis pro resultNum = resultNum * b;
resultNum /= b; // zkrácený zápis pro resultNum = resultNum / b;
resultNum %= b; // zkrácený zápis pro resultNum = resultNum % b;

//operátory porovnání = relační
let resultBool: boolean;
resultBool = b > c;
resultBool = b < c;
resultBool = b >= c; // větší nebo rovno; => je zcela něco jiného!
resultBool = b <= c; // menší nebo rovno; =< není platný operátor
resultBool = b === c; // rovnost
resultBool = b !== c; // nerovnost
resultBool = b == c; // rovnost s převodem typů (raději nepoužívat)
resultBool = b != c; // nerovnost s převodem typů (raději nepoužívat)

//logické operátory
let bool1: boolean = true;
let bool2: boolean = false;
resultBool = bool1 && bool2; //logické AND (a zároveň)
resultBool = bool1 || bool2; //logické OR (nebo)
resultBool = !bool1; //logické NOT (negace, zápor)
