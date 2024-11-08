"use strict";
console.clear();

const colors = [
  "#03071eff",
  "#370617ff",
  "#6a040fff",
  "#9d0208ff",
  "#d00000ff",
  "#dc2f02ff",
  "#e85d04ff",
  "#f48c06ff",
  "#faa307ff",
  "#ffba08ff",
  "#f94144ff",
  "#f3722cff",
  "#f8961eff",
  "#f9c74fff",
  "#90be6dff",
  "#43aa8bff",
  "#577590ff",
];
//  <li style="background-color: #03071eff"></li>

/* <ul class="d-flex justify-content-between" id="palette">

</ul> */

// const palette = document.getElementById("palette");
// console.log(palette);

// let template = "";
// for (let i = 0; i < colors.length; i++) {
//   template += `
//     <li style="background-color: ${colors[i]}"></li>
//   `;
// }
// palette.innerHTML = template;
function generatePalette() {
  const container = document.querySelector(".container");

  /*Disegno palette di colori */
  const elUl = document.createElement("ul");
  elUl.className = "d-flex justify-content-between";

  elUl.setAttribute("id", "palette");

  //console.log(elUl);
  for (let i = 0; i < colors.length; i++) {
    const elementLi = document.createElement("li");
    elementLi.style.backgroundColor = colors[i];
    elementLi.addEventListener("click", function () {
      alert(colors[i]);
    });
    elUl.appendChild(elementLi);
  }

  container.appendChild(elUl); //prependChild appende per primo
}
//generatePalette();

const elInputName = document.getElementById("name");
const elInputAge = document.getElementById("age");
const elInputKm = document.getElementById("km");
console.log(elInputName);

const elP = document.getElementById("result");
console.log(elP);

//Con evento change sulla casella di input
// elInputName.addEventListener("change", function (event) {
//   console.log(elInputName.value);
//   elP.innerText = elInputName.value;
// });

//Con evento input sulla casella di input
// elInputName.addEventListener("input", function (event) {
//   console.log(elInputName.value);
//   elP.innerText = elInputName.value;
// });

// const myButton = document.querySelector("a");

// myButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log(event);
//   console.log(event.currentTarget);

//   console.log(elInputName.value);
//   elP.innerText = elInputName.value;
// });

const myform = document.getElementById("login");

myform.addEventListener("submit", function (event) {
  event.preventDefault();
  //reset per fare altri biglietti
  elP.innerHTML = "";
  elP.classList.add("d-none");

  // console.log(event);
  // console.log(event.currentTarget);
  const priceKm = 0.21;

  const km = parseInt(elInputKm.value);
  const price = priceKm * km;

  elP.innerHTML = price.toFixed(2) + "€";
  elP.classList.remove("d-none");
  //reset per fare altri biglietti
  elInputKm.value = "";
  elInputAge.value = "";
  elInputName.value = "";
});
