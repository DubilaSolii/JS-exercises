function isLeapYear(){
    let year = document.getElementById('text_box').value;
    let response=document.getElementById('results');
    if(year%4==0){
        response.innerText= year +' is a Leap Year';
    }
    else{
        response.innerText=year +  ' is not a leap Year';
        
    }
   year='';
}