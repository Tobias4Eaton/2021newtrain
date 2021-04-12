// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let disA = x-z;
    let disB = y-z;
    if(disA<0) disA *= -1;
    if(disB<0) disB *= -1;
    if(disA<disB) return "Cat A"  
    else if(disB<disA) return "Cat B"
    else return "Mouse C" 
}