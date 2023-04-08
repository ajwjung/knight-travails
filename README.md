# Knight Trvails

## Objective

To create an algorithm that finds the shortest path between the starting and ending square for a chess's knight piece on an 8x8 game board. Full details can be found on [The Odin Project's page](https://www.theodinproject.com/lessons/javascript-knights-travails).

**Requirements**

1. Use a data structure that's similar but not identical to a binary tree

2. Use a search algorithm to find the shortest path

3. Output what the full path looks like

## Built With

- HTML5
- CSS3
- Vanilla JS
- [Webpack](https://webpack.js.org/)

## Using Knight Travails

Click on any square to set the knight's starting position (square highlighted in red), then click on any square to set the knight's ending position (square highlighted in blue). Select the same square again to undo your selection, or hit the "Restart" button to reset the board and path.

Note that you will not be able to select the same square for the start and end positions because I implemented a "click again to deselect" feature. 

## Author's Notes

Knight Travails was quite the challenge and I spent over a week thinking about the logic for this algorithm. In the process, I learned a new data structure, graphs, and its different representations and practiced how to use Breadth-First Search (BFS).

I originally unknowingly went with Depth-First Search (DFS) because I didn't realize BFS and DFS were applicable to non-tree data structures. My idea was to traverse a path completely, then compare all subsequent paths to the existing shortest path, updating it as we find shorter possibilities. But after watching multiple videos on graph traversal, I understood that BFS was the better choice for finding the shortest path.

The biggest challenge I faced with this project was not knowing how to compare different paths as we travel each possible path. I tried storing the first path traveled in one array, then each subsequent path would be stored in another array so I could compare the two. This didn't work out for various reasons but I finally got the code working by storing the paths in queue with each upcoming square (neighbor).