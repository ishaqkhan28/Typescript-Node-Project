import inquirer from "inquirer";
// const randomNumber:number = Math.floor(10000 + Math.random() * 90000)
// let myBalnce:number = 0
// let answer = await inquirer.prompt(
//     {
//         name:"students",
//         type:"input",
//         message:"Enter student Name",
//         validate: function (value) {
//             if(value.trim() != ""){
//                 return true
//             }
//             return "Please Enter yur non-empty value"
//         }
//     },
//     {
//         name:"courses",
//         type:"list",
//         messege:"Select our Course to Enrolled",
//         choices:["Ms.Office","Html","Javascript","Typescript","Python"]
//     }
// )
// const tiutionfee:{[key:string]:number}={
//     "Ms.Office":2000,
//     "Html":2500,
//     "Javascript":5000,
//     "Typescript":6000,
//     "Python":10000,
// }
// console.log(`\nTutionFee:${tiutionfee[answer.name]}/-\n`);
// console.log(`Balance:${myBalnce}\n`);
// let paymentType = await inquirer.prompt(
//     {
//         name:"Payment",
//         type:"list",
//         message:"Select Payment Method",
//         choices:["Bank Transfer","EasyPaisa","jazzcash"]
//     },
//     {
//         name:"Amount",
//         type:"input",
//         message:"Transfer Money",
//         validate: function (value: string) {
//             if(value.trim() != ""){
//                 return true
//             }
//             return "Please Enter yur non-empty value"
//         }
//     }
// )
// console.log(`\n you select payment method ${paymentType.payment}\n`);
// const tutionfee = tiutionfee[answer.name];
// const pamentmethod = parseFloat(paymentType.amount)
// if(tutionfee === pamentmethod){
//     console.log(`Congratulation , you have successfully anrolled in ${answer.name}.\n`);
//     let ans = await inquirer.prompt(
//         {
//             type:"list",
//             name:"select",
//             message:"What whould you like to do next",
//             choices:["view status","Exit"]
//         }
//     )
//     if (ans.select === "view status") {
//         console.log("\n*******Status*****\n");
//         console.log(`Student Name : ${answer.name}`);
//         console.log(`Course : ${answer.name}`);
//         console.log(`Tutionfee Paid :${pamentmethod}`);
//         console.log(`Balance : ${myBalnce += pamentmethod}`);
//         console.log("\n*******Status*****\n");
//     }
// }else{
//     console.log(`Invalid Amount due to Course\n`);
// }
// class Institude {
//     name:string;
//     student:any=[]
//     addstudent(studentobj:Student){
//         this.student.push(studentobj)
//     }
//     constructor(name:string){
//             this.name=name
//     }
// }
// class Student {
//     name:string;
//     constructor(name:string){
//             this.name=name
//     }
// }
// class Course {
//     name:string;
//     constructor(name:string){
//             this.name=name
//     }
// }
// class Teacher {
//     name:string;
//     Course:any=[]
//     addCourse(Courseobj:Student){
//         this.Course.push(Courseobj)
//     }
//     constructor(name:string){
//             this.name=name
//     }
// }
// let li = new Institude("leads university")
// let studentobj = new Student("salman")
// let cl = new Course("cs")
// let tl = new Teacher("sara")
// li.addstudent(studentobj)
// console.log(li);
// tl.addCourse(cl)
// console.log(tl);
import chalk from "chalk";
class Student {
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 100;
    }
    // method to enroll a student
    enroll_courses(courses) {
        this.courses.push(courses);
    }
    // method to view a student balance
    check_balance() {
        console.log(chalk.magentaBright(`Balance for ${this.name} : $${this.balance}`));
    }
    // method to pay student fee
    fee_amount(amount) {
        this.balance -= amount;
        console.log(chalk.magentaBright(`$${amount} Amount Fee Paid Successfully for: ${this.name}`));
    }
    //method for dispaly student
    show_status() {
        console.log(chalk.magentaBright(`ID : ${this.id}`));
        console.log(chalk.magentaBright(`Name : ${this.name}`));
        console.log(chalk.magentaBright(`Course : ${this.courses}`));
        console.log(chalk.magentaBright(`Balance : ${this.balance}`));
    }
}
Student.counter = 1000;
// class manage a student
class Student_manage {
    constructor() {
        this.students = [];
    }
    //Method to add a new student
    add_student(name) {
        let student = new Student(name);
        this.students.push(student);
        console.log(chalk.magentaBright(`Student :${name} Added successfully.Student ID :${student.id}`));
    }
    // method to enroll a student
    enroll_std(student_id, course) {
        let student = this.find_student(student_id);
        if (student) {
            student.enroll_courses(course);
            console.log(chalk.magentaBright(`${Student.name} Enroll in ${course} Successful!`));
        }
    }
    // method to view a student balance
    view_student_balance(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.check_balance();
        }
        else {
            console.log(chalk.red.bold.italic("Student is Not Found. Please Enter a Correct Student ID"));
        }
    }
    //method to pay student Fee
    pay_std_fee(student_id, amount) {
        let student = this.find_student(student_id);
        if (student) {
            student.fee_amount(amount);
        }
        else {
            console.log(chalk.red.bold.italic("Student is Not Found. Please Enter a Correct Student ID"));
        }
    }
    // method to display fee status
    show_std_status(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.show_status();
        }
    }
    // method to find a student by its id
    find_student(student_id) {
        return this.students.find(std => std.id === student_id);
    }
}
// main function to run a program
async function main() {
    console.log(chalk.magentaBright.bold.italic("\n \t\t\t Welcome to Student Management System \n"));
    console.log(chalk.yellowBright.bold("=".repeat(70)));
    let student_manage = new Student_manage();
    // while loop to running a program
    while (true) {
        let choice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.greenBright.bold("Select an Option"),
                choices: ["Add Student", "Enroll Student", "View Student Balance", "Pay Fees", "Show Status", "Exit"]
            },
        ]);
        // using switch case statement for user choice
        switch (choice.choice) {
            case "Add Student":
                let name_input = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: chalk.greenBright.bold("Enter a Student Name :")
                    }
                ]);
                student_manage.add_student(name_input.name);
                break;
            case "Enroll Student":
                let course_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: chalk.greenBright.bold("Enter a student ID :")
                    },
                    {
                        name: "course",
                        type: "input",
                        message: chalk.greenBright.bold("Enter a student course :")
                    }
                ]);
                student_manage.enroll_std(course_input.student_id, course_input.course);
                break;
            case "View Student Balance":
                let balance_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: chalk.greenBright.bold("Enter a student id :")
                    }
                ]);
                student_manage.view_student_balance(balance_input.student_id);
                break;
            case "Pay Fees":
                let fee_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: chalk.greenBright.bold("Enter a student ID :")
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: chalk.greenBright.bold("Enter a student amount :")
                    }
                ]);
                student_manage.pay_std_fee(fee_input.student_id, fee_input.amount);
                break;
            case "Show Status":
                let status_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: chalk.greenBright.bold("Enter a student ID :")
                    },
                ]);
                student_manage.show_std_status(status_input.student_id);
                break;
            case "Exit":
                console.log("Exiting...");
                process.exit();
        }
    }
}
// calling a main function
main();
