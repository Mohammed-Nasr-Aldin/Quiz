const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

let mode = "answer";
totalQuestionsSpan.innerHTML = "5";

function startQuiz(){
    quizScreen.classList.add("active");
    startScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    showQ();
};

let score = 0;
scoreSpan.innerHTML = score;
function addPoint(){
    score += 1;
    scoreSpan.innerHTML = score;
};

let prog = 0;
progressBar.style.width = `${prog}%`;
function progBar(){
    prog += 20;
    progressBar.style.width = `${prog}%`;
};

let currentQ = 0;
currentQuestionSpan.innerHTML = currentQ;
function currQ(){
    if(currentQ < 6){
        currentQ += 1;
        currentQuestionSpan.innerHTML = currentQ;
    };
};

function answerWronge(){
    if(mode == "answer"){
        progBar();
        setTimeout(showQ, 1000);
    };
    mode = "wait";
};
function answerCorrect(){
    if(mode == "answer"){
        progBar();
        setTimeout(showQ, 1000);
        addPoint();
    };
    mode = "wait";
};

function showQ(){
    currQ();
    if(currentQuestionSpan.innerHTML == 1){
        Q1();
    }
    else if(currentQuestionSpan.innerHTML == 2){
        Q2();
    }
    else if(currentQuestionSpan.innerHTML == 3){
        Q3();
    }
    else if(currentQuestionSpan.innerHTML == 4){
        Q4();
    }
    else if(currentQuestionSpan.innerHTML == 5){
        Q5();
    }
    else if(currentQuestionSpan.innerHTML == 6){
        final();
    };
    mode = "answer";
};

