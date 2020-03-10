// Level: Medium Leetcode.com


function numSubarrayBounedMax(array, left, right) {
    let solution = 0
    let index = -1
    let prev = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > right){
            prev = 0
            index = i
        }else if(array[i] < left){
            solution = solution + prev
        }else { //if array[i] >= L && array[i] <= R
            solution = solution + i - index
            prev = i -index
        }
    }
    return solution
}

console.log(numSubarrayBounedMax([2,1,0,4,3], 2, 3))