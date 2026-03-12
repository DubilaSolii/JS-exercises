function factorial(n){
if(n<0)return 'Factorial not defined for negative numbers';

let result=1;
for(i=1;i<=n;i++){
    result*=1;
}
return result;
}

function FactorialCal(){
    let input=document.getElementById('number').value;
    const n=Number(input);
    const result= factorial(n);
    document.getElementById('result').innerText = result;

}//its not working