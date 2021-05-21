var readlineSync = require('readline-sync');
const chalk = require('chalk');


var player = readlineSync.question("May I have your name please? ");

console.log(chalk.gray("********************************************************"))

var Fan = readlineSync.question(chalk.black.bgYellow.bold("Die Hard Fan Of F.R.I.E.N.D.S? "));
 

console.log(chalk.black.bgWhite("Crack this quiz to prove :>"))

console.log(chalk.gray("********************************************************"))


var score = 0;
function play(question,answer){
  var userAns = readlineSync.question(question);
  if (userAns == answer){
    console.log("Bingo!");
    score = score + 1;
  }else{
    console.log("Oops!");
  }
   console.log("okay so you scored " + score + " out of 10! NOT BAD");
}




var Question =[{
  question: `what is the youngest F.R.I.E.N.D? 
             a: Monica
             b: Rachel
             c: Chandler
             d: Joey \n `,
  answer: "b"
},{
  question: `How many babies did Phoebe carry for her brother?
             a: One
             b: Two
             c: Three
             d: Four \n`,
  answer: "c"
},{
  question: `How many categories does Monica organize her towels? 
             a: 3
             b: 5
             c: 7
             d: 11 \n`,
  answer: "d"
},{
  question: `what was Joey's special?
             a: Two Pizzas
             b: Huggsie
             c: Acting
             d: Sandwiches \n`,
  answer: "a"
},{
  question: `What was Chandler's middle name? 
             a: McKay
             b: Muriel
             c: Mcbert
             c: Macarthy \n`,
  answer: "b"
},{
  question: `In which episode did Mr. Heckles die? 
             a: Season 1 episode 8
             b: Season 2 episode 3
             c: Season 3 episode 5
             d: Season 2 episode 4 \n `,
  answer: "b"
},{
  question: `How many women gave birth before Rachel in the hospital(on the same day)?
             a: Nine
             b: Three
             c: Ten
             d: Five \n`,
  answer: "d"
},{
  question: `Which magazine did Ross have joke published in? 
             a: Rolling Stone
             b: Time
             c: Playboy
             d: GQ \n`,
  answer: "c"
},{
  question: `Which member of the group has Monica never lived with?
             a: Ross
             b: Joey
             c: Phoebe
             d: Rachel \n`,
  answer: "b"
},{
  question: `Which costume does Ross wear to Monica's Halloween party? 
             a: Mr. Potato Head
             b: Caption Nemo
             c: Spud-nik
             c: Armadillo \n`,
  answer: "c"
}
]

for (var i=0; i<Question.length; i++){
  var currentQ = Question[i];
  play(chalk.cyan(currentQ.question),currentQ.answer)
}


var scoreList = [
  {
    player: "Mansi",
    score:10
  },
  {
    player: "Rohan",
    score:10
  },
  {
    player: "Pranjal",
    score:6
  },
  {
    player:"Naman",
    score:7
  }
]

for (i=0 ; i<scoreList.length ; i++){
  if(scoreList[i].score == 10){
    console.log("Congratulations! " + scoreList[i].player + " YOU ARE AMONG HIGH SCORER PLAYERS");
  }
}