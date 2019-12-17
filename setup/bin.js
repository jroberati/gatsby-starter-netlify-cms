const chalk = require('chalk')
const question = require('./utils').question
const { install : setupTailwind } = require('./style/tailwind')

async function getStyle () {
	const q = chalk.green.bold('Please select a style framework:\n')
	const styleOptions = [
		'TailwindCSS',
		'SASS',
		'styled-components'
	]

	const choices = styleOptions.map((o, i) => 
		chalk.bold('[' + i + ']') + ' ' + o
	).join('\n')

  return await question(q + choices + '\n\nChoice: ')
}

async function main () {
	const style = await getStyle()
	if (style == 0) {
		setupTailwind()
	}
}

main()