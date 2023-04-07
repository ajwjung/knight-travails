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
        });

        return graph;
    };

    function formatPath(path) {
        const formattedPath = path.map(square => `\t[${square}]\n`).join("");
        
        return `=> You made it in ${path.length - 1} moves! Here's your path: \n${formattedPath}`;
    };

    function checkArrayPresent(sourceArr, searchArr) {
        for (const coordinates of sourceArr) {
            return (coordinates[0] === searchArr[0] &&
                coordinates[1] === searchArr[1])
        }
    }

    function getShortestPath(start, end) {
        console.log(start, end);
        const queue = [{ square: start, path: [start] }];
        const visited = [];

        while (queue.length > 0) {
            const { square, path } = queue.shift();

            if (square[0] === end[0] && square[1] === end[1]) {
                return formatPath(path);
            }

            const adjacencyList = createAdjacencyList().find(position => 
                ((position.coordinates[0] === square[0]) &&
                (position.coordinates[1] === square[1]))
            )

            adjacencyList.adjList.forEach(nextSquare => {
                if (!(checkArrayPresent(visited, nextSquare))) {
                    visited.push(nextSquare);
                    const newPath = path.concat([nextSquare]);
                    queue.push({ square: nextSquare, path: newPath });
                }
            })
        }
    }

    return { boardCoordinates, getShortestPath };
})();

export default KnightTravails;
