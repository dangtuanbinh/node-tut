// npm-global command, comes with node
// npm --v : check npm version

// npm i - install local dependency
// npm install -g <packageName> - install global dependency

// package.json - manifest file (stores important info about project/package)
// mannual approach (create package.json in the root, creat properties etc)
// npm init : create package.json step by step
// npm init -y : create package.json automatically default
// npm i -D or --save-dev

// Use the dependency. "_" allow to access everything in the dependency(package)
const _ = require('lodash')

const item = [1,[2,[3,[4]]]]
const newItem = _.flattenDeep(item)
console.log(newItem);