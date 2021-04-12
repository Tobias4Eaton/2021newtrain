// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let sum = 0;
    let num = ar.filter(function(element,index,array){return array.indexOf(element) == index;});
    let result = num.map(function(element,index,array){return 0});
    for(let i=0;i<num.length;i++){
        for(let j=0;j<n;j++){
            if(ar[j] == num[i]) result[i]+=1; 
        }
    }
    for(let i=0;i<result.length;i++){
        sum += Math.floor(result[i]/2);
    }
    return sum;
}