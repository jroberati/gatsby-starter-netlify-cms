const { writeConfig } = require('../utils')

module.exports = {
  writeStyle (newData) {
    writeConfig(newData, /(.*?\/\/.*style-plugins)\s(.*)/sg)
  }
}