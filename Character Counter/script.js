// function counter(){
    let textarea=document.getElementById('text');
    textarea.addEventListener('input',function(){
        let resultElt= document.getElementsByClassName('char')[0];
       resultElt.innerrText=textarea.value.length;
        console.log(textarea.value.length);
    })
    // character.innerText= textarea.length;
// }
