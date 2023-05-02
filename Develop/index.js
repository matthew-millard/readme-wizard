// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'What is the title of your project?',
		name: 'title',
	},
	{
		type: 'input',
		message: 'Provide a short description explaining the what, why, and how of your project.',
		name: 'description',
	},
	{
		type: 'input',
		message: 'What are the steps required to install your project?',
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
		message: 'If you would have provided tests for your application, please provide examples on how to run them.',
		name: 'tests',
	},
	{
		type: 'list',
		message: 'Please choose a license for your application.',
		choice: [
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
		message: 'What is your Github username?',
		name: 'username',
	},
	{
		type: 'input',
		message: 'What is your email address?',
		name: 'email',
	},
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init()
