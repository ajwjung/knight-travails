import DisplayChanges from "./modules/display";
import GameBoard from "./modules/gameboard";
import "./styles/style.css";

const Game = (() => {
    GameBoard.createBoard();

    document.body.addEventListener("click", (e) => {
        DisplayChanges.choosePositionsHandler(e);
    })
})();