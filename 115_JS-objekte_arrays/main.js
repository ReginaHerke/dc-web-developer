const obj = {
  firstName: "Max",
  lastName: "Mustermann",
};

const obj2 = {
  firstName: "Lisa",
  lastName: "Musterfrau",
};

/* Auf property Zugreifen */
console.log(obj.firstName);
console.log(obj["firstName"]);

/* Objekt bearbeiten */
obj.firstName = "Paul";
console.log(obj);

/* Property hinzufügen */
obj.age = "18";
console.log(obj);

/* Property löschen */
obj.lastName = null;
/* oder - komplett löschen – nur in Ausnahmefällen */
delete obj.lastName;

console.log(obj);

/* Überprüfen ob ein Key oder Property existiert */
console.log(obj2.hasOwnProperty("firstName"));
console.log(obj2.hasOwnProperty("age"));

/* Iterieren von Keys und Values */
for (let key in obj2) {
  console.log(obj2[key]);
}

console.log(Object.keys(obj)); /* gibt uns ein array zurück */
console.log(Object.values(obj));

/* this Keyword */
const obj3 = {
  firstName3: "Lisa",
  lastName3: "Musterfrau",
  printName: function () {
    console.log(this);
  },
};

obj3.printName();
