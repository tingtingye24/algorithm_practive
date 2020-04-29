// twitter function 


let array = [2, 6, 4, 4, 3, 1, 1, 1]

function buyingShowTicket(array, p){
    let answer = 0
    array.forEach((num, index) => {
        if(num > array[p] && index > p){
            array[index] = array[p] - 1
        }else if( num > array[p]){
            array[index] = array[p]
        }
    })
    answer = array.reduce((sum, num) =>sum+num)
    return answer
}

console.log(buyingShowTicket(array, 3))