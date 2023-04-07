const KnightTravails = (() => {
    // Array of coordinates corresponding to each square on the board
    const boardCoordinates = () => {
        const boardSquares = [];
    
        for (let i = 1; i < 9; i += 1) {
            for (let j = 1; j < 9; j += 1) {
                boardSquares.push([j, i]);
            }
        }

        return boardSquares;
    };

    const createAdjacencyList = () => {
        const allCoordinates = boardCoordinates();

        const graph = allCoordinates.map(coordinates => {
            const adjList = [
                [coordinates[0] - 1, coordinates[1] - 2],
                [coordinates[0] + 1, coordinates[1] - 2],
                [coordinates[0] - 2, coordinates[1] - 1],
                [coordinates[0] + 2, coordinates[1] - 1],
                [coordinates[0] - 2, coordinates[1] + 1],
                [coordinates[0] + 2, coordinates[1] + 1],
                [coordinates[0] - 1, coordinates[1] + 2],
                [coordinates[0] + 1, coordinates[1] + 2]
            ]

            const filteredList = adjList.filter(coord => 
                coord[0] > 0 && coord[0] < 9 &&
                coord[1] > 0 && coord[1] < 9)

            return { adjList: filteredList, coordinates };
        })

        return graph;
    };

    return { boardCoordinates, createAdjacencyList };
})();

export default KnightTravails;
