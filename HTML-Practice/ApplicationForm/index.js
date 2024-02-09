form=document.getElementById('form')
firstname=document.getElementById('first_name')
lastname=document.getElementById("last_name")
email=document.getElementById('email')
form.addEventListener("submit",e=>
{
    e.preventDefault();
    validateInputs();
})
const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess=(element)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}
validateInputs=>{
const Firstname=firstname.value.trim();
const Lastname=lastname.value.trim();
const Email=email.value.trim();
    if(Firstname===''){
        setError(username,'username is required');
    }else{
        setSuccess(username);
    }
}