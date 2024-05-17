import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
import chalk from 'chalk';
let question = await inquirer.prompt(
    {
        type:"number",
        name:"userinput",
        message:chalk.green("Please enter the amount in second"),
        validate:(input)=>{
            if(isNaN(input)){
                return chalk.red("please enter valid number")
            }else if(input >60){
                return chalk.red("second must be in 60 ")
            }
            else{
                return true
            }
        }
    }
)
let input = question.userinput
function atarttime(val:number) {
    const intime = new Date().setSeconds(new Date().getSeconds()+val)
    const intervaltime= new Date(intime)
    setInterval(()=>{
        const currenttime = new Date()
        const timediff = differenceInSeconds(intervaltime,currenttime)
        if(timediff <= 0){
        console.log(chalk.red("Timer has expired"));
        process.exit()
        
        }
        const min = Math.floor((timediff % (3600 * 24)) / 3600)
        const sec = Math.floor(timediff % 60)
        console.log(chalk.blue(`${min.toString().padStart(2,"0")} :${sec}`));
        
    },1000)
    
}
atarttime(input)