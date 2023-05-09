const { getLicenseBadge } = require('../utils/generateMarkdown.js')

describe('Generate Markdown', () => {
    test('Should return the corresponding license badge URL and SPDX identifier', () => {
        const input = { license: 'MIT License' }
        const output = ['![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)', 'MIT']
		expect(getLicenseBadge(input)).toEqual(output)
	})
	test('Should return an empty string if license badge not found.', () => {
        const input = { license: 'Apple MIT License' }
        const output = ''
		expect(getLicenseBadge(input)).toEqual(output)
	})
})
