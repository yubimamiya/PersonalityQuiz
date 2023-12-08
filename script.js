/*Add your JavaScript here*/

var max = 0;
var questionCount = 0;
var result = document.getElementById("result");
var restart = document.getElementById("restart");

var outcomeOneScore = 0;
var outcomeTwoScore = 0;
var outcomeThreeScore = 0;
var outcomeFourScore = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

q1a1.addEventListener("click", outcomeOne);
q1a1.addEventListener("click", disableQuestionOne);
q1a2.addEventListener("click", outcomeTwo);
q1a2.addEventListener("click", disableQuestionOne);
q1a3.addEventListener("click", outcomeThree);
q1a3.addEventListener("click", disableQuestionOne);
q1a4.addEventListener("click", outcomeFour);
q1a4.addEventListener("click", disableQuestionOne);

q2a1.addEventListener("click", outcomeOne);
q2a1.addEventListener("click", disableQuestionTwo);
q2a2.addEventListener("click", outcomeFour);
q2a2.addEventListener("click", disableQuestionTwo);
q2a3.addEventListener("click", outcomeThree);
q2a3.addEventListener("click", disableQuestionTwo);
q2a4.addEventListener("click", outcomeTwo);
q2a4.addEventListener("click", disableQuestionTwo);

q3a1.addEventListener("click", outcomeOne);
q3a1.addEventListener("click", disableQuestionThree);
q3a2.addEventListener("click", outcomeTwo);
q3a2.addEventListener("click", disableQuestionThree);
q3a3.addEventListener("click", outcomeFour);
q3a3.addEventListener("click", disableQuestionThree);
q3a4.addEventListener("click", outcomeThree);
q3a4.addEventListener("click", disableQuestionThree);

q4a1.addEventListener("click", outcomeThree);
q4a1.addEventListener("click", disableQuestionFour);
q4a2.addEventListener("click", outcomeOne);
q4a2.addEventListener("click", disableQuestionFour);
q4a3.addEventListener("click", outcomeFour);
q4a3.addEventListener("click", disableQuestionFour);
q4a4.addEventListener("click", outcomeTwo);
q4a4.addEventListener("click", disableQuestionFour);

restart.addEventListener("click", restartQuiz);

function outcomeOne() {
  outcomeOneScore++;
  quizAnalysis();
}

function outcomeTwo() {
  outcomeTwoScore++;
  quizAnalysis();
}

function outcomeThree() {
  outcomeThreeScore++;
  quizAnalysis();
}

function outcomeFour() {
  outcomeFourScore++;
  quizAnalysis();
}

function quizAnalysis() {
  quizReport();
  updateResult();
  quizCheck();
}

function quizReport() {
  console.log("Outcome One Score: " + outcomeOneScore);
  console.log("Outcome Two Score: " + outcomeTwoScore);
  console.log("Outcome Three Score: " + outcomeThreeScore);
  console.log("Outcome Four Score: " + outcomeFourScore);
  questionCount++;
  console.log("Question Count: " + questionCount);
}

function quizCheck() {
  if (questionCount >= 4) {
    console.log("The quiz is complete!");
    if (max == outcomeOneScore) {
      result.innerHTML = "You’re a studious learner who focuses best when working in quiet places alone. Your learning tools and spaces are constantly updating to become more efficient.";
    } else if (max == outcomeTwoScore) {
      result.innerHTML = "You’re a social learner who enjoys work way more when they are with their friends and peers. Your jobs need to be fun and take pride in making what you do appealing.";
    } else if (max == outcomeThreeScore) {
      result.innerHTML = "You’re a motivated learner who knows what they need to do in order to achieve the best results. You look forward to what you do and it doesn’t take much for you to get into the zone.";
    } else if (max == outcomeFourScore) {
      result.innerHTML = "You’re a creative learner who always pursues what they love. Your creative juices start flowing the best when you have some pen and paper to yourself.";
    } else {
      console.log("error");
    }
  }
}

function updateResult() {
  max = outcomeOneScore;
  if (max < outcomeTwoScore) {
    max = outcomeTwoScore;
  }
  if (max < outcomeThreeScore) {
    max = outcomeThreeScore;
  }
  if (max < outcomeFourScore) {
    max = outcomeFourScore;
  }
}

function disableQuestionOne() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
}

function disableQuestionTwo() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
}

function disableQuestionThree() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
}

function disableQuestionFour() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
}

function enableQuestions() {
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;  
}

function restartQuiz() {
  result.innerHTML = "Your result is...";
  max = 0;
  questionCount = 0;
  outcomeOneScore = 0;
  outcomeTwoScore = 0;
  outcomeThreeScore = 0;
  outcomeFourScore = 0;
  enableQuestions();
}