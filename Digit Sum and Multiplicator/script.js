function digitcal(num){
    let digit=num.toString().split();
    let sum=0;
    let product=1;

    for(let digit of digits){
        sum+= Number(digit);
        product*= Number(digit);
    }
    console.log('sum', sum);
    console.log('product',product);
}
digitcal(55);