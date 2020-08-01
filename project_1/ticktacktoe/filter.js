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


let winningsArr = ["4", "6", "2"];
let currentIndex = 0;
let winningArr = [];

let seperatorFunc = () =>{
    winningArr = [];
    let compareArr = winningCombos[currentIndex];

    compareArr.forEach(currentArrItems =>{
        winningsArr.forEach(bluewinnings =>{
            if(bluewinnings === currentArrItems){
                winningArr.push(currentArrItems);
            }else{
                
            }
        });
    });

    if(winningArr.length === 3){
        console.log("someone won!");
        console.log(winningArr);
    }else{
        console.log("still not winning");
        currentIndex++;
        if(currentIndex < 8){
            seperatorFunc();
        }else{
            console.log("there are no matches");
        }
    }

    
}

seperatorFunc();











