//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var horseScore = 0;
var dolphinScore = 0;
var catScore = 0;
var dogScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
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

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", horse);
q1a2.addEventListener("click", dolphin);
q1a3.addEventListener("click", cat);
q1a4.addEventListener("click", dog);

q2a1.addEventListener("click", horse);
q2a2.addEventListener("click", dolphin);
q2a3.addEventListener("click", cat);
q2a4.addEventListener("click", dog);

q3a1.addEventListener("click", horse);
q3a2.addEventListener("click", dolphin);
q3a3.addEventListener("click", cat);
q3a4.addEventListener("click", dog);

q4a1.addEventListener("click", horse);
q4a2.addEventListener("click", dolphin);
q4a3.addEventListener("click", cat);
q4a4.addEventListener("click", dog);

var result = document.getElementById("result");

//#TODO: Define quiz functions here
function horse() {
  horseScore += 1;
  questionCount += 1;
  //alert("One point to horse!");
  if (questionCount >= 4) {
    updateResult();
  }
}
function dolphin() {
  dolphinScore += 1;
  questionCount += 1;
  //alert("One point to dolphin!");
  if (questionCount >= 4) {
    updateResult();
  }
}
function cat() {
  catScore += 1;
  questionCount += 1;
  //alert("One point to cat!");
  if (questionCount >= 4) {
    updateResult();
  }
}
function dog() {
  dogScore += 1;
  questionCount += 1;
  //alert("One point to dog!");
  if (questionCount >= 4) {
    updateResult();
  }
}

function updateResult() {
  if (horseScore >= 3) {
    result.innerHTML =
      "Horse! You are very energetic and you are loyal and trustworthy!";
  } else if (dolphinScore >= 3) {
    result.innerHTML =
      "Dolphin! You are playful, responsible and always give people a good laugh!";
  } else if (catScore >= 3) {
    result.innerHTML =
      "Cat! You are kind, polite, caring, and love to help others!";
  } else if (dogScore >= 3) {
    result.innerHTML =
      "Dog! You are outgoing, nice, and organized! You get along with many people as well! ";
  } else {
    result.innerHTML =
      "Hmm. The Animal Family cannot decide. Please try again later.";
  }
}
