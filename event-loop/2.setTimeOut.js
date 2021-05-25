// Started operating system process
console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');
// Completed and exited operating system process
// setTimeOut will wait until any function before it to run, then it starts to execute