const lowNumber = prompt('What is your low number?');
const highNumber = prompt('What is your high Number?');

const add = highNumber + lowNumber;
const sub = highNumber - lowNumber;
const divide = highNumber / lowNumber;
const multiply = highNumber * lowNumber;
const expo = Math.pow(highNumber, lowNumber);
const modulus = highNumber % lowNumber;

const randomNumber = Math.floor( Math.random() * (highNumber - lowNumber + 1)  );

console.log(randomNumber);