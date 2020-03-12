// Amazon Interview Question
// Given a 2D grid, each cell is either a zombie 1 or a human 0. Zombies can turn adjacent (up/down/left/right) human beings into zombies every hour. Find out how many hours does it take to infect all humans?

function minHour(row, column, grid){
    if(!row || !column) return 0
    let queue = []
    let population = row * column
    for(let i = 0; i < row; i++){
      for( let y = 0; y < column; y++){
        if(grid[i][y] === 1){
          queue.push([i,y])
        }
      }
    }
    if(population === queue.length) return 0
    const directions = [[1, 0], [0, 1], [0, -1], [-1, 0]];
    let time = 0
    while(true){
      let newqueue = []
      queue.forEach(location => {
        directions.forEach(direction => {
          let newi = location[0] + direction[0]
          let newy = location[1] + direction[1]
          if( 0 <= newi && newi < row && 0 <= newy && newy < column && grid[newi][newy] == 0){
            grid[newi][newy] = 1
            newqueue.push([newi, newy])
          }
        })
      })
      queue = newqueue
      if(!queue.length) break;
      time+=1
    }
    console.log(time)
    return time
}

const grid1 = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1],
    [1, 1, 1, 0, 1]
  ];
  
const grid2 = [
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0]
  ];

minHour(4,4,grid1)
minHour(4,4,grid2)


