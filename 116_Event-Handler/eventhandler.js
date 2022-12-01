let youreNameFilled = document.getElementById("youreName");
let youreEmailFilled = document.getElementById("youreEmail");
let sendButton = document.getElementById("sendButton");

youreNameFilled.addEventListener("change", function () {
  let name = youreNameFilled.value;

  if (youreName.value.length < 3) {
    console.log("try again");
  } else {
    console.log(name);
  }
});

/* youreNameFilled.addEventListener("change", function () {
  let name = youreNameFilled.value;
  console.log(name);
}); */

sendButton.addEventListener("click", function (event) {
  console.log("+--- clicked submitForm button", event);
  event.preventDefault();
});
