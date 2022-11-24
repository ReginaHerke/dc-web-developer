/* Array-Literal Schreibweise */
let firstArray = ["Montag", "Dienstag", "Mittwoch"];
/* Constructor-Function */
let anotherArray = new Array("Freitag", "Samstag", "Sonntag");

let todoList = ["Bad putzen", "Einkaufen"];
console.log(todoList);

todoList.push("Rasen mähen");
console.log(todoList);

todoList.unshift("Sport machen");
console.log(todoList);

todoList.splice(2, 0, "Garage streichen", "Rollrasen verlegen", "Klo putzen");
console.log(todoList);

todoList.pop();
console.log(todoList);

todoList.shift();
console.log(todoList);

todoList.splice(1, 2);
console.log(todoList);

let todoTomorrow = todoList.slice(1);
console.log(todoTomorrow);

let names = ["Klaus", "Xaver", "Peter", "Andreas"];
console.log(names);

names.reverse();
console.log(names);
