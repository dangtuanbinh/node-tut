// First way
// const { readFile, writeFile } = require("fs");
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//   try {
//     const secondText = await readFilePromise('./content/second.txt','utf8')
//     const firstText = await readFilePromise('./content/first.txt','utf8')
//     await writeFilePromise('./content/await-util-module.txt', `This is result for util module: ${firstText} ${secondText}`)
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// Second way

const { readFile, writeFile } = require("fs").promises;


const start = async () => {
  try {
    const secondText = await readFile('./content/second.txt','utf8')
    const firstText = await readFile('./content/first.txt','utf8')
    await writeFile('./content/await-util-module.txt', `This is result for util module: ${firstText} ${secondText}`)
  } catch (error) {
    console.log(error);
  }
};

start();

