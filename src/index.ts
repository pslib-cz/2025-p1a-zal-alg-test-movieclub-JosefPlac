
type Problem = {
  title: string;            // název filmu
  threshold: number;        // minimální průměr pro doporučení
  ratings: Array<number>;   // hodnocení členů klubu (celá čísla 1–10)
};

const data: Array<Problem> = [
  { title: "Duna", threshold: 7, ratings: [8, 9, 7, 6, 8] },
  { title: "Shrek", threshold: 8, ratings: [9, 10, 8, 7, 9, 8] },
  { title: "Titanic", threshold: 6, ratings: [5, 6, 4, 7, 5] },
  { title: "Interstellar", threshold: 8, ratings: [9, 8, 10, 9, 8, 7, 9] },
];

type Result = {
  title: string;       // název filmu
  average: number;     // průměrné hodnocení (zaokrouhlené na 1 desetinné místo)
  threshold: number;   // hranice pro doporučení
  recommended: string; // "ANO" nebo "NE"
};

function calculateAverage(ratings: Array<number>): number {
  let soucet = 0;
  for (let i = 0; i < ratings.length; i ++) {
    soucet += ratings[i];
  }
  let vysledek: number;
  vysledek = soucet / ratings.length
  return vysledek;
}

function solveProblem(p: Problem): Result {
  let Result: Result= {
    title: "",
    average: 0,
    threshold: 0,
    recommended: "NE"
  };
  Result.title = p.title;
  Result.average = calculateAverage(p.ratings);
  Result.threshold = p.threshold;
  if (Result.average >= p.threshold) {
    Result.recommended = "ANO";
  } else {
    Result.recommended = "NE";
  }
  return Result;
}

function formatResult(r: Result): string {
  let title: string = r.title+": ";
  let recomend: string = r.recommended === "ANO" ? "✓" : "✗";
  return `${title.padEnd(14)} průměr: ${r.average.toFixed(1)} | hranice: ${r.threshold} → doporučeno: ${r.recommended} ${recomend}`;
}
console.log("Výsledky hodnocení filmů:");
for (let i = 0; i < data.length; i++) {
  console.log(formatResult(solveProblem(data[i])));
}