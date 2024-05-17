import inquirer from "inquirer";
import chalk from "chalk"

class Student{
    static counter = 1000
    id:number;
    name:string
    courses:string[];
    balance:number

    constructor(name:string){
        this.id = Student.counter++
        this.name=name;
        this.courses=[];
        this.balance=100
    }
    // method to enroll a student
    enroll_courses(courses:string){
        this.courses.push(courses);
    }
    // method to view a student balance
    check_balance(){
        console.log(chalk.magentaBright(`Balance for ${this.name} : $${this.balance}`));
    }
    // method to pay student fee
    fee_amount(amount:number){
        this.balance-=amount;
        console.log(chalk.magentaBright(`$${amount} Amount Fee Paid Successfully for: ${this.name}`))
    }
    //method for dispaly student
    show_status(){
        console.log(chalk.magentaBright(`ID : ${this.id}`));
        console.log(chalk.magentaBright(`Name : ${this.name}`));
        console.log(chalk.magentaBright(`Course : ${this.courses}`));
        console.log(chalk.magentaBright(`Balance : ${this.balance}`));
    }
}
// class manage a student

class Student_manage{
    students:Student[];
    constructor(){
        this.students=[];
    }
//Method to add a new student
    add_student(name:string){
        let student= new Student(name);
        this.students.push(student);
        console.log(chalk.magentaBright(`Student :${name} Added successfully.Student ID :${student.id}`))
    }
// method to enroll a student
    enroll_std(student_id:number,course:string){
        let student =this.find_student(student_id)
        if(student){
            student.enroll_courses(course);
            console.log(chalk.magentaBright(`${Student.name} Enroll in ${course} Successful!`));
            
        }
    }
// method to view a student balance
    view_student_balance(student_id:number){
        let student =this.find_student(student_id);
        if(student){
            student.check_balance()
        }else{
            console.log(chalk.red.bold.italic("Student is Not Found. Please Enter a Correct Student ID"));
            
        }
    }
//method to pay student Fee
    pay_std_fee(student_id:number,amount:number){
        let student =this.find_student(student_id);
        if(student){
            student.fee_amount(amount)
        }else{
            console.log(chalk.red.bold.italic("Student is Not Found. Please Enter a Correct Student ID"));
            
        }
    }
// method to display fee status
    show_std_status(student_id:number){
        let student =this.find_student(student_id);
        if(student){
            student.show_status()
        }
    }
// method to find a student by its id
    find_student(student_id:number){
        return this.students.find(std =>std.id===student_id)
    }
}
// main function to run a program
async function main(){
    console.log(chalk.magentaBright.bold.italic("\n \t\t\t Welcome to Student Management System \n"));
    console.log(chalk.yellowBright.bold("=".repeat(70)));

    let student_manage = new Student_manage();
// while loop to running a program
    while(true){
        let choice = await inquirer.prompt([
            {
                name:"choice",
                type:"list",
                message:chalk.greenBright.bold("Select an Option"),
                choices:["Add Student","Enroll Student","View Student Balance","Pay Fees","Show Status","Exit"]
            },

        ]);
// using switch case statement for user choice
        switch(choice.choice){
            case"Add Student":
            let name_input = await inquirer.prompt([
                {
                    name:"name",
                    type:"input",
                    message:chalk.greenBright.bold("Enter a Student Name :")
                }
            ])
            student_manage.add_student(name_input.name);
            break;
            case"Enroll Student":
            let course_input = await inquirer.prompt([
                {
                    name:"student_id",
                    type:"number",
                    message:chalk.greenBright.bold("Enter a student ID :")
                },
                {
                    name:"course",
                    type:"input",
                    message:chalk.greenBright.bold("Enter a student course :")
                }
            ])
            student_manage.enroll_std(course_input.student_id,course_input.course);
            break;
            case"View Student Balance":
            let balance_input = await inquirer.prompt([
                {
                    name:"student_id",
                    type:"number",
                    message:chalk.greenBright.bold("Enter a student id :")
                }
            ])
            student_manage.view_student_balance(balance_input.student_id);
            break;
            case"Pay Fees":
            let fee_input = await inquirer.prompt([
                {
                    name:"student_id",
                    type:"number",
                    message:chalk.greenBright.bold("Enter a student ID :")
                },
                {
                    name:"amount",
                    type:"number",
                    message:chalk.greenBright.bold("Enter a student amount :")
                }
            ])
            student_manage.pay_std_fee(fee_input.student_id,fee_input.amount);
            break;
            case"Show Status":
            let status_input = await inquirer.prompt([
                {
                    name:"student_id",
                    type:"number",
                    message:chalk.greenBright.bold("Enter a student ID :")
                },
            ])
            student_manage.show_std_status(status_input.student_id);
            break;
            case"Exit":
            console.log("Exiting...");
            process.exit();
        }

    }
}
// calling a main function
main()