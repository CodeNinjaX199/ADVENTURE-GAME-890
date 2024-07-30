import inquirer from "inquirer";
class Player {
    name;
    fuel = 300;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 300;
    }
}
class Opponent {
    name;
    fuel = 300;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Football", "Jumpjet", "Bouncy", "Hide & see"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Football") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You win");
                    process.exit();
                }
            }
            if (ask.opt == " Drink Portion") {
                p1.fuelIncrease();
                console.log(`You Drink Portion Your Fuel is ${p1.fuel}`);
            }
            if (ask.opt == "Run For Your Life..") {
                console.log("You Loose, Better Luck Next Time");
                process.exit();
            }
        }
    }
    // jumpjet
    if (opponent.select == "jumpjet") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You win");
                    process.exit();
                }
            }
            if (ask.opt == " Drink Portion") {
                p1.fuelIncrease();
                console.log(`You Drink Portion Your Fuel is ${p1.fuel}`);
            }
            if (ask.opt == "Run For Your Life..") {
                console.log("You Loose, Better Luck Next Time");
                process.exit();
            }
        }
    }
    //Bouncy
    if (opponent.select == "Bouncy") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You win");
                    process.exit();
                }
            }
            if (ask.opt == " Drink Portion") {
                p1.fuelIncrease();
                console.log(`You Drink Portion Your Fuel is ${p1.fuel}`);
            }
            if (ask.opt == "Run For Your Life..") {
                console.log("You Loose, Better Luck Next Time");
                process.exit();
            }
        }
    }
    // Hide & See
    if (opponent.select == "Hide & see") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You win");
                    process.exit();
                }
            }
            if (ask.opt == " Drink Portion") {
                p1.fuelIncrease();
                console.log(`You Drink Portion Your Fuel is ${p1.fuel}`);
            }
            if (ask.opt == "Run For Your Life..") {
                console.log("You Loose, Better Luck Next Time");
                process.exit();
            }
        }
    }
} while (true);
