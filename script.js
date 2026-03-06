// TOKEN PESERTA
const validTokens = [
"UJIAN01","UJIAN02","UJIAN03","UJIAN04","UJIAN05",
"UJIAN06","UJIAN07","UJIAN08","UJIAN09","UJIAN10",
"UJIAN11","UJIAN12","UJIAN13","UJIAN14","UJIAN15",
"UJIAN16","UJIAN17","UJIAN18","UJIAN19","UJIAN20",
"UJIAN21","UJIAN22","UJIAN23","UJIAN24","UJIAN25"
];

// VARIABEL GLOBAL
let currentQuestion = 0;
let score = 0;
let questions = [];


// BANK SOAL PER JENJANG
const questionBank = {

pertama: [

{
question:"Contoh soal Ahli Pertama 1?",
answers:[
{text:"Jawaban A", score:5},
{text:"Jawaban B", score:0},
{text:"Jawaban C", score:0},
{text:"Jawaban D", score:0}
]
},

{
question:"Contoh soal Ahli Pertama 2?",
answers:[
{text:"Jawaban A", score:0},
{text:"Jawaban B", score:5},
{text:"Jawaban C", score:0},
{text:"Jawaban D", score:0}
]
}

],

muda: [

{
question:"Contoh soal Ahli Muda 1?",
answers:[
{text:"A", score:5},
{text:"B", score:0},
{text:"C", score:0},
{text:"D", score:0}
]
},

{
question:"Contoh soal Ahli Muda 2?",
answers:[
{text:"A", score:0},
{text:"B", score:5},
{text:"C", score:0},
{text:"D", score:0}
]
}

],

madya: [

{
question:"Contoh soal Ahli Madya 1?",
answers:[
{text:"A", score:5},
{text:"B", score:0},
{text:"C", score:0},
{text:"D", score:0}
]
},

{
question:"Contoh soal Ahli Madya 2?",
answers:[
{text:"A", score:0},
{text:"B", score:5},
{text:"C", score:0},
{text:"D", score:0}
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

document.getElementById("login").style.display="none";
document.getElementById("exam").style.display="block";

showQuestion();
startTimer();

}else{

document.getElementById("loginError").innerText = "Token salah atau jenjang belum dipilih";

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


// NEXT QUESTION
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


// TIMER 30 MENIT
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
