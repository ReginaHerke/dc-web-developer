/* function Deklaration */
function showMessageDeclaration() {
  console.log("Hallo Devs");
}

showMessageDeclaration();

/* anonyme function - function Expression */
let sayHello = function () {
  console.log("Hello!!");
};

sayHello();

/* Funktionsparameter */
let myName = "Regina";

showMessage(myName);

function showMessage(firstName) {
  console.log("Hallo " + firstName);
}

/* Parameter wird in der Funktion angegeben */
/* Argument ist das was in der Funktion als Wert übergeben wird */

let greetings = "Sehr geehrte Frau";
let myLastName = "Herke";

showMessage2(greetings, myLastName);

function showMessage2(lastName) {
  console.log(greetings + " " + myLastName);
}

/* Funktion innerhalb Funktion */

/* let hisFirstName = "Max";
let hisLastName = "Mustermann";

hisFullName();

function sayHiTo(hisFirstName, hisLastName) {
  function hisFullName() {
    console.log(hisFirstName + hisLastName);
  }
} */

/* Rückgabewert return */
let result;

function myFirstAddition(x, y) {
  return x + y;
}
/* console.log(myFirstAddition(5, 8)); */
result = myFirstAddition(5, 5);

console.log(result);

/* Objekt User */
function createUser(userName, eMail, password) {
  let user = {
    userName: userName,
    eMail: eMail,
    password: password,
  };

  return user;
}

let newUser = createUser("Regina", "regina@mail.com", "1234");

console.log(newUser);

/* Challenge Körper */
bodyChallenge(12, 5.5, 11);

function bodyChallenge(bodyHeight, bodyLength, bodyWidth) {
  let height = bodyHeight;
  let length = bodyLength;
  let width = bodyWidth;

  let body = calculateBody(bodyLength, bodyWidth);
  console.log("Die Fläche beträgt: " + body);

  console.log("Das Volumen beträgt: " + calculateVolume(height, length, width));
}

function calculateBody(l, b) {
  let body = l * b;
  return body;
}

function calculateVolume(l, b, h) {
  return l * b * h;
}
