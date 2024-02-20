const name=document.getElementsByClassName('input-name')
const email=document.getElementsByClassName('input-email')
const password=document.getElementsByClassName('input-password')
const confirmpassword=document.getElementsByClassName('re-enter-password')
const error=document.getElementById("error")
const register=document.getElementById("btn1")
const form=document.getElementsByClassName('form')
form.addEventListener('click',formlogic)
let errors=0
// window.addEventListener('DOMContentLoaded',function(){
//     let pos=window.navigator.geolocation;
//     console.log(pos.getCurrentPosition((obj)=>
//     {
//         console.log("this is your position"+obj);
//         console.log(obj)
//     }))
// })
let emailpattern='/[A-Za-z0-9]+@[A-Za-z0-9]\.[A-Za-z]{3}'
function formlogic(e)
{
    e.preventDefault();
    console.log("hello world")
    if (name.value.trim() == "")
    {
        error.textContent="please enter name"
        error.style.color="red"
    }
    else{
        error.textContent=""
    }
    if(emailpattern.match(email.value))
    {
        error.textContent=""
    }
    else{
        error.textContent="Mail should be in format"
    }
    if(isNaN(password.value))
    {
        error.textContent="Password should be in numbers"
    }
    else{
        error.textContent=""
    }
    if(password.value==confirmpassword.value)
    {
        error.textContent=""
    }
    else{
        error.textContent="password is not matching"
    }

}