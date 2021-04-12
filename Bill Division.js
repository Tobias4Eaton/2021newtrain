// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    let answer = 0;
    for(let i = 0; i < bill.length ;i++){
        answer+=bill[i];
    }
    if((answer-bill[k])/2 == b) console.log("Bon Appetit")
    else console.log(b-((answer-bill[k])/2));
}