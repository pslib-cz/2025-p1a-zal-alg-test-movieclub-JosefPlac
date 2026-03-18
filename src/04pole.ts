//Kolekce = pole v TypeScript
const poleCisel: Array<number> = [
    1, 
    2,
    3];
const poleRetezcu: Array<string> = ["jablko", "banan", "tresen"];
poleRetezcu.push("hruska"); //přidání prvku na konec pole
poleRetezcu.unshift("merunka"); //přidání prvku na začátek pole
poleRetezcu[8] = "ananas";  //přidání prvku na konkrétní index (mohou vzniknout "díry" v poli)
poleRetezcu[7] = "švestka";
console.log(poleRetezcu);
console.log(`Délka pole je: ${poleRetezcu.length}`);

//výpis jednotlivých prvků pole (zpracování dat v kolekci)
for (let item of poleRetezcu) {
    console.log(`Ovoce: ${item}`);
}
//nebo klasický for cyklus
for (let i = 0; i < poleRetezcu.length; i+=1) {
    console.log(`Ovoce na indexu ${i} je: ${poleRetezcu[i]}`);
}

type Piskvorka = "X" | "O" | " ";
type RadekPiskvorka = Array<Piskvorka>;

const polePiskvorka: Array<RadekPiskvorka> =  [
  ["X", "O", " "],
  [" ", "X", "O", "O"], // lze mít i různé délky vnořených polí
  ["O", " ", "X"],
];


