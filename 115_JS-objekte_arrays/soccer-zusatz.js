let soccer = [
  {
    name: "Cristiano Ronaldo",
    height: 172,
    mass: 77,
    eyeColor: "blue",
    gender: "male",
  },
  {
    name: "Lionel Messi",
    height: 202,
    mass: 136,
    eyeColor: "yellow",
    gender: "male",
  },
  {
    name: "Alex Morgan",
    height: 150,
    mass: 49,
    eyeColor: "brown",
    gender: "female",
  },
  {
    name: "David Alaba",
    height: 188,
    mass: 84,
    eyeColor: "blue",
    gender: "male",
  },
];

function addPlayer() {
  const enteredName = prompt("Bitte geben Sie den Spielernamen ein");

  if (enteredName.length < 3) {
    alert("Name muss mindestens 3 Zeichen lang sein");
    return;
  }

  const enteredHeight = prompt("Bitte geben Sie die Höhe an");
  const convertedHeight = parseInt(enteredHeight);

  if (isNaN(convertedHeight)) {
    alert("Bitte geben Sie eine gültige Zahl ein");
    return;
  }

  if (convertedHeight < 100) {
    alert("Der Spieler muss größer als 100cm sein");
    return;
  }

  const enteredWeight = prompt("Bitte geben Sie das Gewicht an");
  const convertedWeight = parseInt(enteredWeight);

  if (isNaN(convertedWeight)) {
    alert("Bitte geben Sie eine gültige Zahl ein");
    return;
  }

  if (convertedWeight < 100) {
    alert("Der Spieler darf nicht mehr als 100kg wiegen");
    return;
  }
}

console.log(addPlayer());
