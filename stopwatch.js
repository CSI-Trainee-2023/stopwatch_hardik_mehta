var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;
var startButten =document.querySelector("#start")
function start(){
    timer=true;
    stopwatch()
   }
startButten.addEventListener('click',function(){
    
    startButten.innerHTML='Stop'
    console.log(startButten);

    

})
stopButten.addEventListener('click',function(){
    
    stopButten.innerHTML='Start'
    console.log(stopButten);
})

var stopButten=document.querySelector("#start")
stopButten.addEventListener("click",stop)
function stop(){
    timer= false;
}
function reset(){
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}
function stopwatch(){
    if(timer==true){
        count++;
        if(count==100){
            sec++;
            count=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hr++;
            min=0;
            sec=0;
        }
        var a = hr;
        var b =min;
        var d =sec;
        var c =count;
         if(hr<10){
            a='0'+a;
         }
         if(min<10){
            b='0'+b;
         }
         if(sec<10){
            d='0'+d;
         }
         if(count<10){
            c='0'+c;
         }

        document.getElementById("hr").innerHTML=a;
        document.getElementById("min").innerHTML=b;
        document.getElementById("sec").innerHTML=d;
        document.getElementById("count").innerHTML=c;
        setTimeout("stopwatch()",10);
    }
}