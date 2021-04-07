var isPalindrome = function(head) {
    let palidrome = true;
    let seq = [head.val];
    while(head.next){
        seq.push(head.next.val);
        head = head.next;
    }
    const l = Math.floor(seq.length);
    for(let i = 0; i < l; i++){
        if(seq[i] != seq[l - 1 - i]){
            return false;
        }
    }
    return true;
};
