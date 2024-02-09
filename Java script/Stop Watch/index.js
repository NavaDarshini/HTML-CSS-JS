const timer=document.getElementById('timer')
let [seconds,minutes,hours]=[0,0,0];
let time=null;
function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h=hours<10 ? "0"+hours:hours;
    let m=minutes<10 ? "0"+minutes:minutes;
    let s=seconds<10 ? "0"+seconds:seconds;
    
    timer.innerHTML=h+":"+m+":"+s;
}
function watchstart(){
    if(time!==null){
      clearInterval(time);  
    }
    time=setInterval(stopwatch,1000);
}
function pause(){
    clearInterval(time);
}
function reset(){
    clearInterval(time);
    let [seconds,minutes,hours]=[0,0,0];
    timer.innerHTML="00:00:00";
}
//  time=setInterval(function(){
//     if (time!==null){
//         clearInterval(time)
//     }
//     let dt=new Date;
//     stopwatch.textContent=dt.toLocaleTimeString();

//  },1000)
// setTimeout(function(){
//     console.log("hello World")
// },1000)
// console.log("hiiiiii")
// function sum(a,b){
//     console.log(a+b)
// }
// sum(2,3)
// function pause(){
//     clearInterval(time)
// }
// function restart()
// {

// }
// function reset(){
//     clear
// }