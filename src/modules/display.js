import KnightTravails from "./knight-travails";

const DisplayChanges = (() => {
    const msgBox = document.querySelector(".message-box");
    const startTextBox = document.getElementById("start-position");
    const endTextBox = document.getElementById("end-position");

    let startChosen = false;
    const endChosen = false;
    let startSquare;
    let endSquare;
    
    const chooseStartHandler = (e) => {
        // First time choosing start position
        if (!startChosen && !endChosen && e.target.classList.contains("square")) {
            startSquare = e.target.id.substr(6);
            startChosen = true;
            const squareCoordinates = KnightTravails.boardCoordinates()[startSquare];
            startTextBox.textContent = `[${squareCoordinates}]`;
            msgBox.textContent = "Click on a square to select the knight's ending position or click on the same square to reset the starting position."
            e.target.classList.toggle("selected");
            console.log(startChosen);
            // De-select to redo start position
        } else if (startChosen && !endChosen &&
            startSquare === e.target.id.substr(6) && e.target.classList.contains("square")) {
            startChosen = false;
            startSquare = "";
            e.target.classList.toggle("selected");
            startTextBox.textContent = "";
            msgBox.textContent = "Click on a square to select the knight's starting position.";
            console.log(startChosen);
        }
    }

    return { chooseStartHandler }
})();

export default DisplayChanges;