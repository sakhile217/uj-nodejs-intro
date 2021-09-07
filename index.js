
const chalk = require ('chalk');
const prompt = require ('prompt-sync')()
const greet = require('./greet');

//console.log(chalk.bgWhite.blue('Hello world'));
//console.log(chalk.blue("Hello") + ' world' + chalk.red('!'));
//const counter = 10;

/*let i = 0;
setInterval(function(){
    i++;
console.log("waiting for you:" + i)
}, 50000);
*/

//const number = prompt('Enter a number');

console.log(chalk.bgGreen.black(greet("Xola")));

//console.log(greet("Sakhile"));
//console.log(greet("Baloyi"));

//if (number > 7){
 //   console.log("Hello I am Java script I escaped from the browser")

//} else {
  //  console.log("NodeJS")
//}