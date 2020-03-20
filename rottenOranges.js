// Level: medium leetcode.com

function rottenOranges(grid) {
    let queue = []
    const directions = [[1, 0], [0, 1], [0, -1], [-1, 0]];
    let initial = 0
    let row = grid.length
    let column = grid[0].length
    grid.forEach((row, r) => {
        row.forEach((position, c) => {
            if(position === 2) queue.push([r,c])
            if(position === 2 || position ===1) initial++
        })    
    })
    let rotten = queue.length
    let time = 0
    while(true){
        let newqueue = []
        queue.forEach(location => {
            directions.forEach(direction => {
                let newi = location[0] + direction[0]
                let newy = location[1] + direction[1]
                if(0 <= newi && newi < row && 0 <= newy && newy < column && grid[newi][newy] == 1){
                    grid[newi][newy]++
                    newqueue.push([newi,newy])
                    rotten ++
                }
            })
            
        })
        queue = newqueue
        if(!queue.length) break
        time++;
        
    }
    
        if(initial === rotten){
            console.log(time)
            return time
        }else{
            console.log(-1)
            return -1
        }
};


let grid = [[2,1,1],[0,1,1],[1,0,1]]
let grid2 = [[2,1,1],[1,1,0],[0,1,1]]

rottenOranges(grid)
rottenOranges(grid2)
