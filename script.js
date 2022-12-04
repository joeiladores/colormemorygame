const answer = [];
var winningCombo = [];
var counter = 0;

window.onload = function () {
  hideBoxUI();
  hideAnswerUI();
  hideRestartBtn();
  hideTimer();
}

function restartGame() {
  clearAnswer();
  hideAnswerUI();
  hideRestartBtn();
  hideTimer();
  startGame();
}

function todoSubmit() {

  // DISPLAY AGAIN CURRENT BOX COLORS
  displayBoxUI(winningCombo);
  document.querySelector("#box-holder").style.visibility = "visible";

  // COMPARE TWO ARRAYS
  if(winningCombo.toString() == answer.toString()) {
    document.getElementById("modalResultArea").innerHTML = "Congratulations. You win!";
  }
  else {
    document.getElementById("modalResultArea").innerHTML = "Sorry. Try again.";
  }

  document.querySelector("#timer").style.display = 'none';
  document.querySelector("#restartBtn").style.display = 'block'; 
  hideClearSubmitBtn();
}

function clearAnswer() {
  let element = Array.from(document.querySelectorAll(".boxAnswer"))
  
  element.forEach(element => {
    element.dataset.answered = "false";
    element.textContent = ""      
  });
  counter = 0;

  while(answer.length > 0) {
    answer.pop();
  }
  
}

function todoMouseOnClick (event) {      

  let targetElement = event.target;
  
  // CHECK WHICH ANSWER COLOR BOXES WERE CLICKED/TARGETED
  if(targetElement.id == "box1a" && targetElement.dataset.answered == "false") {
    targetElement.dataset.answered = "true";    
    answer.push(targetElement.dataset.color);
    targetElement.textContent = ++counter;    
  }
  if(targetElement.id == "box2a" && targetElement.dataset.answered == "false") {
    targetElement.dataset.answered = "true";
    answer.push(targetElement.dataset.color);
    targetElement.textContent = ++counter;   
  }
  if(targetElement.id == "box3a" && targetElement.dataset.answered == "false") {
    targetElement.dataset.answered = "true";
    answer.push(targetElement.dataset.color);
    targetElement.textContent = ++counter;   
  }
  if(targetElement.id == "box4a" && targetElement.dataset.answered == "false") {
    targetElement.dataset.answered = "true";
    answer.push(targetElement.dataset.color);
    targetElement.textContent = ++counter;   
  }
  if(targetElement.id == "box5a" && targetElement.dataset.answered == "false") {
    targetElement.dataset.answered = "true";
    answer.push(targetElement.dataset.color);
    targetElement.textContent = ++counter;   
  }
  if(targetElement.id == "box6a" && targetElement.dataset.answered == "false") {
    targetElement.dataset.answered = "true";
    answer.push(targetElement.dataset.color);
    targetElement.textContent = ++counter;       
  }    
}

function displayAnswerUI(rAnswerColors) {
  displayClearSubmitBtn();
  document.querySelector(".answerUI").style.visibility = 'visible';
  const answerBox = document.querySelector("#box-answer-holder");
  for(i = 0; i < 6; i++) {
    answerBox.children[i].dataset.color = rAnswerColors[i];
    answerBox.children[i].style.backgroundColor = rAnswerColors[i];
  }   
}

function hideBoxUI() {
  document.querySelector("#box-holder").style.visibility = "hidden"     
}

function hideAnswerUI() {
  document.querySelector(".answerUI").style.visibility = 'hidden';
}

function hideRestartBtn() {
  document.querySelector("#restartBtn").style.display = 'none'; 
}

function displayRestartBtn() {
  document.querySelector("#restartBtn").style.display = 'block'; 
}

function hideTimer() {
  document.querySelector("#timer").style.display = 'none'; 
}

function displayTimer() {
  document.querySelector("#timer").style.display = 'block'; 
}

function hideClearSubmitBtn() {
  document.querySelector("#clearBtn").style.visibility = 'hidden';
  document.querySelector("#submitBtn").style.visibility = 'hidden';
}

function displayClearSubmitBtn() {
  document.querySelector("#clearBtn").style.visibility = 'visible';
  document.querySelector("#submitBtn").style.visibility = 'visible';
}

function displayBoxUI(rColors) {
  let box = document.querySelector("#box-holder");
  box.style.visibility = "visible";
  for(i = 0; i < rColors.length; i++) {
    box.children[i].style.backgroundColor = rColors[i];
  } 
}

function getRandomColors(rColors, n) {
  rColors.sort(function(){return 0.5 - Math.random()});
  return rColors.slice(rColors.length - n);
}

function startGame() {

  let randomAnswerColors = [];
  const colors = ["blue", "red", "green", "yellow", "pink", "purple", "orange", "gray", "brown"];
  let counter1 = 0;

  const temp = getRandomColors(colors, 6);;
  winningCombo = temp.map(items);

  function items(value) {
    return value;
  }

  randomAnswerColors = getRandomColors(temp, 6);

  document.getElementById("startBtn").style.display = "none";
  document.getElementById("timer").style.display = "block";

  displayBoxUI(winningCombo);
  
  setTimeout(function(){
    // TODO AFTER FIVE SECONDS
    hideBoxUI();
    displayTimer();
    displayAnswerUI(randomAnswerColors);
    
  }, 5000);

}








