const h1Element = document.body.children[0];
console.log(h1Element);

const parentElement = h1Element.parentElement;
console.log(parentElement);

const siblingElement = h1Element.nextElementSibling;
console.log(siblingElement);

const h1ById = document.getElementById("headline");
console.log(h1ById);

/* Exc 5 */
const highlightedParagraph = document.querySelector(".highlighted-paragraph");
console.log(highlightedParagraph);

/* Exc 6 */
document.querySelector(".highlighted-paragraph").innerHTML =
  "This was changed by JavaScript";

/* Exc 7 */
const newElementA = document.createElement("a");
newElementA.setAttribute("href", "https://www.google.com/");
newElementA.textContent = "This leads to Google!";

const firstParagraph = document.body.children[1];

firstParagraph.appendChild(newElementA);
firstParagraph.children[0].remove();

/* Exc 8 */
h1Element.remove();
console.log(document.body);

/* Exc 9 */
document.body.insertBefore(highlightedParagraph, firstParagraph);

/* Exc 10 */

/* Exc 11 */
const clickedParagraph = document.getElementById("click-paragraph");
clickedParagraph.addEventListener("click", onclick);

/* function onclick() {
  document.getElementById("click-paragraph").innerHTML = "clicked";
} */

/* Exc 12 */
function onclick() {
  var clickedtext = document.getElementById("click-paragraph");
  if (clickedtext.innerHTML === "Ich bin klickbar!") {
    clickedtext.innerHTML = "Clicked!";
  } else {
    clickedtext.innerHTML = "Ich bin klickbar!";
  }
}

/* Exc 13 */
const inputText = document.getElementsByTagName("input")[0];
inputText.addEventListener("input", logText);

function logText() {
  console.log(inputText.value);
}
