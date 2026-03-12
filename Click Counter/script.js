let counter=0;
let button=document.getElementsByClassName("incre-button");
let span=document.getElementsByClassName('count')[0];
button[0].addEventListener('click',function(){
    counter =counter+1;
    console.log(counter);
    span.innerText=counter;
})