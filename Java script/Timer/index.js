
const time=document.getElementById('timer');
// (function (){
//     let sec = 0;
//     timer=setInterval(()=>{
//         time.innerHTML='00:'+sec;
//         sec ++;
//     },1000)
// })()
timer=setInterval(function(){
    let dt=new Date;
    time.textContent=dt.toLocaleTimeString();


},1000)
setTimeout(function(){
    console.log('hello world')
},10000)
console.log('hiiiiiiiii')
let a=20;
console.log(a)
function sum(a,b)
{
    console.log(a+b)
}
sum(2,3)
function pause(){
    clearInterval(timer);
}