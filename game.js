// Connect 4
// Functions:
/*
getGrid()
drawBoard()
startGame() - will begin the game, and call all related functions
playerTurn() - will end current turn and begin a new one until game is over
dropPiece() - on click, will start the animation that drops the game piece in the selected column in the last available row
checkWin() - will check if a player has won. if output is true, game will end (endGame function), celebratory text will be displayed, game will be reset (resetGame() function)
endGame() - ends the game and displays win text in place of game board
*/

// constants

const playerColor = {
  player1Color: 'Black',
  player2Color: 'Red'
}
let activePlayer = playerColor.player1Color
let currentBoard = [5, 5, 5, 5, 5, 5, 5]
let $td = $('td')
let $h3 = $('h3')
let $h1 = $('h1')
const $container = $('.container')

// functions

const getGrid = (rows, columns) => {
  let grid = [...Array(rows)].map(e => Array(columns).fill(0))
  return grid
}

let grid = getGrid(6, 7)

const dropPiece = (event, column, row, currentPlayer) => {
  let $coord = $(`#${row}${column}`)
  grid[row][column] = currentPlayer
  $coord.css('background-color', activePlayer) // Setting the background color to the active player's color
  currentBoard[column] -= 1
}

const timeRefresh = (timeoutPeriod) => {
  setTimeout("location.reload(true);", timeoutPeriod);
}

const endGame = () => {
  $container.empty()
  $h1.text(`${activePlayer} WON!!!`)
  $container.text('THANKS 4 PLAYING!!!')
  timeRefresh(3000)
  // let $playAgain = $('body').append('<button class=refresh>')
  // const refreshPage = () => {
  // location.reload()
  // }
  // $playAgain.on('click', refreshPage)
}

// Check upward diagonal win condition
const checkUpwardDiagonal = (column, row, currentPlayer) => {
  let checkWin = 1
  let upward = row - 1
  let downward = row + 1
  for (let i = column + 1; i < grid[0].length; i++) {
    if (upward < 0) {
      break
    }
    if (grid[upward][i] === currentPlayer) {
      checkWin += 1
    } else {
      break
    }
    upward -= 1
  }
  for (let i = column - 1; i >= 0; i--) {
    if (downward >= grid.length) {
      break
    }
    if (grid[downward][i] === currentPlayer) {
      checkWin += 1
    } else {
      break
    }
    downward += 1
  }
  if (checkWin >= 4) {
    $h3.text(`${activePlayer} WINS!!!`)
    endGame()
  }
}

// Check downward diagonal win condition
const checkDownwardDiagonal = (column, row, currentPlayer) => {
  let checkWin = 1
  let downward = row + 1
  let upward = row - 1

  // Checking downward right
  for (let i = column + 1; i < grid[0].length; i++) {
    if (downward >= grid.length) break;
    if (grid[downward][i] === currentPlayer) {
      checkWin += 1;
    } else {
      break;
    }
    downward += 1;
  }

  // Checking upward left
  for (let i = column - 1; i >= 0; i--) {
    if (upward < 0) break;
    if (grid[upward][i] === currentPlayer) {
      checkWin += 1;
    } else {
      break;
    }
    upward -= 1;
  }

  if (checkWin >= 4) {
    $h3.text(`${activePlayer} WINS!!!`)
    endGame()
  }
}

const checkHorizontal = (column, row, currentPlayer) => {
  let checkWin = 1
  for (let i = column - 1; i >= 0; i--) {
    if (grid[row][i] === currentPlayer) {
      checkWin += 1
    } else {
      break
    }
  }
  for (let i = column + 1; i < grid[0].length; i++) {
    if (grid[row][i] === currentPlayer) {
      checkWin += 1
    } else {
      break
    }
  }
  if (checkWin >= 4) {
    $h3.text(`${activePlayer} WINS!!!`)
    endGame()
  }
}

