console.log('game works')
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
selectCell() - selected cell for piece to be dropped in, occurs during turn
*/
//Constants
/* 
row
column
activePlayer
cell
gameStatus - will return active or inactive. if active is true, 
player1 - 1. will be yellow until functionality is built in to enable selection
player2 - 2. will be red until functionality is built in to enable selection
 */

// on page load the html elements (decorative text, xnct4 board table, piece examples) then JS/JQuery

//draw the connect4 board to the DOM on pageload
const drawBoard = () => {
  let gameBoard = []
  for (let row = 0; row <= 6; row++) {
    $('div').append('<div></div>').addClass('row').addId('cell')
    for (let column = 0; column <= 5; column++) {
      $('div').append('<div></div>').addClass('col').addId('cell')
      gameBoard.push(0)
    }
  }
  console.log(gameBoard)
}

// drawBoard()
// forEach(cell in gameBoard) {
//   $('canvas').drawRect

// }
const player1 = 1
const player2 = 2
const gameBoard = {
  grid: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]
}
gameBoard.grid.forEach(cell => {
      for (const col in gameBoard.grid[row]) {
        let cell = gameBoard.grid[row][col]
      }
    }

    forEach()


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