import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
let todos = ["superman"];
async function createTodo() {
    let rainbowtitle = chalkAnimation.rainbow("Let's Start Todo List");
    await sleep();
    rainbowtitle.stop();
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an operation:",
            name: "select",
            choices: ["add", "update", "view", "delete",],
        });
        if (ans.select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item..",
                name: "todo"
            });
            todos.push(addTodo.todo);
            console.log(chalk.green(todos));
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "update todo",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item..",
                name: "todo"
            });
            let newTodos = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(chalk.green(todos));
        }
        if (ans.select == "view") {
            console.log(chalk.green(todos));
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "update todo",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodos = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(chalk.green(todos));
        }
    } while (true);
}
createTodo();
