// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const utils = require('./utils/generateMarkdown.js')
const { generateMarkdown: markdown, getLicenseBadge, getLicenseDescription, renderLicenseSection } = utils

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'What is the title of your project?',
		name: 'title',
	},
	{
		type: 'input',
		message: 'Provide a short description explaining the what, why, and how.',
		name: 'description',
	},
	{
		type: 'input',
		message: 'Can you provide the steps needed to install your project?',
		name: 'installation',
	},
	{
		type: 'input',
		message: 'Provide instructions and examples for use.',
		name: 'usage',
	},
	{
		type: 'input',
		message: 'Please provide guides on how other developers can contribute to your project.',
		name: 'contribution',
	},
	{
		type: 'input',
		message: 'If you would have provided tests for your application, please provide examples of how to run them.',
		name: 'tests',
	},
	{
		type: 'list',
		message: 'Please choose a license for your application.',
		choices: [
			'None',
			'Apache License 2.0',
			'GNU General Public License v3.0',
			'MIT License',
			'BSD 2-Clause "Simplified" license',
			'BSD 3-Clause "New" or "Revised" License',
			'Boost Software License 1.0',
			'Creative Commons Zero v1.0 Universal',
			'Eclipse Public License 2.0',
			'GNU Affero General Public License v3.0',
			'GNU General Public License v2.0',
			'GNU Lesser General Public License v2.1',
			'Mozilla Public License 2.0',
			'The Unlicense',
		],
		name: 'license',
		default: 0,
	},
	{
		type: 'input',
		message: 'What is your GitHub username?',
		name: 'username',
	},
	{
		type: 'input',
		message: 'What is your email address?',
		name: 'email',
	},
	{
		type: 'input',
		message: 'Lastly, what would you like to name your markdown file?',
		name: 'file',
	},
]

// TODO: Create a function to write README file
function writeToFile(fileName, template) {
	fs.writeFile(fileName, template, err => {
		err ? console.error(err) : console.log(`${fileName} has been successfully generated and saved.`)
	})
}

// TODO: Create a function to initialize app
function init() {
	inquirer
		.prompt(questions)
		.then(answers => {
			const fileName = `${answers.file}.md`
			const licenseBadge = getLicenseBadge(answers)
			const licenseDescription = getLicenseDescription(licenseBadge[1])
			return licenseDescription.then(licenseDescription => {
				const licenseSection = renderLicenseSection(licenseBadge[0])
				const template = markdown(answers, licenseSection, licenseDescription)
				writeToFile(fileName, template)
			})
		})
		.catch(err => console.error(err))
}

// Function call to initialize app
init()
