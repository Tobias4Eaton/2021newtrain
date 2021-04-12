// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    console.log(sum-arr[arr.indexOf(Math.max(...arr))]+' '+(sum-arr[arr.indexOf(Math.min(...arr))]));
}