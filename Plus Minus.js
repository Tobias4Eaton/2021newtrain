// Complete the plusMinus function below.
function plusMinus(arr) {
    let mapA = new Map();
    mapA.set('1',0);
    mapA.set('0',0)
    mapA.set('-1',0)
    for(let i = 0;i < arr.length;i++){
        let temp = 0;
        if(arr[i]>0) mapA.set('1',mapA.get('1')+1)
        else if(arr[i]<0) mapA.set('-1',mapA.get('-1')+1)
        else mapA.set('0',mapA.get('0')+1)
    }
    console.log(mapA.get('1')/arr.length);
    console.log(mapA.get('-1')/arr.length);
    console.log(mapA.get('0')/arr.length);
}