let currentPlayer = 0;
const boxObj = [
    {
        id: "0",
        hasClicked: false,
        playerChoice: "white"
    },
    {
        id: "1",
        hasClicked: false,
        playerChoice: "white"
    },
    {
        id: "2",
        hasClicked: false,
        playerChoice: "white"
    },
    {
        id: "3",
        hasClicked: false,
        playerChoice: "white"
    },
    {
        id: "4",
        hasClicked: false,
        playerChoice: "white"
    },
    {
        id: "5",
        hasClicked: false,
        playerChoice: "white"
    },
    {
        id: "6",
        hasClicked: false,
        playerChoice: "white"
    },
    {
        id: "7",
        hasClicked: false,
        playerChoice: "white"
    },
    {
        id: "8",
        hasClicked: false,
        playerChoice: "white"
    },

];





let startGame = () => {
    $(".turn").html("Red's").css('color', 'red');
    buildDivFunc();
}

let buildDivFunc = () => {
    //need to reset the entire board, making sure that each box is updated with the most current info from our global boxObj
    $('#checkerboard-holder').html("");

    //need to build the board using updated information from the boxObj
    boxObj.forEach(function (item) {
        $('#checkerboard-holder').append(
            $("<div/>")
                .addClass('box')
                .attr('id', item.id)
                .css('background-color', item.playerChoice)
        );
    });

    //Need to re-activate the click function for my rebuilt functions
    clickFunction();

}


let clickFunction = () => {
    //click function starts the functions for the entire game

    $(".box").on("click", function (e) {
        e.preventDefault();

        //need to store who is the current player for my fucntions that will fire
        let newTurn = currentPlayer;

        //the Id is letting me know the information about the item that I just clicked on
        let newId = event.target.id;

        //call my game function to fire the rest of the magic
        gameFunction(newId, newTurn);
    });
}

let gameFunction = (id, currentPlayer) => {
    if (boxObj[id].hasClicked === true) {
        //checking to see if that box that we just clicked on has already been clicked
    } else {
        //where I update the state of a box being "clicked"
        updateClickedDivs(id);
        
        //update the global boxObj with our latest choice, letting us know who selected what box and what color that box should be
        updatePlayerChoice(id, currentPlayer);
        
        //sets up a new global player
        updateCurrentTurn(id);
        
        //where I reset the divis, this needs to be done last after all my new states for boxObj has been updated
        buildDivFunc();

        //need to check if someone has won the game!
        hasSomeoneWon();

        //check to see if all the tiles have been played but nobody won :(
        allTilesPlayedReset();

    }

}


let updateClickedDivs = (id) => {
    for (let index = 0; index < boxObj.length; index++) {
        //loop through the boxObj and see what box was just choosen (id tells us which box was clicked)
        if (boxObj[index].id === id && boxObj[index].hasClicked === false) {
            //update a box to the new clicked state
            boxObj[index].hasClicked = true;

        } else {
            //do nothing if a box has already been clicked
        }
    }
}


let updatePlayerChoice = (id, currentPlayerChoice) => {

    //Need to translate our current user from a 1 or a 0 to "red" or "blue"
    if (currentPlayerChoice === 0) {
        currentPlayerChoice = "red";
        $(".turn").html("Blue's").css('color', 'blue');;
    } else {
        currentPlayerChoice = "blue";
        $(".turn").html("Red's").css('color', 'red');;
    }

    //check the id of the current clicked box, then update it
    for (let index = 0; index < boxObj.length; index++) {
        if (boxObj[index].id === id) {
            boxObj[index].playerChoice = currentPlayerChoice;
        }
    }
}

let updateCurrentTurn = () => {

    //just switching the current turn
    if (currentPlayer === 0) {
        currentPlayer = 1;

    } else {
        currentPlayer = 0;

    }

}


