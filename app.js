// // callback function start

// function handleUpperCase(value) {
//   console.log(value.toUpperCase());
// }

// function handleReverse(value) {
//   console.log(value.split("").reverse().join("").toUpperCase());
// }

// // callback function End

// function handleName(name, cb) {
//   const fullName = `${name} ahmed`;
//   cb(fullName);
// }

// handleName("Iftekhar", handleUpperCase);
// handleName("Iftekhar", handleReverse);

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    first.style.color = "red";
  }, 1000);
  setTimeout(() => {
    second.style.color = "blue";
  }, 3000);
  setTimeout(() => {
    third.style.color = "green";
  }, 2000);
});
