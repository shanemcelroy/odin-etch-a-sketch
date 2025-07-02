const container = document.querySelector(".container");
const GRIDSIZE = 16;

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    for (let j = 0; j < size; j++) {
      let row = document.createElement("div");
      // row.textContent = i * size + j;
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}

createGrid(GRIDSIZE);
