let currentPlayer = 0;
const boxObj = [
    {
        id: "0",
        hasClicked: false,
        playerChoice: ""
    },
    {
        id: "1",
        hasClicked: false,
        playerChoice: ""
    },
    {
        id: "2",
        hasClicked: false,
        playerChoice: ""
    },
    {
        id: "3",
        hasClicked: false,
        playerChoice: ""
    },
    {
        id: "4",
        hasClicked: false,
        playerChoice: ""
    },
    {
        id: "5",
        hasClicked: false,
        playerChoice: ""
    },
    {
        id: "6",
        hasClicked: false,
        playerChoice: ""
    },
    {
        id: "7",
        hasClicked: false,
        playerChoice: ""
    },
    {
        id: "8",
        hasClicked: false,
        playerChoice: ""
    },

];





let startGame = () => {
    buildDivFunc();
}

let buildDivFunc = () => {

    boxObj.forEach(function (item) {
        $('.checkerboard-holder').append(
            $("<div/>")
                .addClass('box')
                .attr('id', item.id)
                .css('background-color', item.playerChoice)
        );
    });

    clickFunction();


}


let clickFunction = () => {

    $(".box").on("click", function (e) {
        e.preventDefault();
        let newTurn = currentPlayer;
        let newId = event.target.id;
        gameFunction(newId, newTurn);
    });
}

let gameFunction = (id, currentPlayer) => {
    if (boxObj[id].hasClicked === true) {

    } else {
        $('.checkerboard-holder').html("");
        updateClickedDivs(id);
        updatePlayerChoice(id, currentPlayer);
        updateCurrentTurn(id);
        buildDivFunc();
        hasSomeoneWon();

    }

}


let updateClickedDivs = (id) => {
    for (let index = 0; index < boxObj.length; index++) {
        if (boxObj[index].id === id && boxObj[index].hasClicked === false) {
            boxObj[index].hasClicked = true;

        } else {

        }
    }
}


let updatePlayerChoice = (id, currentPlayerChoice) => {

    if (currentPlayerChoice === 0) {
        currentPlayerChoice = "red";
    } else {
        currentPlayerChoice = "blue";
    }

    for (let index = 0; index < boxObj.length; index++) {
        if (boxObj[index].id === id) {
            boxObj[index].playerChoice = currentPlayerChoice;
        }
    }
}

let updateCurrentTurn = () => {

    if (currentPlayer === 0) {
        currentPlayer = 1;

    } else {
        currentPlayer = 0;

    }

}


let hasSomeoneWon = () => {
    let redWinnings = [];
    let blueWinnings = [];


    boxObj.forEach(function (boxes){
        if(boxes.playerChoice === "blue"){
            blueWinnings.push(boxes.id);
        }else if(boxes.playerChoice === "red"){
            redWinnings.push(boxes.id);
        }
    });


    if(currentPlayer === 0){
        arrChecker(blueWinnings);
    }else{
        arrChecker(redWinnings);
    }


}




let arrChecker = (testingArr) => {
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

let currentIndex = 0;
let winningArr = [];

let seperatorFunc = () =>{
    winningArr = [];
    let compareArr = winningCombos[currentIndex];

    compareArr.forEach(currentArrItems =>{
        testingArr.forEach(bluewinnings =>{
            if(bluewinnings === currentArrItems){
                winningArr.push(currentArrItems);
            }else{
                
            }
        });
    });

    if(winningArr.length === 3){
        printWinningPLayer();
    }else{
        currentIndex++;
        if(currentIndex < 8){
            seperatorFunc();
        }else{
        }
    }

    
}

seperatorFunc();
      
}


let printWinningPLayer = () =>{
    if(currentPlayer === 0){
        console.log("blue wins!");
    }else{
        console.log("red wins!");
    }
};


startGame();
