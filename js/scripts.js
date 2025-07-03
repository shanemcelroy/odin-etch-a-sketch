const container = document.querySelector(".container");
let gridSize = 16;
const button = document.querySelector(".btn-grid");

createGrid(gridSize);

container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("div-item")) {
    // event.target.classList.toggle("change-color");
    let div = event.target;
    div.style.backgroundColor = generateColor();
  }
});

button.addEventListener("click", () => {
  let gridSize = validateInput();
  // Resets the grid
  container.textContent = "";
  createGrid(gridSize);
});

function createGrid(size) {
  // Create columns
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    // Create rows
    for (let j = 0; j < size; j++) {
      let row = document.createElement("div");
      row.classList.add("div-item");
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}

function validateInput() {
  let userInput;
  let isValid = false;

  while (!isValid) {
    userInput = parseInt(prompt("How many squares per row would you like?"));

    if (userInput > 100) {
      alert("Please enter a number less than or equal to 100.");
    } else {
      isValid = true;
    }
  }
  return userInput;
}

function generateColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}
