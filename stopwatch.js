var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;
var flag=0;
var startButten =document.querySelector("#start")
startButten.addEventListener('click',function(){
   if(flag==0){
    start()
    startButten.innerHTML='Stop'
    console.log(startButten)
    flag=1;
   }
   else{
    stop()
    startButten.innerHTML='Start'
    console.log(startButten)
    flag=0;
   }

})


function start(){
    timer=true;
    stopwatch()
   }
function stop(){
    timer= false;
    
}
function reset(){2
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