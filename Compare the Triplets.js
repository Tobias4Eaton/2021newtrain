// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let sumA = 0;
    let sumB = 0;
    for(let i = 0;i < a.length;i++){
        if(a[i]>b[i]) sumA+=1;
        else if(a[i]<b[i]) sumB+=1; 
    }
    return [sumA,sumB];
}