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





let startGame = (turn) =>{

    // console.log("startGame is working");
    updateCurrentTurn();
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


let clickFunction = () =>{
    
    $(".box").on("click", function(e){
        e.preventDefault();
        let newTurn = currentPlayer;
        // console.log("click is working");
         let newId = event.target.id;
         gameFunction(newId, newTurn);
    }); 
}

let gameFunction = (id, currentPlayer) =>{

        // console.log("update is happening");
        updateClickedDivs(id);
        updatePlayerChoice(id, currentPlayer);
        updateCurrentTurn();
    
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
    console.log(currentPlayerChoice + "<---- current player choice");
    if(currentPlayerChoice === 0){
        currentPlayerChoice = "red";
    }else{
        currentPlayerChoice = "blue";
    }

    for (let index = 0; index < boxObj.length; index++) {
        if(boxObj[index].id === id){
            boxObj[index].playerChoice = currentPlayerChoice;
        }
    }
} 

let updateCurrentTurn = () =>{
    console.log('fired!');
        if (currentPlayer === 0){
            currentPlayer = 1;
            console.log("new player is red");

        }else{
             currentPlayer = 0;
             console.log("new player is blue");

        }

    }











// let whosTurnIsItGameStart = () => {
//     return  Math.floor(Math.random() * 2);
// };


startGame();
