import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000)
    })
}
async function Welcome() {
    let rainbowtitle = chalkAnimation.rainbow("Lets start calculation")
    await sleep()
    rainbowtitle.stop()
    console.log(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);

}
await Welcome()

async function askQuestion() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operator you want to perform",
            choices: ["Addition", "Substraction", "Multiplication", "Divide"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter num1",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter num2",
        },

    ])
    if (answer.operator == "Addition") {
        console.log(chalk.green(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
    } else if (answer.operator == "Substraction") {
        console.log(chalk.green(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
    } else if (answer.operator == "Multiplication") {
        console.log(chalk.green(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`));
    } else if (answer.operator == "Divide") {
        console.log(chalk.green(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
    }
}
// askQuestion()

async function startagain() {
    do {
        await askQuestion()
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "do you want to continue press y or n:",
        })
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes")

}
startagain()