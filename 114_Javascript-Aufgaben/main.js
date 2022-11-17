/* Aufgabe 1: Webseitenfehler */

function webseitenfehler(fehlerCode) {
  if (fehlerCode == 400) {
    return "Bad Request";
  } else if (fehlerCode == 402) {
    return "Payment Required";
  } else if (fehlerCode == 404) {
    return "Not Found";
  } else if (fehlerCode == 409) {
    return "Conflict";
  } else if (fehlerCode == 414) {
    return "URI Too Long";
  } else if (fehlerCode == 425) {
    return "Too Early";
  } else if (fehlerCode == 429) {
    return "Too Many Requests";
  } else {
    return "no error";
  }
}
console.log(webseitenfehler(425));

let websiteError = 300;

switch (websiteError) {
  case 400:
    console.log("Bad Request");
    break;
  case 402:
    console.log("Payment Required");
    break;
  case 404:
    console.log("Not Found");
    break;
  case 409:
    console.log("Conflict");
    break;
  case 414:
    console.log("URI Too Long");
    break;
  case 425:
    console.log("Too Early");
    break;
  case 429:
    console.log("Too Many Requests");
    break;
  default:
    console.log("no error");
}

/* Aufgabe 2: Alle Multiplizieren */

let zahlenMultiplizieren = [3, 7, 8, 4];
let summe = 1;

for (let i = 0; i < zahlenMultiplizieren.length; i++) {
  summe *= zahlenMultiplizieren[i];
}

console.log("Die Summe beträgt: " + summe);

/* Aufgabe 3: Größter Gemeinsamer Teiler */

/* Aufgabe 4: Minimum Funktion */

let minZahlen = [5, 3, 8, 7];
let min = minZahlen[0];

for (let i = 0; i < minZahlen.length; i++) {
  if (minZahlen[i] < min) {
    min = minZahlen[i];
  }
}
console.log("min = " + min);

/* Aufgabe 5: Array sortieren */

let bubbleSort = [4, 6, 1, 5, 3, 2];

/* Aufgabe 6: Fakultät */

let zahl = 5;
let speicher = 1;

for (let i = zahl; i > 1; i--) {
  speicher *= i;
}
console.log(speicher);

/* Aufgabe 7: Palindromes */

let palindrom = ["paul"];

for (let i = 0; i < palindrom.length / 2; i++) {
  if (palindrom[i] === palindrom[palindrom.length - i - 1]) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

/* Aufgabe 8: gleiche Zahlen */

let numbers = [2, 4, 56, 22, 65, 2, 54, 29];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 1 + i; j < numbers.length; j++) {
    /*     console.log("vergleiche " + numbers[i] + " mit " + numbers[j]);
     */ if (numbers[i] == numbers[j]) {
      console.log("yay");
    }
  }
}
