const container = document.querySelector(".container");
const GRIDSIZE = 16;

createGrid(GRIDSIZE);

container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("div-item")) {
    event.target.classList.toggle("change-color");
  }
});

function createGrid(size) {
  // Create columns
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    // Create rows
    for (let j = 0; j < size; j++) {
      let row = document.createElement("div");
      row.classList.add("div-item");
      // row.textContent = i * size + j;
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}
