function uniquevalues(arr){
    return [new set(arr)]
}
function showunique(){
    const input =document.getElementById('input').values;
    const arr=input.split(',').map(n => Number(n.trim()));
    const uniqueArr= uniquevalues(arr);
    document.getElementById('results').innerText=uniqueArr.join(',');
}
//revisit this