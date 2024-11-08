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

const container = document.querySelector(".container");
console.log(container);

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

container.appendChild(elUl);
