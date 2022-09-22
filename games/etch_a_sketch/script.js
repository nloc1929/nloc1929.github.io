
/* ETCH-A-SKETCH GAME */
/* JAVASCRIPT PROGRAM TO MANIPULATE DOM ELEMENTS AND INTERACT WITH MOUSE EVENTS */

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX (0) LOAD BASE GAME XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

// Selects the Game Board div element
let gameBoard = document.querySelector(".gameBoard");           // Sends a query to select a the Game Board element by class name 
gameBoard.addEventListener('mouseover', colorFunction);         // Listens for mouse over (hover) event on Game Board, activates color function

// VARIABLES TO STORE SOUND EFFECTS
let buttonClick = document.getElementById("buttonAudio");
// FUNCTION TO PLAY BUTTON CLICK AUDIO
function playAudio() {
    buttonClick.play();
};

// FUNCTION TO LOAD BASE BOARD
function loadBoard() {
    // 18 tiles width (padding: 28px)
    for (let i = 0; i < 18; i++) {
        for (let x = 0; x < 14; x++) {
            let gameTile = document.createElement('div');                               // Create 'div' element
            gameTile.setAttribute('style', 'background-color: white');                  // Adds style properties to new div
            gameTile.classList.add('gameTile');                                         // Gives new div a class name
            gameTile.id = "gameTile";
            gameBoard.appendChild(gameTile);
        }
    }
};


// FUNCTION TO COLOR EACH GAME TILE WITH CURRENT COLOR
function colorFunction() {
    let gameTiles = document.querySelectorAll('.gameTile');
    if (rainbowStatus === "OFF" && eraserStatus === "OFF") {
        gameTiles.forEach( (tile) => {
            tile.addEventListener('mouseover', () => {
                tile.setAttribute('style', 'background-color: ' + currentColor);
            })
        })
    } else if (rainbowStatus === "ON" && eraserStatus === "OFF") {
        gameTiles.forEach( (tile) => {
            tile.addEventListener('mouseover', () => {
                let randR = Math.floor(Math.random() * 256);
                let randG = Math.floor(Math.random() * 256);
                let randB = Math.floor(Math.random() * 256);
                rainbowColor = "rgb(" + randR + ", " + randG + ", " + randB + ")";
                tile.setAttribute('style', 'background-color: ' + rainbowColor);
            });
        });
    } else if (eraserStatus === "ON") {
        gameTiles.forEach( (tile) => {
            tile.addEventListener('mouseover', () => {
                tile.setAttribute('style', 'background-color: ' + "#FFFFFF");
            })
        })
    }
};

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX (1) COLOR SELECTION XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

// VARIABLES TO STORE COLORS AND ACTIVATE STARTUP FUNCTION ON LOAD
var colorSelect;
var currentColor = "#000000";
var rainbowColor = "";
window.addEventListener("load", startup, false);

// FUNCTION TARGET COLOR INPUTS AND CHANGE INPUT DISPLAY COLORS
function startup() {
    colorSelect = document.querySelector("#colorSelect");
    colorSelect.addEventListener("input", updateFirst, false);
    colorSelect.select();
};

// FUNCTION TO UPDATE CURRENT COLOR TO SELECTED COLOR
function updateFirst(event) {
    currentColor = event.target.value;
    return currentColor;
};


/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX (2) ERASER BUTTON XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

// SELECTS BUTTON 1: ERASER MODE
let eraseButton = document.getElementById('button1');
// CAPTURES "OFF/ON" VALUE FROM BUTTON 1
let eraserStatus = document.getElementById('button1').value;

// FUNCTION TO TOGGLE BUTTON VALUE BETWEEN 'OFF' (NORMAL MODE) & 'ON' (ERASER MODE)
function toggleEraser(button) {
    playAudio();
    if (button.value == "ON") {
        button.value = "OFF"; 
        eraserStatus = button.value;
        eraseButton.setAttribute('style', 'background-color: #1e73be');
        colorSelect = document.querySelector("#colorSelect").value;
        currentColor = colorSelect;
        return eraserStatus, currentColor;
    } else {
        button.value = "ON";
        eraserStatus = button.value;
        eraseButton.setAttribute('style', 'background-color: mediumseagreen; background-image: linear-gradient(limegreen, mediumseagreen)');
        return eraserStatus;
    }
}


/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX (3) RAINBOW BUTTON XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

// SELECTS BUTTON 2: RAINBOW COLOR
let rainButton = document.getElementById('button2');
// CAPTURES "OFF/ON" VALUE FROM BUTTON 1
let rainbowStatus = document.getElementById('button2').value;