let hasSomeoneWon = () => {
    //where the current choices of our players is stored
    let redWinnings = [];
    let blueWinnings = [];


    //cycling through the boxObj to find which boxes are marked as "red" or "blue"
    boxObj.forEach(function (boxes){
        if(boxes.playerChoice === "blue"){
            blueWinnings.push(boxes.id);
        }else if(boxes.playerChoice === "red"){
            redWinnings.push(boxes.id);
        }
    });

    //sending one array through at a time to make things easier
    if(currentPlayer === 0){
        arrChecker(blueWinnings);
    }else{
        arrChecker(redWinnings);
    }


}




let arrChecker = (testingArr) => {
    //all my winning combos
    const winningCombos = [
        ["0", "1", "2",],
        ["3", "4", "5",],
        ["6", "7", "8",],
    
        ["0", "3", "6",],
        ["1", "4", "7",],
        ["2", "5", "8",],
    
        ["0", "4", "8",],
        ["2", "4", "6",],
    ];

/* using recursion to evaluate each "winningCombos" vs the passed "testingArr" array. currentIndex is is my
starting place, meaning that it represents index "0" on my array list winningCombos. If the current index does not equal the testingArr, then
it moves up an index and evaluates the next array. For loops and functions like forEach blended all the arrays together, and 
I needed to find a way to look at each array index from winningCombos individually. This is a great example of closers and recursion in javascript */

let currentIndex = 0;
let winningArr = [];

let seperatorFunc = () =>{
    //reseting the winning array on each loop
    winningArr = [];

    //setting a variable for the current index of the winningCombo array
    let compareArr = winningCombos[currentIndex];

    //pulling each item in both arrays out individually for comparison
    compareArr.forEach(currentArrItems =>{
        testingArr.forEach(colorWinnings =>{
            if(colorWinnings === currentArrItems){
                winningArr.push(currentArrItems);
            }else{
                //nothing happens if the items don't match
            }
        });
    });

    if(winningArr.length === 3){
        //all winning combos do not contain more than three numbers, meaning that if we hit 3 of them in our winningArr someone won
        printWinningPLayer();
    }else{
        //if a winner is not found from the current array, then we move onto the next index in winningCombos. 
        currentIndex++;
        if(currentIndex < 8){
            //not stopping the recursion yet
            seperatorFunc();
        }else{
            //winningCombos only has 8 arrays, so we have to end recursion to ensure that our function doesn't blow up the program
        }
    }

    
}

//gotta call our function to kick off the recursion
seperatorFunc();
      
}


let printWinningPLayer = () =>{
    if(currentPlayer === 0){
        let winningPLayer = "Blue";
        appendADiv(winningPLayer);
    }else{
        let winningPLayer = "Red";
        appendADiv(winningPLayer);
    }
};


let allTilesPlayedReset = () =>{
    let numberOfTilesChecked = 0;

    for (let index = 0; index < boxObj.length; index++) {
        if(boxObj[index].hasClicked === true){
            numberOfTilesChecked++
            console.log('going up!');
            
        }else{
            //do nothing
            console.log('nothing is going on :(');
            
        }
        
    }

    if(numberOfTilesChecked === 9){
        $('.main-dividers').append('<button onclick="resetGame()" class="reset-button">Play Again!</button>');
    }
}



let appendADiv = (wPlayer) =>{
    $(".checkerboard-wrapper").html('<div></div><div class="splash-message"><div class="winning-text-wrapper"><div id="winning-text">Player<div class="winning-text">' + wPlayer + '</div><div class="winning-text">Wins!</div></div></div><div id="checkerboard-holder"></div></div><div></div>');
    $('.main-dividers').append('<button onclick="resetGame()" class="reset-button">Play Again!</button>');
    buildDivFunc();
    $('#checkerboard-holder').css('opacity', 0.1);
    $('.box').off('click');
    
};



let resetGame = () =>{
    console.log("hello");
    for (let index = 0; index < boxObj.length; index++) {
        boxObj[index].playerChoice = "white";
        boxObj[index].hasClicked = false;
    }

    $(".checkerboard-wrapper").html('<div></div><div id="checkerboard-holder"></div><div></div>');
    $('.reset-button').remove();


    buildDivFunc();
}

//Initialize game
startGame();
