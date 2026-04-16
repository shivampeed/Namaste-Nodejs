const fs = require("fs");

setImmediate(() => console.log("1st setImmediate"));

setTimeout(() => console.log("1st timer"), 0)

Promise.resolve("promise").then(console.log)

fs.readFile("./file.txt", "utf-8", (err, data) => {
    setTimeout(() => console.log("2nd timer"), 0)

    process.nextTick(() => console.log("2nd Process.nexttick"))

    setImmediate(() => console.log("2nd setImmediate"));

    console.log(data);
})


process.nextTick(() => console.log("1st Process.nexttick"))


console.log("last line of program")

// last line of program
// 1st Process.nexttick
// promise
// 1st timer
// 1st setImmediate
// Hii I am Nodejs Developer.

// 2nd Process.nexttick
// 2nd setImmediate
// 2nd timer

