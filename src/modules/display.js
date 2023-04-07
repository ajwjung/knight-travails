import KnightTravails from "./knight-travails";

const DisplayChanges = (() => {
    const msgBox = document.querySelector(".message-box");
    const startTextBox = document.getElementById("start-position");
    const endTextBox = document.getElementById("end-position");

    let startChosen = false;
    let endChosen = false;
    let startSquare;
    let endSquare;
    
    const choosePositionsHandler = (e) => {
        // First time choosing start position
        if (!startChosen && !endChosen && e.target.classList.contains("square")) {
            startSquare = e.target.id.substr(6);
            startChosen = true;
            const squareCoordinates = KnightTravails.boardCoordinates()[startSquare];
            startTextBox.textContent = `[${squareCoordinates}]`;
            msgBox.textContent = "Click on a square to select the knight's ending position or click on the same starting square to reset the starting position.";
            e.target.classList.toggle("start-selected");
            // De-select to redo start position
        } else if (startChosen && !endChosen &&
            startSquare === e.target.id.substr(6) && e.target.classList.contains("square")) {
            startChosen = false;
            startSquare = "";
            e.target.classList.toggle("start-selected");
            startTextBox.textContent = "";
            msgBox.textContent = "Click on a square to select the knight's starting position.";
            // First time choosing end position
        } else if (startChosen && !endChosen && e.target.classList.contains("square")) {
            endSquare = e.target.id.substr(6);
            endChosen = true;
            const squareCoordinates = KnightTravails.boardCoordinates()[endSquare];
            endTextBox.textContent = `[${squareCoordinates}]`;
            msgBox.textContent = "Click on the button to find the shortest path or click on the same ending square to reset the ending position.";
            e.target.classList.toggle("end-selected");
            // De-select to redo end position
        } else if (startChosen && endChosen &&
            endSquare === e.target.id.substr(6) && e.target.classList.contains("square")) {
                endChosen = false;
                endSquare = "";
                e.target.classList.toggle("end-selected");
                endTextBox.textContent = "";
                msgBox.textContent = "Click on a square to select the knight's ending position or click on the same starting square to reset the starting position.";
            }
        }

    return { choosePositionsHandler }
})();

export default DisplayChanges;