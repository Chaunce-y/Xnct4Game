console.log('game works')
// console.log($)
// const $canvas = $('canvas')
// console.log($canvas)
// const ctx = $canvas[0].getContext('2d');
// console.log(ctx)
// const makeX = () => {
//   ctx.beginPath()
//   ctx.moveTo(100, 100)
//   ctx.lineTo(300, 300)
//   ctx.strokeStyle = 'blue'
//   ctx.lineWidth = 6
//   ctx.stroke()
//   ctx.beginPath()
//   ctx.moveTo(100, 300)
//   ctx.lineTo(300, 100)

//   // ctx.lineWidth = 6
//   ctx.stroke()

// }


// const makeGrid = () => {

//   ctx.strokeStyle = "black"
//   ctx.lineWidth = 6
//   //draw horizontal lines
//   for (let i = 0; i <= $canvas.width; i += 50) {
//     ctx.beginPath()
//     ctx.moveTo(i, 0)
//     ctx.lineTo(i, $canvas.height)
//     ctx.stroke()
//   }
//   for (let i = 0; i <= $canvas.height; i += 50) {
//     ctx.beginPath()
//     ctx.moveTo(0, i)
//     ctx.lineTo($canvas.width, i)
//     ctx.stroke()
//   }
// }

// // $('.make-x').click(makeGrid)
// $(() => {
//   $('button').on('click', (makeGrid))
//   // console.log(event.currentTarget)
// })
// //(makeGrid))
// // makeGrid()
// // // makes a grid of 1px black lines with 49px between each parallel line
// // function makeGrid() {
// //   ctx.strokeStyle = "black";
// //   ctx.lineWidth = 1

// //   // draw vertical lines
// //   for (let i = 0; i <= canvas.width; i += 50) {
// //     ctx.beginPath();
// //     ctx.moveTo(i, 0);
// //     ctx.lineTo(i, canvas.height);
// //     ctx.stroke();
// //   }
// //   // draw horizontal lines
// //   for (let i = 0; i <= canvas.height; i += 50) {
// //     ctx.beginPath();
// //     ctx.moveTo(0, i);
// //     ctx.lineTo(canvas.width, i);
// //     ctx.stroke();
// //   }

// // }

// // // document.getElementById('make-x').addEventListener('click', (event) => {
// // //   makeX();
// // // })
// // document.getElementById('make-grid').addEventListener('click', (event) => {
// //   makeGrid();
// // })

//Connect 4

//Functions:
/* 
drawBoard()
startGame() - will begin the game, and call all related functions
nextTurn() - will end current turn and begin a new one until game is over
drop() - on click, will start the animation that drops the game piece in the selected column in the last available row
resetGame()
winCheck() - will check if a player has won. if output is true, game will end (endGame function), celebratory text will be displayed, game will be reset (resetGame() function)
selectCol() - selected col for piece to be dropped in, occurs during turn
endGame()
gameStatus()
*/
//Constants
/* 
row
col
activePlayer
cell
gameStatus - will return active or inactive. if active is true, startGame function will not run and game will continue to loop until a player wins
player1 - 1. will be yellow until functionality is built in to enable selection
player2 - 2. will be red until functionality is built in to enable selection
 */

// on page load the html elements (decorative text, xnct4 board table, piece examples) then JS/JQuery
let gameBoard = []
const active = true
const inactive = false
let gameStatus = inactive
const player1Color = 'yellow'
const player2Color = 'red'
const playerColor = []
let activePlayer
const $td = $('<td>')
const $tr = $('<tr>')

const startGame = () => { // starts the game 
  if (gameStatus === inactive) {
    return inactive
  }
  for (let row = 0; row < 6; row++) {
    gameBoard[row] = [] //creates an empty array for each row
    for (let col = 0; col <= 6; col++) {
      gameBoard[row][col] = 0
    }
  }
  drawBoard()
  activePlayer = 1
  // nextTurn()
}

let $container = $('.container')


//draw the connect4 board to the DOM on pageload
const drawBoard = () => {
  // winCheck()
  for (let row = 0; row < 6; row++) {
    $('tr').addClass(row)
    for (let col = 0; col <= 6; col++) {
      $('td').append(`<td>${col}</td>`)
    }
  }
}

const nextTurn = () => {
  if (gameStatus == active) {


  }
}

const drop = () => {
  for (row = 5; row >= 0; row--) {
    if (gameBoard[row][col] == 0) {
      gameBoard[row][col] = activePlayer
      drawBoard()
      if (activePlayer == 1) {
        activePlayer == 2
      } else {
        activePlayer == 1
      }
      nextTurn()
      return true
    }
  }
}
$(() => {
  startGame
})
// const winCheck = () => {

// }



// forEach(cell in gameBoard) {
//   $('canvas').drawRect

// }
// const playerColor = []
// const gameBoard = [
//   [0, 0, 0, 0, 0, 0, 0], //grid[0](row1)
//   [0, 0, 0, 0, 0, 0, 0], //grid[1](row2)
//   [0, 0, 0, 0, 0, 0, 0], //grid[2](row3)
//   [0, 0, 0, 0, 0, 0, 0], //grid[3](row4)
//   [0, 0, 0, 0, 0, 0, 0], //grid[4](row5)
//   [0, 0, 0, 0, 0, 0, 0] //grid[5](row6)
// ]
// }
// const createCell = () => {
//   let $cell = $('<div></div>')
//   $cell.appendTo('#grid')
//   for (let row = 0; row < gameBoard.grid.length; row++) {
//     for (let col = 0; col < gameBoard.grid[row].length; col++) {
//       $cell
//         .append('<div>')
//         .css({
//           backgroundColor: 'blue'
//         })
//     }
//   }
// }
// // $(() => {
// createCell()
// })
// gameBoard.grid.forEach(cell => {
//   cell = gameBoard.grid[row][col]
//   console.log(cell)
// })


// let grid[i] = row
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