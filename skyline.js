// In a 2 dimensional array grid, each value in `grid[i][j]` represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

// At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

// What is the maximum total sum that the height of the buildings can be increased?


// Example:
// Input: grid = [ [3,0,8,4 ],[2,4,5,7] ,[9,2,6,3] ,[0,3,1,0] ]
// Output: 35
// Explanation: 
// The grid is:
// [ [3, 0, 8, 4], 
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0] ]

// The skyline viewed from top or bottom is: [9, 4, 8, 7] columns (if im looking at it from north or south)
// The skyline viewed from left or right is: [8, 7, 9, 3] rows (if im looking at it from the sides)

// The grid after increasing the height of buildings without affecting skylines is:

// gridNew = [ [8, 4, 8, 7],
//             [7, 4, 7, 7],
//             [9, 4, 8, 7],
//             [3, 3, 3, 3] ]

let grid = [ [3,0,8,4 ],[2,4,5,7] ,[9,2,6,3] ,[0,3,1,0] ]


function findMaxiIncrease(grid){
    let total = 0
    let row = []
    let column = []
    column = [...grid[0]]
    for(let i = 0; i < grid.length; i++){
        row.push(Math.max(...grid[i]))
        
        for(let j = 0; j < grid.length; j++){
            // if(!column[i]){
            //     column.push(grid[i][j])
            // }else{
                column[j] = Math.max(column[j], grid[i][j])
            // }
        }
    }
    console.log(row)
    console.log(column)

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid.length; j++){
            let small = Math.min(row[j], column[i])
            let differennce = small - grid[i][j]
            total += differennce
        }
    }
    console.log(grid)
    console.log(total)

}


findMaxiIncrease(grid)


