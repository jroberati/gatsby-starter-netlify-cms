const { writeStyle } = require('./index')
const { writeFile, installPackages, copyFileTo } = require('../utils')

const plugins = `
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        develop: true,
      },
    },
`

const postcssConfig = `
module.exports = () => ({
  plugins: [require("tailwindcss")],
})
`

const packages = [
  'tailwindcss',
  'gatsby-plugin-postcss',
  'gatsby-plugin-purgecss'
]

module.exports = {
	async install () {
		installPackages(packages)
		writeFile('postcss.config.js', postcssConfig.trim())
		writeStyle(plugins)
		copyFileTo('./setup/style/tailwind.css', './src/index.css')
	}	
}
