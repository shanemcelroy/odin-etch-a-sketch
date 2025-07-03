const container = document.querySelector(".container");
const button = document.querySelector("button");
let gridSize = 16;

createGrid(gridSize);

container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("div-item")) {
    let div = event.target;
    div.classList.add("active");
    changeOpacity(event);
    div.style.backgroundColor = generateColor();
  }
});

button.addEventListener("click", () => {
  let gridSize = generateGrid();
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
      row.classList.add("div-item", "opacity");
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}

function generateGrid() {
  let userInput;
  let isValid = false;

  while (!isValid) {
    userInput = Number(prompt("How many squares per row would you like?"));

    if (userInput > 100 || userInput < 0 || isNaN(userInput)) {
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

function changeOpacity(event) {
  let div = event.target;

  if (div.classList.contains("active")) {
    let opacity = parseFloat(window.getComputedStyle(div).opacity);
    if (opacity < 1) {
      let newOpacity = opacity + 0.1;
      div.style.opacity = newOpacity;
    }
  }
  return;
}
