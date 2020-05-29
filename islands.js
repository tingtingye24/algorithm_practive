//amazon question






function islands(grid){
    let count  = 0
    function dfs(grid, row, col){
        grid[row][col] = '0'
        if(row - 1 >= 0 && grid[row - 1][col] === '1'){
            dfs(grid, row - 1, col)
        }
        if(row + 1 < grid.length && grid[row + 1][col] === '1'){
            dfs(grid, row + 1, col)
        }
        if(col - 1 >= 0 && grid[row][col - 1] === '1'){
            dfs(grid, row, col - 1)
        }
        if(col + 1 < grid[0].length && grid[row][col + 1] === '1'){
            dfs(grid, row, col + 1)
        }
        return;
    }
    for(let i = 0; i <  grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                dfs(grid, i, j)
                count++
            }
        }
    }
    console.log(count)
    return count

}

let grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]


islands(grid)

