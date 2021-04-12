function diagonalDifference(arr) {
    // Write your code here
    let sum = 0;
    let temp = arr.length;
    for(let i = 0;i < temp;i++){
        sum += arr[i][i]-arr[i][temp-1-i];
    }
    if(sum<0) return sum*-1;
    else return sum;
}