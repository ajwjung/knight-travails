const KnightTravails = (() => {
    // Array of coordinates
    const boardCoordinates = () => {
        const boardSquares = [];
    
        for (let i = 1; i < 9; i += 1) {
            for (let j = 1; j < 9; j += 1) {
                boardSquares.push([j, i]);
            }
        }

        return boardSquares;
    }

    return { boardCoordinates };
})();

export default KnightTravails;
