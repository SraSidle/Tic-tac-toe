let player,
  winner = null;
let selectedPlayer = document.querySelector(".player_selected");
let selectedWinner = document.querySelector(".winner_selected");
// let squares = document.querySelectorAll(".square");

changePlayer(
  "X"
); /*dps adicionar uma lógica que deixa essa atribuição dinâmica */

function chooseSquaredk(id) {
  if (winner !== null) {
    return;
  }
  let square = document.getElementById(id);
  if (square.innerHTML !== "-") {
    return;
  }
  square.innerHTML = player;
  square.style.color = "#d4d4d4";

  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
  changePlayer(player);
  checkWinner();
}

function changePlayer(value) {
  player = value;
  selectedPlayer.innerHTML = value;
}

function checkWinner() {
  let sqr1 = document.getElementById(1);
  let sqr2 = document.getElementById(2);
  let sqr3 = document.getElementById(3);
  let sqr4 = document.getElementById(4);
  let sqr5 = document.getElementById(5);
  let sqr6 = document.getElementById(6);
  let sqr7 = document.getElementById(7);
  let sqr8 = document.getElementById(8);
  let sqr9 = document.getElementById(9);

  if (checkSequence(sqr1, sqr2, sqr3)) {
    changeColorSquare(sqr1, sqr2, sqr3);
    changeWinner(sqr1);
    return;
  }

  if (checkSequence(sqr1, sqr2, sqr3)) {
    changeColorSquare(sqr1, sqr2, sqr3);
    changeWinner(sqr1);
    return;
  }

  if (checkSequence(sqr4, sqr5, sqr6)) {
    changeColorSquare(sqr4, sqr5, sqr6);
    changeWinner(sqr4);
    return;
  }

  if (checkSequence(sqr7, sqr8, sqr9)) {
    changeColorSquare(sqr7, sqr8, sqr9);
    changeWinner(sqr7);
    return;
  }

  if (checkSequence(sqr1, sqr4, sqr7)) {
    changeColorSquare(sqr1, sqr4, sqr7);
    changeWinner(sqr1);
    return;
  }

  if (checkSequence(sqr2, sqr5, sqr8)) {
    changeColorSquare(sqr2, sqr5, sqr8);
    changeWinner(sqr2);
    return;
  }

  if (checkSequence(sqr3, sqr6, sqr9)) {
    changeColorSquare(sqr3, sqr6, sqr9);
    changeWinner(sqr3);
    return;
  }

  if (checkSequence(sqr1, sqr5, sqr9)) {
    changeColorSquare(sqr1, sqr5, sqr9);
    changeWinner(sqr1);
    return;
  }

  if (checkSequence(sqr3, sqr5, sqr7)) {
    changeColorSquare(sqr3, sqr5, sqr7);
    changeWinner(sqr3);
  }
}

// function checkWinner() {
//   squares.forEach((square, index) => {
//     if (checkSequence(squares[0], squares[1], squares[2])) {
//       changeColorSquare(squares[0], squares[1], squares[2]);
//       return;
//     } else if (checkSequence(square[0], square[3], square[6])) {
//       changeColorSquare(square[0], square[3], square[6]);
//       return;
//     } else if (checkSequence(square[0], square[4], square[8])) {
//       changeColorSquare(square[0], square[4], square[8]);
//     } else if (checkSequence(square[1], square[4], square[7])) {
//       changeColorSquare(square[1], square[4], square[7]);
//     } else if (checkSequence(square[2], square[5], square[8])) {
//       changeColorSquare(square[2], square[5], square[8]);
//     } else if (checkSequence(square[2], square[4], square[6])) {
//       changeColorSquare(square[2], square[4], square[6]);
//     } else if (checkSequence(square[3], square[4], square[5])) {
//       changeColorSquare(square[3], square[4], square[5]);
//     } else if (checkSequence(square[6], square[7], square[8])) {
//       changeColorSquare(square[6], square[7], square[8]);
//     }
//   });
// }

// function checkWinner() {
//   squares.forEach((square, index) => {
//     if (checkSequence(square[index], square[index], square[index])) {
//       changeColorSquare(square[index], square[index], square[index]);
//     }
//   });
// }

function changeColorSquare(square1, square2, square3) {
  square1.style.color = "green";
  square2.style.color = "green";
  square3.style.color = "green";
}

function changeWinner(square) {
  winner = square.innerHTML;
  selectedWinner.innerHTML = winner;
}

function checkSequence(square1, square2, square3) {
  let equals = false;
  if (
    square1.innerHTML !== "-" &&
    square1.innerHTML === square2.innerHTML &&
    square2.innerHTML === square3.innerHTML
  ) {
    equals = true;
  }
  return equals;
}

function restart()
{
    winner = null;
    selectedWinner.innerHTML = '';

    for (var i = 1; i < 10; i++) {
        var square = document.getElementById(i);
        square.style.background = 'rgba(64, 58, 92, 0.2';
        square.style.color = 'transparent';
        square.innerHTML = '-';
    }

    changePlayer('X');
}
