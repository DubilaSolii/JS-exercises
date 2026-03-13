function multiplier(){
    const inputs=document.getElementById('number');
    let a=parseFloat(inputs.value);
    let b=parseFloat(inputs.value);
    if(isNaN(a)||isNaN(b)){
        alert('enter valid numbers');
        return;
    }
    let answer=0;
    for(let i=0; i<b;i++){
        answer+= a;
    }
   let result=document.getElementById('result');
   result.innerText=answer;
}
