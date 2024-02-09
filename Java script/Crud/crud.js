let information=[
    {
    SINo:"1",
    Name:"Darshu",
    Age:"24",
    Section:'A'
    },
    {
    SINo:'2',
    Name:'Nandu',
    Age:'25',
    Section:'B'
    }    
]
function fetchData(){
    fetch(information)
    .then(function(res){return res.json()})
    .then(function(data){displayData(data)})
}
fetchData()
// function displayData(data){
//     data.forEach(function(item){
//     const div=document.getElementById()

//     })