// FUNCTION TO TOGGLE BUTTON VALUE BETWEEN 'OFF' (NORMAL MODE) & 'ON' (RAINBOW MODE)
function toggleRainbow(button) {
    playAudio();
    if (button.value == "ON") {
        button.value = "OFF"; 
        rainbowStatus = button.value;
        rainButton.setAttribute('style', 'background-color: #1e73be');
        colorSelect = document.querySelector("#colorSelect").value;
        currentColor = colorSelect;
        return rainbowStatus, currentColor;
    } else {
        button.value = "ON";
        rainbowStatus = button.value;
        rainButton.setAttribute('style', 'background-color: mediumseagreen; background-image: linear-gradient(limegreen, mediumseagreen)');
        return rainbowStatus;
    }
}


/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX (4) SIZE BUTTON XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

// CAPTURES CLICK EVENT FROM BUTTON 3: BOARD SIZE
let sizeButton = document.getElementById('button3');
sizeButton.addEventListener('click', openModal);

// FUNCTION TO OPEN END OF GAME MODAL SCREEN
function openModal() {
    playAudio();
    var modal = document.getElementById("sizeModal");
    var size1 = document.getElementById("button3-1");
    var size2 = document.getElementById("button3-2");
    var size3 = document.getElementById("button3-3");
    modal.style.display = "block";
      
    // FUNCTION TO CLOSE MODAL AND LOAD 20 X 12 BOARD (3-1)
    size1.onclick = function() {
        playAudio();
        modal.style.display = "none";
        smallBoard();
    };
    // FUNCTION TO CLOSE MODAL AND LOAD 56 X 35 BOARD (3-2)
    size2.onclick = function() {
        playAudio();
        modal.style.display = "none";
        mediumBoard();
    };
    // FUNCTION TO CLOSE MODAL AND LOAD 88 X 52 BOARD (3-3)
    size3.onclick = function() {
        playAudio();
        modal.style.display = "none";
        largeBoard();
    };
    // FUNCTION TO CLOSE MODAL WHEN USER CLICKS OUTSIDE OF MODAL
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        //restartGame();
      }
    };
  };

// FUNCTION TO CREATE SMALL (20x12) BOARD SIZE
function smallBoard() {
    const gameTiles = document.querySelectorAll('.gameTile');
    gameTiles.forEach( (tile) => {
        tile.remove();
    });
    // 18 tiles width (padding: 28px)
    for (let i = 0; i < 18; i++) {
        for (let x = 0; x < 14; x++) {                                                  // Use multiples of 1 for x condition
            let gameTile = document.createElement('div');                               // Create 'div' element
            gameTile.setAttribute('style', 'background-color: white');                  // Adds style properties to new div
            gameTile.classList.add('gameTile');                                         // Gives new div a class name
            gameTile.id = "gameTile";
            gameBoard.appendChild(gameTile);
        }
    };
}

// FUNCTION TO CREATE MEDIUM (56x35) BOARD SIZE
function mediumBoard() {
    const gameTiles = document.querySelectorAll('.gameTile');
    gameTiles.forEach( (tile) => {
        tile.remove();
    });
    // 42 tiles width (padding: 8px)
    for (let i = 0; i < 42; i++) {
        for (let x = 0; x < 28; x++) {                                                  // Use multiples of 7 for x condition
            let gameTile = document.createElement('div');                               // Create 'div' element
            gameTile.setAttribute('style', 'background-color: white');                  // Adds style properties to new div
            gameTile.classList.add('gameTile');                                         // Gives new div a class name
            gameTile.id = "gameTileMed";
            gameBoard.appendChild(gameTile);
        }
    };
}

// FUNCTION TO CREATE LARGE (88x52) BOARD SIZE
function largeBoard() {
    const gameTiles = document.querySelectorAll('.gameTile');
    gameTiles.forEach( (tile) => {
        tile.remove();
    });
    // 66 tiles width (padding: 4px)
    for (let i = 0; i < 66; i++) {
        for (let x = 0; x < 50; x++) {                                                  // Use multiples of 8 for x condition
            let gameTile = document.createElement('div');                               // Create 'div' element
            gameTile.setAttribute('style', 'background-color: white');                  // Adds style properties to new div
            gameTile.classList.add('gameTile');                                         // Gives new div a class name
            gameTile.id = "gameTileSmall";
            gameBoard.appendChild(gameTile);
        }
    };
}


/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX (5) CLEAR BUTTON XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

// CAPTURES CLICK EVENT FROM BUTTON 4: CLEAR BOARD
let clearButton = document.getElementById('button4');
clearButton.addEventListener('click', clearBoard);

// FUNCTION TO CLEAR BOARD
function clearBoard() {
    playAudio();
    let clearTile = document.querySelector('.gameTile');
    clearTile.setAttribute('style', 'background-color: #FFFFFF');
    const gameTiles = document.querySelectorAll('.gameTile');
    gameTiles.forEach( (tile) => {
        tile.setAttribute('style', 'background-color: white')
    })
};