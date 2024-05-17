import inquirer from "inquirer";
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

class Student{
    name:string;
    constructor(n:string){
        this.name=n
    }
}

class Person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push()
    }
}
const persons = new Person()

const programstart = async(persons:Person)=>{
    do{

        console.log(chalk.magenta("Welcome Guest"));
        const ans = await inquirer.prompt(
            {
                type:"list",
                message:chalk.yellow("Who would you like to talk to? "),
                name:"select",
                choices:["self","student"]
            }
        )
        if(ans.select == "self"){
            console.log(chalk.green("Hello me khud se bat kr raha hon"))
            console.log(chalk.green("meri tabiyat achi hy"))
    
        }
        if(ans.select == "student"){
            const ans = await inquirer.prompt(
                {
                    type:"input",
                    message:chalk.yellow("ap ko kis student se bat kerni hy"),
                    name:"student",
                }
            )
            const student = persons.students.find((val)=>val.name == ans.student)
            if(!student){
                const name = new Student(ans.student)
                persons.addStudent(name)
                console.log(chalk.green(`Hello I am ${name.name} , or me theek hun`))
                console.log(chalk.green(persons.students))
            }
            if(student){
                console.log(chalk.green(`Hello I am ${Student.name} , or me theek hun ..........`))
                console.log(chalk.green(persons.students))
            }
        }
    }while(true)

}
programstart(persons)