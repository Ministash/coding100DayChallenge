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





let startGame = () =>{
    buildDivFunc();
}

let buildDivFunc = () =>{

    boxObj.forEach(function(item) {
        $('.checkerboard-holder').append(
            $("<div/>")
            .addClass('box')
            .attr('id', item.id)
            .css('background-color', item.playerChoice)
        );
    }); 

    clickFunction();
    

}


let clickFunction = () =>{
    
    $(".box").on("click", function(e){
        e.preventDefault();
        let newTurn = currentPlayer;
         let newId = event.target.id;
         gameFunction(newId, newTurn);
    }); 
}

let gameFunction = (id, currentPlayer) =>{
    if(boxObj[id].hasClicked === true){
        // console.log('nothing will be done my child');
    }else{
        $('.checkerboard-holder').html("");
        updateClickedDivs(id);
        updatePlayerChoice(id, currentPlayer);
        updateCurrentTurn(id);
        buildDivFunc();
        hasSomeoneWon();

    }
    
}


let updateClickedDivs = (id) =>{
    for (let index = 0; index < boxObj.length; index++) {
        if(boxObj[index].id === id && boxObj[index].hasClicked === false){
            boxObj[index].hasClicked = true;

        }else{

        }
    }  
}


let updatePlayerChoice = (id, currentPlayerChoice) =>{

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

let updateCurrentTurn = (id) =>{

            if (currentPlayer === 0){
                currentPlayer = 1;
                // console.log("new player is red");
                // console.log(boxObj);
    
            }else{
                 currentPlayer = 0;
                //  console.log("new player is blue");
                //  console.log(boxObj);
    
            }

    }


let hasSomeoneWon = () =>{
    // let redWinnings = [];
    // let blueWinnings = [];
    

    let blueWinnings = boxObj.filter(choice => {
        return choice.playerChoice === "blue";
    });



        
        
    //     else if(boxObj[index].playerChoice === "blue"){
    //         for (let j = 0; j <  blueWinnings.length; j++) {
    //             // if( blueWinnings[j] != boxObj[index].id)
    //             // blueWinnings.push(boxObj[index].id);
    //             // scoreChecker( blueWinnings);
    //             console.log(boxObj[index].id);
    //         }

    //     }else{
    //         console.log("nothing is being pushed");
    //     }
    // }
} 

// let scoreChecker = (scoreArr) =>{
//     console.log(scoreArr);
// }





startGame();
