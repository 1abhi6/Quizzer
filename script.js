const quizDB = [
    {
        question:"Q1: Which is the capital city of India?",
        a: "Mumbai",
        b: "Delhi",
        c: "Chennai",
        d: "ShiLong",
        ans: "answer2"
    },    
    {
        question:"Q2: What are the North-Eastern states of India called?",
        a: "7 Sisters",
        b: "8 Sisters",
        c: "9 Sisters",
        d: "No of the above",
        ans: "answer1"
    },    
    {
        question:"Q3: Which is the financial capital city of India?",
        a: "Chennai",
        b: "Delhi",
        c: "Mumbai",
        d: "ShiLong",
        ans: "answer3"
    },    
    {
        question:"Q4: Which is the largest state in India landwise?",
        a: "Uttar Pradesh",
        b: "Maharashtra",
        c: "Madhya Pradesh",
        d: "Rajasthan",
        ans: "answer4"
    },    
    {
        question:"Q5: Which state is called heart of India?",
        a: "Maharashtra",
        b: "Arunachal Pradesh",
        c: "Tamil Nadu",
        d: "Madhya Pradesh",
        ans: "answer4"
    },    
    {
        question:"Q6: Who is known as father of the Indian space programme?",
        a: "Dr.Abdul Kalam",
        b: "Dr.Vikram Sarabhai",
        c: "Dr.K Siven",
        d: "Dr.Ritu Karidhal",
        ans: "answer2"
    },    
    {
        question:"Q7: Where does the headquarters of ISRO is located?",
        a: "Chennai",
        b: "Delhi",
        c: "Mumbai",
        d: "Bengaluru",
        ans: "answer4"
    },    
    {
        question:"Q8: Which of the following is the capital of Arunachal Pradesh?",
        a: "Imphal",
        b: "Itanagar",
        c: "Guwahati",
        d: "Dibrugarh",
        ans: "answer2"
    },    
    {
        question:"Q9: Which state has the largest population in India?",
        a: "Uttar Pradesh",
        b: "Maharastra",
        c: "Bihar",
        d: "Andra Pradesh",
        ans: "answer1"
    },    
    {
        question:"Q10: Which state is known as rice bowl of India?",
        a: "Kerala",
        b: "Chhattisgarh",
        c: "Tamil Nadu",
        d: "Arunachal Pradesh",
        ans: "answer2"
    },    

];

const question = document.querySelector('#question');

const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const playmore = document.querySelector('#playmore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

};

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deSelectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if(checkAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deSelectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        playmore.classList.remove('tryagain');
        playmore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} 🤞</h3>
        <button id = "btn" onclick="location.reload()">Play Again</button>
        <h3>Your Answers</h3>
        <pre>
1. Delhi
2. 7 Sisters
3. Mumbai
4. Rajasthan
5. Madhya Pradesh
6. Dr.Vikram Sarabhai
7. Bengaluru
8. Itanagar
9. Uttar Pradesh
10. Andhra Pradesh
        </pre>
        `;
        

    }
});