const checkVertical = (column, row, currentPlayer) => {
  let checkWin = 1
  for (let i = row - 1; i >= 0; i--) {
    if (grid[i][column] === currentPlayer) {
      checkWin += 1
    } else {
      break
    }
  }
  for (let i = row + 1; i < grid.length; i++) {
    if (grid[i][column] === currentPlayer) {
      checkWin += 1
    } else {
      break
    }
  }
  if (checkWin >= 4) {
    $h3.text(`${activePlayer} WINS!!!`)
    endGame()
  }
}

// Check all win conditions (vertical, horizontal, diagonal)
const checkWin = (column, row, currentPlayer) => {
  checkVertical(column, row, currentPlayer)
  checkHorizontal(column, row, currentPlayer)
  checkUpwardDiagonal(column, row, currentPlayer)
  checkDownwardDiagonal(column, row, currentPlayer) // Added downward diagonal check
}

// Start the game
const startGame = () => {

  $('td').attr('tabindex', '-1');

  const drawBoard = (e) => {
    let id = $(e.target).attr('id'); // Get the ID of the clicked cell
    let column = parseInt(id.charAt(1)); // Extract the column number from the ID
    let row = currentBoard[column]; // Get the lowest available row in the column
    
    if (row >= 0) {
      currentPlayer = playerTurn(); // Switch to the next player
  
      // Create a floating div to represent the piece
      let $piece = $('<div></div>').addClass('piece drop-animation'); // Create the floating piece div
      $piece.addClass(activePlayer === playerColor.player1Color ? 'player1-piece' : 'player2-piece'); // Set player color
  
      // Get the initial top position (start from top of the container) and align it with the column
      let columnTop = $container.offset().top; // Get the container's top position
      let columnLeft = $(`#${row}${column}`).offset().left; // Get the left position of the column
  
      // Set the initial position of the piece at the top of the container
      $piece.css({
        top: columnTop + 'px', // Start at the top of the container
        left: columnLeft + 'px', // Align with the column
        position: 'absolute', // Position it absolutely
        zIndex: 10 // Ensure it appears above other elements
      });
  
      // Append the floating piece to the game container
      $('.container').append($piece);
  
      // Get the final position where the piece should land
      let finalPosition = $(`#${row}${column}`).offset().top;
  
      // Animate the piece falling to the correct row
      setTimeout(() => {
        $piece.css({
          top: finalPosition + 'px' // Move to the lowest available cell
        });
      }, 50); // Slight delay to trigger the animation
  
      // After the piece finishes dropping, set it in place and remove the floating div
      setTimeout(() => {
        
        $(`#${row}${column}`).css({
          'background-color': activePlayer, // Set the final background color in the actual cell
          'box-shadow': `inset 0 0 15px ${activePlayer}` // Set the shadow
        });
        $piece.remove(); // Remove the floating div after placing the piece
      }, 750); // This matches the transition duration of 0.6s
  
      dropPiece(e, column, row, currentPlayer); // Update the game logic
      checkWin(column, row, currentPlayer); // Check for a win
    }
  };
  
  /*const drawBoard = (e) => {
    let id = $(e.target).attr('id')
    let column = parseInt(id.charAt(1))
    let row = currentBoard[column]
    if (row >= 0) {
      currentPlayer = playerTurn()
      $(e.target).addClass(activePlayer === playerColor.player1Color ? 'player1' : 'player2'); // Set background color to active player's color
      dropPiece(e, column, row, currentPlayer)
      checkWin(column, row, currentPlayer)
    }
  }*/
  
  $td.on('click', drawBoard) // Assign the click event handler
}

// Switch players
const playerTurn = () => {
  if (activePlayer == playerColor.player1Color) {
    $h3.text(`Current player: ${activePlayer}`)
    activePlayer = playerColor.player2Color
    return 2 // Return integer 2 for player 2
  } else {
    $h3.text(`Current player: ${activePlayer}`)
    activePlayer = playerColor.player1Color
    return 1 // Return integer 1 for player 1
  }
}

$(() => {
  startGame()
})
