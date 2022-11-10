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

/* Grundrechenarten */

let resultaddition = myAddition(5, 5);

function myAddition(x, y) {
  return x + y;
}

console.log("Das Ergebnis der Addition beträgt: " + resultaddition);

let resultsubtraction = mySubtraction(5, 5);

function mySubtraction(x, y) {
  return x - y;
}

console.log("Das Ergebnis der Subtraktion beträgt: " + resultsubtraction);

let resultmultiplication = myMultiplication(5, 5);

function myMultiplication(x, y) {
  return x * y;
}

console.log("Das Ergebnis der Multiplikation beträgt: " + resultmultiplication);

let resultdivitation = myDivitation(5, 5);

function myDivitation(x, y) {
  return x / y;
}
console.log("Das Ergebnis der Division beträgt: " + resultdivitation);

/* Radius Circle */

function calculateArea(radius) {
  const pi = 3.141592;
  return radius * radius * pi;
}

let flaeche = calculateArea(3);

console.log(flaeche);

/* Random Number */

function getRandomInt(max, min) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(randomNumber);
}

getRandomInt(10, 5);

/* Exc 7 orderMyLogic */

function orderMyLogic(val) {
  if (val < 10 && val > 5) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than equal to 10";
  }
}

console.log(orderMyLogic(3));

/* Exc 8 if/else-if Logic */

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else if (val >= 5 && val <= 10) {
    return "Between 5 and 10";
  }
}

console.log(testElseIf(12));

/* Exc 9 Find the right size */

function findTheRightSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num >= 5 && num <= 10) {
    return "Small";
  } else if (num >= 10 && num <= 15) {
    return "Medium";
  } else if (num >= 15 && num <= 20) {
    return "Large";
  } else if (num > 20) {
    return "Huge";
  }
}

console.log(findTheRightSize(5));

/* Exc 10 Statuscode */

function showAlert(statusCode) {
  if (statusCode == 1) {
    return "Alpha";
  } else if (statusCode == 2) {
    return "Beta";
  } else if (statusCode == 3) {
    return "Gamma";
  } else if (statusCode == 4) {
    return "Delta";
  } else {
    return "Unbekannter Wert";
  }
}

console.log(showAlert(0));

/* Exc 11 Even or Odd */

function checkTheNumber(num) {
  if (num % 2 == 0) {
    return "The Number is Even";
  } else {
    return "The Number is Odd";
  }
}

console.log(checkTheNumber(7));

/* Exc 12 booleschen Wert */

function boolToWord(bool) {
  if (bool == false) {
    return "No";
  } else if (bool == true) {
    return "Yes";
  }
}
console.log(boolToWord(true));

/* Exc 13 take umbrella */

function take_umbrella(weather, number) {
  if (weather == "rainy" || (weather == "cloudy" && number >= 0.2)) {
    return true;
  } else if (weather == "sunny" && number <= 0.5) {
    return false;
  }
}

console.log(take_umbrella("sunny", 0.4));
