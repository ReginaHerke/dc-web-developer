/* Array-Literal Schreibweise */
let firstArray = ["Montag", "Dienstag", "Mittwoch"];
/* Constructor-Function */
let anotherArray = new Array("Freitag", "Samstag", "Sonntag");

let todoList = ["Bad putzen", "Einkaufen"];

todoList.push("Rasen mähen");
todoList.unshift("Sport machen");
todoList.splice(2, 0, "Garage streichen", "Rollrasen verlegen", "Klo putzen");
todoList.pop();
todoList.shift();
todoList.splice(1, 2);

let todoTomorrow = todoList.slice(1);
console.log(todoTomorrow);

/* 10 */
let names = ["Klaus", "Xaver", "Peter", "Andreas"];
console.log(names);

/* 11 */
console.log(names.reverse());

let nameAsString;
console.log(names.toString(nameAsString));

/* 12 */
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

/* 13 */
names.forEach(helloFunction);
function helloFunction(item) {
  console.log("Hallo " + item);
}

/* 14 */
console.log(names.sort());

/* 15 */
let numbers = [2, 45, 3, 67, 34, 567, 34, 345, 123];

let largestNumber = Math.max(...numbers);
console.log("the largest Number is " + largestNumber);

/* 16 */
let lowestToHighest = numbers.sort((a, b) => b - a);
console.log(lowestToHighest);

/* 17 */
let books = [
  {
    author: "Bill Gates",
    titel: "The Road Ahead",
    bookID: 1254,
  },
  {
    author: "Steve Jobs",
    titel: "Walter Isaacson",
    bookID: 4264,
  },
  {
    author: "Suzanne Collins",
    titel: "Mockingjay: The Final Book of Hunger Games",
    bookID: 3245,
  },
];

let bookTitelSort = books.sort((a, b) => {
  if (a.titel > b.titel) {
    return 1;
  } else {
    return -1;
  }
});

console.log(bookTitelSort);

/* 18 */
let recordShop = [
  {
    name: "Michael Jackson",
    albums: [
      {
        titel: "album 1",
        year: "2022",
      },
      {
        titel: "album 2",
        year: "2012",
      },
      {
        titel: "album 3",
        year: "2002",
      },
    ],
  },
  {
    name: "Elton John",
    albums: [
      {
        titel: "Dream",
        year: "2003",
      },
      {
        titel: "Fly",
        year: "2000",
      },
      {
        titel: "Believe",
        year: "1998",
      },
    ],
  },
  {
    name: "Peter Maffay",
    albums: [
      {
        titel: "album 1",
        year: "2010",
      },
      {
        titel: "album 2",
        year: "2004",
      },
      {
        titel: "album 3",
        year: "1998",
      },
    ],
  },
];

/* for (let i = 0; i < recordShop.length; i++) {
  console.log(recordShop[i].name);
} */

recordShop.forEach((artist) => console.log(artist.name));

/* for (let i = 0; i < recordShop.length; i++) {
  for (let j = 0; j < recordShop[i].albums.length; j++) {
    console.log(
      "Das Album " +
        recordShop[i].albums[j].titel +
        " aus dem Jahr " +
        recordShop[i].albums[j].year
    );
  }
} */

recordShop.forEach((artists) => {
  artists.albums.forEach((album) => {
    console.log("Das Album " + album.titel + " aus dem Jahr " + album.year);
  });
});

/* 19 */
/* let isEqual = (oneArray, twoArray) => {
  if (oneArray.length !== twoArray.length) {
    return false;
  }
  let compareArray = oneArray.map((element, i) => {
    if (element === twoArray[i]) {
      return true;
    } else {
      return false;
    }
  });

  if (compareArray.includes(false)) {
    return false;
  } else {
    return true;
  }
};

console.log(isEqual([1, 2][(1, 2)])); */

/* 20 */
let myNumbers = [7, 3, 9, 5, 4];

let withMap = myNumbers.map((number) => {
  return number * 3;
});

console.log(withMap);

function multiply() {
  let newNumbers = [];
  for (i = 0; i < myNumbers.length; i++) {
    newNumbers.push(myNumbers[i] * 3);
  }
  return newNumbers;
}

console.log(multiply());

/* 21 */
let nums = [11, 22, 33, 46, 75, 86, 97, 98];

let evenNumbers = [];
nums.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});
console.log(evenNumbers);

let squaredNumbers = [];
evenNumbers.forEach((number) => {
  squaredNumbers.push(number * number);
});

console.log(squaredNumbers);

let summe = 0;
squaredNumbers.forEach((number) => {
  summe += number;
});

console.log(summe);

/* 22 */
let strings = ["avengers", "ironman"];

let upperCases = strings.map((letter) => {
  return letter.toUpperCase();
});

console.log(upperCases);

/* 23 */
