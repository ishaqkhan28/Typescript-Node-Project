import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push();
    }
}
const persons = new Person();
const programstart = async (persons) => {
    do {
        console.log(chalk.magenta("Welcome Guest"));
        const ans = await inquirer.prompt({
            type: "list",
            message: chalk.yellow("Who would you like to talk to? "),
            name: "select",
            choices: ["self", "student"]
        });
        if (ans.select == "self") {
            console.log(chalk.green("Hello me khud se bat kr raha hon"));
            console.log(chalk.green("meri tabiyat achi hy"));
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: chalk.yellow("ap ko kis student se bat kerni hy"),
                name: "student",
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.green(`Hello I am ${name.name} , or me theek hun`));
                console.log(chalk.green(persons.students));
            }
            if (student) {
                console.log(chalk.green(`Hello I am ${Student.name} , or me theek hun ..........`));
                console.log(chalk.green(persons.students));
            }
        }
    } while (true);
};
programstart(persons);
