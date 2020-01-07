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





let startGame = (turn) =>{

    // console.log("startGame is working");
    whosTurnIsItGameStart();
    buildDivFunc();
    clickFunction(turn);

}

let buildDivFunc = () =>{
    
    boxObj.forEach(function(item) {
        $('.checkerboard-holder').append(
            $("<div/>")
            .addClass('box')
            .attr('id', item.id)
        );
    }); 
}


let clickFunction = (currentTurn) =>{
    console.log(currentTurn);
    $(".box").on("click", function(e){
        e.preventDefault();
        // console.log("click is working");
         let newId = event.target.id;
         gameFunction(newId, currentTurn);
    }); 
}

let gameFunction = (id, currentPlayer) =>{

        // console.log("update is happening");
        updateClickedDivs(id);
        updatePlayerChoice(id, currentPlayer);
        // updateCurrentTurn(currentPlayer);
    
}


let updateClickedDivs = (id) =>{
    for (let index = 0; index < boxObj.length; index++) {
        if(boxObj[index].id === id && boxObj[index].hasClicked === false){
            boxObj[index].hasClicked = true;
            console.log(boxObj);
            // console.log("we found the corret object!");
        }else{
            // console.log('this is the wrong item in your objects');
        }
    }  
}


let updatePlayerChoice = (id, currentPlayerChoice) =>{
    console.log(currentPlayerChoice);
    if(currentPlayerChoice === 0){
        currentPlayerChoice = "red";
    }else{
        currentPlayerChoice = "blue";
        console.log("blue");
    }

    for (let index = 0; index < boxObj.length; index++) {
        if(boxObj[index].id === id){
            boxObj[index].playerChoice = currentPlayerChoice;
        }
    }
} 

// let updateCurrentTurn = (currentPlayer) =>{
//     if(currentPlayer === currentPlayer){

//     }else{
//         if (currentPlayer === 0){
//             return currentPlayer = 1;

//         }else{
//             return currentPlayer = 0;

//         }

//     }
// }











let whosTurnIsItGameStart = () => {
    return  Math.floor(Math.random() * 2);
};


startGame(whosTurnIsItGameStart());
