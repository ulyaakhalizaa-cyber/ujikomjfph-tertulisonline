// TOKEN PESERTA
const validTokens = [
"UJIAN01","UJIAN02","UJIAN03","UJIAN04","UJIAN05",
"UJIAN06","UJIAN07","UJIAN08","UJIAN09","UJIAN10",
"UJIAN11","UJIAN12","UJIAN13","UJIAN14","UJIAN15",
"UJIAN16","UJIAN17","UJIAN18","UJIAN19","UJIAN20",
"UJIAN21","UJIAN22","UJIAN23","UJIAN24","UJIAN25"
];

let currentQuestion = 0;
let score = 0;
let questions = [];


// BANK SOAL PER JENJANG
const questionBank = {

pemula: [

{
question:"Nasi dari?",
answers:[
{text:"A",score:5},
{text:"B",score:4},
{text:"C",score:3},
{text:"D",score:2},
{text:"E",score:1}
]
}

],

terampil: [

{
question:"Susu dari?",
answers:[
{text:"A",score:5},
{text:"B",score:4},
{text:"C",score:3},
{text:"D",score:2},
{text:"E",score:1}
]
}

],

mahir: [

{
question:"Sapi makan?",
answers:[
{text:"A",score:5},
{text:"B",score:4},
{text:"C",score:3},
{text:"D",score:2},
{text:"E",score:1}
]
}

],

pertama: [

{
question:"Rumput warnanya?",
answers:[
{text:"A",score:5},
{text:"B",score:4},
{text:"C",score:3},
{text:"D",score:2},
{text:"E",score:1}
]
}

],

muda: [

{
question:"Sapi minum?",
answers:[
{text:"A",score:5},
{text:"B",score:4},
{text:"C",score:3},
{text:"D",score:2},
{text:"E",score:1}
]
}

]

};



// LOGIN
function startExam(){

let token = document.getElementById("token").value;
let jenjang = document.getElementById("jenjang").value;

if(validTokens.includes(token) && jenjang !== ""){

questions = questionBank[jenjang];

currentQuestion = 0;
score = 0;

document.getElementById("login").style.display="none";
document.getElementById("exam").style.display="block";

showQuestion();
startTimer();

}else{

document.getElementById("loginError").innerText="Token atau jenjang belum dipilih";

}

}



// TAMPILKAN SOAL
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



// NEXT
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



// TIMER
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



// SELESAI
function finishExam(){

document.getElementById("exam").innerHTML =
"<h2>Ujian selesai</h2><p>Skor kamu: "+score+"</p>";

}



// BLOK KLIK KANAN
document.addEventListener('contextmenu', event => event.preventDefault());