function Q1(){
    btn1.classList.remove("correct", "incorrect");
    btn2.classList.remove("correct", "incorrect");
    btn3.classList.remove("correct", "incorrect");
    btn4.classList.remove("correct", "incorrect");

    questionText.innerHTML = "what is the &int; X<sup>2</sup> dX";
    btn1.innerHTML = "2X + C";
    btn2.innerHTML = "X<sup>3</sup> + C";
    btn3.innerHTML = "X<sup>3</sup> <sub>*</sub> 1/3";
    btn4.innerHTML = "X<sup>3</sup> <sub>*</sub> 1/3 + C";

    btn1.onclick = function(){
        btn1.classList.add("incorrect");
        btn4.classList.add("correct");
        answerWronge();
    };
    btn2.onclick = function(){
        btn2.classList.add("incorrect");
        btn4.classList.add("correct");
        answerWronge();
    };
    btn3.onclick = function(){
        btn3.classList.add("incorrect");
        btn4.classList.add("correct");
        answerWronge();
    };
    btn4.onclick = function(){
        btn4.classList.add("correct");
        answerCorrect();
        point = "done";
    };
};
function Q2(){
    btn1.classList.remove("correct", "incorrect");
    btn2.classList.remove("correct", "incorrect");
    btn3.classList.remove("correct", "incorrect");
    btn4.classList.remove("correct", "incorrect");

    questionText.innerHTML = "what is the 5! / 12";
    btn1.innerHTML = "<sup>5</sup>C<sub>2</sub>";
    btn2.innerHTML = "<sup>5</sup>P<sub>2</sub>";
    btn3.innerHTML = "11";
    btn4.innerHTML = "5! / 3!";

    btn1.onclick = function(){
        btn1.classList.add("correct");
        answerCorrect();
        point = "done";
    };
    btn2.onclick = function(){
        btn2.classList.add("incorrect");
        btn1.classList.add("correct");
        answerWronge();
    };
    btn3.onclick = function(){
        btn3.classList.add("incorrect");
        btn1.classList.add("correct");
        answerWronge();
    };
    btn4.onclick = function(){
        btn4.classList.add("incorrect");
        btn1.classList.add("correct");
        answerWronge();
    };
};
function Q3(){
    btn1.classList.remove("correct", "incorrect");
    btn2.classList.remove("correct", "incorrect");
    btn3.classList.remove("correct", "incorrect");
    btn4.classList.remove("correct", "incorrect");

    questionText.innerHTML = "what is the capital of France";
    btn1.innerHTML = "Cairo";
    btn2.innerHTML = "Paris";
    btn3.innerHTML = "Giza";
    btn4.innerHTML = "Nasr Eldin";

    btn1.onclick = function(){
        btn1.classList.add("incorrect");
        btn2.classList.add("correct");
        answerWronge();
    };
    btn2.onclick = function(){
        btn2.classList.add("correct");
        answerCorrect();
        point = "done";
    };
    btn3.onclick = function(){
        btn3.classList.add("incorrect");
        btn2.classList.add("correct");
        answerWronge();
    };
    btn4.onclick = function(){
        btn4.classList.add("incorrect");
        btn2.classList.add("correct");
        answerWronge();
    };
};
function Q4(){
    btn1.classList.remove("correct", "incorrect");
    btn2.classList.remove("correct", "incorrect");
    btn3.classList.remove("correct", "incorrect");
    btn4.classList.remove("correct", "incorrect");

    questionText.innerHTML = "what is the values of X in X<sup>2</sup> + 1 = 0";
    btn1.innerHTML = "X<sub>1</sub> = 0 , X<sub>2</sub> = -1";
    btn2.innerHTML = "X<sub>1</sub> = 1 , X<sub>2</sub> = -i";
    btn3.innerHTML = "X<sub>1</sub> = i , X<sub>2</sub> = -i";
    btn4.innerHTML = "X<sub>1</sub> = -i , X<sub>2</sub> = -1";

    btn1.onclick = function(){
        btn1.classList.add("incorrect");
        btn3.classList.add("correct");
        answerWronge();
    };
    btn2.onclick = function(){
        btn2.classList.add("incorrect");
        btn3.classList.add("correct");
        answerWronge();
    };
    btn3.onclick = function(){
        btn3.classList.add("correct");
        answerCorrect();
        point = "done";
    };
    btn4.onclick = function(){
        btn4.classList.add("incorrect");
        btn3.classList.add("correct");
        answerWronge();
    };
};
function Q5(){
    btn1.classList.remove("correct", "incorrect");
    btn2.classList.remove("correct", "incorrect");
    btn3.classList.remove("correct", "incorrect");
    btn4.classList.remove("correct", "incorrect");

    questionText.innerHTML = "what is the &int; 1/( ln(X) <sub>*</sub> X ) dX";
    btn1.innerHTML = "none of them";
    btn2.innerHTML = "ln(X)";
    btn3.innerHTML = "ln(X) + C";
    btn4.innerHTML = "ln(ln(X)) + C";

    btn1.onclick = function(){
        btn1.classList.add("incorrect");
        btn4.classList.add("correct");
        answerWronge();
    };
    btn2.onclick = function(){
        btn2.classList.add("incorrect");
        btn4.classList.add("correct");
        answerWronge();
    };
    btn3.onclick = function(){
        btn3.classList.add("incorrect");
        btn4.classList.add("correct");
        answerWronge();
    };
    btn4.onclick = function(){
        btn4.classList.add("correct");
        answerCorrect();
        point = "done";
    };
};

function final(){
    finalScoreSpan.innerHTML = score;

    startScreen.classList.remove("active");
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    if(score == 0){
        resultMessage.innerHTML = "Bad";
    }
    else if(score == 1){
        resultMessage.innerHTML = "shit! it's so sick";
    }
    else if(score == 2){
        resultMessage.innerHTML = "it's not even good";
    }
    else if(score == 3){
        resultMessage.innerHTML = "not bad";
    }
    else if(score == 4){
        resultMessage.innerHTML = "very nice";
    }
    else if(score == 5){
        resultMessage.innerHTML = "damn, you got it down";
    };

    restartButton.onclick = function(){
        currentQ  = 0;
        showQ();
        score = 0;
        scoreSpan.innerHTML = score;
        prog = 0;
        progressBar.style.width = `${prog}%`;

        startScreen.classList.remove("active");
        quizScreen.classList.add("active");
        resultScreen.classList.remove("active");
    };
};