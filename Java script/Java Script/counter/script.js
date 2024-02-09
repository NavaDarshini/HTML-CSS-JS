const count = document.getElementById("eo")

let c=0
console.log(count.textContent)
// function incr(){
//     console.log("increment called")
//     if(c>=25){
//         alert("number should not be greater than 25")
//     }
//     else
//     {
//         c++
//         count.textContent=c
//     }
// }
// function decr(){
//     console.log("decrement called")
//     if(c<=0){
//         alert("number should not be decreased less than zero")
//     }
//     else{
//         c--
//         count.textContent=c
//     }
// }
// function reset(){
//     console.log("reset called")
//     count.textContent=0
// }
const button=document.getElementsById("btn")
    function text(){
        
        if (c%2==0){
            button.innerText="Even"
        }
        else{
            button.innerText="False"
        }
}
function inc1 ()
{
    console.log("inc1 called")
    c=c+2
    count.textContent=c
}
function inc2(){
    c+=3
    count.textContent=c
}
function inc3(){
    c+=4
    count.textContent=c
}
function reset()
{
    count.textContent=0
}