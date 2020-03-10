// Checking if a Sudoku Board is valid 
// Level: Medium from leetcode.com



function isValidSudoku(board){
    
    for(let i = 0; i < 9; i++){
        let columnValues = []
        let boxValues = []
        for(let x = 0; x < 9; x++){
            columnValues.push(board[x][i])
            
        }
        console.log(checkRowAndColumn(board[i]))
        console.log(checkRowAndColumn(columnValues))
        // if(checkRowAndColumn(board[i]) && checkRowAndColumn(columnValues)  )
    }
    
}

function checkRowAndColumn(array){
    let set = new Set();
    for(let i = 0; i < array.length; i++ ){
        if(array[i] != '.' ){
            if(set.has(array[i])) return false
            set.add(array[i])
        }
    }
    return true;
}

let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]


isValidSudoku(board);