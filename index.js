#! /usr/bin/env node
// importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
//Display a colorful wellcome message
console.log(chalk.bold.green("\n\t\tWellcome to my code - Words Counter\n"));
console.log("=".repeat(70));
//prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence:",
    }
]);
//Trimming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
//Analysis of user input sentence
console.log("=".repeat(70));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.yellow(words.length)}`));
console.log("=".repeat(70));
