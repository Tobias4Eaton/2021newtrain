/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let map = new Map();
    for(let i = 0 ;i < candles.length;i++){
        if(map.has(candles[i])){
            let tempcount = map.get(candles[i]);
            map.set(candles[i],tempcount+1);
        }
        else{
            map.set(candles[i],1);
        }
    }
    return map.get(Math.max(...candles));
}