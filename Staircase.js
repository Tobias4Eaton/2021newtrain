// Complete the staircase function below.
function staircase(n) {
    let star = "" ;
    for(let i = 1;i <= n;i++ ){
        for(let j = i;j <= n-1;j++){
            star+=" ";
        }
        for(let k = 1;k <= i;k++){
            star+="#";
        }
        console.log(star);
        star = "";
    }
}