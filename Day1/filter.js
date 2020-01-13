let arr1 = ["bob", "jim", "rodger", "susan"];
let arr2 = ["bob",'rodger', "jim"];
let arr2 = ["bob","jim", "rodger"];


let isItInArr1 = [];


// let arrFinder = () =>{
//     for (let i = 0; i < arr1.length; i++) {
//         let currentIndex = arr1[i];

//         for (let a = 0; a < arr2.length; a++) {
//             if(currentIndex === arr2[a]){
//                 isItInArr1.push(arr2[a]);
//                 console.log("something is equalling");
//             }else{
//                 console.log("doesnt eqaul");
//             }
            
//         }

//     }
// }

// arrFinder();



arr1.forEach((item1) => {

    arr2.forEach((item2) => {
        if(item1 === item2){
            isItInArr1.push(item2);
            console.log("something is equalling");
        }else{
            console.log("doesnt eqaul");
        }
    });
    
});





console.log(isItInArr1);


