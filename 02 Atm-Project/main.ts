import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

interface ansType {
    userId: string,
    userPin: number,
    accountType : string,
    transactionType: string,
    amount: number

}

const sleep = ()=>{
    return new Promise((res)=>{
    setTimeout(res,2000)
    })
}
async function Welcome() {
    let rainbowtitle=chalkAnimation.rainbow("Welcome to ATM Machine ")
    await sleep()
    rainbowtitle.stop()
}

await Welcome()

async function askQuestion() {

    const answers: ansType  = await inquirer.prompt([
        {
            type: "input",
            name: "userId",
            message: "Kindly Enter your Id: "
        },
        {
            type: "number",
            name: "userPin",
            message: "Kindly Enter your PIN: "
        },
        {
            type: "list",
            name: "accountType",
            choices: ["Current", "Saving"],
            message: "Select your account type:",
        },
        {
            type: "list",
            name: "transactionType",
            choices: ["Fast Cash", "Withdraw"],
            message: "Select your transaction",
            when(answers) {
                return answers.accountType
            },
        },
        {
            type: "list",
            name: "amount",
            choices: [1000, 2000 , 10000, 20000],
            message: "Select your amount",
            when(answers) {
                return answers.transactionType == "Fast Cash"
            },
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your amount",
            when(answers) {
                return answers.transactionType == "Withdraw"
            },
        }
    ])
    
    if (answers.userId && answers.userPin) {
    
        const balance = Math.floor(Math.random()*10000000);
        console.log("your current balance is :",balance)
        const EnteredAmount = answers.amount;
        if (balance >= EnteredAmount) {
            const remianing = balance - EnteredAmount;
            console.log(chalk.green( "Your remaining balance is", remianing))
        } else {
            console.log(chalk.red("Insuficient Balance"))
        }
    }
    }
async function startagain() {
    do{
        await askQuestion()
        var again = await inquirer.prompt({
            type:"input",
            name:"restart",
            message:"do you want to continue press y or n:",
        })
    }while(again.restart == "y" || again.restart == "Y" || again.restart == "yes")
    
}
startagain()