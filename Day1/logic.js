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
        // console.log('nothing will be done my child');
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
    const winningCombos = [
        ["0", "1", "2",],
        ["3", "4", "5",],
        ["6", "7", "8",],
    
        ["0", "3", "6",],
        ["1", "4", "7",],
        ["2", "5", "8",],
    
        ["0", "4", "8",],
        ["2", "4", "6",],
    ]

    let redWinnings = [];
    let blueWinnings = [];


    boxObj.forEach(function (boxes){
        if(boxes.playerChoice === "blue"){
            blueWinnings.push(boxes.id);
        }else{
            redWinnings.push(boxes.id);
        }
    });

    arrChecker(winningCombos, blueWinnings);

}




let arrChecker = (arr1, arr2) => {
    let isItInArr1 = [];
    // console.log(arr1);
    // console.log(arr2);


    arr1.forEach((item1) => {
        console.log(item1);
        arr2.forEach((item2) => {
            if(item1 === item2){
                isItInArr1.push(item2);
                // console.log("something is equalling");
            }else{
                // console.log("doesnt eqaul");
            }
        });
        
    });


    if(3 <= isItInArr1.length){
        // console.log('somonewon');
    }else{
        // console.log('still havent won');
        console.log(isItInArr1);
    }
}






    










//     if (blueWinnings[i].id === '0' && blueWinnings[i].id === '1' && blueWinnings[i].id === '2') {
//         console.log('player blue wins!');
//     } else if (blueWinnings[i].id === '3' && blueWinnings[i].id === '4' && blueWinnings[i].id === '5') {
//         console.log('player blue wins!');
//     } else if (blueWinnings[i].id === '6' && blueWinnings[i].id === '7' && blueWinnings[i].id === '8') {
//         console.log('player blue wins!');
//     } else if (blueWinnings[i].id === '0' && blueWinnings[i].id === '4' && blueWinnings[i].id === '8') {
//     }
// }


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


// let scoreChecker = (scoreArr) =>{
//     console.log(scoreArr);
// }





startGame();
