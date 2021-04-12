/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    let convergrades = [];
    for(let i = 0; i < grades.length; i++){
        let diff = 5 - (grades[i]%5);
        let temp = grades[i] + diff;
        if(diff < 3 && temp >= 40){
            grades[i] = temp;
        }
    }
    return grades;
}