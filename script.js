const grid = document.querySelector(".gridContainer");

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div")
        div.classList.add("square");
        grid.appendChild(div);
    }
}
const square = document.querySelector("div");
square.addEventListener("mouseover", function(event)
{
    event.target.classList.replace("square", "color");
});
createGrid()