/* Exc 1 */
const person = {
  firstName: "Nina",
  lastName: "Thaler",
  age: 20,
  height: 174,
};

console.log(person);

/* Exc 2 */
console.log(person.firstName);
console.log(person.lastName);
console.log(person["age"]);
console.log(person["height"]);

/* Exc 3 */
person.firstName = "Karin";
person.lastName = "Sparr";
person["age"] = 30;
person["height"] = 163;
person.hobbies = ["schwimmen", "lesen", "wandern"];

console.log(person);

/* Exc 4 */
person.hobbies.shift();
console.log(person);

/* Exs 5 */
/* person.age = null; */
delete person.age;
console.log(person);
console.log(person.hasOwnProperty("age"));

/* Exc 6 */
function listProperties(object) {
  const arrayOfKeys = Object.keys(object);
  arrayOfKeys.forEach((key) => console.log(key, typeof object[key]));
}

listProperties(person);

/* Exc 7 */

const person2 = {
  firstName: "Nina",
  lastName: "Thaler",
  age: 20,
  height: 174,
  listProperties() {
    const arrayOfKeys = Object.keys(this);
    arrayOfKeys.forEach((key) => console.log(key, typeof this[key]));
  },
};

person2.listProperties(person2);
