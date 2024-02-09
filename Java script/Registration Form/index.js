const name=document.getElementById("na")
const email=document.getElementById("em")
const pwd=document.getElementById("pwd")
const cpwd=document.getElementById("cpwd")
const Rform=document.getElementById("regform")
Rform.addEventListener('submit',regformlogic)
let errors=0
let emailreg='/[A-Za-z0-9]+@[A-Za-z0-9]\.[A-Za-z]{3}'
function regformlogic(e){
    e.preventDefault();
    console.log('hello world')
    console.log(name.value,email.value,pwd.value,cpwd.value)
    if(name.value.trim()=="")
    {
        alert("name should not be empty");
        errors++
    }
    if(emailreg.match(email.value)){
        alert("please enter proper email");
        errors++
    }
    if(!pwd.value==cpwd.value){
        alert("password is mismatched")
        errors++
    }
    if(errors==0)
    {
        let obj={
            name: name.value,
            email: email.value,
            password: pwd.value,
            confirmedPaaword: cpwd.value
        }
        console.log(name.value,email.value,pwd.value,cpwd.value)

        console.log(obj)
        localStorage.setItem('userDetails',JSON.stringify(obj))
        console.log("successfully registered")
        clearFields()
        window.location.href="./login.html"

    }
}
function clearFields()
{
    name.value="";
    email.value="";
    pwd.value="";
    cpwd.value="";
}