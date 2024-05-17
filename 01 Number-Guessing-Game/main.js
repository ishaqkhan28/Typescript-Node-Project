import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Welcome() {
    let rainbowtitle = chalkAnimation.rainbow("Lets start Guessing Number");
    await sleep();
    rainbowtitle.stop();
}
await Welcome();
async function startFunc() {
    const randomNumber = Math.floor(Math.random() * 5);
    const userNum = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: chalk.yellow("Guess a right number B/W 1 to 5 :"),
        }
    ]);
    const { userGuess } = userNum;
    if (userGuess === randomNumber) {
        console.log(chalk.green("yahhh you guess a correct answer you win "));
    }
    else {
        console.log(chalk.red("please try again :) write number is :"), randomNumber);
    }
}
async function startagain() {
    do {
        await startFunc();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "do you want to continue press y or n:",
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes");
}
startagain();
