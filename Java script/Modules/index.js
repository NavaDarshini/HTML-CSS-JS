function sum(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(a-b)
}
function mul(a,b){
    console.log(a*b)
}
function div(a,b){
    console.log(a%b)
}
 let arr=["a","d","c"]
 let a=20,b=30,c=40;
 class Animal{
    name;
    constructor(n)
    {
        this.name=n
    }
    display()
    {
        console.log("Animal name is "+this.name)
    }
}
export{sum,sub,mul,div,arr,a,b,c}
export default Animal
