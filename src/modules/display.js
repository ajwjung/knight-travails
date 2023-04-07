import KnightTravails from "./knight-travails";

const Display = (() => {
    const msgBox = document.querySelector(".message-box");
    const startTextBox = document.getElementById("start-position");
    const endTextBox = document.getElementById("end-position");
    const pathBox = document.querySelector(".path-text");
    const path = document.querySelector(".path")

    let startChosen = false;
    let endChosen = false;
    let startSquare;
    let endSquare;

    const updateMessageBox = (scenario) => {
        switch (scenario) {
            case 1: 
            case 4: 
                msgBox.textContent = "Click on a square to select the knight's ending position or click on the same starting square to reset the starting position.";
                break;
            case 2:
                msgBox.textContent = "Click on a square to select the knight's starting position.";
                break;
            case 3:
                msgBox.textContent = "Click the button to find the shortest path or click on the same ending square to reset the ending position.";
                break;
            default:
                msgBox.textContent = "Click on a square to select the knight's starting position.";
                break;
        }
    };
    
    const choosePositionsHandler = (e) => {
        // First time choosing start position
        if (!startChosen && !endChosen && e.target.classList.contains("square")) {
            startSquare = e.target.id.substr(6);
            startChosen = true;
            const squareCoordinates = KnightTravails.boardCoordinates()[startSquare];
            startTextBox.textContent = `[${squareCoordinates}]`;
            updateMessageBox(1);
            e.target.classList.toggle("start-selected");
            // De-select to redo start position
        } else if (startChosen && !endChosen &&
            startSquare === e.target.id.substr(6) && e.target.classList.contains("square")) {
            startChosen = false;
            startSquare = "";
            e.target.classList.toggle("start-selected");
            startTextBox.textContent = "";
            updateMessageBox(2);
            // First time choosing end position
        } else if (startChosen && !endChosen && e.target.classList.contains("square")) {
            endSquare = e.target.id.substr(6);
            endChosen = true;
            const squareCoordinates = KnightTravails.boardCoordinates()[endSquare];
            endTextBox.textContent = `[${squareCoordinates}]`;
            updateMessageBox(3);
            e.target.classList.toggle("end-selected");
            // De-select to redo end position
        } else if (startChosen && endChosen &&
            endSquare === e.target.id.substr(6) && e.target.classList.contains("square")) {
            endChosen = false;
            endSquare = "";
            e.target.classList.toggle("end-selected");
            endTextBox.textContent = "";
            updateMessageBox(4);
        }
    };

    const updatePathBox = () => {
        const startPosition = document.getElementById("start-position").textContent;
        const endPosition = document.getElementById("end-position").textContent;
    
        const shortestPath = KnightTravails.getShortestPath(JSON.parse(startPosition), JSON.parse(endPosition));
        KnightTravails.highlightPathSquares(shortestPath);
        const [pathMsg, fullPath] = KnightTravails.formatPath(shortestPath);
        pathBox.textContent = pathMsg;
        path.textContent = fullPath;
    };

    const resetSelections = () => {
        startChosen = false;
        endChosen = false;
        startSquare = "";
        endSquare = "";
        updateMessageBox();
        startTextBox.textContent = "";
        endTextBox.textContent = "";
        pathBox.textContent = "";
        path.textContent = "";
        
        const allSquares = document.body.querySelectorAll(".square");

        allSquares.forEach(square => {
            square.classList.remove("start-selected");
            square.classList.remove("end-selected");
            square.classList.remove("intermediate-square");
        })
    };

    return { choosePositionsHandler, updatePathBox, resetSelections }
})();

export default Display;