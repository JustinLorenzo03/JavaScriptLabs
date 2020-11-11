// Asking the user for numbers
const lowNumber = prompt('What is your low number');
const highNumber = prompt('What is your high Number');

//Convert the strings to numbers
const LowNum = parseInt(lowNumber);
const HighNum = parseInt(highNumber);

//Having the calculated equations 
const add = highNumber + lowNumber;
const sub = highNumber - lowNumber;
const divide = highNumber / lowNumber;
const multiply = highNumber * lowNumber;
const expo = Math.pow(highNumber, lowNumber);
const modulus = highNumber % lowNumber;

//Pushing to the console for all the answers 
console.log(add);
console.log(sub);
console.log(divide);
console.log(multiply);
console.log(expo);
console.log(modulus);

//Random number from 0-35, making sure not 0 and can be 35
const randomNumber = Math.floor( Math.random() * 35 ) + 1 ;
console.log(randomNumber);

// float to the ceiling 

const floated = prompt ('Enter any number with a decimal');
const numCiel = parseInt(floated);
const ceilNumber = Math.ceil (Math.random() * numCiel ) + 1;
console.log(ceilNumber);


// float to the floor

const numFloor = prompt ('Enter any number with a decimal');
const floutDown = parseInt(numFloor);
const floatNumber = Math.floor (Math.random() * floutDown ) + 1;
console.log(floatNumber);
