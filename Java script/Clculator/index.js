const display=document.getElementById('result');

// function inc1(){

//     count.textContent=count.value+7
// }
// button.forEach((button)=> {

//     button.addEventListener("click",e =>console.log(e.target.button.value))
// });
function appendtoDispaly(input){
    display.value+=input;
}
function ClearDisplay(){
    display.value="";
}
function Calculate(){
    display.value=eval(display.value);
}