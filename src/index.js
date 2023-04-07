import Display from "./modules/display";
import GameBoard from "./modules/gameboard";
import "./styles/style.css";

const Game = (() => {
    const btn = document.querySelector("button");

    GameBoard.createBoard();

    document.body.addEventListener("click", (e) => {
        Display.choosePositionsHandler(e);
    });

    btn.addEventListener("click", () => {
        Display.updatePathBox();
    });
})();