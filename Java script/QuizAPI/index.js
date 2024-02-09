function fetchData(data){
        fetch('https://the-trivia-api.com/v2/questions')
        .then((res)=>res.json())
        .then((data)=>{
        console.log(data)
        displayData(data)
        })
}
fetchData()
const score=0;
const currentindex=0;
const quiz=document.getElementById('quiz-container')
const btn=document.getElementById('startbtn')
btn.addEventListener('click',displayData())

function displayData(data){
    data.forEach(function(category){
        console.log(category)
     const ques=document.getElementById('question-container')
     ques.textContent=category.question
     btn.style.display('none')
     const options=document.getElementById('options')
     const option=document.createElement('btn')
     options.forEach(function(option){
         
         option.textContent=category.incorrectAnswers
         quiz.append(ques,options)

         check();
         })

    })
    
}

function check(){
    if (EventTarget.option==category.correctAnswer){
        score++
        currentindex++
        displayData(data)}
    else{
        currentindex++
        displayData(data)
    }

}
// category
// : 
// "society_and_culture"
// correctAnswer
// : 
// "ICBM"
// difficulty
// : 
// "medium"
// id
// : 
// "64976c110752843c0d8aadbb"
// incorrectAnswers
// : 
// (3) ['ABM', 'HAMB', 'BOMB']
// isNiche
// : 
// false
// question
// : 
// {text: 'What is the abbreviation for a missile with a range greater than 3,400 miles?'}
// regions
// : 
// []
// tags
// : 
// (5) ['weapons', 'military', 'initials', 'abbreviations', 'society_and_culture']
// type
// : 
// "text_choice"
