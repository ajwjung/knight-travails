import Display from "./modules/display";
import GameBoard from "./modules/gameboard";
import "./styles/style.css";

const Game = (() => {
    const getPathBtn = document.getElementById("get-path");
    const restartBtn = document.getElementById("restart");
    const reset = false;

    const toggleReset = () => !!reset;

    GameBoard.createBoard();

    document.body.addEventListener("click", (e) => {
        Display.choosePositionsHandler(e);
    });

    getPathBtn.addEventListener("click", () => {
        Display.updatePathBox(reset);
    });

    restartBtn.addEventListener("click", () => {
        toggleReset();
        Display.resetSelections();
    })
})();