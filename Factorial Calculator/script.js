function factorial(n){
if(n<0)return 'Factorial not defined for negative numbers';

let result=1;
let i=0;
while(i<=n){
    result*= n;  
    n=n-1; 
    i=i=1;
}
return result;
}

function FactorialCal(){
    let input=document.getElementById('number').value;
    const n=Number(input);
    const result= factorial(n);
    let output=document.getElementById('results');
    output.innerText = result;

}//its not working