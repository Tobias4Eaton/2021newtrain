// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let answer = 0;
    for(let i = 0 ; i < n ; i++){
        for(let j = i+1 ; j < n ; j++){
            if((ar[i]+ar[j])%k == 0) answer++
        }
    }
    return answer;
}