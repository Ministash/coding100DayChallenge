// Variables Defined
const isClicked = false;
let whosTurnIsItCurrently = false;
let colorArr = ["blue", "red"];
let currentColor = '';
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
        boxObj.forEach(function(item) {
            $('.checkerboard-holder').append(
                $("<div/>")
                .addClass('box')
                .attr('id', item.id)
            );
        });

    clickFunction();
    colorChanger();

}

let clickFunction = () => {
    
        $(".box").on("click", function(e){
            e.preventDefault();

            let currentBox = event.target.id;
            let locateObjNum = currentBox.toString();

            for(let i = 0; i < boxObj.length; i++){
                if(locateObjNum === boxObj[i].id && boxObj[i].hasClicked === false){
                    boxObj[locateObjNum].hasClicked = true;
                    colorChanger();
                }else{
                    console.log("not working");
                }
            }
    });
}

let colorChanger = () =>{
    for(let i = 0; i < boxObj.length; i++){
        if(boxObj[i].hasClicked === false){

        }else{
            console.log(boxObj);

            $('#' + boxObj[i].id).css('background-color', currentColor);
            
        }
    }
}


let whosTurnIsIt= () =>{
   let randomDecider = Math.floor(Math.random() * 2);
   
   if(randomDecider === 0){
       whosTurnIsItCurrently = false;
        currentColor = colorArr[0]

   }else{
    whosTurnIsItCurrently = true;
    currentColor = colorArr[1]
   }
}


startGame();
whosTurnIsIt();