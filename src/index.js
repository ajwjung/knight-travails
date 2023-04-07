import DisplayChanges from "./modules/display";
import GameBoard from "./modules/gameboard";
import KnightTravails from "./modules/knight-travails";
import "./styles/style.css";

const Game = (() => {
    GameBoard.createBoard();

    document.body.addEventListener("click", (e) => {
        DisplayChanges.choosePositionsHandler(e);
    })

    console.log(KnightTravails.createAdjacencyList());
})();