import inquirer from "inquirer";
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

class Player {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
}
class Opponent {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name"
})

let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Please select your Opponent",
    choices: ["skeleton", "Assasin", "zombie"]
})

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)
console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    do {
        if (opponent.select === "skeleton") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "Please select your Opponent",
                choices: ["Attack", "Drink Portion", "Run for your Life"]
            })
            if (ask.opt === "Attack") {
                let num = Math.floor(Math.random() * 2)
                if (num > 0) {
                    p1.fuelDecrease()
                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.bold.italic('you loose , Better luck next time'));

                    }

                }
                if (num <= 0) {
                    o1.fuelDecrease()
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                    if (o1.fuel <= 0) {
                        console.log(chalk.green.bold.italic('you win'));
                        process.exit()
                    }
                }


            }

            if (ask.opt === "Drink Portion") {
                p1.fuelIncrease()
                console.log(chalk.bold.italic.green(`your health Portion your fuel is ${p1.fuel})`))

            }

            if (ask.opt === "Run for your Life") {
                console.log(chalk.bold.italic('you loose,Better luck next time '));
                process.exit()
            }
        }
        if (opponent.select === "Assasin") {
            console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
            let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "Please select your Opponent",
                choices: ["Attack", "Drink Portion", "Run for your Life"]
            })
            if (ask.opt === "Attack") {
                console.log('Attack');
                let num = Math.floor(Math.random() * 2)
                if (num > 0) {
                    p1.fuelDecrease()
                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.bold.italic('you loose , Better luck next time'));

                    }

                }
                if (num <= 0) {
                    o1.fuelDecrease()
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.green.bold.italic('you win'));
                        process.exit()
                    }
                }


            }

            if (ask.opt === "Drink Portion") {
                p1.fuelIncrease()
                console.log(chalk.bold.italic.green(`your health Portion your fuel is ${p1.fuel})`))

            }

            if (ask.opt === "Run for your Life") {
                console.log(chalk.bold.italic('you loose,Better luck next time '));
                process.exit()
            }
        }
        if (opponent.select === "zombie") {
            console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
            let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "Please select your Opponent",
                choices: ["Attack", "Drink Portion", "Run for your Life"]
            })
            if (ask.opt === "Attack") {
                console.log('Attack');
                let num = Math.floor(Math.random() * 2)
                if (num > 0) {
                    p1.fuelDecrease()
                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.bold.italic('you loose , Better luck next time'));

                    }

                }
                if (num <= 0) {
                    o1.fuelDecrease()
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.green.bold.italic('you win'));
                        process.exit()
                    }
                }


            }

            if (ask.opt === "Drink Portion") {
                p1.fuelIncrease()
                console.log(chalk.bold.italic.green(`your health Portion your fuel is ${p1.fuel})`))

            }

            if (ask.opt === "Run for your Life") {
                console.log(chalk.bold.italic('you loose,Better luck next time '));
                process.exit()
            }
        }
    }

while (true)