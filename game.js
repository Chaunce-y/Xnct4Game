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
player1 - 1. will be black until functionality is built in to enable selection
player2 - 2. will be red until functionality is built in to enable selection
 */

// on page load the html elements (decorative text, xnct4 board table, piece examples) then JS/JQuery
let gameBoard = []
const active = true
const inactive = false
let gameStatus = inactive
const player1Color = 'black'
const player2Color = 'red'
const playerColor = []
let activePlayer = 1
let $tr = $('tr') // grab the table row element
const $container = $('.container') // grab the container element
let $h3 = $('h3') // grab the H3 element
let $td = $('td') // grab all the cells

// let $empty = $('.empty')
const drawBoard = () => {
  for (let i = 0; i <= $td.length; i++) { // for each element in td.length (total of 42 elements):
    // $td.eq(i).addClass('empty')

    $td.eq(i).on('click', (e) => { // add click event handler to each td element  
      // changeClass()
      // e.target.toggleClass
      if (activePlayer == 1) {
        $td.eq(i).toggleClass('player1')
        activePlayer = 2
      } else if (activePlayer == 2) {
        $td.eq(i).toggleClass('player2')
        activePlayer = 1
      } // on click, add player class and color to cell
      console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}, ${e.target}`) // check
      dropPiece(e)
    })
  }
}

const dropPiece = (e) => {
  let column = e.target.cellIndex //grab cell index # and set it to variable column
  let row = [] // empty container for cell index numbers
  console.log(column) // check

  for (let i = 5; i > -1; i--) { // for every row counting up from the bottom of the table:
    // if (column + 1)

    // // if ($tr.eq(i).children().css('background-color') == 'rgb(167, 167, 29)') { // if any of the row's children have a background color of yellow
    // // row.push($tr.eq(column).children()) // push the child's index number in the empty 'row' array
    // console.log(row) // function check
    // if (activePlayer == 1) { // if the active player is player 1:
    // // row[0].css('background-color', player1Color) // change the element's background color to player1's color
    // activePlayer = 2 // change to player 2
  }
}
// if (activePlayer == 2) { // if the active player is player 1:
// row[0].css('background-color', player2Color) // change the element's background color
// activePlayer = 1 // change to player 1
// e.preventDefault()
// })
// }

// $(() => {
$td.on('click', drawBoard())
// })

// const nextTurn = () => {
// if (gameStatus == active) {


// }
// }

// const drop = () => {
// for (row = 5; row >= 0; row--) {
// if (gameBoard[row][col] == 0) {
// gameBoard[row][col] = activePlayer
// drawBoard()
// if (activePlayer == 1) {
// activePlayer == 2
// } else {
// activePlayer == 1
// }
// nextTurn()
// return true
// }
// }
// }
// $(() => {
// startGame
// })
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