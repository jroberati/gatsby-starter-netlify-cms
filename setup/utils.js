const readline = require('readline')
const fs = require('fs')
const { exec } = require('child_process')

const question = query => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }))
}

const installPackages = packages => {  
  const command = 'yarn add ' + packages.join(' ')
  exec(command)
}

const writeFile = (name, data) => {
  fs.open('./' + name, 'w+', (err, fd) => {
    fs.writeSync(fd, data, 0, 'utf-8')
    fs.closeSync(fd)
  })
}

const copyFileTo = (src, dest) => {
  const data = fs.readFileSync(src)
  writeFile(dest, data)
}

const writeConfig = (newData, insertRegex) => {
  fs.open('./gatsby-config.js', 'r+', (err, fd) => {
    fs.readFile(fd, (err, data) => { 
      const contents = String(data)
      const newContent = contents.replace(insertRegex, (match, before, after) => before + newData + after)
      fs.writeSync(fd, newContent, 0, 'utf-8')
      fs.closeSync(fd)
    })
  })
}

module.exports = {
  question,
  installPackages,
  writeFile,
  writeConfig,
  copyFileTo
}