const grid = document.querySelector(".gridContainer");
const resetButton = document.querySelector(".reset");
const gridSizeDisplay = document.getElementById("gridSizeDisplay");

const createGrid = (size = 16) => {
    grid.innerHTML=""
    grid.style.setProperty("grid-template-columns", `repeat(${size}, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${size}, 1fr)`);

    if (gridSizeDisplay) {
        gridSizeDisplay.textContent = `${size}x${size}`;
    }
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

const getRandomColor = () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

grid.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("square")) {
        event.target.style.backgroundColor = getRandomColor()
    }
});

resetButton.addEventListener("click", () => {
    let userInput = prompt("Enter the number of squares per side (1 - 100):");

    let size = parseInt(userInput);

    if (size >= 1 && size <= 100) {
        createGrid(size);
    } else if (userInput !== null) {
        alert("Please, insert a valid number.");
    }
});


createGrid(16)