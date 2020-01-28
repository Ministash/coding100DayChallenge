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


let testingArr = ["0", "6", "3"];
let haveYouFoundAMatch = false;
let currentIndex = 0;
let winningArr = [];

let seperatorFunc = () =>{
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
        console.log("someone won!");
    }else{
        console.log("still not winning");
        currentIndex++;
        seperatorFunc();
    }

    
}



seperatorFunc();











