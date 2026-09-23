const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset")

const createGrid = () => {
    grid.style.setProperty("grid-template-columns", "repeat(16, 1fr)");
    grid.style.setProperty("grid-template-rows", "repeat(16, 1fr)");

    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

updateGrid = ()=>
{
    grid.innerHTML="";
    grid.style.setProperty("grid-template-columns", `repeat(${userInput.value}, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${userInput.value}, 1fr)`);
    for(let i=0; i < userInput.value*userInput.value; i++) {
        const div = document.createElement("div")
        div.classList.add("square");
        grid.appendChild(div);
    }
    console.log(userInput.value);
};


grid.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("square")) {
        event.target.classList.replace("square", "color");
    }
});

userInput.addEventListener("input", updateGrid);

resetButton.addEventListener("click", function() {
    grid.innerHTML="";
    userInput.value="";
    grid.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
    createGrid()
});


createGrid()