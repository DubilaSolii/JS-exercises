//this code can do for mor than 3 inputs
function findMax(){
    let input=document.getElementById('numbers').value;
    let numbers=input.split(',');
    let max=Number(numbers[0]);
    for(i=1;i<numbers.length;i++){
        let value=Number(numbers[i]);
        if(max<value){
            max=value
        }
        document.getElementById('results').innerText="The largest number is " +max;
    }
    }
//this is what you asked
// function findMax(a,b,c){
//     let max=a;

//     if(b>max){
//         max=b;
//     }
//     if(c>max){
//         max=c;
//     }
//     return max;
// }

// console.log(findMax(7,8,2));