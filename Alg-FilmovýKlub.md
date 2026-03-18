# Filmový klub

Školní filmový klub se každý pátek schází na promítání. Po skončení každý člen klubu ohodnotí film celým číslem od **1 do 10**. Klub pak rozhodne, zda film **doporučí** ostatním studentům – podmínkou je, aby průměrné hodnocení dosáhlo nebo přesáhlo stanovenou hranici.

Každý film má svou vlastní hranici doporučení (ta se liší podle žánru a očekávání).

**Vaším úkolem je pro každý film rozhodnout, zda splnil podmínku doporučení, nebo ne.**

> Každý film hodnotí jiný počet členů – délka pole `ratings` se proto mezi filmy liší.

***

## Tvar vstupu

Každý případ je reprezentován typem `Problem`. Pole `ratings` obsahuje hodnocení jednotlivých přítomných členů klubu:

```typescript
type Problem = {
  title: string;            // název filmu
  threshold: number;        // minimální průměr pro doporučení
  ratings: Array<number>;   // hodnocení členů klubu (celá čísla 1–10)
};
```

Vstup je pole objektů typu `Problem`:

```typescript
const data: Array<Problem> = [
  { title: "Duna",         threshold: 7, ratings: [8, 9, 7, 6, 8] },
  { title: "Shrek",        threshold: 8, ratings: [9, 10, 8, 7, 9, 8] },
  { title: "Titanic",      threshold: 6, ratings: [5, 6, 4, 7, 5] },
  { title: "Interstellar", threshold: 8, ratings: [9, 8, 10, 9, 8, 7, 9] },
];
```

Příklad čtení hodnot:

```typescript
let ratingCount = data[0].ratings.length;  // → 5
let firstRating = data[0].ratings[0];      // → 8
```

***

## Tvar výstupu

Funkce `solveProblem` nevrací holý řetězec, ale strukturovaný objekt typu `Result`:

```typescript
type Result = {
  title: string;       // název filmu
  average: number;     // průměrné hodnocení (zaokrouhlené na 1 desetinné místo)
  threshold: number;   // hranice pro doporučení
  recommended: string; // "ANO" nebo "NE"
};
```

Výpis na konzoli pak vypadá takto:

```
Duna:          průměr 7.6 | hranice 7  →  ANO ✓
Shrek:         průměr 8.5 | hranice 8  →  ANO ✓
Titanic:       průměr 5.4 | hranice 6  →  NE ✗
Interstellar:  průměr 8.6 | hranice 8  →  ANO ✓
```


***

## Vysvětlení ukázkových případů

| \# | Film | Součet | Počet hlasů | Průměr | Hranice | Výsledek |
| :-- | :-- | --: | :--: | --: | :--: | :--: |
| 1 | Duna | 38 | 5 | 7.6 | 7 | **ANO** |
| 2 | Shrek | 51 | 6 | 8.5 | 8 | **ANO** |
| 3 | Titanic | 27 | 5 | 5.4 | 6 | **NE** |
| 4 | Interstellar | 60 | 7 | ≈ 8.6 | 8 | **ANO** |

> Ve třetím případě je průměr 5.4, ale hranice je 6 – podmínka **není** splněna, výsledek je `NE`.
> Ve čtvrtém případě vychází průměr 8.571… – pro **porovnání s hranicí používáme přesnou hodnotu** (8.571 ≥ 8 → ANO), zaokrouhlujeme pouze pro výpis.

***

## Požadavek na implementaci

Implementujte funkci `calculateAverage`, která projde pole `ratings` pomocí `for` cyklu, sečte všechna hodnocení a výsledek vydělí počtem prvků:

```typescript
function calculateAverage(ratings: Array<number>): number {

}
```

> Délku pole získáte přes `ratings.length`. Pro výpis zaokrouhlete průměr pomocí `average.toFixed(1)`.

Implementujte funkci `solveProblem`, která pomocí `calculateAverage` porovná průměr s hranicí a vrátí objekt `Result`:

```typescript
function solveProblem(p: Problem): Result {

}
```

Implementujte funkci `formatResult`, která naformátuje výsledek do požadovaného tvaru:

```typescript
function formatResult(r: Result): string {

}
```

