import chalk from 'chalk'
import inquirer from 'inquirer'

const sleep = (delay=1000) => new Promise((resolve) => setTimeout(resolve, delay))
const log = console.log

inquirer.prompt([{
  name: 'color',
  type: 'list',
  message: 'What is your favourite color?',
  choices: [
    {name: chalk.cyan("Cyan"), value: "Cyan"},
    {name: chalk.grey("Gray"), value: "Gray"},
    {name: chalk.blue("Blue"), value: "Blue"},
    {name: chalk.red("Red"), value: "Red"},
    {name: chalk.green("Green"), value: "Green"},
    {name: chalk.yellow("Yellow"), value: "Yellow"},
    {name: chalk.magenta("Magenta"), value: "Magenta"}
  ]
}]).then(ans=> {
    log(ans)
  })

