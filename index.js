import chalk from 'chalk'
import inquirer from 'inquirer'
import nanospinner from 'nanospinner'
import figlet from 'figlet'
import { getUsername } from './lib/utils.js'

const sleep = (delay = 1000) => new Promise(resolve => setTimeout(resolve, delay))
const log = console.log

const handleAnswer = async (isCorrect = false) => {
  const spinner = nanospinner.createSpinner('Checking Answer...').start()
  await sleep()

  if (isCorrect) {
    spinner.success({ text: chalk.green('Good Job!!!') })
  } else {
    spinner.error({ text: chalk.red('Not the right answer!!!') })
    process.exit(1)
  }
}

let playerName

async function askName() {
  const { name } = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message: chalk.cyan('Please type your name:'),
    default: await getUsername(),
  })

  playerName = name
}

async function askFavColor() {
  const { color } = await inquirer.prompt([
    {
      name: 'color',
      type: 'list',
      message: 'What is your favourite color?',
      choices: [
        { name: chalk.cyan('Cyan'), value: 'Cyan' },
        { name: chalk.grey('Gray'), value: 'Gray' },
        { name: chalk.blue('Blue'), value: 'Blue' },
        { name: chalk.red('Red'), value: 'Red' },
        { name: chalk.green('Green'), value: 'Green' },
        { name: chalk.yellow('Yellow'), value: 'Yellow' },
        { name: chalk.magenta('Magenta'), value: 'Magenta' },
      ],
    },
  ])

  return handleAnswer(color === 'Green')
}

async function winnerScreen() {
  console.clear()

  const msg = `Congratulations!!!
                  ${playerName}`

  figlet(msg, (err, data) => {
    log(chalk.greenBright(data))
  })
}

await askName()
await askFavColor()
await winnerScreen()
