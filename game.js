//Connect 4
//Functions:
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
  $coord.css('background-color', activePlayer)
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

const checkUpwardDiagonal = (column, row, currentPlayer) => {
  let checkWin = 1
  let upward = row - 1
  let downward = row + 1
  for (let i = column + 1; i == grid[0].length; i++) {
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
    // console.log(`${activePlayer} wins!!`, checkWin)
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
    // console.log(`${activePlayer} wins!!`, checkWin)
    endGame()
  }
}

const checkVertical = (column, row, currentPlayer) => {
  let checkWin = 1
  for (let i = row - 1; i >= 0; i--) {
    if (grid[i][column] === currentPlayer) {
      // console.log(row, column)
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
    // console.log(`${activePlayer} wins!!`, checkWin)
    endGame()
  }
}

const checkWin = (column, row, currentPlayer) => {
  // Check Vertical
  checkVertical(column, row, currentPlayer)
  checkHorizontal(column, row, currentPlayer)
  checkUpwardDiagonal(column, row, currentPlayer)
}

const startGame = () => {

  const drawBoard = () => {
    $('.cell').on('click', (e) => {
      let id = $(e.target).attr('id')
      let column = parseInt(id.charAt(1))
      let row = currentBoard[column]
      if (row >= 0) {
        currentPlayer = playerTurn()
        $(e.target).toggleClass(activePlayer)
        dropPiece(e, column, row, currentPlayer)
        checkWin(column, row, currentPlayer)
      }
    })
  }
  $td.on('click', drawBoard())
}

const playerTurn = () => {
  if (activePlayer == playerColor.player1Color) {
    $h3.text(`Current player: ${activePlayer}`)
    activePlayer = playerColor.player2Color
    // Return integer 2 represents player 2
    return 2
  } else {
    $h3.text(`Current player: ${activePlayer}`)
    activePlayer = playerColor.player1Color
    // Return integer 1 represents player 1
    return 1
  }
}

$(() => {
  startGame()
})






















































// let col = grid[i + 1]
// console.log(grid)
// const selectCol = (col) => {
//   if (player == 1) {
//     grid[5][col] = 1
//     player = 1
//   }
// }
//user selects column, on click returns  column number
// build grid and cells
/* Create a new board of squares, 42 squares where you have one container representing
the whole thing. Then 7 containers to represent the width from left to right one square
across and 6 up. Each of these 7 containers are going to have an event handler.
On the onclick event handler, one square going up turns red or black depending on
who's turn it is.
id="row=0, col=1"
win = False -> True
player1 = true/false
Onclick function:
	move = evenHandler
	if player1{
		player1 = false
	}
	else{
		player1 = True
	}
	- function (addSquare)
		Check to see what player
		and get red or black
	function (makeMove)
		- Making the move
		- function (addSquare)
		- function (displayBoard)
	function (checkMove(move))
	if win:
		function (Win)
function (displayWinningPage */