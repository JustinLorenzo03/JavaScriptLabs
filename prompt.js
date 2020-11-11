const lowNumber = prompt('What is your low number?');
const highNumber = prompt('What is your high Number?');

const randomNumber = Math.floor( Math.random() * (highNumber - lowNumber + 1)  );

console.log(randomNumber);