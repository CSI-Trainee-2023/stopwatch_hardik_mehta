var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
let lapnow = null;
var timer = false;
var flag=0;
var startButten =document.querySelector("#start")
var resetButten=document.querySelector('#reset')
var lapButten=document.querySelector('#lap')
startButten.addEventListener('click',function(){
   if(flag==0){
    start()
    startButten.innerHTML='Stop'
    console.log(startButten)
    flag=1;
    resetButten.innerHTML='lap'
    console.log(resetButten)
   }
   else{
    stop()
    startButten.innerHTML='Start'
    console.log(startButten)
    flag=0;
    resetButten.innerHTML='Reset'
    console.log(resetButten)
   }
   
})
resetButten.addEventListener('click',function(){
    if(flag==1){
    lap()
    }
})
resetButten.addEventListener('click',function(){
    if(flag==0){
    reset()
    }
})

function start(){
    timer=true;
    stopwatch()
   }
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
        var hour= hr;
        var minute =min;
        var second =sec;
        var c =count;
         if(hr<10){
            hour='0'+hour;
         }
         if(min<10){
            minute='0'+minute;
         }
         if(sec<10){
            second='0'+second;
         }
         if(count<10){
            c='0'+c;
         }

        document.getElementById("hr").innerHTML=hour;
        document.getElementById("min").innerHTML=minute;
        document.getElementById("sec").innerHTML=second;
        document.getElementById("count").innerHTML=c;
        setTimeout("stopwatch()",10);
    }
}
function lap(){
    lapnow = `<div class="lap">${hr} : ${min} : ${sec} : ${count}</div>`;
    lapRecord.innerHTML += lapnow;
}