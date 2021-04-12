// Complete the birthday function below.
function birthday(s, d, m) {
    let answer = 0;
    for(let i = 0 ; i < s.length ; i++){
        let tmp  = 0;
        for(let j = i; j < i+m ; j++){
            tmp += s[j];
        }
        console.log(tmp);
        if(tmp == d) answer++
    }
    return answer;
}