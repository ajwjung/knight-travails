const GameBoard = (() => {
    const gameboardDiv = document.querySelector(".board");

    const styleSquare = (i, j, square) => {
        if ((i % 2 === 0) && (j % 2 !== 0) || (i % 2 !== 0) && (j % 2 === 0)) {
            square.classList.add("dark");
        } else {
            square.classList.add("light");
        }
    };

    const createBoard = () => {
        let idNumber = 63;

        for (let i = 1; i < 9; i += 1) {
            const newRow = document.createElement("div");
            newRow.classList.add("row");
            gameboardDiv.appendChild(newRow);

            for (let j = 1; j < 9; j += 1) {
                const newSquare = document.createElement("div");
                newSquare.classList.add("square");
                newSquare.setAttribute("id", `square${idNumber}`);
                styleSquare(i, j, newSquare);
                newRow.appendChild(newSquare);
                idNumber -= 1;
            }
        }
    };

    return { createBoard };
})();

export default GameBoard;