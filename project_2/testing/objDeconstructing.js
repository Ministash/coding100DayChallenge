let funArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];


let [a, b, c, d] = funArr;
console.log(d); //will return the fourth place in the array / 3


//there are 8 commas, which means that we will ignore everything in the array up until the ninth place. stupid.  
let [,,,,,,,,something] = funArr;
console.log(something); // 8

//each new variable listed before the three periods will be ignored. So e, f, g etc. will not register if anotherVariable is called. 
let [e, f, g, h, i, j, ...anotherVariable] = funArr;
console.log(anotherVariable); // [6, 7, 8]




