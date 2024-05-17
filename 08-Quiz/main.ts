import inquirer from "inquirer";
import chalk from 'chalk';

const api:string = "https://opentdb.com/api.php?amount=6&category=18&difficulty=medium&type=multiple";
let fatchdata = async (data: string) => {
    let fatchquiz: any = await fetch(data)
    let respone = await fatchquiz.json();
    return respone.results;
}
let data = await fatchdata(api)
let startQuiz = async () => {
    let score: number = 0
    let a = await inquirer.prompt({
        type: "input",
        name:"firstname",
        message: chalk.green("write your first name")
        
    })
    for (let i = 1; i <= 5; i++) {
        let anwser = [...data[i].incorrect_answers, data[i].correct_answer]
        let ans = await inquirer.prompt({
            type: "list",
            name: "quiz",
            message: data[i].question,
            choices: anwser.map((val: any) => val)
        })
        if (ans.quiz == data[i].correct_answer) {
            ++score;
            console.log("Correct");
            
        }else{
            console.log(data[i].correct_answer)
        }
    }
    console.log(chalk.green(`Dear,your score is ${chalk.red.bold(score)} out of ${chalk.red.bold("5")}`));
    
}
startQuiz()