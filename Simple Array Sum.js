function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    if(ar.length>0){
        var sum = 0;
        for(var i=0;i<ar.length;i++){
            if(ar[i]<=1000) sum+=ar[i];
        }
    }
    return sum;
}