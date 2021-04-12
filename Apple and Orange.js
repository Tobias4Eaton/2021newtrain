// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let answer = [0,0]
    for(let i = 0 ; i < apples.length ; i++){
        apples[i] += a;
        if(apples[i]>=s && apples[i]<=t) answer[0]++;
    }
    for(let j = 0 ; j < oranges.length ; j++){
        oranges[j] += b;
        if(oranges[j]>=s && oranges[j]<=t) answer[1]++;
    }
    console.log(answer[0]);
    console.log(answer[1]);
}