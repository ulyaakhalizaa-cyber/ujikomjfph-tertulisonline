const validTokens = [
"UJIAN01","UJIAN02","UJIAN03","UJIAN04","UJIAN05",
"UJIAN06","UJIAN07","UJIAN08","UJIAN09","UJIAN10",
"UJIAN11","UJIAN12","UJIAN13","UJIAN14","UJIAN15",
"UJIAN16","UJIAN17","UJIAN18","UJIAN19","UJIAN20",
"UJIAN21","UJIAN22","UJIAN23","UJIAN24","UJIAN25"
];

let currentQuestion = 0;
let score = 0;

const questions = [

{
question:"Ibukota Indonesia adalah?",
answers:[
{text:"Jakarta", score:5},
{text:"Bandung", score:0},
{text:"Surabaya", score:0},
{text:"Medan", score:0}
]
},

{
question:"2 + 2 = ?",
answers:[
{text:"3", score:0},
{text:"4", score:5},
{text:"5", score:0},
{text:"6", score:0}
]
}

];

function startExam(){

let token = document.getElementById("token").value;
let jenjang = document.getElementById("jenjang").value;

if(validTokens.includes(token) && jenjang !== ""){

questions = questionBank[jenjang];

document.getElementById("login").style.display="none";
document.getElementById("exam").style.display="block";

showQuestion();
startTimer();

}else{

document.getElementById("loginError").innerText = "Token atau jenjang belum dipilih";

}

}

function showQuestion(){

let q = questions[currentQuestion];

let html = `<h3>${currentQuestion+1}. ${q.question}</h3>`;

q.answers.forEach((a)=>{

html += `
<label>
<input type="radio" name="answer" value="${a.score}">
${a.text}
</label><br>
`;

});

document.getElementById("questionBox").innerHTML = html;

}

function nextQuestion(){

let selected = document.querySelector('input[name="answer"]:checked');

if(selected){

score += parseInt(selected.value);

}

currentQuestion++;

if(currentQuestion < questions.length){

showQuestion();

}else{

finishExam();

}

}

let time = 1800;

function startTimer(){

let timer = setInterval(function(){

time--;

let minutes = Math.floor(time/60);
let seconds = time % 60;

document.getElementById("timer").innerText =
"Time: "+minutes+":"+seconds;

if(time <= 0){

clearInterval(timer);
finishExam();

}

},1000);

}

function finishExam(){

document.getElementById("exam").innerHTML =
"<h2>Ujian selesai</h2><p>Skor kamu: "+score+"</p>";

}

document.addEventListener('contextmenu', event => event.preventDefault());
