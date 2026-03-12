// function counter(){
    let textarea=document.getElementById('text');
    textarea.addEventListener('input',function(){
        document.getElementsByClassName('char')[0].innerText=textarea.value.length;
        console.log(textarea.value.length);
    })
    // character.innerText= textarea.length;
// }
