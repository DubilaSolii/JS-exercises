let input=document.getElementById('input');
let results=document.getElementById('live');
input.addEventListener('input',function(){
results.innerText=input.value;
})