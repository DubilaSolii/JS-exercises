function multiplier(){
    const inputs=document.getElementById('number')
    let a=parseFloat(inputs[0].value);
    let b=parseFloat(inputs[0].value);
    if(isNaN(a)||isNaN(b)){
        alert('enter valid numbers');
        return;
    }
    let answer=0;
    for(let i=0; i<b;i++ ){
        answer+= a;
    }
    document.getElementById('results').innerText= answer
}
//this one too is not working