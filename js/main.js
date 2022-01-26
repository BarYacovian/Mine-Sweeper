'use strict'

const MINE = '💣';
const HINT = '💡';
const HEART = '💗';
const FLAG = '📍';
const EMPTY = ' ';

var gBoard;

var gLevel = {
    SIZE: 4,
    MINES: 2
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}



function initGame() {
    gBoard = buildBoard(gLevel.SIZE);
    renderBoard(gBoard)
    // console.table(gBoard);
    getRandomMine(gBoard)

}

function buildBoard(size) {
    //build the board 4 * 4
    var board = [];
    for (var i = 0; i < size; i++) {
        board[i] = [];
        for (var j = 0; j < size; j++) {
            board[i][j] = createCell();

        }
    }
    return board;
}


function createCell() {
    var cell = {
        minesAroundCount: 4,
        isShown: false,
        isMine: false,
        isMarked: false
    }
    return cell;
}


function setMinesNegsCount(board, rowIdx, colIdx) {

    board.minesAroundCount = 0;
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i > board.length - 1) continue;
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j > board[0].length - 1) continue;
            if (i === rowIdx && j === colIdx) continue;
            var cell = board[i][j];
            if (cell.isMine) board.minesAroundCount++;
        }
    }
    return board.minesAroundCount;
}


function cellClicked(elCell, i, j) {
    var cell = gBoard[i][j];
    var minesAround = setMinesNegsCount(gBoard, i, j);
    cell.isShown = true;

    if (cell.isMine) {
        elCell.innerHTML = `<span class="numbers">${MINE}</span>`;
    } else {
        elCell.innerHTML = `<span class="numbers">${minesAround}</span>`;
    }

}

function getRandomMine(gBoard) {
    for (var i = 0; i < gLevel.MINES; i++) {
        var randomI = getRandomIntInclusive(0, gBoard.length - 1)
        var randomj = getRandomIntInclusive(0, gBoard.length - 1)
        gBoard[randomI][randomj].isMine = true;
    }
}








































// function findMine(gBoard) {
//     var mines = [];
//     for (var i = 0; i < gBoard.length; i++) {
//         for (var j = 0; j < gBoard.length; j++) {
//             var currCell = gBoard[i][j]
//             if (currCell.isMine) {
//                 var minePos = { i: i, j: j }
//                 mines.push(minePos)
//                 console.log(currCell, minePos);
//             }
//         }
//     }
//     console.log(mines);
//     return mines
// }

// function createMine() {
//     var minLocations = findMine(gBoard);
//     var mineLocation = minLocations.pop();
//     gBoard[mineLocation.i][mineLocation.j] = MINE;
//     renderCell(mineLocation, MINE);
// }






// function buildBoard() {
//     //build the board 4 * 4
//     var board = createMat(4, 4)
//     for (var i = 0; i < board.length; i++) {
//         for (var j = 0; j < board[0].length; j++) {
//             var currCell = board[i][j];
//             board[i][j] = createCell();

//         }
//     }
//     board[1][1].isShown = true;
//     board[1][1] = MINE;
//     board[3][3].isShown = true;
//     board[3][3] = MINE;
//     return board;
// }

// function createCell() {
//     var cell = {
//         minesAroundCount: 0,
//         isShown: false,
//         isMine: false,
//         isMarked: false
//     }
//     return cell;
// }

// function setMinesNegsCount(board) {
//     for (var i = 0; i < board.length; i++) {
//         for (var j = 0; j < board[0].length; j++) {
//             var numOfNeighbors = countNeighbors(i, j, board);
//             console.log(numOfNeighbors);

//         }
//     }
//     return board;
// }