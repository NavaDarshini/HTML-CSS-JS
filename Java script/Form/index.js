
const div=document.getElementById('btn')
const form=document.getElementById('form')
const label=document.getElementsByClassName('label')
const ball=document.getElementsByClassName('ball')
const checkbox=document.getElementById('checkbox')
const check=document.getElementsByClassName('checkbox')
function openform(){
    form.style.display="block";
    div.style.display="none";
}
//  function mode(){
//    button.classList.toggle("dark")

//  }
// button.addEventListener('mode',function(){
//     document.button.classlist.toggle("dark")
// })
// light.addEventListener('mode',function(){

// })
// checkbox.addEventListener('change',function(){
//     if(checkbox.checked==true){
//         ball.setAttribute('style',"transform:translate(100%)")
//     }
//     if(checkbox.checked==false){
//         ball.setAttribute('style',"transform:translate(0%)")
//     }

// })
 checkbox.addEventListener('change',function(){
     //alert('mode is on')
     form.classList.toggle('dark')
     });
// function toggle(){
//     document.body.classList.toggle('dark');
// }
const name=document.getElementById('name')
const Email=document.getElementById('Email')
const phno=document.getElementById('num')
const password=document.getElementById('pass')
form.addEventListener('submit',logic)
let errors=0
let emailval='/[A-Za-z0-9]+@[A-Za-z0-9]\.[A-Za-z]{3}'
let num=' /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/'
let pass="/^[A-Za-z]\w{7,14}$/"
// /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
function logic(e){
    e.preventDefault();
    if(name.value.trim()=="")
    {
        alert("name should not be empty");
        errors++;
    }
    
    if(!emailval.match(Email.value))
    {
        alert('please enter proper email');
        errors++;
    }
    if (phno.value.trim()=="")
    {
        alert('please fill mobile number')
        errors++;   
    }
    if (isNaN(phno.value)){
        alert('only numeric values are allowed')
        errors++;
    }
    if (phno.value.length!==10){
        alert('mobile number must be 10 digits')
        errors++;
    }
    // if(num.match(phno.value))
    // {
    //     alert('Give phone number in correct format')
    // }
    if(password.value=="")
    {
        alert('please enter a password')
    }
    if(!pass.match(password.value))
    {
        alert('Give valid password')
    }

}

const accordion=document.getElementsByClassName('container');

for (i=0;i<accordion.length;i++) {
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}
