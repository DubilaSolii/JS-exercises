// function uniquevalues(arr){
//     return 
// }
/* function showunique(){
    const input =document.getElementById('input').value;
    const arr=input.split(",");
    let uniqueArr= [...new Set(arr)]
    let result=document.getElementById('results');
    uniqueArr.innerText=uniqueArr.join(',');
} */
 let result= document.getElementById('results');

function showunique() {
    const input = document.getElementById('input');
    let value = input.value;
    value = value.split(',');
    let unique = [];
    for (let number of value) {
        if (!unique.includes(number)) {
            unique.push(number)
        }
    }
       result.innerText=unique;
    
}
//revisit this