// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge({ license }) {
	switch (license) {
		case 'Apache License 2.0':
			return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
			break
		case 'GNU General Public License v3.0':
			return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
			break
		case 'MIT License':
			return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
			break
		case 'BSD 2-Clause "Simplified" license':
			return '![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)'
			break
		case 'BSD 3-Clause "New" or "Revised" License':
			return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
			break
		case 'Boost Software License 1.0':
			return '![License: Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)'
			break
		case 'Creative Commons Zero v1.0 Universal':
			return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)'
			break
		case 'Eclipse Public License 2.0':
			return '![License: EPL 2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)'
			break
		case 'GNU Affero General Public License v3.0':
			return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)'
			break
		case 'GNU General Public License v2.0':
			return '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)'
			break
		case 'GNU Lesser General Public License v2.1':
			return '![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)'
			break
		case 'Mozilla Public License 2.0':
			return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
			break
		case 'The Unlicense':
			return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
			break
		default:
			return ''
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
async function getLicenseDescription({ license }) {
	const axios = require('axios')
	try {
		const response = await axios.get(`https://api.github.com/licenses/MIT`)

		if (response.status === 200) {
			return response.data.description
		}
	} catch (error) {
		console.error(`Error fetching license description: ${error.message}`)
	}

	return null
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(description, badge) {
	if (description && badge) {
		return `## License
			
  ${badge}

  ${description}`
	} else {
		return ''
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licenseSection) {
	return `# ${data.title}

${licenseSection}

## Description

${data.description}

## Table Of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Tests

${data.tests}

## License

${data.license}

## Questions

If you have any questions related to this project, please don't hesitate to email me: ${data.email}.
If you would like to check out my other projects on Github: ${data.username}.
`
}

module.exports = {
	generateMarkdown,
	getLicenseBadge,
	getLicenseDescription,
	renderLicenseSection,
}
