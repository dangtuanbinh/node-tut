// Module - Encapsulated code (only share what need to be shared)
// CommonJs, every file is module (by default)

// Access shred variable in orther modules
const names = require('./Modules/name')
const sayHi = require('./Modules/utiles')
const data = require('./3-alternative-favor')
console.log(data);

// When we import (require) a function from different module, we are actually invoking it
require('./4.-mind-grenade')
// We split code below into 2 modules "name.js" and "utiles.js"

// const secret = 'super serecclewat'
// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)