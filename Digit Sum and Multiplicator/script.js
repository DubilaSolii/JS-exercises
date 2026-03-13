function digitcal(){
    let num=document.getElementById('num');
    let digits=num.toString().split('');
    let sum=0;
    let product=1;
 for(let i=0;i<digits.length;i++){
    sum += Number(digits[i]);
    product*=Number(digits[i]);
}
    console.log('sum', sum);
    console.log('product',product);
}
digitcal(56);

