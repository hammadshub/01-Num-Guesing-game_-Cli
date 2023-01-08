#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep = (ms = 1200)=>new Promise((res, rej) => setTimeout(res , ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("Let's Have Fun !");//start
    await sleep();
    rainbowTitle.stop();
};

//welcome();

let playerLife = 3;

async function askQuestion(){

    let randomNumber:number = Math.floor(Math.random() * 10 + 1);
  
    do{
        console.log(`Rest life ${playerLife}`);
        playerLife--;
        
    var quer = await inquirer

    .prompt([
        {
            type:"number",
            name:"usr_num",
            message:chalk.yellow("Select any number between 1 - 10"),
            // validate:(answers:number)=>{
            //     if(isNaN(answers)){
            //         return chalk.red("Please enter a valid number!");
            //     }
            //     return true;
            // }
        
        }
    ]);
    if(quer.usr_num === randomNumber){
       console.log(chalk.green("Congratulation ! You get it..."))
    }else if(quer.usr_num < randomNumber){
        console.log(chalk.redBright(`Your number ${quer.usr_num} is less than guess number...`));
    }else if(quer.usr_num > randomNumber){
        console.log(chalk.redBright(`Your number ${quer.usr_num} is higher than guess number...`));
    }
   }while(playerLife > 0 && randomNumber !== quer.usr_num);
   if (playerLife==0 && randomNumber!== quer.usr_num){
    console.log(chalk.greenBright("Start Over!"));
   }
}

//askQuestion();


async function startagain() {
    do{

        console.clear();
        await welcome();
        
        playerLife=3
        
        await askQuestion();

        var restart = await inquirer.prompt([
            {
                type:"input",
                name:"startagain",
                message:chalk.blue("Do you want to restart the game ? Press y or n")
            }
        ])
    }while(restart.startagain==="y" || restart.startagain==="Y" || restart.startagain==="yes");
}

startagain();