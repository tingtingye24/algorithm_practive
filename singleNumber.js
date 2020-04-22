/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {}
    nums.forEach((num, index) => {
        if(hash[num]){
            hash[num] = hash[num] + 1
        }else{
            hash[num] = 1
        }
    })
    solution = Object.keys(hash).find(key => {
        return hash[key] === 1
    })
    return solution
    
};