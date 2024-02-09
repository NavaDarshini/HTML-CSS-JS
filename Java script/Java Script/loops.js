// let x=5;
// while (x<25)
// {
//     console.log(x);
//     x++;
// }
/*even numbers from 20 to 0 in reverse order*/
// let x=21;
// while x>=0
// {
//     if (x%2==0){
//     console.log(x);
//     x--;}
//     else{
//         x--
//     }
// }
/*print alternative letters from a given string, use while loop*/
// let name=prompt("Enter name")
// for n in name;
//     while n<length(name);
//         if n%2==0;
//             console.log(name[n])

// let name=prompt("Enter name")
// while length(name);
//     console.log()


// let values=str.split("")
// while i in values
/*use standard for and print even numbers from 1 to 20 in reverse*/
for(let i=20;i>=;i-=2)
{
    console.log(i)
}
/*take one array and print elements of that array using standard for*/
// let arr=[2,3,5,7,8,6]
// for (let i in arr);
// {
//     console.log(i)
// }
// let arr=[2,3,5,7,8,6]
// for (let i=0; i<arr.length;i++)
// {
//     console.log(i)
// }
for (let i of arr)
{
    if (arr.index(i)%2==0)
    console.log(i)
}
let data={name:"raj", age:50, isgood:true}
console.log(data['name'])
for (let i in data);
{
    console.log(i,data[i])// 0 1 2
}
['raj','bad','mad','ijeie']
//for Each
arr.forEach(function(val) {console.log(val)})
/*take a string using prompt and print every third digit*/
let var=prompt("enter a name")
// var.forEach(function(val,i%3==0) {console.log(val,i)})
var.split("").reverse().forEach(function(val,i))
{
    if((i+1)%3==0)
    {
    console.log(val)
    }
}
let arr=[2,3,5,7,8,6]
const k=arr.forEach(function(val) 
let arr2=[]
{
    return val*3
    arr2.push(val*3)
})
console.log(k)

const r=arr.map(function(val,i)
{
    return val*3
    return val%2==0
})

   console.log(r) 

//filter
const f=arr.filter(function(val)
{
    return val%2==0
})
console.log(f)
//reduce
const re=arr.reduce(function(val,a){return val+a},0)
//0 means accumlated value
console.log(re)