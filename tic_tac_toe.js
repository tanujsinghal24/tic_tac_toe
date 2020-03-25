var cnt=1;
function startGame() {
  for(var i =1; i <= 9; i++){
    clearBox(i);
  }cnt=1;
  document.turn = "X";
  document.winner = null;
  document.querySelector(".message").style.color="silver";
  setMessage(document.turn + " Get's to Start-->");
}
;
function setMessage(msg) {
  document.querySelector(".message").textContent = msg;
}

function nextMove(square) {
  
  if (document.winner !== null) {
    setMessage(document.turn + " already won");
  } else if (square.textContent === '' && cnt < 9) {
    square.innerText = document.turn;
    cnt = cnt +1;console.log(cnt);
    switchTurn();
  } 
	else if(cnt==9) {
	setMessage("It's a draw");
	square.innerText = document.turn;
  }
	else {
    setMessage("Pick another Square");
  }
}

function switchTurn() {
  if (checkForWinner(document.turn)) {
    document.querySelector(".message").style.color="#ffd700";
    setMessage("Congratulations " + document.turn + " ,you have won!!");
    document.winner = document.turn;
  } else {
    if (document.turn === 'X') {
      document.turn = 'O';
    } else {
      document.turn = 'X'
    }
    setMessage("It's " + document.turn + " turn -->");
  }
}

function checkForWinner(move) {
  var result = false;
  if (checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)) {
    result = true;
  }
  return result;
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
    result = true;
  }
  return result;
}

function getBox(number) {
  return document.getElementById("s" + number).textContent;
}
function clearBox(number) {
  document.getElementById("s" + number).textContent = "";
}
  
