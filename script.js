const grid = document.querySelector(".gridContainer");
const resetButton = document.querySelector(".reset")

const createGrid = (size = 16) => {
    grid.innerHTML=""
    grid.style.setProperty("grid-template-columns", `repeat(${size}, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${size}, 1fr)`);

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

updateGrid = ()=>
{
    grid.innerHTML="";
    grid.style.setProperty("grid-template-columns", `repeat(${userInput.value}, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${userInput.value}, 1fr)`);
    for(let i = 0; i < userInput.value*userInput.value; i++) {
        const div = document.createElement("div")
        div.classList.add("square");
        grid.appendChild(div);
    }
    console.log(userInput.value);
};


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

userInput.addEventListener("prompt", updateGrid);

resetButton.addEventListener("click", function() {
    grid.innerHTML="";
    userInput.value="";
    grid.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
    createGrid()
});


createGrid(16)