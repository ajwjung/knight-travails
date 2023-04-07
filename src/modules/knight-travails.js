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

    const formatPath = (path) => {
        const pathMessage = `=> You made it in ${path.length - 1} moves! Here's your path:`
        const formattedPath = path.map(square => `\t[${square}]\n`).join(" ->");

        return [pathMessage, formattedPath];
    };

    const getIndexOfCoordinates = (coord) => {
        const boardSquares = boardCoordinates();

        for (let i = 0; i < 64; i += 1) {
            if (boardSquares[i][0] === coord[0] &&
                boardSquares[i][1] === coord[1]) { 
                return i;
            }
        }
    };

    const highlightPathSquares = (path, reset) => {
        path.forEach((square, i) => {
            const timeoutId = setTimeout(() => {
                const squareId = `square${getIndexOfCoordinates(square)}`;
                const squareDiv = document.getElementById(squareId);
                squareDiv.classList.add("intermediate-square");
            }, i * 1000)

            if (reset) {
                clearTimeout(timeoutId);
            }
        })
    };

    const checkArrayPresent = (sourceArr, searchArr) => {
        for (const coordinates of sourceArr) {
            return (coordinates[0] === searchArr[0] &&
                coordinates[1] === searchArr[1])
        }
    };

    const getShortestPath = (start, end) => {
        const queue = [{ square: start, path: [start] }];
        const visited = [];

        while (queue.length > 0) {
            const { square, path } = queue.shift();

            if (square[0] === end[0] && square[1] === end[1]) {
                return path;
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

    return { boardCoordinates, formatPath, highlightPathSquares, getShortestPath };
})();

export default KnightTravails;
