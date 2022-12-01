let answer = [], winningCombo = []
var counter = 0
const colors = ["blue", "red", "green", "yellow", "pink", "violet"];


// TODO: TRY IMPLEMENTING GETTING RANDOM COLORS FROM A STRING OF COLORS ARRAY AND JUST REARRANGE THEM?
// TODO: TRY ALSO JUST SORTING THE ARRAY IN RANDOM ORDER 
// DONE

function generateRandomColors() {    
  colors.sort(function(){return 0.5 - Math.random()});
  return colors;
}

function displayBoxColor() {

  let numbers = 6, min = 0;
  // GET RANDOM COLORS
  winningCombo = generateRandomColors()

  //change the color of the box
  let box = document.querySelector("#box-holder");
  box.style.visibility = "visible";

  // TODO: STUDY ARRAY OF ELEMENTS IF THERE ARE ANY OTHER WAY TO MANIPULATE THE ELEMENTS CHILDREN USING ELEMENTS ARRAY

  for(i = min; i < numbers; i++) {
    // let color = getColor(winningCombo[i]);
    box.children[i].style.backgroundColor = winningCombo[i];
  } 
}

function hideBoxColor() {
  document.querySelector("#box-holder").style.visibility = "hidden"     
}

function hideAnswerBoxColor() {
  document.querySelector("#box-answer-holder").style.visibility = "hidden"    
}

function displayAnswerBox() {         

  const answerBoxColor = ["blue", "red", "green", "yellow", "pink", "violet"]
  
  const answerBox = document.querySelector("#box-answer-holder")
  answerBox.style.visibility = "visible"
  
  // COLOR THE ANSWER BOXES
  for(i = 0; i < 6; i++) {
    answerBox.children[i].style.backgroundColor = answerBoxColor[i]
  } 
}

function todoMouseOnClick (event) {      

  let targetElement = event.target
  
  // CHECK WHICH ANSWER COLOR BOXES WERE CLICKED/TARGETED
  if(targetElement.id == "box1a" && targetElement.dataset.answered == "false") {
    targetElement.dataset.answered = "true"
    answer.push("blue")
    targetElement.textContent = counter + 1
    counter++
  }
  else if(targetElement.dataset.color == "red" && targetElement.dataset.answered == "false") {
    targetElement.dataset.answered = "true"
    answer.push("red")
    targetElement.textContent = counter + 1
    counter++
  }
  else if(targetElement.dataset.color == "green" && targetElement.dataset.answered == "false") {
    targetElement.dataset.answered = "true"
    answer.push("green")
    targetElement.textContent = counter + 1
    counter++
  }
  else if(targetElement.dataset.color == "yellow" && targetElement.dataset.answered == "false") {
    targetElement.dataset.answered = "true"
    answer.push("yellow")
    targetElement.textContent = counter + 1
    counter++
  }
  else if(targetElement.dataset.color == "pink" && targetElement.dataset.answered == "false") {
    targetElement.dataset.answered = "true"
    answer.push("pink")
    targetElement.textContent = counter + 1
    counter++
  }
  else if(targetElement.dataset.color == "violet" && targetElement.dataset.answered == "false") {
    targetElement.dataset.answered = "true"
    answer.push("violet")
    targetElement.textContent = counter + 1
    counter++
  }     
}

function todoSubmit() {

  // DISPLAY AGAIN CURRENT BOX COLORS
  document.querySelector("#box-holder").style.visibility = "visible"     

  // COMPARE TWO ARRAYS
  if(winningCombo.toString() == answer.toString()) {
    document.getElementById("modalResultArea").innerHTML = "Congratulations. You win!"
  }
  else {
    document.getElementById("modalResultArea").innerHTML = "Sorry. Try again."
  }
}

function clearAnswer() {
  while(answer.length > 0) {
    answer.pop();
  }

  // RESET ANSWER BOXES
  let element = Array.from(document.querySelectorAll(".boxAnswer"))
  element.forEach(element => {
  element.dataset.answered = "false";
  element.textContent = ""      
  });

  counter = 0;

  console.log(winningCombo)
  console.log(answer); 
  console.log(counter)
}

function clearReset() {

  while(answer.length > 0) {
    answer.pop();
  }
  while(winningCombo.length > 0) {
    winningCombo.pop();
  }
  counter = 0;

  // TEST
  // console.log(winningCombo)
  // console.log(answer); 
  // console.log(counter)
}

function todoStart() {

  displayBoxColor();
  hideAnswerBoxColor();      

  setTimeout(function(){
    // TODO AFTER FIVE SECONDS
    hideBoxColor();
    displayAnswerBox();
  }, 5000);

}

function todoReset() {
// RESET EVERYTHING

// RESET DATA SET
let element = Array.from(document.querySelectorAll(".boxAnswer"))
element.forEach(element => {
  element.dataset.answered = "false";
  element.textContent = ""      
});

clearReset()
hideBoxColor()
todoStart()

}