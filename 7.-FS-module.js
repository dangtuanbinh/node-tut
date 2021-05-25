//  FS = "File Sync"
const { readFileSync, writeFileSync } = require("fs");

// Read file, 'ytf8' is decoding(to read to content of file) method
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
// console.log(first, second);

// Write file. writeFileSync will create the file in the path if it isnot exist. Node will overide the file if it is alreary exist
// IF want to append somthing to file, we add third parameter
writeFileSync('./content/result.txt',`Here is the result: ${first}, ${second}`,{flag: 'a'})