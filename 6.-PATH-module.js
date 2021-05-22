const path = require('path')

// Get the path name to the file
const filePath = path.join('/content','subFolder','test.txt')
console.log(filePath);

// Get the base name of the path
const baseName = path.basename(filePath)
console.log(baseName);

// Get the absolute path to base file
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);