
const chalk = require ('chalk');

const prompt = require ('prompt-sync')()

console.log(chalk.bgWhite.blue('Hello world'));
console.log(chalk.blue("Hello") + ' world' + chalk.red('!'));
//const counter = 10;

function greet(name){
    return 'Hello, ' + name;
}
const number = prompt('Enter a number');

//console.log(greet("Xola"));
//console.log(greet("Sakhile"));
//console.log(greet("Baloyi"));

if (number > 7){
    console.log("Hello I am Java script I escaped from the browser")

} else {
    console.log("NodeJS")
}