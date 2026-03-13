// function uniquevalues(arr){
//     return 
// }
function showunique(){
    const input =document.getElementById('input').values;
    const arr=input.split(",").map(Number);
    let uniqueArr= [...new Set(arr)]
    let result=document.getElementById('results');
    uniqueArr.innerText=uniqueArr.join(',');
}
//revisit this